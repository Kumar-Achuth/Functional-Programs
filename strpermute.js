var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/Documents/kumar/utility/utility.js')
function permutation()
{
var string = prompt('Enter the string')
utility.permutation(string)
}
permutation();