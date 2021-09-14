const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'satisfy-ui',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/yekang/Desktop/project/satisfy-ui/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: './components/**/*.{md,markdown,mdx}',
        public: '/public',
        dest: 'doc-site',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'satisfy-ui',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3002,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/yekang/Desktop/project/satisfy-ui',
          templates:
            '/Users/yekang/Desktop/project/satisfy-ui/node_modules/docz-core/dist/templates',
          docz: '/Users/yekang/Desktop/project/satisfy-ui/.docz',
          cache: '/Users/yekang/Desktop/project/satisfy-ui/.docz/.cache',
          app: '/Users/yekang/Desktop/project/satisfy-ui/.docz/app',
          appPackageJson:
            '/Users/yekang/Desktop/project/satisfy-ui/package.json',
          appTsConfig: '/Users/yekang/Desktop/project/satisfy-ui/tsconfig.json',
          gatsbyConfig:
            '/Users/yekang/Desktop/project/satisfy-ui/gatsby-config.js',
          gatsbyBrowser:
            '/Users/yekang/Desktop/project/satisfy-ui/gatsby-browser.js',
          gatsbyNode: '/Users/yekang/Desktop/project/satisfy-ui/gatsby-node.js',
          gatsbySSR: '/Users/yekang/Desktop/project/satisfy-ui/gatsby-ssr.js',
          importsJs:
            '/Users/yekang/Desktop/project/satisfy-ui/.docz/app/imports.js',
          rootJs: '/Users/yekang/Desktop/project/satisfy-ui/.docz/app/root.jsx',
          indexJs:
            '/Users/yekang/Desktop/project/satisfy-ui/.docz/app/index.jsx',
          indexHtml:
            '/Users/yekang/Desktop/project/satisfy-ui/.docz/app/index.html',
          db: '/Users/yekang/Desktop/project/satisfy-ui/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
