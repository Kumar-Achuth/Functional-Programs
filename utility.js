const _ = require('lodash')
module.exports=
{
    /**
     * @description :  Program to take the input from the user as the username and print it
     * @param name
     */
    hello : function(name)
    {
        if(name >= 'a' && name <='z' || name >='A' && name <='Z' ) //condition for character only
        {
        if(name.length<3)    // check for the condition if the string length is > than 3
        { 
        console.log('Minimum Characters should be 3');
        }
        else 
        {
        console.log("Hey " + name + "!How are You "); 
        }
    }
    else {
        console.log("please enter valid character")
    }
    },
    /**
     * @description : To veriify whether the Given year is Leap year or not 
     * @param year
     */
    leap : function(year)
    {
            if(year.length >= 4)
            {
            if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0)   // check for the condition for verification of leap year
        {
            console.log(' A Leap year ');
        }
    else  // print that it is not a leap year
    {
        console.log(' Not a leap year ')
    }
}
else 
{
    console.log('Please enter 4 number year')
}
    
},
/**
 * @description : Program to calculate and print all the powers of 2 untill the nth value 
 *               --> Using Math.pow method to calculate the power of base to its exponent 
 * @param nvalue
 */
power : function(nvalue)
{
    for( j = 0; j<=nvalue; j++)    // traverse through the loop untill value of n                
   {
        var num = Math.pow(2 ,j) ;       // generate the powers of 2 untill n     
        console.log('Values of 2 Power ' +j+ '  is  '+num);  
}
},
/**
 * @description : Program to calculate the nth Harmonic value 
 * @param nthval
 */
harmonic : function(nthval)
{
    if(nthval > 0 )
    {
    var sum=0;
    for(var i=1; i<=nthval; i++)                  
    {
         sum = sum + 1/i;     // calculation of harmonic values untill nvalues                     
    }
    console.log('the value is ' + sum);
}
else {
    console.log('Nth value should be greater than 0 ');
}
},
/**
 * @description : To find all the Prime factors of the given number 
 * @param number
 */
factors : function(number)
{
    for (var i = 2; i <= number; i++)  
     {
 
        while (number % i == 0)                    // run untill number is not divisible by 2
        {
            console.log(i + " ");                  // print value of i 
            number = number / i;                   // number is changed and agin run loop
        }
    }
if(number<=1)                              // if user input number is < or = to 1 print the number 
    console.log(number);                                  // print the number
},
/**
 * @description : Program to calculate the head and tail percentage when coin is flipped number of times
 * @param cflip
 */
coinflip : function(cflip)
{
    var ans = 0 ;
    var head = 0;                             // count initialization either for heads or tails 
    for ( var  i =1; i<=cflip; i++)                // run till number of times coin is fliipped
    {
        /**
         * @description : Generate random values untill number of times given by user
         */
        ans = Math.random()                       //generate random values 
        if(ans < 0.5)                             // check for the condition with random values
        {
            head++;                              // increment count
        }
        var tailpercent = (head/cflip)*100;               // tails percentage calcuation
        var headpercent =100 - (tailpercent);                       // heads percentage 
    }
    console.log( 'The tail percentage is ' +tailpercent);
    console.log('The head percentage is ' +headpercent);
}  ,
/**
 * @description : Program to  calculate the winpercentage and loss percentage of a gambler to achieve the goal
 * @param dstake
 * @param dgoal
 * @param dtimes
 */
poker : function(dstake, dgoal, dtimes)
{
    var bet = 0;
    var wins = 0;                                      // initial conditions
    
    for (var i =1; i<= dtimes; i++)                    // play this number of times 
    {
        var money = dstake;
        while(money > 0 && money < dgoal )             // condition to start off the game
        {
            bet++;
            if(Math.random() < 0.5 )                   // random values for winning and losing
            money++;                                   // wining
            else
            money--;                                   // losing
         }
        if(money == dgoal)                             // Goal reached 
            wins++;                                    // winning streak
    }
    console.log('He has won ' +wins+ ' of ' +dtimes);
    var winper = 100 * (wins/dtimes) ;                 //  winpercentage calculation
    var losper = 100 - (winper); 
        console.log('Percentage of wins is ' + winper);
    console.log('Percentage of loss is ' + losper);
},
/**
 * @description : Program to compue the quadratic equation of given variables  
 * @param a 
 * @param b 
 * @param c
 */
quad : function(a,b,c)
{

    var answer = (b*b)-(4*a*c);                       // calculation of delta
    console.log('The vale of delta is ' + answer);
    if(answer < 0)                                    //delta condition check
    {
        var root1 = -b/(2 *a);                        // real part
        var root2 = Math.sqrt(-(answer))/(2*a);       // imaginary part
        console.log('The value of first root  is : ' +root1);
    console.log('The value of second root is : ' +root2);
    }
   else if (answer > 0)                               // when delta is > 0
   {
    var root1  = ((-b) + Math.sqrt(answer))/(2*a);    // real part
    var root2 = ((-b) - Math.sqrt(answer))/(2*a);     //imaginary part 
    
    console.log('The value of first root  is : ' +root1);
    console.log('The value of second root is : ' +root2);
}
else                                                   // when delta is = 0
{
    root1 = root2 = -b/(2*a);                          // both real and imaginary part
    console.log('The value of first root  is : ' +root1);
    console.log('The value of second root is : ' +root2);
}
},
/**
 * @description : Program to find the Euclidean distance from the origin using the formula
 * @param x
 * @param y 
 *              --> Using Math.pow method to find the square of x^2 and y^2
 *              --> Using math.sqrt method to find sqaure root of x^2 and y^2
 */
