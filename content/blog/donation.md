---
id: donation
title: Upcoming* Unlocking Decentralized Finance A Guide to Donation Contracts
date: 2023-10-24
---

// ReBuilt using Reference https://github.com/near-examples/donation-rust

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {CodeTabs, Language, Github} from "@site/components/codetabs"

Introduction: Our donation example is a gateway to the world of decentralized finance, enabling seamless money transfer and transparent tracking. Explore this simple yet powerful contract and step into the realm of decentralized finance.

![img](/docs/assets/examples/donation.png)

---

## Starting the Donation Example

You have two options to start the Donation Example. The first and recommended is to use the app through Gitpod, which will open a web-based interactive environment. The second option is to clone the repository locally, for which you will need to install all the [Prerequisites](../../2.develop/prerequisites.md).

<Tabs className="language-tabs" groupId="code-tabs">
  <TabItem value="🌐 JavaScript" >

  | Gitpod                                                                                                                                                                               | Clone locally                                                     |
  | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
  | <a href="https://gitpod.io/#https://github.com/near-examples/donation-js"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a> | 🌐 `https://github.com/near-examples/donation-js.git` |

  </TabItem>
  <TabItem value="🦀 Rust">

| Gitpod                                                                                                                                                                               | Clone locally                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| <a href="https://gitpod.io/#https://github.com/near-examples/donation-rust"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a> | 🦀 `https://github.com/near-examples/donation-rust.git` |

  </TabItem>
<TabItem value="🚀 AssemblyScript" >

  | Gitpod                                                                                                                                                                               | Clone locally                                                     |
  | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
  | <a href="https://gitpod.io/#https://github.com/near-examples/docs-examples/blob/main/donation-as"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a> | 🚀 `https://github.com/near-examples/docs-examples` -> donation-as |

  </TabItem>

</Tabs>

If you opt for Gitpod, a new browser window will automatically launch, displaying the code. Please allow a moment, and the front-end interface will appear. Ensure that your browser isn't blocking pop-up windows.

If you are running the application locally, navigate to the directory where you cloned it. Use the following commands:

`yarn` to install the required dependencies.
`yarn start` to initiate the application.

```bash
cd donation
yarn
yarn deploy
yarn start
```
Upon execution, your contract will undergo compilation and deployment to an account within the `testnet` network. Once this process is complete, a browser window should automatically open.

---

## Interacting With the dApp
If you don't have a NEAR account yet, don't worry! You can create one instantly. Once you're logged in, simply enter the amount of NEAR you wish to donate and click the 'Donate' button. You'll be securely redirected to the NEAR Wallet for transaction confirmation. After confirmation, your donation will be prominently featured in the 'Latest Donations' section."

![img](/docs/assets/examples/donation.png)
*Frontend of the Donation App*

---

## Deciphering the dApp's Structure

Now that you have a grasp of the dApp's functionality, let's delve deeper into its architecture:

1. The frontend code lives in the `/frontend` folder.
2. The smart contract code is in the `/contract` folder.

### Contract
The contract exposes methods to donate money (`donate`), and methods to retrieve the recorded donations (e.g. `get_donation_by_number`).

<CodeTabs>
  <Language value="🌐 JavaScript" language="ts">
    <Github fname="contract.ts" 
            url="https://github.com/near-examples/donation-js/blob/master/contract/src/contract.ts"
            start="15" end="43" />
  </Language>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/donation-rust/blob/main/contract/src/donation.rs"
            start="21" end="50" />
  </Language>
  <Language value="🚀 AssemblyScript" language="ts">
    <Github fname="index.ts"
            url="https://github.com/near-examples/docs-examples/blob/main/donation-as/contract/assembly/index.ts"
            start="11" end="34"/>
  </Language>
</CodeTabs>


### Frontend
The frontend is composed by a single HTML file (`/index.html`). This file defines the components displayed in the screen.
The website's logic lives in `/assets/js/index.js`, which communicates with the contract through `/assets/js/near/utils.js`.

An interesting aspect of the donation example is that it showcases how to retrieve a result after being redirected to the NEAR wallet to accept a transaction.

<CodeTabs>
  <Language value="🌐 JavaScript" language="js">
    <Github fname="index.js"
            url="https://github.com/near-examples/donation-js/blob/master/frontend/index.js"
            start="74" end="81" />
    <Github fname="near-interface.js"
            url="https://github.com/near-examples/donation-js/blob/master/frontend/near-interface.js"
            start="29" end="32" />
    <Github fname="near-wallet.js"
            url="https://github.com/near-examples/donation-js/blob/master/frontend/near-wallet.js"
            start="105" end="113" />
  </Language>
</CodeTabs>

---

## Testing

When it comes to developing smart contracts, meticulous testing is of paramount importance. In this project, you'll find two types of tests: unit and integration tests. But before delving into the details, I recommend running the tests specific to the dApp by executing the command `yarn test`.

### Unit test

Unit tests check individual functions in the smart contract. Right now only Rust implements unit testing. 

<CodeTabs>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/donation-rust/blob/main/contract/src/lib.rs"
            start="63" end="92" />
  </Language>
  <Language value="🚀 AssemblyScript" language="ts">
    <Github fname="main.spec.ts"
            url="https://github.com/near-examples/docs-examples/blob/main/donation-as/contract/assembly/__tests__/donation.spec.ts"
            start="16" end="43" />
  </Language>
</CodeTabs>

### Integration test

Integration tests are typically scripted using JavaScript. They facilitate the automatic deployment of a new contract and the execution of methods on it. In doing so, these tests effectively replicate real user interactions within a realistic scenario. You can locate the integration tests in the `tests/integration-tests` directory.

<CodeTabs>
  <Language value="🌐 JavaScript" language="rust">
    <Github fname="main.test.js"
            url="https://github.com/near-examples/donation-js/blob/master/integration-tests/src/main.ava.ts"
            start="50" end="73" />
  </Language>
</CodeTabs>

---

## Moving Forward

An effective approach to learning is to experiment with extending a contract's functionality. Enhance the donation example by modifying it to accumulate funds within the contract instead of instantaneously forwarding them. Subsequently, create a method accessible exclusively to the 'beneficiary' for retrieving the accumulated funds. This exercise will help you gain a deeper understanding of the contract's inner workings.

// ReBuilt using Reference https://github.com/near-examples/donation-rust