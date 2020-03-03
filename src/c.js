import program from 'commander'

import { helper } from './helper'

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza')

program.parse(process.argv)

if (program.debug) {
  console.log(program.opts())
}
console.log('pizza details:', helper())

if (program.small) {
  console.log('- small pizza size')
}
if (program.pizzaType) {
  console.log(`- ${program.pizzaType}`)
}
