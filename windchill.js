var readline = require('readline');
var utility = require('/home/bridgeit/Documents/kumar/utility/utility.js')
var read = readline.createInterface({
    input : process.stdin,
    output:process.stdout
});
function windchill()
{
    read.question('Enter the temperature : ', function(temp)
    {
        read.question('Enter the wind speed : ', function(wspeed)
    {
        utility.windchill(temp, wspeed)
        read.close();
    })
    })
}
windchill();