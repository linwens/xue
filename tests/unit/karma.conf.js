var webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = function (config) {
  config.set({
    // 测试器环境
    browsers: ['ChromeHeadless'],
    // 测试使用的框架
    frameworks: ['mocha', 'sinon-chai'],
    // 测试入口(相对于karma.conf.js所在目录)
    files: [
      '**/*.spec.js'
    ],
    // 对指定文件进行预处理
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap', 'coverage']
    },
    // webpack打包规则
    webpack: webpackConfig,
    // 结果存在哪里
    reporters: ['spec', 'coverage'],
    // 覆盖率配置
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
