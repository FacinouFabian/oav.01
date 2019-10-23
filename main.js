const path = require("path")
const fs = require("fs")
const ini = require("./parse_ini")
const env = require("./parse_env")
let args =  process.argv.slice(2)
let fileExt

// check if there is a file as parameter
if (args.length != 1 ){
    console.log("usage: node main.js <CONFIG_FILENAME>")
    process.exit(0)
}

// file
const filename = args[0]

// if the file does not exists print a msg
if (!fs.existsSync(filename)){
    console.log(`The file ${filename} does not exists`)
    process.exit(-1)
}

//Step 1: check file extension
    // if file extension is .ini
    if (path.extname(filename) === ".ini"){
        fileExt = ".ini"
    }
    // if file extension is .env
    else if (path.extname(filename) === ""){
        fileExt = ".env"
    }
    //console.log(args)

//Step 2: Read the file
const content = fs.readFileSync(filename, 'utf-8')
//console.log(content)
if (fileExt === ".ini"){
    // parse .ini
    console.log(fileExt)
    console.log(ini(content))
    file = makeFileName(filename)
    // create a new .json file and write the content
    fs.writeFile(file, JSON.stringify(ini(content)), function (err) {
      if (err) throw err;
      console.log(`Created ${file} and saved content!`);
    });
}
else if (fileExt === ".env"){
    // parse .env
    console.log(fileExt)
    console.log(env(content))
    file = makeFileName(filename)
    // create a new .json file and write the content
    fs.writeFile(file, JSON.stringify(env(content)), function (err) {
      if (err) throw err;
      console.log(`Created ${file} and saved content!`);
    });
}

//******************custom functions*********************//
  // filename with format name.YearMonthDayHourMinutesSeconds.json
  function makeFileName(filename){
    date = new Date()
    year = date.getFullYear().toString()
    month = date.getMonth()+1
    month = month.toString()
    day = date.getDate().toString()
    hours = date.getHours().toString()
    minutes = date.getMinutes().toString()
    seconds = date.getSeconds().toString()
    fileFormat = filename+'.'+year+month+day+hours+minutes+seconds+'.json'
    return fileFormat
  }
