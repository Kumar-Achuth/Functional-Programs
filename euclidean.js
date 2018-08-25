var readline =require('readline');
var utility = require('/home/bridgeit/Documents/kumar/utility/utility.js')
var read= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function euclidean()
{
    read.question('Enter the value of x : ', function(x)
{
    read.question('Enter the value of y : ', function(y)
    {
        utility.euclidean(x,y);
        read.close();
    })
})
}
euclidean();



