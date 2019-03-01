#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Troy Connor  /'),
  handle: chalk.cyan('troy0820'),
  work: chalk.white('Cloud Software Engineer Leader at Cloudreach'),
  twitter: chalk.cyan('https://twitter.com/troy0820'),
  github: chalk.cyan('https://github.com/troy0820'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/troyconnor/'),
  web: chalk.cyan('https://troy0820.dev'),
  npx: chalk.white('npx troy0820'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.cyanBright(boxen(output, options)))
