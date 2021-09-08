const cheerio = require('cheerio');
const Token = require('markdown-it/lib/token');
const hljs = require('highlight.js');
const anchor = require('markdown-it-anchor')
// const anchorto = require("markdown-it-toc-done-right")


const cnReg = new RegExp('<(cn)(?:[^<]|<)+</\\1>', 'g');

const getDomHtml = (str, tag, scoped) => {
  const $ = cheerio.load(str, { decodeEntities: false, xmlMode: true, });  //xmlMode 为false 闭合标签 编译错误 
  if (!tag) { return str; }
  if (tag === 'style') {
    return scoped
      ? $(`${tag}[scoped]`).html()
      : $(`${tag}`).not(`${tag}[scoped]`).html();
  }
  return $(tag).html() || '';
};


//options


const replaceDelimiters = function (str) {
  return str.replace(/({{|}})/g, '<span>$1</span>');
};

var renderHighlight = function (str, language) {
  if (!(language && hljs.getLanguage(language))) {
    return '';
  }

  try {
    return replaceDelimiters(hljs.highlight(str, { language }).value);
  } catch (err) { }
};

var markdown = require('markdown-it')({
  html: true,
  breaks: true,
  highlight: renderHighlight,
}).use(anchor, {
  level: 2,
  slugify: string => string.toLocaleLowerCase().trim().split(' ').join('-'),
  permalink: true,
  permalinkClass: 'anchor',
  permalinkSymbol: '#',
  permalinkBefore: false,
})
// .use(anchorto, {
//   level: 2, listType: 'ul',
//   slugify: string => string.toLocaleLowerCase().trim().split(' ').join('-'),
//   listClass: 'authoraa'
// });


markdown.core.ruler.push('render', ({ tokens }) => {
  let cn, template, script, style, scopedStyle, code, sourceCode;
  tokens.forEach(token => {
    if (token.type === 'html_block') {
      if (token.content.match(cnReg)) {
        cn = getDomHtml(token.content, 'cn');
        token.content = ''
      }
      /* if (token.content.match(usReg)) {
           us = getDomHtml(token.content, 'us');
           token.content = '';
         } */
    }
    if (token.info === 'vue') {
      sourceCode = token.content;
      code = '````html\n' + token.content + '````';
      template = getDomHtml(token.content, 'template');
      script = getDomHtml(token.content, 'script');
      style = getDomHtml(token.content, 'style');
      scopedStyle = getDomHtml(token.content, 'style', true);
      token.content = '';
      token.type = 'html_block';
    }
  });
  if (template) {
    // let data = { html: template, script, style,  cn, sourceCode, };

    let source_code = markdown.utils.escapeHtml(JSON.stringify(sourceCode));

    const codeHtml = code ? markdown.render(code) : '';

    const cnHtml = cn ? markdown.render(cn) : '';

    let newContent = `
    <template>
      <demo :source-code="${source_code}">
        <template slot="component">${template}</template>
        <template slot="description">${cnHtml}</template>
        <template slot="code">${codeHtml}</template>
      </demo>
    </template>`;
    newContent += script ? `<script>${script || ''}</script>` : '';
    newContent += style ? `<style>${style || ''}</style>` : '';

    newContent += scopedStyle ? `<style scoped lang="less">${scopedStyle || ''}</style>` : '';
    const tk = new Token('html_block', '', 0);
    tk.content = newContent;
    tokens.push(tk);
  }
});


module.exports = Object.assign(markdown, {
  raw: true,
  wrapper: 'div'
})