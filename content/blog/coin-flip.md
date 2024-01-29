---
id: coin-flip
title: Upcoming* Exploring Randomness on the Blockchain - The Coin Flip Game
date: 2023-10-27
---

// ReBuilt using refernce https://github.com/near-examples/coin-flip-js.git and https://docs.near.org/tutorials/examples/coin-flip 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {CodeTabs, Language, Github} from "@site/components/codetabs"

"Coin Flip" is an engaging game in which players attempt to predict the outcome of a coin flip. This game stands as one of the most straightforward contract implementations involving the generation of random numbers.

![img](/docs/assets/examples/coin-flip.png)

---
## Starting the Game
You have two options to start the example:
1. **Recommended:** use the app through Gitpod (a web-based interactive environment)
2. Clone the project locally .


<Tabs className="language-tabs" groupId="code-tabs">
  <TabItem value="🌐 JavaScript">

| Gitpod                                                                                                                                                            | Clone locally                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------  |
| <a href="https://gitpod.io/#https://github.com/near-examples/coin-flip-js.git"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a> | 🌐 `https://github.com/near-examples/coin-flip-js.git` |

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

To begin, kindly log in using your NEAR account credentials. In case you don't possess one yet, you can conveniently create an account on the spot. After successfully logging in, proceed to utilize the `tails` and `heads` buttons to make your predictions regarding the outcome of the next coin flip.

![img](/docs/assets/examples/coin-flip.png)
*Frontend of the Game*

---

## Deciphering the dApp's Structure

Now that you have a grasp of the dApp's functionality, let's delve deeper into its architecture:

1. The frontend code lives in the `/frontend` folder.
2. The smart contract code is in the `/contract` folder.

### Smart Contract
The contract presents 2 methods: `flip_coin`, and `points_of`.

```js
@call({})
flip_coin({ player_guess }: { player_guess: Side }): Side {
  // Check who called the method
  const player: AccountId = near.predecessorAccountId();
  near.log(`${player} chose ${player_guess}`);

  // Simulate a Coin Flip
  const outcome = simulateCoinFlip();

  // Get the current player points
  let player_points: number = this.points.get(player, { defaultValue: 0 })

  // Check if their guess was right and modify the points accordingly
  if (player_guess == outcome) {
    near.log(`The result was ${outcome}, you get a point!`);
    player_points += 1;
  } else {
    near.log(`The result was ${outcome}, you lost a point`);
    player_points = player_points ? player_points - 1 : 0;
  }

  // Store the new points
  this.points.set(player, player_points)

  return outcome
}

// View how many points a specific player has
@view({})
points_of({ player }: { player: AccountId }): number {
  const points = this.points.get(player, {defaultValue: 0})
  near.log(`Points for ${player}: ${points}`)
  return points
}
```

### Frontend
The frontend comprises a solitary HTML file, namely `/index.html`. This file defines the components that appear on the screen.

The website's logic is embedded within `/assets/js/index.js`, which facilitates communication with the contract via a `wallet`. Inside `/assets/js/index.js`, you'll encounter the following code:

```js
window.onload = async () => {
  let isSignedIn = await wallet.startUp();

  if (isSignedIn) {
    signedInFlow();
  } else {
    signedOutFlow();
  }
};
```

It indicates our app, when it starts, to check if the user is already logged in and execute either `signedInFlow()` or `signedOutFlow()`.

---

## Testing

When it comes to developing smart contracts, meticulous testing is of paramount importance. In this project, you'll find two types of tests: unit and integration tests. But before delving into the details, I recommend running the tests specific to the dApp by executing the command `yarn test`.

### Integration test

Integration tests are typically written in JavaScript. They facilitate the automatic deployment of a new contract, subsequently enabling the execution of methods on it. This approach effectively simulates user interactions in a real-world scenario. The integration tests for the `counter` can be located in `tests/integration-tests`.

```js
test('by default the user has no points', async (t) => {
  const { root, contract } = t.context.accounts;
  const points: number = await contract.view('points_of', { player: root.accountId });
  t.is(points, 0);
});

test('the points are correctly computed', async (t) => {
  const { root, contract } = t.context.accounts;

  let counter: {[key:string]:number} = { 'heads': 0, 'tails': 0 }
  let expected_points = 0;

  for(let i=0; i<10; i++){
    const res = await root.call(contract, 'flip_coin', { 'player_guess': 'heads' })
    counter[res as string] += 1;
    expected_points += res == 'heads' ? 1 : -1;
    expected_points = Math.max(expected_points, 0);
  }

  // A binomial(10, 1/2) has a P(x>2) ~ 0.98%
  t.true(counter['heads'] >= 2);

  const points: number = await contract.view('points_of', { 'player': root.accountId });
  t.is(points, expected_points);
});
```

---

## A Noteworthy Aspect - Randomness

Understanding the nuances of randomness in the blockchain domain can be quite intricate. We encourage you to embark on an exploratory journey, starting with our comprehensive [security documentation on the subject](../../2.develop/contracts/security/random.md).

// ReBuilt using refernce https://github.com/near-examples/coin-flip-js.git and https://docs.near.org/tutorials/examples/coin-flip 