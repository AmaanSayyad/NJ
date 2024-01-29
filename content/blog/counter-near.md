---
id: count-near
title: Upcoming* Decentralized Counters - Managing Numbers on the Blockchain.
date: 2023-10-25
---

// ReBuilt using refernce https://github.com/near-examples/rust-counter.git

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {CodeTabs, Language, Github} from "@site/components/codetabs"

Our exemplary counter application serves as an amicable decentralized platform designed to store a numerical value. It provides users with the means to perform actions such as `increment`, `decrement`, and `reset` this value.

![img](/docs/assets/examples/count-on-near-banner.png)

---

## Starting the Counter
You have two options to start the Counter:
1. **Recommended:** use the app through Gitpod (a web-based interactive environment)
2. Clone the project locally .


<Tabs className="language-tabs" groupId="code-tabs">
  <TabItem value="🌐 JavaScript">

| Gitpod                                                                                                                                                            | Clone locally                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| <a href="https://gitpod.io/#https://github.com/near-examples/js-counter.git"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a> | 🌐 `https://github.com/near-examples/js-counter.git` |

  </TabItem>

  <TabItem value="🦀 Rust">

| Gitpod                                                                                                                                                            | Clone locally                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| <a href="https://gitpod.io/#https://github.com/near-examples/rust-counter.git"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a> | 🦀 `https://github.com/near-examples/rust-counter.git` |

  </TabItem>

  <TabItem value="🚀 AssemblyScript" >

| Gitpod                                                                                                                                                       | Clone locally                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| <a href="https://gitpod.io/#https://github.com/near-examples/counter.git"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a> | 🚀 `https://github.com/near-examples/counter.git` |

  </TabItem>

</Tabs>

If you opt for Gitpod, a new browser window will automatically launch, displaying the code. Please allow a moment, and the front-end interface will appear. Ensure that your browser isn't blocking pop-up windows.

If you are running the application locally, navigate to the directory where you cloned it. Use the following commands:

`yarn` to install the required dependencies.
`yarn start` to initiate the application.

```bash
cd counter
yarn
yarn deploy
yarn start
```
Upon execution, your contract will undergo compilation and deployment to an account within the `testnet` network. Once this process is complete, a browser window should automatically open.

---

## Interacting With the Counter
Kindly log in with your NEAR account. If you haven't registered yet, you will have the opportunity to create an account promptly. Once successfully logged in, you can utilize the `+` and `-` buttons to increment and decrement the counter, respectively. Additionally, employ the Gameboy buttons to reset the counter and witness the delightful animation that accompanies it.

![img](/docs/assets/examples/count-on-near.png)
*Frontend of the Counter*

---

## Deciphering the dApp's Structure

Now that you have a grasp of the dApp's functionality, let's delve deeper into its architecture:
1. The frontend code lives in the `/frontend` folder.
2. The smart contract code is in the `/contract` folder.

### Contract
The contract presents 4 methods: `get_num`, `increment`, `decrement`, and `reset`. The method `get_num` retrieves the current value, and the rest modify it.

<CodeTabs>
  <Language value="🌐 JavaScript" language="ts">
    <Github fname="contract.ts" 
            url="https://github.com/near-examples/js-counter/blob/master/contract/src/contract.ts"
            start="3" end="29" />
  </Language>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/rust-counter/blob/master/contract/src/lib.rs"
            start="5" end="36" />
  </Language>
  <Language value="🚀 AssemblyScript" language="ts">
    <Github fname="index.ts"
            url="https://github.com/near-examples/counter/blob/master/contract/assembly/index.ts"/>
  </Language>
</CodeTabs>

### Frontend
The frontend comprises a solitary HTML file, namely `/index.html`. This file defines the components that appear on the screen.

The website's logic lives in `/assets/js/index.js`, which communicates with the contract through `/near-interface.js`. You will notice in `/assets/js/index.js` the following code:

<CodeTabs>
  <Language value="🌐 JavaScript" language="ts">
    <Github fname="index.js"
            url="https://github.com/near-examples/js-counter/blob/master/frontend/index.js"
            start="9" end="20" />            
  </Language>
</CodeTabs>

It indicates our app, when it starts, to check if the user is already logged in and execute either `signedInFlow()` or `signedOutFlow()`.

---

## Testing

When it comes to developing smart contracts, meticulous testing is of paramount importance. In this project, you'll find two types of tests: unit and integration tests. But before delving into the details, I recommend running the tests specific to the dApp by executing the command `yarn test`.

### Unit test

Unit tests check individual functions in the smart contract. Right now only Rust implements unit testing. 

<CodeTabs>
  <Language value="🦀 Rust" language="rust">
    <Github fname="lib.rs"
            url="https://github.com/near-examples/rust-counter/blob/master/contract/src/lib.rs"
            start="48" end="69" />
  </Language>
  <Language value="🚀 AssemblyScript" language="ts">
    <Github fname="main.spec.ts"
            url="https://github.com/near-examples/counter/blob/master/contract/assembly/__tests__/main.spec.ts"
            start="5" end="44" />
  </Language>
</CodeTabs>

### Integration test

Integration tests are typically written in JavaScript. They facilitate the automatic deployment of a new contract, subsequently enabling the execution of methods on it. This approach effectively simulates user interactions in a real-world scenario. The integration tests for the `counter` can be located in `tests/integration-tests`.

<CodeTabs>
  <Language value="🌐 JavaScript" language="ts">
    <Github fname="main.test.js"
            url="https://github.com/near-examples/js-counter/blob/master/integration-tests/src/main.ava.ts"
            start="37" end="61" />
  </Language>
</CodeTabs>

---

## Moving Forward

As you progress on your learning journey, a valuable exercise is to enhance the contract's functionality. Consider customizing the `increment` and `decrement` methods by introducing a parameter that allows users to specify the extent of the value change. To accomplish this, you'll need to apply the insights gained from the [anatomy](../../2.develop/contracts/anatomy.md) and [storage](../../2.develop/contracts/storage.md) sections. This practical exercise will deepen your understanding of contract development and empower you to create more versatile and feature-rich decentralized applications.

// ReBuilt using refernce https://github.com/near-examples/rust-counter.git