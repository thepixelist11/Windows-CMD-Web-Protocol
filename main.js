const { exec } = require('child_process')
const readline = require('readline')
const bcrypt = require('bcrypt')
// Get args
const allArgs = process.argv
const args = []

// ------ OPTIONS
const usePW = false
const activateWithoutValidation = false // HIGHLY RECOMMENDED TO LEAVE FALSE
const passwordHash = '$2b$10$Je6.v5kpiuSFOfbKbvc8buc/.bq.drV8XcwAMH5yrCA3mfbPrs0S6' // cmdpw1 by default. Can be changed by running the generate hash pass function with the new password in it. Put the new hash here.


for (let i = 2; i < allArgs.length; i++) {
  args.push(allArgs[i])
}
let command = args.join(' ')
command = parseUrl(command)
command = command.split(' and ').join(' & ')
// Check if user is running as admin
let admin
exec('whoami /groups | find "S-1-5-32-544"', (error, stdout, stderr) => {
  if (stderr) {
    admin = false
  } else {
    admin = true
  }
})
// Validate and run command
if (!usePW && !activateWithoutValidation) {
  input(
    `Are you sure you want to run '${command}' as a${admin ? 'n administrator' : ' standard user'} from directory ${__dirname}? (y/n - Default is n) `,
    ans => {
      if (ans.toLowerCase() === 'y') {
        callCmd(command)
      }
    }
  )
} else if(!activateWithoutValidation) {
  input(
    `Are you sure you want to run '${command}' as a${
      admin ? 'n administrator' : ' standard user'
    } from directory ${__dirname}? (Enter password. You only have one chance.) `,
    ans => {
      bcrypt.compare(ans, passwordHash, (err, result) => {
        if (err) {
          console.error('Error comparing passwords:', err)
        } else {
          if (result === true) {
            callCmd(command)
          } else {
            console.log('Password is invalid')
          }
        }
      })
    }
  )
} else {
  callCmd(command)
}
function callCmd(cmd) {
  exec(cmd, (error, stdout, stderr) => {
    console.log(stdout)
  })
}
function input(question, callbackfn) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  rl.question(question, answer => {
    if (callbackfn !== null && callbackfn !== undefined) {
      callbackfn(answer)
    } else {
      console.log(answer)
    }
    rl.close()
  })
}
function parseUrl(url) {
  if(url[url.length - 1] === '/'){
    url = url.substring(0, url.length - 1)
  }
  let ret = decodeURIComponent(url.match(new RegExp('cmd://(.*)'))[1])
  return ret
}
