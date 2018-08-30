var readline = require("readline")
var utility = require('/home/bridgeit/Documents/kumar/utility/utility.js')
var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
function coupon()
{
    read.question('Enter the Minimum Coupon Number ', function(minimum)
    {
        read.question('Enter the Maximum coupon Number ', function(maximum)
    
    {
        utility.coupon(minimum, maximum)
        read.close();
    })
})
    
}
coupon();

