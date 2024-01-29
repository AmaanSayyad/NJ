---
id: count-near
title: Problem Solving** Counter - Creating and Interacting with a Simple Counter dApp on NEAR Blockchain
date: 2023-10-26
---

// ReBuilt using refernce https://github.com/near-examples/counter-rust

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {CodeTabs, Language, Github} from "@site/components/codetabs"

Our exemplary counter application serves as an amicable decentralized platform designed to store a numerical value. It provides users with the means to perform actions such as `increment`, `decrement`, and `reset` this value.

---

## Starting the Counter
You have two options to start the Counter:
1. **Recommended:** use the app through Gitpod (a web-based interactive environment)
2. Clone the project locally .

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

*Frontend of the Counter*

https://github.com/near-examples/counter-rust/tree/master/frontend
---

## Deciphering the dApp's Structure

Now that you have a grasp of the dApp's functionality, let's delve deeper into its architecture:

1. The frontend code lives in the `/frontend` folder.
2. The smart contract code is in the `/contract` folder.

### Smart Contract
The contract presents 4 methods: `get_num`, `increment`, `decrement`, and `reset`. The method `get_num` retrieves the current value, and the rest modify it.

```ts
@NearBindgen({})
class Counter {
  val: number = 0;

  @view({}) // Public read-only method: Returns the counter value.
  get_num(): number {
    return this.val
  }

  @call({}) // Public method: Increment the counter.
  increment() {
    this.val += 1;
    near.log(`Increased number to ${this.val}`)
  }

  @call({}) // Public method: Decrement the counter.
  decrement() {
    this.val -= 1;
    near.log(`Decreased number to ${this.val}`)
  }

  @call({}) // Public method - Reset to zero.
  reset() {
    this.val = 0;
    near.log(`Reset counter to zero`)
  }
}
```

### Frontend

The frontend comprises a solitary HTML file, namely `/index.html`. This file defines the components that appear on the screen.

The website's logic lives in `/assets/js/index.js`, which communicates with the contract through `/near-interface.js`. You will notice in `/assets/js/index.js` the following code:

```ts
// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp();

  if (isSignedIn){
    signedInFlow()
  }else{
    signedOutFlow()
  }

  updateUI()
}
```

It indicates our app, when it starts, to check if the user is already logged in and execute either `signedInFlow()` or `signedOutFlow()`.

---

## Testing

When it comes to developing smart contracts, meticulous testing is of paramount importance. In this project, you'll find two types of tests: unit and integration tests. But before delving into the details, I recommend running the tests specific to the dApp by executing the command `yarn test`.

### Integration test

Integration tests are typically written in JavaScript. They facilitate the automatic deployment of a new contract, subsequently enabling the execution of methods on it. This approach effectively simulates user interactions in a real-world scenario. The integration tests for the `counter` can be located in `tests/integration-tests`.

```ts
test("can be incremented", async (t) => {
  const { alice, contract } = t.context.accounts;
  const startCounter: number = await contract.view("get_num", {});
  await alice.call(contract, "increment", {});
  const endCounter = await contract.view("get_num", {});
  t.is(endCounter, startCounter + 1);
});

test("can be decremented", async (t) => {
  const { alice, contract } = t.context.accounts;
  await alice.call(contract, "increment", {});
  const startCounter: number = await contract.view("get_num", {});
  await alice.call(contract, "decrement", {});
  const endCounter = await contract.view("get_num", {});
  t.is(endCounter, startCounter - 1);
});

test("can be reset", async (t) => {
  const { alice, contract } = t.context.accounts;
  await alice.call(contract, "increment", {});
  await alice.call(contract, "increment", {});
  await alice.call(contract, "reset", {});
  const endCounter = await contract.view("get_num", {});
  t.is(endCounter, 0);
});
```

---

## Moving Forward
As you progress on your learning journey, a valuable exercise is to enhance the contract's functionality. Consider customizing the `increment` and `decrement` methods by introducing a parameter that allows users to specify the extent of the value change. To accomplish this, you'll need to apply the insights gained from the [anatomy](../../2.develop/contracts/anatomy.md) and [storage](../../2.develop/contracts/storage.md) sections. This practical exercise will deepen your understanding of contract development and empower you to create more versatile and feature-rich decentralized applications.

// ReBuilt using refernce https://github.com/near-examples/counter-rust