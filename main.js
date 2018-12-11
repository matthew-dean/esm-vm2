// ESM syntax is supported.
const {NodeVM, VMScript} = require('vm2')

const vm = new NodeVM({
  console: 'inherit',
  sandbox: {},
  require: {
    external: true
  }
})

var vmPath = require.resolve('./vm.js')

let vmSandbox = new VMScript(`
  module.exports = require(${vmPath})
`)

module.exports = vm.run(vmSandbox, __filename);
