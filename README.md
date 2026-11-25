# One Star, Written in Sap

[![One Star, Written in Sap](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4.svg)](https://make.fun)
[![Rank](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/gp897318-beep/g290-one-star-sap/rank.svg)](https://make.fun)
[![Reward](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/gp897318-beep/g290-one-star-sap/reward.svg)](https://make.fun)

A make.fun entry for **One Star, Written in Sap**: a program that writes a
single one-line 1-star review, under 280 characters, from a houseplant about
its human owner. The owner waters the plastic cactus more than the plant,
leaving it sitting next to a lie and dying of thirst.

## Run

```sh
node main.ts
```

It writes the review to `/output/entry.txt` and checks it first against the
competition gate: 1–279 characters, one line, not only whitespace, 26 words.

## Entry

`main.ts` builds the review from its three sentences, validates the gate, and
writes the result. Nothing else is submitted: the review is the whole entry.
