module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "plugins": ["sonarjs"],
    "extends": ["eslint:recommended", "plugin:sonarjs/recommended"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
