const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false //eslint 중 한단어로만의 component도 생성 가능하게 지정
});