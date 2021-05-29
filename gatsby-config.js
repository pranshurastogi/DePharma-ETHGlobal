module.exports = {
  siteMetadata: {
    title: "DePharma",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["PINATA_API_KEY", "PINATA_API_SECRET_KEY"]
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-theme-material-ui",
  ],
};
