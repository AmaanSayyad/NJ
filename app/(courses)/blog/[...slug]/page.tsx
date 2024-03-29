import { serialize } from "next-mdx-remote/serialize"
import { notFound } from "next/navigation"
import Article from "@/components/article"
import Editors from "@/components/editors"
import { Blog } from "@/lib/mdx/sources"
import { Code } from "@/lib/code/sources"
import LiveWrapper from "@/components/live-wrapper"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  const files = await Blog.getMdxFiles()

  return files?.map((file) => ({
    slug: file.slug.split("/"),
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await Blog.getMdxNode(params?.slug)
  const code = await Code.getCodeNode(params?.slug)

  if (!post || !code) {
    notFound()
  }

  const mdx = await serialize(post.content)

  return (
    <LiveWrapper>
      <div className="grid grid-cols-5 h-[calc(100vh-24px-32px-16px)]">
        <Article title={post.frontMatter.title} mdx={mdx} />
        <Editors content={code.content} answer={code.answer} />
      </div>
    </LiveWrapper>
  )
}