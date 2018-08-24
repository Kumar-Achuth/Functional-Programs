var readline=require('readline');
var utility=require('../utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout   
});
    function power()
    {
        read.question("Enter Power: ", function(nvalue)
        {
            utility.power(nvalue);
            read.close();
        });
    
    }
    power();
 


power();

    
