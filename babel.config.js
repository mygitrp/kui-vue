module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "targets": {
          "esmodules": true,
          "chrome": "50",
          "ie": "9"
        }
      }
    ]
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "transform-vue-jsx"
  ]
}