---
title: "Introducing Asset Alchemy: Making Portfolio Analytics Accessible"
slug: "introducing-assetalchemy"
date: 2026-11-22
lastmod: 2026-11-22
author: "Tim Herpich"
featureimage: "/assets/images/asset_alchemy.png"
featureimagealt: "Asset Alchemy logo"
description: "Building a Python and Streamlit application for investment performance, portfolio risk, and allocation analysis."
summary: "Why I built Asset Alchemy, how it turns investment records into interactive portfolio analytics, and the choices behind its Python and Streamlit architecture."
categories: [Finance, Software Engineering]
tags: [Portfolio Management, Python, Risk Management, Software Engineering]
comments: true
---

## Why I Built Asset Alchemy

A portfolio's current value is easy to observe. Understanding how it reached that value is more difficult, particularly when investments span several instruments, brokers, and years. New contributions, purchases, sales, and market movements all affect the headline figure. A rising balance alone says little about investment performance.

I wanted to explore the questions behind that number: how much growth comes from returns rather than additional capital? Which investments contribute most? What happens during a downturn, and how does the actual allocation compare with the intended one? These questions connect quantitative finance with a practical software problem: making a consistent analytical process accessible through an interface that invites exploration.

Asset Alchemy is my independent software project addressing that problem. Built with Python and Streamlit, it brings investment records, historical prices, and portfolio targets into a single analytical workspace.

## From Spreadsheets to Interactive Analytics

Spreadsheets remain useful for recording transactions, checking figures, and exchanging structured data. Their flexibility is valuable. As historical datasets grow, however, adding instruments or brokers can make an analytical workbook harder to maintain. Formulas tied to particular row positions become fragile, and keeping performance calculations consistent across periods requires care.

A Python engine makes those rules explicit and reusable. Transactions and prices become structured inputs; accounting, valuation, and return calculations follow defined conventions. The interface can then offer different views without reproducing financial formulas in each chart.

Asset Alchemy keeps spreadsheets in that workflow. It accepts Excel workbooks and individual CSV or Excel datasets, provides a downloadable template, and validates the imported records before analysis. A synthetic demonstration portfolio offers a starting point without requiring personal investment data.

## What Asset Alchemy Does

**Portfolio accounting.** The application reconstructs holdings and historical valuations from transactions and prices. Moving-average cost and FIFO accounting support the calculation of realised gains, with purchase and sale fees treated explicitly. Transfers between brokers are reconciled rather than counted as investment gains.

**Performance analysis.** Time-weighted returns help distinguish investment performance from capital flows. Money-weighted returns, calculated using XIRR, reflect their timing. Calendar, trailing, rolling, and multiannual views make it possible to examine different horizons, while linked return contributions show how individual investments contribute to portfolio performance.

**Risk analytics.** Volatility, drawdowns, and risk-adjusted measures provide context for historical returns. Correlations, concentration measures, and diversification analysis help examine how positions interact. These are descriptions of the available history, with insufficient data or undefined ratios reported as unavailable.

**Allocation monitoring.** Current weights can be compared with targets and tolerance bands. Allocation drift and buy-only rebalancing calculations make the consequences of an allocation decision easier to inspect, including assumptions about fees and whole shares.

Interactive charts and period controls connect these perspectives. Data-quality findings remain part of the analysis: missing prices, inconsistent identifiers, or incomplete histories can materially affect the interpretation of a result.

There are also important boundaries. Prices and cash flows are currently EUR only, without currency conversion. Without an explicit cash ledger, portfolio returns describe the securities held, or a labelled inferred-cash estimate, rather than exact account-level performance. Those distinctions matter more than the apparent precision of a chart.

## Built with Python and Streamlit

Python provides the quantitative foundation. Pandas and NumPy handle tabular data and financial time series, SciPy supports numerical and statistical methods, and Plotly supplies interactive visualisations. Streamlit brings those pieces together in a browser interface.

The financial engine is independent of Streamlit. This separation allows accounting and performance calculations to be tested without running the interface, and lets multiple pages use the same underlying results. For a reader, the benefit is consistency: a return should follow the same methodology wherever it appears.

The repository includes tests against hand-computed examples and documented calculation conventions. These make assumptions inspectable and provide a basis for checking changes as the project develops.

## Source Access and Licensing

**Try it for yourself:** [**Explore Asset Alchemy**](https://assetalchemy.streamlit.app/) and either select "Explore demo" to experiment with a synthetic demo portfolio or upload your real portfolio and unlock deep analytical insights into your portfolio. 

Asset Alchemy's source repository is private. To request access or discuss commercial licensing, [**please contact me**]({{< relref "/" >}}#contact) with your intended use. 

All rights reserved. Any commercial use of the application and any use of its source code require my prior written permission, even after repository access is granted.

*Asset Alchemy is intended for analytical and educational purposes and does not constitute investment advice.*
