var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/utility/utility.js')
function array(){
    var row = prompt('Enter no of rows : ');
    utility.array(row);
}
array();