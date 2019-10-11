module.exports = function parseIni(content) {
    const lines = content.split("\n");
    const regex = RegExp(/^([\w]+) = (.+)/g)
    if (regex.test(lines)){
        const lines2 = lines.split(new RegExp(/^([\w]+) = (.+)/g))
        return lines2
    }
}