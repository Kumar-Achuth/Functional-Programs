module.exports=
{
    hello : function(name)
    {
        if(name.length<3)
        console.log('Minimum Characters should be 3');
        else
        console.log("Hey " + name + "!How are You");
    },
    leap : function(year)
    {
        if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) 
        {
            console.log(' A Leap year');
        }
    
    else{
        console.log(' Not a leap year ')
    }
},
power : function(nvalue)
{
    var m = nvalue;
    for( j = 0; j<=m; j++)
   {
        var num = Math.pow(2 ,j) ;
        console.log('Values of 2 Power ' +j+'  is  '+num);
}
},
harmonic : function(nthval)
{
    var sum=0;
    for(var i=1; i<=nthval; i++)
    {
         sum = sum + 1/i;
    }
    console.log('the value is ' + sum);
},
factors : function(number)
{
    for (var i = 2; i <= number; i++)
     {
 
        while (number % i == 0) 
        {
            console.log(i + " ");// print value of i 
            number = number / i; // number is changed and agin run loop
        }
    }
if(number<1)
    console.log(number);
},
coinflip : function(cflip)
{
    var ans = 0 ;
    var count = 0;
    for ( var  i =1; i<=cflip; i++)
    {
        ans = Math.random()
        if(ans < 0.5)
        {
            count++;
        }
        var tp = (count/cflip)*100;
        var hp =100 - (tp);

    }
    console.log(tp);
    console.log(hp);
}  ,
poker : function(dstake, dgoal,dtimes)
{
    var bet = 0;
    var wins = 0;
    
    for (var i =1; i<= dtimes; i++)
    {
        var money = dstake;
        while(money > 0 && money < dgoal )
        {
            bet++;
            if(Math.random() < 0.5 )
            money++;  // wining
            else
            money--;  // losing
         }
        if(money == dgoal) // Goal reached 
            wins++;  // winning streak
    }
    console.log('He has won ' +wins+ ' of ' +dtimes);
    var winper = 100 * (wins/dtimes) ;
    var losper = 100 - (winper); 
    console.log('Number of bets are  ' +bet);
    console.log('Percentage of wins is ' + winper);
    console.log('Percentage of loss is ' + losper);
},
quad : function(a,b,c)
{
    var x;
    var answer = (b*b)-(4*a*c); 
    console.log('The vale of delta is ' + answer);
    if(answer < 0)
    {
        var root1 = -b/(2 *a);
        var root2 = Math.sqrt(-(answer))/(2*a);
        console.log('The value of first root  is : ' +root1);
    console.log('The value of second root is : ' +root2);
    }
   else if (answer > 0)
   {
    var root1  = ((-b) + Math.sqrt(answer))/(2*a);
    var root2 = ((-b) - Math.sqrt(answer))/(2*a);
    /* x = Number(root1);

    var result1 = (a*x*x) + (b*x) + (c);
    x =Number(root2);
    var res= (a*x*x) + (b*x) + (c);
    */
    console.log('The value of first root  is : ' +root1);
    console.log('The value of second root is : ' +root2);
}
else
{
    root1 = root2 = -b/(2*a);
    console.log('The value of first root  is : ' +root1);
    console.log('The value of second root is : ' +root2);
}
},
euclidean  : function(x,y)
{
    var distance;
    distance = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
    console.log('Distance from the origin between x and y is : ' + distance);
},
windchill : function(temp, wspeed)
{
if(temp<50 && wspeed>3 && wspeed<120)
{
    var wpower = Math.pow(wspeed,0.16);
    var windpower = 35.75 + 0.6215*temp +(0.4275*temp - 35.75 )*(wpower);
    console.log('The Windspeed according to the National Weather services is ' +windpower);
}
else
{
console.log('The values are not in the range ');
}
},
coupon : function(minimum, maximum, number)
{
var arr = [];
for(var i = 0; i <= number; i++)
{
    arr.push(Math.floor(Math.random(minimum,maximum)*100));
}
for( var i = 0; i<= arr.length; i++)
{
if(arr[i] == arr[i+1]){
    arr.pop(arr[i+1]);
}
}
for(var j= 0; j<arr.length; j++)
{
    console.log("Distinct random numbers are :", +arr[j]);
}
},
getcurrentTime : function()
{
    var d = new Date();
    var n = d.getTime();
    return n;
},
getelapsedTime : function(startTime, stopTime)
{
    var elapsed = (stopTime-startTime)/1000;
    return elapsed;
},
array : function(row)
{
    var prompt = require('prompt-sync')();
    var arr = new Array(row)
    var column = prompt('Enter the column : ');
    for(var i =0; i< row; i++)
    {
        arr[i] = new Array(column);
        for(var j =0; j < column; j++)
        {
            arr[i][j] = prompt('Enter element : ');
        }
    }
    console.log(arr);
},

sumofthree : function(row){
    var prompt = require('prompt-sync')();
    var arr = new Array(row);
    var count = 0;
    var arr1 = new Array();
    var res = '';
    for(var i = 0; i<row; i++)
    {
        arr[i]=prompt('Enter the elements : ');
    }
    console.log(arr);

    for(var i=0; i<arr.length; i++)
    {
    
        for (var j=i+1; j<arr.length; j++)
        {
            for(var k=j+1; k<arr.length; k++)
            {
        var sum = Number(arr[i]) + Number(arr[j]) + Number(arr[k]);
        if(sum == 0)
        {
            count++;
            arr1.push(arr[i] + ' , ' + arr[j] + ' , ' + arr[k] + ' ') ;        
        }
    }
}
    }
     function dup(arr)
     {
            var uniquearray = [];
            for(var i=0;i<arr.length;i++)
            {
                if(uniquearray.indexOf(arr[i])==-1)
            {
                uniquearray.push(arr[i]);
            }
        }
            return uniquearray;
        }
        console.log(dup(arr1));
        console.log(dup(arr1).length);
        },
        permutation : function(string)
        {
            var permute = [];
            permutate(string, [])
            console.log(permute)

            function permutate(string,arr)
            {
                if(typeof(string) == 'string')
                string = string.split('');
                if(string.length == 0)
                permute.push(arr.join(''))

                for(var i = 0; i<string.length; i++)
                {
                var x= string.splice(i,1)
                arr.push(x)
                permutate(string,arr)
                arr.pop();
                string.splice(i,0,x)
            }
        }
    },
}
     


    
