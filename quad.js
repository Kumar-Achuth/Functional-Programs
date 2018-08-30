var readline = require('readline');
var utility = require('/home/bridgeit/Documents/kumar/utility/utility.js')
var read  = readline.createInterface({
input:process.stdin,
output:process.stdout
});
function quad()
{
    read.question('Enter the value of a : ', function(a)
    {
        read.question('Enter the value of b : ', function(b)
    {
        read.question('Enter the value of c : ', function(c)
    {
        utility.quad(a,b,c)
        read.close();
    })
})
    })
}
quad();

    

