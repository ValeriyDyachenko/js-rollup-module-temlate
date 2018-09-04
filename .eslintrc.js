module.exports = {
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "google"],
    "rules": {
        "linebreak-style": 0,
        "no-console": "off"
    },
    "globals": {
        "window": true,
        "document": true
    },
    "env": {
        "node": true,
        "commonjs": true
    }
};
