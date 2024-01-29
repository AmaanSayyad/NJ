// Reconstructed

import { Code } from "@/lib/code/sources"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function PostPage() {
  const code = await Code.getCodeNode("journey")

  if (!code) {
    notFound()
  }

  return (
    <div className="pt-12">
      <section className="mx-auto grid grid-cols-1 items-center justify-items-center pb-24">
        <div className="[text-align:-webkit-center] max-w-xl pb-10">
          <h2 className="text-4xl text-white font-bold leading-[1.1]">
            <span className="drop-shadow-md bg-clip-text text-transparent bg-gradient-to-tr from-blue-300 to-fuchsia-300">
            Level 1: Introduction to NEAR Blockchain 👇
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 w-full max-w-3xl gap-4">
          <div className="col-span-2 justify-self-center text-center">
            <Link href="/blog/count-near">
              <div className="px-52 py-12 rounded-lg bg-[url('/svgs/nj-02.svg')] bg-no-repeat bg-cover border border-white/10 hover:border hover:border-sky-200 hover:brightness-125 transition">
                <div className="[text-align:-webkit-center] max-w-xl">
                  <h2 className="text-3xl text-white font-bold leading-[1.1]">
                  📌Problem 1: Counter
                  </h2>
                  <p className="my-4 max-w-[85%] text-lg text-white/80">
                  Creating and Interacting with a Simple Counter dApp on NEAR Blockchain{" "}
                  </p>
                  <div className="gap-2">
                    <span
                      className="tracking-wider text-white bg-yellow-600 px-4 py-1 text-sm rounded-full leading-loose mx-2 font-normal"
                      title=""
                    >
                      near-sdk-js
                    </span>
                    <span
                      className="tracking-wider text-white bg-purple-600 px-4 py-1 text-sm rounded-full leading-loose mx-2 font-normal"
                      title=""
                    >
                      html,css,javascript,node.js
                    </span>
                  </div>
                  <p className="text-xs text-white/50 underline pt-4">
                  🔗 https://docs.near.org/tutorials/examples/count-near
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-1">
            <div className="h-80 px-4 py-12 rounded-lg bg-[url('/svgs/nj-01.svg')] bg-no-repeat bg-cover border border-white/10 hover:border hover:border-sky-200 hover:brightness-125 transition">
              <div className="[text-align:-webkit-center] max-w-xl">
                <h2 className="text-3xl text-white font-bold leading-[1.1]">
                📌Problem 2: Guest Book
                </h2>
                <p className="my-4 max-w-[85%] text-lg text-white/80">
                Authenticate with your NEAR account and contribute a message to the guest book.
                </p>
                <div className="gap-2">
                  <span
                    className="tracking-wider text-white bg-yellow-600 px-4 py-1 text-sm rounded-full leading-loose mx-2 font-normal"
                    title=""
                  >
                    rust, smart contract
                  </span>
                  <span
                    className="tracking-wider text-white bg-purple-600 px-4 py-1 text-sm rounded-full leading-loose mx-2 font-normal"
                    title=""
                  >
                    near-sdk-js
                  </span>
                </div>
                <p className="text-xs text-white/50 pt-4">coming soon</p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-80 px-4 py-12 rounded-lg bg-[url('/svgs/nj-03.svg')] bg-no-repeat bg-cover border border-white/10 hover:border hover:border-sky-200 hover:brightness-125 transition">
              <div className="[text-align:-webkit-center] max-w-xl">
                <h2 className="text-3xl text-white font-bold leading-[1.1]">
                📌Problem 3: Coin Flip
                </h2>
                <p className="my-4 max-w-[85%] text-lg text-white/80">
                Predict the result of a coin flip and gain insights into the implementation of random number generation.
                </p>
                <div className="gap-2">
                  <span
                    className="tracking-wider text-white bg-yellow-600 px-4 py-1 text-sm rounded-full leading-loose mx-2 font-normal"
                    title=""
                  >
                    near-wallet-sdk
                  </span>
                  <span
                    className="tracking-wider text-white bg-purple-600 px-4 py-1 text-sm rounded-full leading-loose mx-2 font-normal"
                    title=""
                  >
                    near-api-js
                  </span>
                </div>
                <p className="text-xs text-white/50 pt-5">coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid grid-cols-1 items-center justify-items-center pb-44">
        <div className="[text-align:-webkit-center] max-w-xl pb-10">
          <h2 className="text-4xl text-white font-bold leading-[1.1]">
            <span className="drop-shadow-md bg-clip-text text-transparent bg-gradient-to-tr from-green-300 to-yellow-300">
            Level 2: Advanced Challenges in NEAR Blockchain 👇
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 w-full max-w-3xl gap-4">
          <div className="col-span-2 justify-self-center text-center">
            <div className="px-52 py-32 rounded-lg bg-[url('/svgs/nj-06.svg')] bg-no-repeat bg-cover border border-white/10 hover:border hover:border-sky-200 hover:brightness-125 transition">
              <div className="[text-align:-webkit-center] max-w-xl">
                <h2 className="text-3xl text-white font-bold leading-[1.1]">
                📌Blog Website
                </h2>
                <p className="my-4 max-w-[85%] text-lg text-white/80">
                Establish connections, store blogs and perform read and write operations to interact with the smart contract.
                </p>
                <div className="gap-2">
                  <span
                    className="tracking-wider text-white bg-yellow-600 px-4 py-1 text-sm rounded-full leading-loose mx-2 font-normal"
                    title=""
                  >
                    IPFS, nft.storage
                  </span>
                  <span
                    className="tracking-wider text-white bg-purple-600 px-4 py-1 text-sm rounded-full leading-loose mx-2 font-normal"
                    title=""
                  >
                    near-api-js
                  </span>
                </div>
                <p className="text-xs text-white/50 pt-4">coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Reconstructed