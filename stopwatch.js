var readline = require("readline")
var utility = require('/home/bridgeit/Documents/kumar/utility/utility.js')
var startTime = 0;
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
function stopwatch()
{
    read.question(' Enter 1 to start : ', function(start)
{
    if(start == 1)
    {
       startTime =  utility.getcurrentTime();
        read.question("Enter 0 to end : ", function(stop)
        {
            if(stop == 0)
            {
       var stopTime =  utility.getcurrentTime();
       var res = utility.getelapsedTime(startTime,stopTime)
        console.log('Elapsed time is : ' +res+ ' seconds ');
        read.close();
    }
        else 
            {
                console.log('Invalid Number, Please Enter valid number ')
                read.close();
            }
    });
    }
    else
    {
        console.log("Please enter valid number to start the stopwatch !")
    }
});
}
stopwatch();