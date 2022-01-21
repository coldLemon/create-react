const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // 主题色配置
            //https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
            modifyVars: {
              "@primary-color": "#0B49B0", // 全局主色
              "@link-color": "#1890ff", // 链接色
              "@font-size-base": " 12px", // 主字号
              "@heading-color": "rgba(0, 0, 0, 0.85)", // 标题色
              "@modal-color": "rgba(23, 43, 77, 0.06)", //模态框head foot背景色
              "@module-hover": " rgba(7, 53, 123, 1)", //表头颜色
              //表头颜色
              "@table-header-bg": "#f1f3f",
              "@table-row-hover-bg": "#F3F4F7",//table hover
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
