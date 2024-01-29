import Link from "next/link"
import { Blog } from "@/lib/mdx/sources"
import { formatDate } from "@/lib/utils"
import { Icons } from "@/components/icons"

export default async function BlogPage() {
  const posts = await Blog.getAllMdxNodes()

  return (
    <div className="container mx-auto max-w-3xl px-6 py-12 xl:px-8">
      <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
        Near Blog
      </h1>
      <hr className="mt-6 py-6" />
      {posts.map((post) => (
        <article key={post.slug} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <Link href={post.url}>
              <h2 className="max-w-[90%] text-xl font-bold leading-normal sm:text-2xl md:text-xl">
                {post.frontMatter.title}
              </h2>
            </Link>
            {post.frontMatter.date && (
              <p className="text-sm text-slate-600">
                {formatDate(post.frontMatter.date)}
              </p>
            )}
          </div>
          {post.frontMatter.excerpt && (
            <p className="text-slate-600">{post.frontMatter.excerpt}</p>
          )}
          <hr className="mt-6 py-6" />
        </article>
      ))}
    </div>
  )
}