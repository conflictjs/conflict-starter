export default {
    "plugins": [
      "@conflict/beta/babel-plugin"
    ],
    "presets": [
      [
        "@babel/preset-react",
        {
          "pragma": "global.__ConflictViewParser", // default pragma is React.createElement (only in classic runtime)
          "pragmaFrag": "DomFrag", // default is React.Fragment (only in classic runtime)
          "throwIfNamespace": true, // defaults to true
          "runtime": "classic" // defaults to classic
          // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
        }
      ]
    ]
}
