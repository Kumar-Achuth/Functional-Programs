var readline=require('readline');
var utility=require('/home/bridgeit/Documents/kumar/utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function harmonic()
{
read.question("Enter N value: ", function(nthval)
{
    utility.harmonic(nthval);
    read.close();
});

}
harmonic();
