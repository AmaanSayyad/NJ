// Basic Connection build, near/wallet.ts - Built using refernce https://docs.near.org/tools/wallet-selector

"use client"

import { useNear } from "@/lib/hooks/near"
import { useEffect } from "react"

export default function ConnectWallet() {
  const { isSigned, wallet, startupNear } = useNear()

  useEffect(() => {
    startupNear()
  }, [startupNear])

  return (
    <>
      {isSigned ? (
        <button
          onClick={() => wallet.signOut()}
          className="px-4 py-2 bg-white hover:bg-white/80 text-neutral-dark rounded-full font-bold"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => wallet.signIn()}
          className="px-4 py-2 bg-white hover:bg-white/80 text-neutral-dark rounded-full font-bold"
        >
          Connect Wallet
        </button>
      )}
    </>
  )
}

// Basic Connection build, near/wallet.ts - Built using refernce https://docs.near.org/tools/wallet-selector