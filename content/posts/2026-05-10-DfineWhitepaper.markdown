---
title: "Solvency II Review: Rethinking Long-Term Guarantees"
date: 2026-02-10
lastmod: 2026-02-10
author: "Tim Herpich"
categories: [Finance, Risk Management]
tags: [Solvency II, LTG, extrapolation, volatility adjustment, insurance]
excerpt: "<div style='display: flex; align-items: center;'>
  <div style='flex: 0 0 175px; max-width: 175px;'>
  <img src='/assets/images/solvency2_whitepaper_cover.png' alt='Solvency II whitepaper cover' width='150' style='border-radius: 10px; box-shadow: 2px 2px 5px rgba(0,0,0,0.2);'>
  </div>
  <div style='flex: 1; padding-left: 15px;'>
    A quantitative look at the new Solvency II LTG measures — and what they imply for valuation and implementation.
  </div>
</div>"
comments: true
---

<div style="margin-bottom: 40px;"></div>
<div style="font-size: 80%;">

<h2><i class="fas fa-balance-scale"></i> Introduction and Motivation</h2>
<p>We recently published a whitepaper on the Solvency II Review, focusing on the new Long-Term Guarantees (LTG) measures — in particular interest-rate extrapolation and the volatility adjustment.</p>

<div style="margin-bottom: 60px;"></div>

<p align="center">
  <a href="/assets/publications/26SolvencyIIReview.pdf" target="_blank">
    <img src="/assets/images/solvency2_whitepaper_cover.png" alt="The Whitepaper" width="450">
  </a>
</p>

<div style="margin-bottom: 60px;"></div>

<p>The paper provides a detailed analysis of both methodologies and the practical challenges observed during implementation.</p>

<h2><i class="fas fa-chart-line"></i> Extrapolation: Introducing Market Sensitivity</h2>

<p>The current Smith-Wilson approach enforces a direct convergence to the Ultimate Forward Rate (UFR), largely ignoring market information beyond the Last Liquid Point.</p>

<p>The revised method introduces the Last Liquid Forward Rate (LLFR) as an intermediate step. By blending market forward rates with the UFR, the extrapolated curve becomes sensitive to long-term market conditions.</p>

<p>Quantitatively, this changes the mechanics:</p>

<ul>
  <li>If <em>LLFR &gt; UFR</em> → higher discount rates → increase in own funds</li>
  <li>If <em>LLFR &lt; UFR</em> → lower discount rates → decrease in own funds</li>
</ul>

<p>The direction of impact is therefore no longer fixed, but depends on the market environment.</p>


<h2><i class="fas fa-exchange-alt"></i> Volatility Adjustment: From Uniform to Specific</h2>

<p>The revised volatility adjustment introduces a key new component: the Credit Spread Sensitivity Ratio (CSSR), which links the adjustment to the relative spread sensitivities of assets and liabilities.</p>

<p style="text-align: center;">
  <em>CSSR ≈ PVBP(Assets) / PVBP(Liabilities)</em>
</p>

<p>This makes the VA:</p>

<ul>
  <li>undertaking-specific</li>
  <li>dependent on balance sheet structure</li>
</ul>

<p>While the increase in the application ratio raises baseline VA levels, the CSSR acts as a dampening factor. The net effect varies across undertakings and scenarios.</p>

<h2><i class="fas fa-cogs"></i> Implementation & Takeaways</h2>

<p>While the conceptual changes to the LTG framework are well-motivated, the real challenge lies in implementation. Both extrapolation and the revised volatility adjustment introduce additional dependencies on market data, sensitivities, and undertaking-specific characteristics — turning what used to be relatively stable adjustments into dynamic components of the valuation framework.</p>

<p>In practice, several challenges consistently emerge:</p>

<ul>
  <li><strong>CSSR computation:</strong> The ratio requires consistent spread sensitivity measures for both assets and liabilities. Depending on the setup, these must be derived either in risk systems or cash-flow models — often with different approximations.</li>
  <li><strong>Scenario dependency:</strong> In stochastic models, sensitivities are not constant. Especially in tail scenarios, shifts in spreads and interest rates can materially change the CSSR, introducing additional variability in own funds.</li>
  <li><strong>Closing constraints:</strong> The CSSR must be available early in the reporting process, despite its computational complexity. This often leads to approximations or pre-calculation strategies.</li>
  <li><strong>Group-level consistency:</strong> Different undertakings may exhibit materially different CSSR levels, implying different VA levels across entities and increasing the complexity of group modelling.</li>
</ul>

<p>From a quantitative perspective, the combined effect of the LTG changes is a shift in how valuation reacts to inputs:</p>

<ul>
  <li>Extrapolation becomes sensitive to long-term market structure via the LLFR</li>
  <li>The VA becomes a function of balance sheet sensitivities via the CSSR</li>
  <li>Own funds become more dependent on both market conditions and internal modelling choices</li>
</ul>

<p>This increases realism — but also reduces predictability. In particular, results can vary more strongly across scenarios and undertakings, even under similar market conditions.</p>

<p>In short: the Solvency II Review moves the framework towards greater market consistency and risk sensitivity, but at the cost of higher model complexity, increased operational burden, and a stronger dependence on modelling assumptions.</p>

</div>