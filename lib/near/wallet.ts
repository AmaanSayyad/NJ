//Built using Reference https://docs.near.org/tools/wallet-selector

/* A helper file that simplifies using the wallet selector */

/*
import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";

const selector = await setupWalletSelector({
  network: "testnet",
  modules: [setupNearWallet()],
});

const modal = setupModal(selector, {
  contractId: "test.testnet",
});

modal.show();

// NEAR Wallet.
(async () => {
  const wallet = await selector.wallet("my-near-wallet");
  const accounts = await wallet.signIn({ contractId: "test.testnet" });
})();

(async () => {
  const wallet = await selector.wallet("my-near-wallet");
  await wallet.signOut();
})();

(async () => {
  const wallet = await selector.wallet("my-near-wallet");
  const accounts = await wallet.getAccounts();
  console.log(accounts); // [{ accountId: "test.testnet" }]
})();

// MyNearWallet
(async () => {
  const wallet = await selector.wallet("my-near-wallet");
  await wallet.verifyOwner({
    message: "Test message",
  });
})();

(async () => {
  const wallet = await selector.wallet("my-near-wallet");
  await wallet.signAndSendTransactions({
    transactions: [
      {
        receiverId: "guest-book.testnet",
        actions: [
          {
            type: "FunctionCall",
            params: {
              methodName: "addMessage",
              args: { text: "Hello World!" },
              gas: "30000000000000",
              deposit: "10000000000000000000000",
            },
          },
        ],
      },
    ],
  });
})();

*/

// near api js
import { providers, utils } from "near-api-js"

// wallet selector UI
import "@near-wallet-selector/modal-ui/styles.css"

// wallet selector options
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet"

import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";

const THIRTY_TGAS = "30000000000000"
const NO_DEPOSIT = "0"

// Wallet that simplifies using the wallet selector
export class Wallet {
  walletSelector
  wallet
  network
  createAccessKeyFor
  accountId

  constructor({ createAccessKeyFor = undefined, network = "testnet" }) {
    // Login to a wallet passing a contractId will create a local
    // key, so the user skips signing non-payable transactions.
    // Omitting the accountId will result in the user being
    // asked to sign all transactions.
    this.createAccessKeyFor = createAccessKeyFor
    this.network = "testnet"
  }

  // To be called when the website loads
  async startUp(): Promise<boolean> {
    this.walletSelector = await setupWalletSelector({
      network: this.network,
      modules: [setupMyNearWallet(), setupNearWallet()],
    })

    const isSignedIn = this.walletSelector.isSignedIn()
    if (isSignedIn) {
      this.wallet = await this.walletSelector.wallet()
      this.accountId =
        this.walletSelector.store.getState().accounts[0].accountId
    }

    return isSignedIn
  }

  // Sign-in method
  async signIn() {
    if (this.wallet === undefined) await this.startUp()

    const description = "Please select a wallet to sign in."
    const modal = setupModal(this.walletSelector, {
      contractId: this.createAccessKeyFor,
      description,
    })
    modal.show()
  }

  // Sign-out method
  async signOut() {
    if (this.wallet === undefined) await this.startUp()

    this.wallet.signOut()
    this.wallet = this.accountId = this.createAccessKeyFor = null
    window.location.replace(window.location.origin + window.location.pathname)
  }

  // Make a read-only call to retrieve information from the network
  async viewMethod({ contractId, method, args = {} }) {
    const { network } = this.walletSelector.options
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl })

    type ResKeys = "block_hash" | "block_height" | "logs" | "result"
    type Res = Record<ResKeys, never>

    let res: Res = await provider.query({
      request_type: "call_function",
      account_id: contractId,
      method_name: method,
      args_base64: Buffer.from(JSON.stringify(args)).toString("base64"),
      finality: "optimistic",
    })

    // res{block_hash, block_height, logs, result}
    return JSON.parse(Buffer.from(res!.result).toString())
  }

  // Call a method that changes the contract's state
  async callMethod({
    contractId,
    method,
    args = {},
    gas = THIRTY_TGAS,
    deposit = NO_DEPOSIT,
  }) {
    const amount = utils.format.parseNearAmount(deposit)
    // Sign a transaction with the "FunctionCall" action
    const outcome = await this.wallet.signAndSendTransaction({
      signerId: this.accountId,
      receiverId: contractId,
      actions: [
        {
          type: "FunctionCall",
          params: {
            methodName: method,
            args,
            gas,
            deposit: amount,
          },
        },
      ],
    })

    return providers.getTransactionLastResult(outcome)
  }

  // Get transaction result from the network
  async getTransactionResult(txhash) {
    const { network } = this.walletSelector.options
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl })

    // Retrieve transaction result from the network
    const transaction = await provider.txStatus(txhash, "unnused")
    return providers.getTransactionLastResult(transaction)
  }
}

//Built using Reference https://docs.near.org/tools/wallet-selector