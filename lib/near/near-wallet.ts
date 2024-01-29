import * as nearAPI from "near-api-js";

const { connect, keyStores, WalletConnection } = nearAPI;

const connectionConfig = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

// connect to NEAR
const nearConnection = await connect(connectionConfig);

// create wallet connection
const walletConnection = new WalletConnection(nearConnection);
walletConnection.requestSignIn({
    contractId: "nft.examples.testnet",
    methodNames: [], // optional
    successUrl: "https://testnet.mynearwallet.com/", // optional redirect URL on success
    failureUrl: "https://testnet.mynearwallet.com/" // optional redirect URL on failure
  });

walletConnection.signOut();

if (walletConnection.isSignedIn()) {
    // user is signed in
}

const walletAccountId = walletConnection.getAccountId();

const walletAccountObj = walletConnection.account();