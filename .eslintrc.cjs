module.exports = {
    "env": {
        // 环境 针对那些环境的语法
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        // 集成了哪些规则
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        "@vue/prettier",
    ],
    "overrides": [
    ],
    // "parser": "@typescript-eslint/parser",
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        // 我们自己的规则
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true, // 单引号
                "semi": false, // 不加分号
                "trailingComma": "none", // 不加尾逗号
                "tabwidth": 2, // tab宽度
                "useTabs": false, // 不使用tab
                endOfLine: "auto" // 换行符
            }
        ]
    }
}
