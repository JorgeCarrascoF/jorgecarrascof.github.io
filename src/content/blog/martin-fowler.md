---
title: "Martin Fowler — The NoSQL Manifesto and Polyglot Persistence"
pubDate: 2026-03-02
description: "A synthesis of Martin Fowler’s NoSQL manifesto."
tags: [CAP, Databases, Martin Fowler, NoSQL]
---

This is a synthesis of Martin Fowler’s view on the NoSQL revolution, presented as a “Manifesto for the End of the Relational Monopoly.” In his talk, Fowler describes not just tools, but a shift in how software models and interacts with reality.

* * *

## The collapse of the “one-box” drawer

For more than 20 years, relational databases dominated enterprise data. They were the default solution for persistence, transaction-based concurrency, and—above all—application integration. Fowler highlights two critical cracks that accelerated the NoSQL revolution:

- **Impedance mismatch:** developers build complex object structures in memory, but must “shred” them into rows and tables to store them in a relational database. This frustration helped produce complex mapping frameworks (ORMs).

- **The scaling wall:** with the rise of Google and Amazon, the only way to handle massive traffic was horizontal scaling: using hundreds of commodity machines rather than one giant box. SQL was designed for a single node, and forcing it into clusters often felt like “acts against nature.”


### NoSQL: a name by accident

It’s ironic that such a powerful movement is defined by what it _isn’t_. Fowler explains the name started as a **Twitter hashtag** to organize a London meetup in the late 2000s. It wasn’t a design decision, but a linguistic accident that eventually included databases that weren’t even at the original event.

* * *

# A map of data models

Fowler proposes a fundamental distinction between two major families of NoSQL databases:

### **1\. Aggregate-oriented**

These databases store complex structures as a single atomic unit.

- **Key-value:** like a large persistent hashmap where the database doesn’t understand the value’s internal structure.

- **Document:** store transparent documents (usually JSON) that you can query by internal fields.

- **Column family:** a more complex model (like BigTable) that groups related columns, optimizing retrieval of specific data.

**The truth about “schemaless”:** Fowler warns that not having a fixed storage schema doesn’t mean there’s no schema. There is an **implicit schema** in application code; if you expect a `price` field, your code will fail if it isn’t there.


### **2\. Graph databases**

Unlike the previous ones, these don’t use aggregates. They are based on nodes and relationships (edges). They’re ideal when connections matter more than the data itself, often outperforming SQL joins on deep, hierarchical, or complex relationships.


### **Aggregates and Domain-Driven Design (DDD)**

One of the most influential (and often ignored) concepts is the relationship between NoSQL and **Domain-Driven Design**.

An **aggregate** represents:

- a unit of consistency

- a transactional boundary

- and a model aligned with the business domain

Aggregate-oriented databases work well because they reflect how we think about software: an e-commerce order, a social profile, a booking reservation.

In traditional SQL, these concepts are often split across many tables and joins. In document models, the aggregate can be stored whole. The result:

- fewer joins

- lower coupling

- simpler scaling

The key shift: **model the domain first, not the database.**

* * *

# Consistency is a business decision

One of the clearest points in the talk is demystifying ACID vs BASE. Fowler argues consistency is ultimately a **business decision**:

• **The cluster dilemma:** in a distributed system, if there’s a network partition (nodes can’t communicate), you must choose between **Consistency** (stop the system to avoid errors) or **Availability** (keep operating with temporary inconsistency risk)

• **The Amazon example:** in e-commerce, it’s more important that the shopping cart is always available so the customer can keep buying, even if an item occasionally shows up duplicated and must be corrected later via human processes or compensations

## Strong consistency or continuous availability?

While Fowler doesn’t focus exclusively on formal theory, the technical background of NoSQL is tightly connected to the **CAP theorem**, formulated by Eric Brewer.

In a distributed system, you can only guarantee two of these three properties at the same time:

- **Consistency:** all nodes see the same data at the same time.

- **Availability:** the system always responds.

- **Partition tolerance:** the system keeps working even if the network splits.

Since network partitions are inevitable in real systems, the practical decision often becomes: strong consistency or continuous availability?


Traditional relational databases prioritized consistency. Many NoSQL systems prioritized availability and partition tolerance. The real innovation wasn’t purely technical, but conceptual: **explicitly accepting trade-offs** instead of hiding them.

* * *

# The future: polyglot persistence

Fowler predicts there won’t be a single winner. The future is **polyglot persistence**: using different database types for different parts of an application, choosing the tool based on the nature of the problem.


## The myth of universal performance

NoSQL is not automatically faster.

Each model optimizes something different:

| Model | Optimizes for |
| --- | --- |
| Key-Value | ultra-low latency |
| Document | schema evolution |
| Column Family | massive writes |
| Graph | deep relationships |
| Relational | integrity and complex queries |

Trying to use a technology outside its natural fit often produces a system more complex than the classic relational alternative. The right question stops being “Which database is best?” and becomes “Which access pattern dominates this problem?”

## Operations vs modeling

The SQL vs NoSQL debate often focuses on the data model, but in production the real cost shows up elsewhere:

### 1\. Distributed operations

For an operation in a distributed system, you must handle:

- replication of the operation across servers

- conflict resolution with other operations

- observability

- failure recovery

### 2\. Eventual consistency

Prioritizing availability introduces new problems:

- stale reads

- duplicates

- compensating logic

- cognitive complexity

Many organizations discovered that horizontal scaling trades technical problems for **operational problems**.


* * *

## Evolution toward multi-model databases

Multi-model databases emerged as a natural reaction to polyglot persistence.

Modern examples combine documents, graphs, key-value, SQL queries, vectors… The promise is a single engine adaptable to multiple paradigms.


Advantages: less infrastructure, less operational friction, hybrid queries, simpler integration…

Disadvantages: a generalized database tends to be “good enough” at many things rather than best-in-class at one. As a result, **multi-model databases are rarely the best at each individual model; they aim to be good enough across several.**


## Today’s ecosystem

Today the landscape is no longer “SQL vs NoSQL,” but something more mature:

- SQL has absorbed NoSQL ideas (native JSON, horizontal scaling).

- NoSQL has adopted declarative queries and limited transactions.

- The boundary between categories is blurring.

The result is technological convergence. Decisions are no longer driven by ideology, but by:

- access patterns

- operational cost

- team experience

- consistency requirements


* * *

## A final question

Considering that it’s 2026 and many NoSQL databases described as “immature” in 2012 are now industry standards:

_Is the rise of multi-model databases the definitive solution to this problem, or are we simply trying to put everything back into one box again—like we did with SQL?_
