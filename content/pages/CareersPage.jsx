// components/CareersPage.js
import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';

const CareersPage = ({ mdxSource }) => {
  return (
    <div>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export async function getStaticProps() {
  // Read the MDX content from a file (e.g., careers.mdx)
  const mdxSource = fs.readFileSync('/pages/careers.mdx', 'utf8');

  const mdxContent = await serialize(mdxSource);

  return {
    props: {
      mdxSource: mdxContent,
    },
  };
}

export default CareersPage;