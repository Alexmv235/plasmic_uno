import path from "path";
import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "5hqKaAAYGqdb9c3fqqseuP",
        token: "INOxSgqaU5SPqNme9WkfF3Hu0bElGKc4SqDVR85xZiZPr7pawk6EQGJEdBK9b1Fv3hbO4lJuu8JQmC0Bw7Ymw",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: path.resolve("./src/templates/defaultPlasmicPage.tsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}

export default config