euclidean  : function(x,y)
{
    var distance;
    /**
     * @description : Formula to calculate the euclidean distance from the origin
     */
    distance = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));  // formula to calculate the euclidean distance of x and y from the origin
    console.log('Distance from the origin between x and y is : ' + distance);
},
/**
 * @description : Program to compute the Windpower according to the given conditions of temperature and windspeed
 * @param temp
 * @param wspeed 
 */
windchill : function(temp, wspeed)
{
if(temp<50 && wspeed>3 && wspeed<120)                   // working condition for temperature and windspeed
{
    var wpower = Math.pow(wspeed,0.16);
    var windpower = 35.75 + 0.6215*temp +(0.4275*temp - 35.75 )*(wpower); // calculation of windpower
    console.log('The Windspeed according to the National Weather services is ' +windpower);
}
else
{
console.log('The values are not in the range ');
}
},
/**
 * @description : Program to Generate the Distinct coupon numbers 
 */
coupon : function(minimum, maximum)       
{
    var randomcoupons = [], i, n;
    for(i= minimum; i<maximum; i++)
    {
        n= _.random(minimum,maximum);
        randomcoupons.push(n);
    }
    console.log(randomcoupons);
    console.log('Number of coupons generated are : '+randomcoupons.length)
    var distinct = new Set(randomcoupons)
    var distarr = []
    distarr = Array.from(distinct)
    console.log(distarr);
    console.log('number of distinct coupons are : '+distarr.length)
},
/**
 * @description : Program to stimulate stopwatch
 * @param : currenttime
 * @param elapsed
 */
getcurrentTime : function()
{
    var currenttime = new Date();    // method to get the current date
    var n = currenttime.getTime();   // method to get the current time in seconds
    return n;
},
getelapsedTime : function(startTime, stopTime)
{
    var elapsed = (stopTime-startTime)/1000;        // calculation of the elapsed time 
    return elapsed;                                 // return the value
},
/**
 * @description : Program to generate a 2D array 
 *              --> Use new Array() metghod to create an empty array with number of rows and columns
 */
array : function(row)
{
    var prompt = require('prompt-sync')();
    var arr = new Array(row)                        // new array creation with number of rows
    var column = prompt('Enter the column : ');     // number of columns inside the rows
    for(var i =0; i< row; i++)
    {
        arr[i] = new Array(column);                 //creation  of the rows with particular coluns
        for(var j =0; j < column; j++)
        {
            arr[i][j] = prompt('Enter element : '); // take input of elements from the user and store in the array
        }
    }
    console.log(arr);                               // print the array
},
/**
 * @description : To calculate the number of triplets that add to 0 inside a array
 */
sumofthree : function(row){
    var prompt = require('prompt-sync')();
    var arr = new Array(row);                       //new array creation with number of rows 
    var count = 0;
    var arr1 = new Array();                         // new empty array creation
    var res = '';
    for(var i = 0; i<row; i++)
    {
        arr[i]=prompt('Enter the elements : ');     // take input of elements from the user and store in the array
    }
    console.log(arr);                               // print the array

    for(var i=0; i<arr.length; i++)                 // start from the ith element
    {
        for (var j=i+1; j<arr.length; j++)          // start from i+1 element
        {
            for(var k=j+1; k<arr.length; k++)       //start from j+1 element
            {
        var sum = Number(arr[i]) + Number(arr[j]) + Number(arr[k]);   // calculation of the sum of the 3 different numbers
        if(sum == 0)                                // check if the sum of 3 numbers is 0
        {   
            count++;   
            console.log('triplets ' +count+ ' ={' +arr[i]+ " , " +arr[j]+ " , " +arr[k]+ '}')                             // increment count 
            arr1.push(arr[i] + ' , ' + arr[j] + ' , ' + arr[k] + ' ') ;   // push into the array created      
        }
    }
}
    }
     function dup(arr)                              // function to check the duplicate condition
     {
            var unique = [];
            for(var i=0;i<arr.length;i++)
            {
                if(unique.indexOf(arr[i])==-1)
            {
                unique.push(arr[i]);
            }
        }
            return unique;
        }
        console.log(dup(arr1));                    // print the array of triplets 
        console.log(dup(arr1).length);  // number of triplets that can be made from the input numbers
        },
        /**
         * @description : To print all the possible string permutations from the given string
         */
        permutation : function(string)
        {
            if(string >= 'a' && string <='z' || string >= 'A' && string <='Z')    // check if the given string is a number or string 
            {
            var permute = [];   
            permutate(string, [])          // call permutate function 
            console.log(permute)

            function permutate(string,arr)
            {
                if(typeof(string) === 'string')
                string = string.split('');
                if(string.length == 0)
                permute.push(arr.join(''))
                for(var i = 0; i<string.length; i++)
                {
                var x= string.splice(i,1)
                arr.push(x)
                permutate(string,arr)      // recursive function run untill loop becomes false
                arr.pop();
                string.splice(i,0,x)
            }
        } 
        }
        else 
        {
            console.log('Please enter only string type')
        }
    },
}

