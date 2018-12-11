// ESM syntax is supported.
const {NodeVM, VMScript} = require('vm2')

const vm = new NodeVM({
  console: 'inherit',
  sandbox: {},
  require: {
    external: true,
    context: 'sandbox'
  }
})

var vmPath = require.resolve('./vm.js')

let vmSandbox = new VMScript(`
  require = require("esm")(module)
  module.exports = require('${vmPath}')
`)

module.exports = vm.run(vmSandbox, __filename);
