var readline = require('readline');
var utility = require('/home/bridgeit/Documents/kumar/utility/utility.js')
var read = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
});
function poker(dstake, dgoal, dtimes)
{
    read.question('Enter the Initial Stake', function(dstake)
{
    read.question('Enter the goal to be achieved ', function(dgoal)
{
    read.question('Enter the number of times ', function(dtimes)
{
    utility.poker(dstake,dgoal,dtimes)
    read.close();
})
})
})
}
poker();