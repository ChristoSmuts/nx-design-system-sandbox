const path = require("path")

module.exports = ({ config }) => {
  // Clear existing CSS rules
  config.module.rules = config.module.rules.filter((rule) => {
    if (rule.test && rule.test.toString().includes("css")) {
      return false
    }
    return true
  })

  // Add new CSS rule with proper PostCSS configuration
  config.module.rules.push({
    test: /\.css$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          sourceMap: false,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            config: path.resolve(__dirname, "../../../.postcssrc.json"),
          },
        },
      },
    ],
    include: [path.resolve(__dirname, "../src"), path.resolve(__dirname, "../.storybook")],
  })

  return config
}