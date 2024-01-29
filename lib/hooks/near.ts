// Built using reference https://www.youtube.com/watch?v=QYNyC6__pw8

"use client"  // Indicates the code should run on the client-side in a web browser.

import { Wallet } from "@/lib/near/wallet"  // Import the 'Wallet' class from the specified module.
import { useEffect, useMemo, useState } from "react"  // Import React hooks for managing state and side effects.
import { nanoid } from "nanoid"  // Import 'nanoid' for generating unique identifiers.

export function useNear() {  // Define a custom React hook called 'useNear'.

  const NJ_RELIC_ADDRESS = "nft.examples.testnet"  // Define a constant for an NFT address on the testnet blockchain.

  const [isSigned, setIsSigned] = useState(false)  // Define a state variable 'isSigned' and a function to update it.
  const wallet = useMemo(
    () => new Wallet({ createAccessKeyFor: NJ_RELIC_ADDRESS }),
    []
  )  // Create a 'Wallet' object for managing NEAR blockchain interactions and memoize it.

  const startupNear = async () => {  // Define an asynchronous function 'startupNear'.
    let isSignedIn = await wallet.startUp()  // Call 'startUp' on the wallet object to initialize the NEAR connection.
    setIsSigned(isSignedIn)  // Update the 'isSigned' state with the result of NEAR sign-in.
  }
  useEffect(() => {  // Define an effect to run after the component renders.
    window.onload = async () => {  // Add a window 'onload' event listener for asynchronous code.
      await startupNear()  // Call the 'startupNear' function to initialize the NEAR connection.
      //   fetchGreeting()
    }
  }, [wallet, startupNear])  // Specify dependencies for the effect to prevent unnecessary re-renders.

  function getRandomArbitrary(min, max) {  // Define a function to generate a random number within a range.
    return Math.round(Math.random() * (max - min) + min)
  }

  const mintNFT = async (title: string) => {  // Define an asynchronous function 'mintNFT' that mints an NFT.
    if (wallet.accountId === undefined) await wallet.startUp()  // Check if the wallet is signed in and start NEAR if not.

    const MEDIA = [  // Define an array of media URLs for NFTs.
      "https://bafybeibdack2fgzxt54zvu5vncd6pvl4tlzj6vf7odqtodsa6vgucmrkia.ipfs.nftstorage.link/",
      "https://bafybeifirgr4cvvkx66xp7rz3j3wkk6owzcsxkjw4f2lblcjgkdfakk57u.ipfs.nftstorage.link/",
      "https://bafybeicymugrb2mhqdt6t5mmd42m52m37hwvqawzbzyy5bodqsr5dsg6vi.ipfs.nftstorage.link/",
      "https://bafybeig4hn3ia6vlxtxgh4u7azlrv5cgun6bcmay2gf2xfgkt674zkahci.ipfs.nftstorage.link/",
    ]

    const media = MEDIA[getRandomArbitrary(0, MEDIA.length - 1)]  // Select a random media URL from the array.

    const tx = await wallet.callMethod({  // Call the 'callMethod' function on the wallet to mint an NFT.
      contractId: NJ_RELIC_ADDRESS,
      method: "nft_mint",
      args: {
        token_id: nanoid(),  // Generate a unique token ID using 'nanoid'.
        receiver_id: wallet.accountId,  // Set the receiver's NEAR account ID.
        metadata: {
          title: `Near Journey: ${title}`,  // Define the NFT title.
          description: `Attestation for completing ${title}`,  // Define the NFT description.
          media: media,  // Set the NFT media URL.
          copies: 1,  // Specify the number of NFT copies.
        },
      },
      deposit: "0.1",  // Set the deposit amount for the NFT minting transaction.
    })
    console.log("mint nft :", tx)  // Log the result of the NFT minting transaction.
  }

  async function fetchGreeting() {  // Define an asynchronous function 'fetchGreeting'.
    const CONTRACT_ADDRESS = "dev-1706544275222-43505565776415"  // Define the contract address to interact with.

    const currentGreeting = await wallet.viewMethod({  // Call 'viewMethod' on the wallet to fetch the current greeting.
      method: "get_count",
      contractId: CONTRACT_ADDRESS,
    })
    console.log("Greeting", currentGreeting)  // Log the retrieved greeting value.
  }
  return { wallet, isSigned, mintNFT, startupNear }  // Return an object with wallet, sign-in status, and NFT minting function.
}

// Built using reference https://www.youtube.com/watch?v=QYNyC6__pw8