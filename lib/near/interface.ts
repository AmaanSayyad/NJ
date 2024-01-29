// Built using logics and near.ts docs.
// Define a TypeScript class named HelloNEAR.
export class HelloNEAR {
  // Declare class properties for contractId and wallet.
  contractId
  wallet

  // Constructor that takes an object with contractId and walletToUse as parameters.
  constructor({ contractId, walletToUse }) {
    // Assign the contractId and walletToUse to the class instance properties.
    this.contractId = contractId
    this.wallet = walletToUse
  }

  // Method to view an NFT based on its tokenId.
  async viewNFT(tokenId) {
    // Send a read-only request to the specified contract to retrieve NFT information.
    return await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "nft_token",
      args: {
        token_id: tokenId,
      },
    })
  }

  // Method to initialize an NFT with a specified ownerId.
  async initialize(ownerId) {
    // Send a transaction to the contract to initialize a new NFT with the given ownerId.
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: "new_default_meta",
      args: {
        owner_id: ownerId,
      },
    })
  }

  // Method to mint a new NFT and send it to the receiver account.
  async nftMint(receiver, tokenId, metadata) {
    // Send a transaction to the contract to mint a new NFT and specify its details.
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: "nft_mint",
      args: {
        token_id: tokenId,
        receiver_id: receiver,
        token_metadata: metadata,
      },
    })
  }

  // Method to transfer an existing NFT to another NEAR account.
  async nftTransfer(receiver, tokenId, memo) {
    // Send a transaction to the contract to transfer an existing NFT to the receiver.
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: "asset_transfer",
      args: { receiver_id: receiver, token_id: tokenId, memo: memo },
    })
  }
}

// Built using logics and near.ts docs.