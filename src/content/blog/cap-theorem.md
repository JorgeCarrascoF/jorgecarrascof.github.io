---
title: "The CAP Theorem and the \"Pick Two\" Fallacy"
pubDate: 2026-05-11
description: "A practical look at CAP beyond the oversimplified \"pick two\" framing."
tags: [CAP, Databases, Distributed Systems]
---

## Introduction

The CAP theorem is one of the most cited principles in distributed system design.

Formulated by Eric Brewer in 2000, it states that in any distributed system you can only guarantee two of these three properties at the same time:

- **Consistency** — all nodes see the same data at the same time. If you write a value, any subsequent read returns that value, no matter which node you query.

- **Availability** — the system always responds. Every request receives a response, even if it isn’t the most up-to-date.

- **Partition tolerance** — the system keeps working even if nodes can’t communicate with each other due to a network failure.

Partition tolerance isn’t negotiable because networks are unreliable. That means: when a network partition happens, you must choose between **preserving consistency** (and stop responding until nodes resynchronize) or **staying available** (and accept that some data may be stale). **Pick two: CP or AP?**

You go to an interview. You design a distributed system. You draw a triangle and **pick two** vertices. You explain why your system is CP or AP. The interviewer nods.

CAP’s own author calls the “**pick two**” framing misleading. Not wrong, but incomplete. In 2012, Brewer published _[CAP Twelve years later: How the "Rules" have Changed](https://www.researchgate.net/publication/220476881_CAP_Twelve_years_later_How_the_Rules_have_Changed)_, describing aspects of real systems that CAP ignores and why the simplistic framing distorts the true design space.

* * *

## The problem with “pick two”

The traditional framework classifies systems into three types:

- **CP** — consistency over availability when nodes can’t agree. **A wrong answer is worse than no answer.** ZooKeeper, HBase.

- **AP** — remain available even during a partition. **Serve stale data if needed and reconcile later.** Cassandra, for example.

- **CA** — …and here’s the problem.

CA assumes you’ve given up partition tolerance: a single-node database. That’s not impossible—TinyDB is a good example of a CA database. The problem is treating this as a **distributed system**.

As noted above, **partitions aren’t a design choice**. Networks fail, machines go down. A CA distributed system can’t ignore this. When a partition happens (not _if_, but _when_), you’ll have to make the same trade-offs AP and CP systems make deliberately—just under far more pressure.

Brewer doesn’t spend the whole paper on CA systems. Instead, he highlights three CAP-related misconceptions that have repeated for years.

* * *

## Three sides, three vertices, three problems

### 1\. The three properties are treated as binary

Having consistency or not. Having availability or not. Tolerating partitions or not. None of the three is that precise.

**Availability as a count of 9s**: in system design, availability is a spectrum. You target an availability level represented as a number of 9s: 99.9%, 99.99%, 99.999%… These are measured as annual downtime. **The largest distributed systems typically target at least four 9s.**

| **Availability** | **Downtime per year** | **Common name** |
| --- | --- | --- |
| 99% | ~87 hours | Two nines |
| 99.9% | ~8.7 hours | Three nines |
| 99.95% | ~4.4 hours | Three and a half nines |
| 99.99% | ~52 minutes | Four nines |
| 99.999% | ~5 minutes | Five nines |

Although it sounds small, moving from three 9s to four 9s isn’t “a bit more reliable”—it’s going from almost 9 hours of downtime per year to less than 1 hour.

Another issue is that **the whole system** must be operational. AWS can be up in most regions, but if it’s down for 3 hours in Indonesia, it isn’t delivering 99.99% global availability.

**Consistency is also a spectrum:** at one end you have linearizability (operations appear instantaneous and globally ordered). At the other, you have eventual consistency: writes propagate at some point, with no defined upper bound.

**Partition tolerance:** partitions aren’t clean. A micro-outage can last 200ms, 2 seconds, 10 seconds… Your response depends on your timeout. **Partitions aren’t detected, they’re defined.**

* * *

Treating properties as binary pushes you to an edge. If you treat them as spectra, **real systems live inside the triangle.**


### 2\. The theorem only describes behavior during a partition

CAP doesn’t tell you how to optimize the system the rest of the time, and partitions (while inevitable) are rare. The theorem says nothing about the hours, days, or weeks between incidents.

Brewer updates the framing: **maximize both (A and C) during normal operation. Negotiate only when a partition is detected.**

This turns CAP from a permanent identity (“we are AP” / “we are CP”) into a runtime decision. **It’s not picking an edge and living there; it’s running at full capacity most of the time and having a real plan for when you can’t.**

### 3\. Most teams don’t think about what happens when you can’t have all three

Not because it’s hard, but because it’s uncomfortable: it means accepting your system will sometimes be inconsistent—and designing for it deliberately.

* * *

## Latency: the forgotten variable

CAP completely ignores latency, despite it being relevant to most database setups, replication settings, and timeouts.

CAP often comes down to what happens at a timeout. Node A writes data, sends an acknowledgment request to node B, and waits. B is slow—maybe due to load, network congestion, or an actual fault. From A’s perspective, you can’t tell. Eventually A must decide: **do I cancel and keep waiting (favor consistency) or proceed without confirmation (favor availability)?**

There’s no third option. Waiting forever isn’t feasible. **A partition is, in practice, a situation where we’ve decided to stop waiting.**

### Daniel Abadi and the PACELC framework

Abadi extended CAP with a single line:

> "If there is a **P**artition, choose between **A**vailability and **C**onsistency. **E**lse, choose between **L**atency and **C**onsistency."

Even when everything is fine, there is a trade-off between response time and confidence that you’re reading the most up-to-date version of the data.

DynamoDB has an option aligned with this framework: strongly consistent reads. They are slower and cost double the capacity units, prioritizing consistency over latency.

* * *

## Design for three states, not two

Most distributed systems design for two states:

- **Normal operation** — load balancers, read replicas, caches, health checks.

- **Broken state** — retry logic, generic errors, and eventually waking an engineer at 3am.

Brewer introduces a third state: recovery mode.

| **Estado** | **Descripción** |
| --- | --- |
| Normal mode | Everything connected; optimized for normal activity. |
| Partition mode | A node is unreachable; partition-handling logic triggers. |
| Recovery mode | The partition is fixed and nodes reconnect, but they’ve been operating independently and their states have diverged. |

Recovery mode is not a return to normal mode. While nodes were disconnected, they did what they could to keep operating, so **each node has its own version of what happened during the partition**. **Some of those operations were already shown to users, so you can’t just roll everything back.**

### The operations table

Designing for failure means reviewing operations one by one and asking: _what should happen if this runs without access to the rest of the system?_

| **Operación** | **¿Qué hacer durante la partición?** |
| --- | --- |
| Read user profile | Low risk. Serve from local cache. |
| Register a new email (must be globally unique) | You can’t verify uniqueness; better to block. |
| Withdraw cash from an ATM | Balance could go negative, but damage is bounded if you allow up to a limit. |
| Charge a credit card (external side effect) | Can’t be undone. Queue to resolve after recovery. |

* * *

## The ATM architecture

ATMs operate in what Brewer calls stand-in mode:

1. Stop trying to achieve full consistency.

3. Apply a simpler rule: **allow withdrawals up to a bounded limit**.

5. Log each transaction locally and keep operating.

7. When the connection is restored, upload the log.

9. The bank reconciles. If the balance went negative during the offline window, an overdraft fee applies.

**The bank doesn’t prevent every error; it bounds the error, detects inconsistencies during reconciliation, and compensates afterward.**

This strategy appears in many consumer apps: e-commerce, airlines, service mobile apps… They confirm user actions immediately and reconcile with the rest of the system later.

* * *

## CRDTs: solutions without a trade-off

Some data types can be designed so concurrent updates from multiple nodes always converge to the same result, regardless of order or coordination. **They rely on convergence.**

This is known as a CRDT (Conflict-free Replicated Data Type). A simple example is a YouTube view counter: multiple servers increment the view count without locks or coordination. It doesn’t lose counts because addition is commutative and order doesn’t matter.

For a data structure to guarantee convergence it typically needs to be:

- **Commutative** — order doesn’t matter.

- **Idempotent** — duplicate messages don’t corrupt state.

* * *

## Sagas: compensation for multi-service flows

The ATM strategy is an example of a saga: accept the operation, bound the risk, log locally, reconcile, and compensate.

In traditional databases, you assume you can lock everything involved until the full operation commits or rolls back. This works on a single node, but not in distributed systems: if service A waits on B and B waits on C, one slow participant can stall the whole system.

Sagas address this: instead of one huge transaction, you store a sequence of small local transactions. Each transaction commits immediately. If step three fails, the compensation path walks back.

The trade-off is that the system ends up in an acceptable state, even if it’s not exactly the same as the initial one. A refund isn’t the same as never charging, but it can be equivalent enough for the business.

This strategy was described in a [1987 paper by García-Molina and Salem](https://dl.acm.org/doi/10.1145/38713.38742).

* * *

## Local-first strategies: when the exception is the norm

Sometimes partition mode isn’t the edge case—it’s **the state your system is always in**.

Most applications treat the server as the source of truth. Every read and write goes through it, making the network the critical path. **Local-first strategies invert authority: data lives on the device, and the server only coordinates synchronization.**

Every read and write hits a local database—instant. The app works fully offline because there’s no difference between connected and disconnected. When devices reconnect, they sync using CRDTs to converge. Recovery becomes routine rather than an incident.

There are tools designed for this: Yjs, Automerge, and purpose-built sync engines.

* * *

## Conclusion

CAP is still a useful tool, but it is limited in modern systems.

**“Pick two”** doesn’t address what matters most during normal operation: which operations happen during a partition, how state is recovered when connectivity is restored, and which invariants must be protected at all costs.

Consistency, availability, and fault tolerance should be treated as spectra.

So the question isn’t which two properties you pick. **“Pick two” becomes “choose how much you’re willing to compromise, when alarms should fire, and which operations can be modeled as CRDTs to remove the trade-offs.”**
