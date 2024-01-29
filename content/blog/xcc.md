---
id: xcc
title: Unavailable** Cross Contract Call
date: 2023-10-17
---

// Rebuilt using Reference https://github.com/near-examples/cross-contract-hello-rust.git and https://docs.near.org/tutorials/examples/xcc 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {CodeTabs, Language, Github} from "@site/components/codetabs"

This example demonstrates the most straightforward cross-contract call: it invokes our [Hello NEAR](hello-near.md) example to set and retrieve a greeting. It serves as one of the most basic examples of making a cross-contract call, offering an ideal introduction to the world of interoperative contracts.

:::info Advanced Cross-Contract Calls

Check the tutorial on how to perform cross-contract calls [in batches and in parallel](./advanced-xcc.md)

:::

---

## Starting with the Project
1. **Recommended:** use the app through Gitpod (a web-based interactive environment)
2. Clone the project locally .

If you opt for Gitpod, a new browser window will automatically launch, displaying the code. Please allow a moment, and the front-end interface will appear. Ensure that your browser isn't blocking pop-up windows.

If you are running the application locally, navigate to the directory where you cloned it. Use the following commands:

`yarn` to install the required dependencies.
`yarn start` to initiate the application.

for which you will need to install all the [Prerequisites](../../2.develop/prerequisites.md).

<Tabs className="language-tabs" groupId="code-tabs">

  <TabItem value="🌐 JavaScript"> 

  | Gitpod                                                                                                                                                                                           | Clone locally                                                                 |
  | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
  | <a href="https://gitpod.io/#https://github.com/near-examples/cross-contract-hello-js"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a> | 🌐 `https://github.com/near-examples/cross-contract-hello-js.git` |

  </TabItem>

  <TabItem value="🦀 Rust">

  | Gitpod                                                                                                                                                                                           | Clone locally                                                                 |
  | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
  | <a href="https://gitpod.io/#https://github.com/near-examples/cross-contract-hello-rust"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a> | 🦀 `https://github.com/near-examples/cross-contract-hello-rust.git` |

  </TabItem>
  <TabItem value="🚀 AssemblyScript" >

  | Gitpod                                                                                                                                                                                           | Clone locally                                                                 |
  | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
  | <a href="https://gitpod.io/#https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a> | 🚀 `https://github.com/near-examples/docs-examples` -> cross-contract-hello-as |

  </TabItem>
</Tabs>


---

### Interacting With the Contract
Since this example does not have a frontend, we will interact with it through the [NEAR CLI](../../4.tools/cli.md).

<!-- Expand on this explanation adding snippets  -->
Check the README.md. Briefly, you will need to:

#### 1. Build and Deploy the Contract
You can automatically compile and deploy the contract in the NEAR testnet by running:

```bash
./deploy.sh
```

Once finished, check the `neardev/dev-account` file to find the address in which the contract was deployed:

```bash
cat ./neardev/dev-account # e.g. dev-1659899566943-21539992274727
```

#### 2. Get the Greeting

`query_greeting` performs a cross-contract call, calling the `get_greeting()` method from `hello-nearverse.testnet`.

`Call` methods can only be invoked using a NEAR account, since the account needs to pay GAS for the transaction.

```bash
# Use near-cli to ask the contract to query the greeting
near call <dev-account> query_greeting --accountId <dev-account>
```

---

### Contract
The contract exposes methods to query the greeting and change it. These methods do nothing but calling `get_greeting` and `set_greeting` in the `hello-near` example.

<CodeTabs>
<Language value="🌐 JavaScript" language="ts">
    <Github fname="contract.ts" 
            url="https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts"
            start="17" end="39" />
  </Language>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs"
            start="24" end="49" />
  </Language>
  <Language value="🚀 AssemblyScript" language="ts">
    <Github fname="index.ts"
            url="https://github.com/near-examples/docs-examples/blob/main/cross-contract-hello-as/contract/assembly/index.ts"
            start="11" end="45"/>
  </Language>
</CodeTabs>

---

## Testing

When it comes to developing smart contracts, meticulous testing is of paramount importance. In this project, you'll find two types of tests: unit and integration tests. But before delving into the details, I recommend running the tests specific to the dApp by executing the command `yarn test`.

### Unit test

Unit tests examine individual functions within the smart contract and are written in the same language as the smart contract itself. In this example, which deals with cross-contract calls, we solely test whether the 'initialize' method functions correctly in the unit tests. This limitation exists because unit tests cannot evaluate cross-contract calls.

### Integration test

In this project in particular, the integration tests first deploy the `hello-near` contract. Then,
they test that the cross-contract call correctly sets and retrieves the message. You will find the integration tests
in `integration-tests/`.

<CodeTabs>
  <Language value="🌐 JavaScript" language="rust">
    <Github fname="main.test.js"
            url="https://github.com/near-examples/cross-contract-hello-js/blob/master/integration-tests/src/main.ava.ts"
            start="9" end="59" />
  </Language>
</CodeTabs>

---

## Moving Forward
An effective method for learning is to expand upon a contract. Consider modifying the cross-contract example to incorporate the gues[guest-book](guest-book.md). In doing so, you can explore cross-contract calls that involve transferring funds. Be sure to properly manage the callback and [handle the callback](../../2.develop/contracts/crosscontract.md#callback-method) errors to ensure the return of funds to the user when necessary.

### Advanced Cross Contract Calls
For more advanced insights into cross-contract calls, you can delve into the [advanced cross contract calls tutorial](./advanced-xcc.md). This tutorial will teach you how to perform cross-contract calls in batches and in parallel.

// Rebuilt using Reference https://github.com/near-examples/cross-contract-hello-rust.git and https://docs.near.org/tutorials/examples/xcc 