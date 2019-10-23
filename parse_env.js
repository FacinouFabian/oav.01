module.exports = function parseEnv(content){
  const lines = content.split("\n")
  let tab = new Array()
  let test = new Array()

  for (elt of lines){
      if (elt.match(/^([\w]+)=(.+)/g)){
          tab.push(elt)
      }
  }

  for (occ of tab){
    test.push(occ.split("="))
  }

  // object
  let obj = new Object()
  let t
  let u

  for (let i = 0; i < test.length; i++){
    t = test[i][0]
    u = test[i][1]

    if(t.indexOf("\r")){
      t = t.replace("\r","");
    }

    if(u.indexOf("\r")){
      u = u.replace("\r","");
    }

    obj[t] = u

  }
    return obj
}
