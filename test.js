function test(content){
    //const lines = content.split("\n")
    fs = require('fs')
    const content = fs.readFileSync(filename, 'utf-8')
    const regex = RegExp(/^([\w]+) = (.+)/g)
    let matchRegex = false
    //lines.split(/^([\w]+)=(.+)/g)
    if (regex.test(content) === true){
        matchRegex = true
    }else{
        matchRegex = false
    }
    if (matchRegex === true){
        content.split(/^([\w]+) = (.+)/g)
    }
    return content
}

console.log(test(content))