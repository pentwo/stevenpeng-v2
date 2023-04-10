import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Steven Peng's Portfolio`,
        siteUrl: `https://www.stevenpeng.com.au`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-mantine",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Steven Peng's Portfolio",
                short_name: "stevenpeng",

                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Roboto`,
                        file: `https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap`,
                    },
                    {
                        name: `Roboto Mono`,
                        file: `https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap`,
                    },
                    {
                        name: `Lato`,
                        file: `https://fonts.googleapis.com/css2?family=Lato:wght@400;500;700&display=swap`,
                    },
                ],
            },
        },
    ],
};

export default config;
