var readline=require('readline');
var utility=require('/home/bridgeit/Documents/kumar/utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function leap()
{
    read.question('Enter 4 digit year', function(year)
    {
        utility.leap(year)
        read.close();
    })
}
leap();