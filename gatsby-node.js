/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// gatsby-node.js
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.

const path = require("path")
const fs = require("fs")

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/post/)) {
    page.matchPath = "/post/*"

    // Update the page.
    createPage(page)
  }
}

exports.onPreInit = () => {
  if (process.argv[2] === "build") {
    fs.rmdirSync(path.join(__dirname, "doc"), { recursive: true })
    fs.renameSync(
      path.join(__dirname, "public"),
      path.join(__dirname, "public_dev")
    )
  }
}

exports.onPostBuild = () => {
  fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, "dist"))
  fs.renameSync(
    path.join(__dirname, "public_dev"),
    path.join(__dirname, "public")
  )
}
