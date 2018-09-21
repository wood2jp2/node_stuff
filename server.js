const 
    express = require('express'),
    app = express(),
    fetch = require('node-fetch'),
    chalk = require("chalk"),
    progressBar = require('progress'),
    readline = require('readline'),
    inquirer = require('inquirer'),
    port = 8080
;

// This is not necessarily required apparently
// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
// })
// inquirer.prompt('what is your name')

const bar = new progressBar(':bar', { total: 10 })
const timer = setInterval(() => {
    bar.tick()
    if (bar.complete) {
    clearInterval(timer)
    }
}, 100)

app.get('/', (req, res) => {
    console.log(chalk.blue("This is the home page."))
    inquirer.prompt('What is your name?')
    res.send(chalk.blue("This is the home page."))
})

app.get('/joshPage', (req, res) => {
    // fetch("http://pokeapi.co/api/v2/berry-firmness/2/")
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    res.send("This is Josh's page")
})

app.listen(port, () => console.log(`Server running at ${port}`))



// process.argv is an array of the command line arguments. 
// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`)
// })

// readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
//     readline.question(`What's your name?`, (name) => {
//         console.log(`Hi ${name}!`)
//         readline.close()
//     })