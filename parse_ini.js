module.exports = function parseIni(content) {
  const lines = content.split("\n")
  let tab = new Array()
  let del = new Array()
  const regex = /^\w+.*/gm;

  for (let elt of lines){
    if (regex.test(elt)){
      elt = elt.replace(/\r/, "")
      elt = elt.replace(/ /g, "")
      tab.push(elt)
    }
  }

  for (occ of tab){
    del.push(occ.split("="))
  }

  // object
  let obj = new Object()
  let t
  let u

  for (let i = 0; i < del.length; i++){
    t = del[i][0]
    u = del[i][1]

    if(t.indexOf("\r")){
      t = t.replace("\r","");

    }

    if(u.indexOf("\r")){
      u = u.replace("\r","");
      u = u.replace(/\"/g,"");
    }

    obj[t] = u

  }

  return obj
}
