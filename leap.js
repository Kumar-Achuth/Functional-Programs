var readline=require('readline');
var utility=require('/home/bridgeit/Documents/kumar/utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function leap()
{
    read.question('enter the year', function(year)
    {
        utility.leap(year)
        read.close();
    })
}
leap();