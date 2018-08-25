var readline=require('readline');
var utility=require('/home/bridgeit/Documents/kumar/utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function coinflip()
{
    read.question('Enter the number of times to flip the coin ', function(cflip)
{
    utility.coinflip(cflip)
    read.close();
})
}
coinflip();