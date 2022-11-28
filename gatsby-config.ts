import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `fonimus`,
    siteUrl: `https://fonimus.fr`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
  ],
};

export default config;
