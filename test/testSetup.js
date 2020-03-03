import 'raf/polyfill'
import 'whatwg-fetch'

/* eslint no-console: 0 */
console.error = (message) => {
  if (/(Failed propType: )/.test(message)) {
    throw new Error(message)
  }
}

process.on('unhandledRejection', (reason) => {
  throw reason // you should handle all exceptions in tests explixitly
})
