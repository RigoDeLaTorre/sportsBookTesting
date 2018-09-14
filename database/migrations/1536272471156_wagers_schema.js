'use strict'

const Schema = use('Schema')

class WagersSchema extends Schema {
  up () {
    this.create('wagers', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('wager_id', 254).notNullable()
      table.string('wager_details', 254).notNullable()
      table.string('wager_teamChosen', 254).notNullable()
      table.string('wager_type', 254).notNullable()
      table.string('wager_juice', 254).notNullable()
      table.string('wager_line', 254).notNullable()
      table.string('wager_matchTime', 254).notNullable()
      table.string('wager_risk', 254).notNullable()
      table.string('wager_win', 254).notNullable()
      table.string('wager_result', 254).notNullable()





      table.timestamps()
    })
  }

  down () {
    this.drop('wagers')
  }
}

module.exports = WagersSchema
