# Ramen profitability: buying time to build

A small software product can earn revenue while still depending on its maker's savings. Ramen profitability asks whether the business can cover the founders' basic living costs and give them time to keep working. Paul Graham's [2009 essay](https://www.paulgraham.com/ramenprofitable.html) describes the extra time and bargaining room this creates. It is an early milestone, not proof that the final business model works or a permanent decision against investment.

For an indie developer, the useful calculation connects what must be paid each month with what each customer leaves available to pay it. This guide follows that calculation, then tests whether the apparent breathing room survives higher costs and cancellations.

## Connect the maker's needs to a customer's payment

Consider a fictional appointment-reminder app for independent music teachers. A teacher enters upcoming lessons, and the app sends reminders so fewer appointments are forgotten. The maker wants the app to cover basic living costs while they improve its reliability and find more teachers who need it. All prices, expenses, customer counts, and changed assumptions in this example are hypothetical USD planning figures.

The maker needs $2,000 a month for essentials. Keeping the business running adds $300 of fixed expenses, and setting aside $200 for irregular costs brings the monthly requirement to $2,500:

| Item | Monthly amount | What it covers in this example |
| --- | ---: | --- |
| Essential personal spending | $2,000 | Housing, food, transport, and other necessities. |
| Fixed business expenses | $300 | Hosting baseline, tools, and administration. |
| Reserve contribution | $200 | A chosen allowance for irregular costs, not a tax estimate. |
| Total cash requirement | $2,500 | The three obligations together. |

A paying teacher brings in $10 of collected monthly revenue after refunds. Payment/platform costs and usage-dependent hosting take $2. That leaves an $8 **cash contribution**: the amount available from that customer toward the fixed expenses, living costs, and reserve. Counting the whole $10 would leave some of those obligations unfunded.

## Find the threshold and interpret its headroom

At $8 per teacher, 312 customers contribute $2,496, just short of the requirement. The next whole customer brings the total above it:

```text
Required customers = ceiling(monthly cash requirement / contribution per customer)
                   = ceiling(2,500 / 8)
                   = 313

At 313 customers:
Collected revenue  = 313 × 10 = $3,130
Variable costs     = 313 ×  2 =   $626
Cash contribution  =             $2,504
Headroom           = 2,504 − 2,500 = $4
```

**Headroom** is what remains after covering the planned requirement. Here it is only $4. Losing one teacher removes $8 of contribution and leaves a $4 shortfall. The calculation identifies the minimum threshold; it does not establish that the maker can safely stop relying on savings. A separately chosen buffer or margin is needed for interruptions and unexpected costs.

Keep the components visible rather than calling the entire $2,504 “profit.” Personal withdrawals, business costs, and reserves have different roles. This cash worksheet does not determine statutory profit or tax liability; actual taxes, benefits, and legal obligations need their own appropriate accounting treatment.

The tiny margin makes the next question important: how much does the customer target change when the original assumptions fail?

## Check higher costs, cancellations, and payment timing

Suppose teachers send more reminders than expected and the cost per customer rises. **Sensitivity analysis** means changing an assumption to see how the result moves. Keeping the $2,500 requirement fixed gives these thresholds:

| Contribution per customer | Customers needed |
| ---: | ---: |
| $10 | 250 |
| $8 | 313 |
| $6 | 417 |
| $4 | 625 |

At $6 of contribution, the same 313 customers no longer fund the maker's monthly needs. Recruiting more customers is one possible response, but first check whether pricing or the cost of serving a teacher explains the gap. Adding customers under a poorly understood cost model can expand the problem.

Customers also leave. **Customer churn** is the share of an existing customer base lost during a stated period. At an assumed 4% monthly churn, 313 teachers lose about `313 × 0.04 = 12.52` customers per month in expectation. Roughly 13 replacements maintain the base; those replacements are not 13 customers of growth. In actual records, distinguish voluntary cancellation, failed payments, and refunds because they call for different investigations.

Payment timing creates another kind of fragility. If a teacher prepays $120 for a year, the maker still owes twelve months of service and support. In this simplified plan, allocate that payment across the service period and keep a separate calendar of cash, future obligations, and potential refunds. A large launch payment can improve today's balance without proving recurring monthly coverage.

## Use a monthly review to choose the next action

Return to the same maker after discovering that variable costs are $4 rather than $2. The $10 payment now contributes $6:

```text
Contribution at 313 customers = 313 × 6 = $1,878
Monthly shortfall             = 2,500 − 1,878 = $622
New customer threshold        = ceiling(2,500 / 6) = 417
Additional customers needed   = 417 − 313 = 104
```

This changes the maker's decision. The old threshold cannot fund another uninterrupted month of building under the revised costs. A useful next step is to inspect what generates the extra expense before spending to acquire 104 more teachers. If a small group sends far more reminders, an offer with clearly explained usage limits may be worth testing. If the cost is unavoidable for ordinary use, the maker needs to reconsider the price, the cash requirement, or how the gap will be funded.

The review should also record cancellations and replacements, support hours, customer concentration, and the lowest projected cash balance. Those records show whether more customer revenue actually protects working time. A large customer leaving or support expanding can consume the breathing room that a total-revenue figure suggests.

## Decide what the breathing room is for

Graham warns that consulting can distract from building a scalable product; his destination is a high-growth startup. A deliberately small indie business may choose another destination. In either case, distinguish client work that funds development from a product that funds itself. [Source](https://www.paulgraham.com/ramenprofitable.html).

For the reminder app, a custom feature paid for by one teacher could close part of the cash gap while delaying improvements needed by the rest. Assess both the money and the development/support time it commits. Keep consulting income, savings, recurring product contribution, and one-off sales separate when judging the milestone.

Several billing periods of coverage, manageable support, and a buffer give stronger grounds for choosing how to proceed than a single month above the threshold. The next target can include leave, equipment replacement, and maintenance alongside ordinary living costs. Crossing the initial threshold makes choices about growth, funding, or remaining small less urgent; the revised costs and workload still determine which choices are sustainable.

[Back to Indie Hacking](../README.md)

## Sources

- [Paul Graham: Ramen Profitable](https://www.paulgraham.com/ramenprofitable.html), July 2009 — definition, financing implications, and the consulting trade-off. The reminder app, worksheet, and review decisions are original applications, not figures or measured outcomes from the essay.
