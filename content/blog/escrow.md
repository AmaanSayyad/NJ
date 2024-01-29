---
id: escrow
title: Upcoming* Exploring Escrow Contracts on NEAR Blockchain
date: 2023-10-23
---

// ReBuilt using Reference https://github.com/near-examples/escrow-js.git

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {CodeTabs, Language, Github} from "@site/components/codetabs"

This example offers a straightforward implementation of an escrow contract featuring a timeout function that can be invoked to finalize the transaction if the buyer fails to grant approval within a specified timeframe. The code additionally demonstrates the exchange of data between contracts through cross-contract calls and illustrates how the calling contract can effectively manage the results.

:::info
This example does not have a frontend
:::

---

## Starting with the Project
You have two options to start using the project:
- The first and recommended is to open the project through Gitpod, which will open a web-based interactive environment with all dependencies installed.
- The second option is to clone the repository locally, for which you will need to install all the [Prerequisites](../../2.develop/prerequisites.md).


<Tabs className="language-tabs" groupId="code-tabs">
  <TabItem value="🌐 JavaScript"> 

  | Gitpod                                                                                                                                                                                           | Clone Locally                                                                 |
  | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
  | <a href="https://gitpod.io/#https://github.com/near-examples/escrow-js"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" /></a> | 🌐 `https://github.com/near-examples/escrow-js.git` |

  </TabItem>
</Tabs>


---

### Interacting With the Contract Logic
Since this example does not have a frontend, we will interact with it using the [NEAR CLI](../../4.tools/cli.md) or writing tests using [`workspaces-js`](../../2.develop/testing/integration.md).

Check the project's [README.md](https://github.com/near-examples/escrow-js/blob/master/README.md). Briefly, you will need to:

#### 1. Install Dependencies
To install dependencies, run:

```bash
npm i
```

#### 1. Build the Contracts
You can build the contracts (creating the `.wasm` files that will be deployed to the network) by running:

```bash
npm run build
```

Once finished, check the `build/` folder and you should see the `escrow.wasm` file. This is the file that will be deployed to the network alongside the `assets.wasm` file that is used to manage ownership for assets. 

#### 2. Deploy the Contracts

To deploy the escrow contract to testnet, run:

```bash
near deploy --wasmFile build/escrow.wasm --accountId <your-escrow-testnet-account-id>
```

To deploy the assets contract to testnet, run:

```bash
near deploy --wasmFile build/assets.wasm --accountId <your-assets-testnet-account-id>
```

#### 3. Initialize the Assets Contract

To initialize the assets contract, run:

```bash
near call <your-assets-testnet-account-id> init '{"owner_id": "<your-asset-owner-account-id>", "total_supply": "1000", "escrow_contract_id": "<your-escrow-testnet-account-id>", "asset_price": "100000000000000000000000"}' --accountId <your-assets-testnet-account-id>
```

`asset_price` is the price of the asset in yoctoNEAR (10^-24 NEAR). In this example, the price is set to 0.1 NEAR.
 
#### 3. Perform a Purchase on Escrow

To perform a purchase on the escrow contract, run:

```bash
near call <your-escrow-testnet-account-id> purchase_in_escrow '{"seller_account_id": "<your-asset-owner-account-id>", "asset_contract_id ": "<your-assets-testnet-account-id>"}' --accountId <your-account-id> --amount 0.11
```

Since we set the price of the asset to 0.1 NEAR, we need to send 0.11 NEAR to the escrow contract to cover the price of the asset and gas costs.

#### 4. Check the Balance of the Buyer Account

To check the asset balance of the buyer account after the escrow purchase, run:

```bash
near view <your-assets-testnet-account-id> get_account_assets '{"account_id": "<your-account-id>"}'
```

You may also check the NEAR balance of the seller account, making sure they have not received the payment yet:

```bash
near state <seller-account-id>
```

#### 5. Approve the Purchase

To approve the purchase, run:

```bash
near call <your-escrow-testnet-account-id> approve_purchase '{}' --accountId <your-account-id>
```

Check the NEAR balance of the seller account again, and you should see that they have received the payment.

---

### Smart Contract

The contract provides functionalities to facilitate the acquisition of assets held in escrow, enabling buyers to approve or cancel their purchase. Furthermore, the contract offers a method to verify the purchase's creation time. If the purchase was initiated a day or more in the past, the contract will automatically approve the purchase without requiring buyer input.

<CodeTabs>
<Language value="🌐 JavaScript" language="js">
    <Github fname="contract.ts" 
            url="https://github.com/near-examples/escrow-js/blob/master/contracts/escrow.js"
            start="41" end="119" />
  </Language>
</CodeTabs>

---

## Iterative Testing

When developing smart contracts, comprehensive testing is essential. In this project, we rigorously test the contract methods using `workspaces-js`. Before delving into the tests, execute them by running the command `npm test`. This command will initiate the tests located in `tests/main.ava.js`, and you will receive the test names and their results displayed in the console.

<CodeTabs>
  <Language value="🌐 JavaScript" language="js">
    <Github fname="main.ava.js"
            url="https://github.com/near-examples/escrow-js/blob/master/tests/main.ava.js"
            start="4" end="78" />
  </Language>
</CodeTabs>

---

## Moving Forward

An effective method for learning is to enhance a contract's functionality. Modify the `escrow-js` example to use an [NFT](../nfts/0-intro.md) contract!. In this way, you can try to make functionality where a user purchases an NFT in escrow! Remember to correctly [handle the callback](../../2.develop/contracts/crosscontract.md#callback-method),
and to return the money to the user in case of errors.

// ReBuilt using Reference https://github.com/near-examples/escrow-js.git