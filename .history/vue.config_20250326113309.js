const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
});

const path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
    },
};
