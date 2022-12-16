import fs from 'fs'
import skel2Json from 'skel2json_v4';

const args = process.argv;
if(process.argc !== 2) {
    console.log("Usage:")
    console.log("node ./index.js <path_to_skel_file>")
    console.log("e.g node ./index.js ./c100_00.skel")
}
var fileName = args[1]
var result = skel2Json(fs.readFileSync(fileName))
console.log("successfully read skel! writing to json")
fs.writeFileSync(fileName + "-skel2json.json", JSON.stringify(result, null, 4))