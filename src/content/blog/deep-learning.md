---
title: "Deep Learning Below the Surface"
pubDate: 2026-05-12
description: "A high-level tour of deep learning."
tags: [Big Data, Deep Learning, Neural Networks, AI]
---

Artificial intelligence has been the protagonist of the last few years. It shows up in economics, politics, and culture. It promises self-driving cars, virtual assistants, and even the definitive utopia.

But how does AI work? Where does deep learning come from? How does it actually learn?

* * *

## Three concentric circles

To understand deep learning, it helps to clarify three terms that are often used interchangeably but don’t mean the same thing.

- **Artificial intelligence**: the broadest field. It spans from hand-written rule-based systems to modern models. It starts in 1956 with John McCarthy’s premise that any aspect of learning or intelligence can be described precisely enough for a machine to simulate it. This early approach was **symbolic AI**: engineers encoded explicit rules to represent knowledge. It worked reasonably well for logical, well-defined problems like chess.

- **Machine learning**: instead of humans writing the rules, the system observes examples of inputs and outputs and infers the rules. The paradigm flips: you don’t program behavior; you train outcomes.

- **Deep learning**: the smallest circle—and the one with the most applications thanks to its breadth of possibilities.


* * *

## Why is deep learning different?

Classic machine learning (initially called _shallow learning_) learned one or two layers of representation. To make it work, an engineer had to manually design relevant features: which parts of an image or text should matter. This process (_feature engineering_) was handcrafted, expensive, and fragile.

Deep learning removes that step. Instead of one or two layers, you get dozens or hundreds of successive representations, each more abstract and meaningful than the last. That’s why it’s called “deep”: it stacks layers of chained transformations.

Imagine showing a network a photo of a handwritten digit. Early layers detect edges and contrasts. Next layers recognize curves and strokes. Deeper layers identify the full structure of the number. These hierarchies don’t come from _feature engineering_—they emerge during learning.

Those stacked transformations are neural networks.


* * *

## How does a neural network learn?

1. Weights define behavior. Each layer transforms its input according to a set of weights (parameters). A large network can have tens of billions of weights.

3. A loss function measures error. Given the network’s prediction and the correct answer, it computes how far the model is from being right. This is the feedback signal.

5. An optimizer updates the weights. Using an algorithm called _backpropagation_, the optimizer nudges weights in the direction that reduces error. This repeats thousands of times until the network learns.

At first weights are random and the network produces nonsense. Each training iteration reduces the error.

* * *

## Why the boom now?

Deep learning isn’t new. Its foundations have been developed for decades. What changed are the tools and the “raw materials”:

- **Hardware**: GPUs massively parallelize computation. Training that used to take years can now take days or hours.

- **Data**: the internet produces volumes of labeled data that were unimaginable for earlier generations.

- **Engineering**: frameworks like TensorFlow and PyTorch democratize access to machine learning.

Together, the three provide **simplicity, scalability, and versatility**, accelerating the creation of trained models.


* * *

## What deep learning has already achieved

Deep learning already has several successes: human-level image classification, speech and handwriting transcription, machine translation, autonomous driving, and models that play chess better than any human…

And then there’s generative AI: ChatGPT, Gemini, Claude, Midjourney. The underlying mechanism is **self-supervised learning**: instead of manually labeling data, the model learns to reconstruct its input, predict the next word, or denoise an image. That enables the use of unlabeled data at a scale that would have been impossible ten years ago.

The result is foundation models with hundreds of billions of parameters that act like a fuzzy database of human knowledge, able to answer many queries by retrieving the representations they’ve learned.

Generative AI went from a lab experiment to a cultural phenomenon in 2022. But its roots are older: early text generation experiments date back to the 1990s.


* * *

## Hype and limits

In the months after GPT-4, some analysts claimed human work was about to disappear or that economic productivity would multiply by a hundred in a matter of months. Two years later, US unemployment remains low and there’s no clear productivity explosion in macro data.

Generative AI brings in tens of billions of dollars per year, but it’s still a small fraction of the global economy. The gap between narrative and reality is significant.

There’s a deeper layer behind claims about artificial general intelligence (AGI): the idea that systems with cognitive capabilities beyond humans will exist soon. **It’s important to note those claims predate the rise of generative AI; they didn’t originate from it.** The belief that AGI was imminent helped motivate OpenAI’s creation in 2015, not the other way around. In 2016, OpenAI’s recruiting pitch was that it would achieve AGI in 2020.

The distinction worth keeping is this: what we call AI is, strictly speaking, **cognitive automation**—the encoding and operationalization of human skills and knowledge. It works well on problems with well-defined requirements or many accurate examples. What it does not do is adapt to the completely unknown the way real intelligence does.

An automation system, no matter how sophisticated, can only handle situations it was trained or programmed for. **Intelligence is the ability to face the unexpected and learn from it.**

* * *

## Another AI winter?

In the 1960s, Marvin Minsky claimed “the problem of creating artificial intelligence will be substantially solved within a generation.” In the 1980s, _expert systems_ attracted massive investment from large companies before showing their limits and collapsing. **Each cycle followed the same pattern: exuberant optimism, investment, disappointment, retreat.**

The current situation has uncomfortable parallels. **Investment in AI infrastructure exceeds $100B annually, while generated revenue is around $10B**. Executives and markets value AI not for what it has proven, but for what it is said it might do. OpenAI has been through multiple investor rounds to avoid running out of cash.

Something will have to give. But there are differences from earlier cycles: deep learning has already demonstrated real economic value across multiple industries. If there is a new winter, it will likely be milder.

* * *

## The long-term view

Separating short-term skepticism from long-term perspective may be the most important intellectual exercise for anyone working with these technologies.

In 1995, it was hard to see how the internet would change daily life. Most people didn’t see its relevance. Deep learning is in a similar position today: **it has shown it can transform entire industries, but it isn’t deployed to its full potential yet**.

AI-assisted medical diagnosis, accelerated scientific discovery—like AlphaFold and protein structure prediction—and the automation of processes that currently require skilled work: **all of that is happening, slowly and then all at once.**

> Don’t believe the sensational version, but do believe the direction of travel.

* * *

## References

- First chapter of [Deep Learning with Python](https://www.manning.com/books/deep-learning-with-python-third-edition) by François Chollet.
