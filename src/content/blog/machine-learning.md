---
title: "An Introductory Analysis of Machine Learning"
pubDate: 2026-04-13
description: "A structured primer on machine learning."
tags: [Keras, ML, Scikit, Tensorflow]
---

## 1\. Definition and theoretical foundations

**Machine Learning (ML)** is formally defined as the science of programming computers so they can learn from data. Historically, the concept evolved from Arthur Samuel’s view (1959), which emphasized learning without explicit programming, to Tom Mitchell’s operational definition (1997): a program learns if its performance (**P**) at a task (**T**) improves with experience (**E**).

A canonical example of this structure is a **spam filter**, where the task is email classification, experience comes from training data, and performance is measured by accuracy.

## 2\. Advantages of a data-driven approach

Adopting ML models instead of traditional programming is often driven by efficiency and feasibility:

- **Data mining:** inspecting models can reveal hidden knowledge and correlations in large volumes of information.

- **Maintenance and simplicity:** ML models reduce code length and simplify maintenance by detecting patterns automatically.

- **Dynamic adaptability:** ML systems adapt automatically to new data trends, unlike traditional systems that require constant manual updates.

- **Solving complex problems:** ML can tackle tasks that are hard to express with explicit logic, such as speech recognition or medical diagnosis.

## 3\. Taxonomy of machine learning systems

According to the analyzed document, systems can be classified using different criteria:

### A. By the type of supervision during training

- **Supervised learning:** the dataset includes labels or desired outputs (e.g., Linear Regression, SVM).

- **Unsupervised learning:** the system works with unlabeled data to identify intrinsic structure (e.g., K-Means clustering).

- **Semi-supervised learning:** combines a small amount of labeled data with a large volume of unlabeled data.

- **Reinforcement learning:** an agent maximizes reward through interaction with an environment (e.g., AlphaGo).

### B. By the ability to update over time

- **Batch learning:** the system is trained statically on all available data; any update requires retraining from scratch.

- **Online learning:** training is incremental and sequential, ideal for systems with continuous data streams or limited resources.

[Machine learning (PDF)](https://madiba.unex.es/mdad2526/a04/wp-content/uploads/sites/5/2026/04/El-aprendizaje-automatico.pdf) — [Download](https://madiba.unex.es/mdad2526/a04/wp-content/uploads/sites/5/2026/04/El-aprendizaje-automatico.pdf)

* * *

## Conclusions and personal notes

The shift to machine learning isn’t just a technical upgrade; it’s a change in problem-solving methodology. One particularly notable point is the importance of the **learning rate** in online systems, where a precise balance is vital to avoid forgetting older knowledge or becoming too sensitive to noise in new data. In business and industry, the ability to generalize predictions through abstract models is a cornerstone of modern technological competitiveness.
