const chalk = require('chalk')
const webpack = require('webpack')

let isBuildDoc = process.argv.splice(2).length > 0;
let config = isBuildDoc ? require('./webpack.prod.doc.conf') : require('./webpack.prod.conf');

// spinner.start()
webpack(config, function (err, stats) {
  if (err) throw err
  // spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  if (stats.hasErrors()) {
    console.log(chalk.red('  编译出现错误.\n'))
    process.exit(1)
  }

  console.log(chalk.cyan('  编译完成.\n'))
  process.exit()
})