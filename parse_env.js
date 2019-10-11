module.exports = function parseEnv(content){
    const lines = content.split("\n")
    let tab = []
    //const regex = new RegExp('T')
    for (elt of lines){
        if (elt.match(/^([\w]+)=(.+)/g)){
            tab.push(elt)
        }
    }
    return tab
}