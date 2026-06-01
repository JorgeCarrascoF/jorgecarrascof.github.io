---
title: "Business Intelligence and SQL Server Analysis Services"
pubDate: 2026-04-17
description: "An introduction to BI fundamentals."
tags: [BI, BISM, OLAP, Data Warehouse]
---

Business Intelligence (BI) is the set of systems and technologies that help extract useful knowledge from an organization’s data.

BI and Data Analytics are closely related, but they are not the same. BI is a set of strategies and processes aimed at turning data into actionable information for business decision-making, including reports, dashboards, KPIs, and business metrics.

The process usually starts by taking operational data (typically from a relational database) and using it to build a data warehouse.

A **data warehouse** is a unified repository for all the data collected by an organization’s different systems. It helps organize, understand, and use that data to make strategic decisions.


Data in a warehouse is reorganized to favor analysis rather than fast transactional writes, which leads to the OLAP (On-Line Analytical Processing) approach versus the classic OLTP (OnLine Transaction Processing).

## OLTP vs OLAP

Relational databases use the OLTP pattern, designed to create and update individual rows quickly. They are oriented toward day-to-day business operations: doing what’s necessary to deliver and store data efficiently and fast.

In contrast, the OLAP model is intended to query and analyze large volumes of historical data. In this context, write speed matters less than response time for complex questions: how much was sold in a quarter in a specific region, which product had the most returns last year, etc. OLAP was created specifically to meet BI needs.


## Data warehouses

The concept of a _data warehouse_ used to be known as a _Decision Support System_: a non-volatile, integrated, purpose-oriented, time-variant collection of data used to support decision-making.

- Non-volatile: unlike operational systems that are updated constantly, the warehouse is loaded at predefined intervals, which can be weeks or months.

- Integrated: each data source feeding the warehouse must follow a methodology that enforces consistency across the warehouse.

- Purpose-oriented: data is stored for a specific purpose.

- Time-variant: stored data goes back a long time, typically years.

The process of creating a data warehouse is called _data warehousing_.

Alongside a data warehouse you can also find a _data mart_: a smaller subset of an existing warehouse that focuses on the data important to a single team.

There is also the concept of a _data lake_, which is a repository of **raw** (untransformed) data. It can include unstructured data and typically requires more work to extract valuable information.


Data warehouses are built with well-defined components:

### Fact tables

They contain numeric data that matters to the business: sales amounts, units sold, number of calls, etc. They are the quantitative core of analysis. For example, a beer sales fact table would record by date, product, and state: the number of cases sold and total revenue.


### Dimension tables

Fact tables usually contain quantitative data. To add context, you use dimension tables. For example, a dimension table could accompany the fact table above.


Within each dimension there are hierarchies that allow different levels of granularity.

Common dimensions (with their hierarchies) include:

- Time: year, quarter, month, day

- Product: category, subcategory, name, SKU

- Geography: country, state, city

- Customer: segment, channel, demographic attributes

### Cubes

A cube combines fact and dimension tables. It can reduce response time by using aggregations so that a user query becomes almost instant instead of relying on non-cached, non-precomputed queries.


## Schemas

Schemas help organize dimensions and facts to make cube navigation easier. Two common schema types are:

- Star schema: a central fact table connected directly to dimension tables.


- Snowflake schema: dimensions are normalized into sub-tables. Useful when dimensions have very detailed attributes.


## The BISM model

_Business Intelligence Semantic Model_ (BISM) is a unified framework that offers two approaches depending on the needs of each project.

### Multidimensional mode

It is based on cubes, dimensions, and hierarchies. It uses MDX (Multidimensional Expressions) as a query language.

- Supports massive data volumes (scales to terabytes)

- Maximum power for complex enterprise BI

- Disk storage with pre-aggregated data

- Compatible with MOLAP, ROLAP, and HOLAP


### Tabular mode

It uses a relational model of tables and relationships, and DAX (Data Analysis Expressions) for queries.

- Uses the in-memory VertiPaq engine for ultra-fast queries

- Simpler, more intuitive model for developers and analysts

- Accessible from Excel via the PowerPivot add-in

- Scalable

- Includes KPIs, hierarchies, and row-level security

* * *

## Inmon vs Kimball: pros and cons

Inmon and Kimball are two of the most influential approaches to data warehouse design.

### Inmon model

Proposed by Bill Inmon, also called _Top-Down_. The company builds a single centralized, normalized data warehouse, and then derives data marts for each department. The data warehouse becomes the single source of truth.

Advantages:

- Full data consistency across the company.

- Less redundancy thanks to normalization.

- Easier to maintain when business rules change.

- Very robust for environments with many departments and domains.

Disadvantages:

- Very costly and slow to implement initially.

- Requires a specialized technical team.

- Normalization makes queries more complex.

### Kimball model

Proposed by Ralph Kimball, also called _Bottom-Up_. It’s the opposite idea: the data warehouse is the sum of the data marts. You start from business needs in each department and then integrate into a unified repository.

Advantages:

- Faster to deliver: the first data mart can be ready in a few weeks.

- Simpler and faster queries.

- Strongly oriented to business users and analysis.

- Ideal for smaller teams.

Disadvantages:

- Risk of inconsistencies between data marts if dimensions aren’t defined well.

- Data redundancy due to denormalization.

- Harder to scale without good governance.

- More complicated to maintain when business definitions change.

## Conclusion

Understanding the fundamentals of Business Intelligence—data warehouses, OLAP, cubes, dimensions, and the two BISM modes—is the first step to making the most of tools like SQL Server Analysis Services.

Whether you choose the classic **multidimensional** approach (maximum power, huge volumes) or the more agile **tabular** model (accessible, faster to build), the goal is the same: turn data into better, faster decisions.

