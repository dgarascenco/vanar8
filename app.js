const fs = require('fs')

 async function readFromFile(path) {
    const data = await fs.readFileSync( path )
    return JSON.parse(data)
}

async function getData(path, propertyName) {

    let data = await readFromFile(path)
    if (data.hasOwnProperty(propertyName)) {
        return data[propertyName]
    }
}

async function printValue(path, value) {
    console.log(await getData(path, value));
}

printValue('./data.json','dummy')
printValue('./data.json','inexistent')
