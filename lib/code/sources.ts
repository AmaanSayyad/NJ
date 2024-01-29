import * as z from "zod"; // Import the "zod" library using a wildcard import and name it as "z."

import { createSource } from "."; // Import the "createSource" function from the current directory (likely a local module).

export const Code = createSource({
  contentPath: "content/snippets", // Define the path to the content source for Code.
  basePath: "/blog", // Define the base path for the Code source.
  sortBy: "date", // Sort the content by the "date" field.
  sortOrder: "desc", // Sort the content in descending order (newest to oldest).
  frontMatter: z.object({
    title: z.string(), // Define a schema for the "title" field in the front matter of the content.
    date: z.string(), // Define a schema for the "date" field in the front matter of the content.
    excerpt: z.string().optional(), // Define an optional schema for the "excerpt" field in the front matter of the content.
  }),
});