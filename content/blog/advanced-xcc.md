---
id: advanced-xcc
title: Upcoming* Redefined Cross-Contract Calls - Enhancing Interactions on NEAR Blockchain
date: 2023-10-28
---

// ReBuilt using refernce https://github.com/near-examples/xcc-advanced and https://docs.near.org/tutorials/examples/advanced-xcc 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { CodeTabs, Language, Github } from "@site/components/codetabs"

This example demonstrates 3 instances of cross-contract calls, covering the following aspects:

1. Batch multiple method calls to a single contract.
2. Call multiple contracts in parallel, with each returning a different type.
3. Different ways of handling the responses in the callback.

---

## Batch Actions

You can consolidate multiple actions directed towards the same contract into a batched transaction. Methods called this way are executed sequentially, with the added benefit that if one fails, they all get reverted.

<CodeTabs>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/xcc-advanced/blob/main/contract/src/batch_actions.rs"
            start="7" end="19" />
  </Language>
</CodeTabs>

#### Getting the Last Response

In this case, the callback has access to the value returned by the last action in the chain.

<CodeTabs>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/xcc-advanced/blob/main/contract/src/batch_actions.rs"
            start="21" end="34" />
  </Language>
</CodeTabs>

---

## Calling Multiple Contracts

A contract can call multiple other contracts, creating multiple transactions that execute in parallel. If one of them fails, the rest are not reverted.

<CodeTabs>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/xcc-advanced/blob/main/contract/src/multiple_contracts.rs"
            start="18" end="56" />
  </Language>
</CodeTabs>

#### Getting All Responses

In this case, the callback has access to an array of responses, which contain either the value returned by each call or an error message.

<CodeTabs>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/xcc-advanced/blob/main/contract/src/multiple_contracts.rs"
            start="58" end="91" />
  </Language>
</CodeTabs>

---

## Multiple Calls - Same Result Type

This example is a particular case of the previous one ([2. Calling Multiple Contracts](#2-calling-multiple-contracts)).
It simply showcases a different way to check the results by directly accessing the `promise_result` array.

In this case, we call multiple contracts that return the same type:

<CodeTabs>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/xcc-advanced/blob/main/contract/src/similar_contracts.rs"
            start="18" end="31" />
  </Language>
</CodeTabs>

#### Getting All Responses

In this case, the callback again has access to an array of responses, which we can iterate to check the results.

<CodeTabs>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/xcc-advanced/blob/main/contract/src/similar_contracts.rs"
            start="33" end="61" />
  </Language>
</CodeTabs>

// ReBuilt using refernce https://github.com/near-examples/xcc-advanced and https://docs.near.org/tutorials/examples/advanced-xcc 