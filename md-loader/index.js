
const striptags = require('./strip-tags').strip
const utils = require('./utils.js')

// 使用组件
const MarkdownItContainer = require('markdown-it-container')
const MarkdownItCheckBox = require('markdown-it-task-checkbox')
const MarkdownItDec = require('markdown-it-decorate')

const vueMarkdown = {
  raw: true, //
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    // ```html``` 给这种样式加个class hljs
    MarkdownIt.renderer.rules.fence = utils.wrap(
      MarkdownIt.renderer.rules.fence
    )
    // ```code``` 给这种样式加个class code_inline
    const codeInline = MarkdownIt.renderer.rules.code_inline
    MarkdownIt.renderer.rules.code_inline = function (...args) {
      args[0][args[1]].attrJoin('class', 'code_inline')
      return codeInline(...args)
    }
    return source
  },
  use: [
    [
      MarkdownItContainer,
      'demo',
      {
        validate: params => params.trim().match(/^demo\s*(.*)$/),
        render: function (tokens, idx) {
          if (tokens[idx].nesting === 1) {
            const html = utils.convert(striptags(tokens[idx + 1].content, 'script'))
            // 移除描述，防止被添加到代码块
            tokens[idx + 2].children = []

            return `<demo-block>
                          <div slot="desc">${html}</div>
                          <div slot="highlight">`
          }
          return '</div></demo-block>\n'
        }
      }
    ],
    [MarkdownItCheckBox, {
      disabled: true
    }],
    [MarkdownItDec]
  ]
}

exports.vueMarkdown = vueMarkdown
