<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <h1>Chapter1:Alerts</h1>
    <h3>Question1</h3>
    <script>
        alert("Hello! welcome to website name");
    </script>
    <h3>Question2</h3>
    <script>
        alert("Error! Please enter a valid password");
    </script>
    <h3>Question3</h3>
    <script>
        alert("Welcome to js Land...\nHappy Coding!");
    </script>
    <h3>Question4</h3>
    <script>
        alert("Welcome to js Land...");
        alert("Happy Coding!");
    </script>
    <h3>Question5</h3>
    <script>
        //Go into the browser console and type this,
        alert("Hello... I can run my JS through web browser console");
    </script>
    <h3>Question6</h3>
    <script>
        alert("Hi, welcome to my web");
    </script>
    <h3>Question7</h3>
    <script>
        //sir its easy to define script tag in head,body(before html),body(inside html),body(after html) but u mention in assignment to create one app.js file that's why its not possible.
    </script>
    <h1>Chapter2:Variables for Strings</h1>
    <h3>Question1</h3>
    <script>
        var username;
    </script>
    <h3>Question2</h3>
    <script>
        var myName="Muhammad Haseeb";
    </script>
    <h3>Question3</h3>
    <script>
        var message;
        message="Hello World";
        alert(message);
    </script>
    <h3>Question4</h3>
    <script>
        var name="Haseeb";
        var age="20";
        var certification="Web and Mobile Hybrid app development";
        alert(name);
        alert(age+" years old");
        alert(certification);
    </script>
    <h3>Question5</h3>
    <script>
        word="PIZZA";
        alert(word+"\n"+word.substring(0,4)+"\n"+word.substring(0,3)+"\n"+word.substring(0,2)+"\n"+word.substring(0,1));
    </script>
    <h3>Question6</h3>
    <script>
        var email="m.haseeb5678@gmail.com";
        alert("My email address is "+email)
    </script>
    <h3>Question7</h3>
    <script>
        var book="A smarter way to learn JavaScript";
        alert("book");
    </script>
    <h3>Question8</h3>
    <script>
        document.write("Yah! I can write HTML content Through JavaScript");
    </script>
    <h3>Question9</h3>
    <script>
        var strng= "▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
        alert(strng);
        document.write(strng);
    </script>
    <h1>Chapter3:Variables for Numbers</h1>
    <h3>Question1</h3>
    <script>
        var age;
        age=20;
        alert("I am "+age+" years old");
    </script>
    <h3>Question2</h3>
    <script>
        var visits=26;
        alert("You have visited this site "+visits+" times");
    </script>
    <h3>Question3</h3>
    <script>
        var birthYear;
        birthYear=2000;
        document.write("hello");
        document.write("My birth year is "+birthYear+"\nData type of my declared variable is "+typeof(birthYear));
    </script>
    <h3>Question4</h3>
    <script>
        uname="Haseeb";
        title="Jean";
        quantity=7;
        document.write(uname+" ordered "+quantity+" "+title+"(s) on ABC Clothing store");
    </script>
    <h1>Chapter4:Variable Names Legal and Illegal</h1>
    <h3>Question1</h3>
    <script>
        var fname,mname,lname;
    </script>
    <h3>Question2</h3>
    <script>
        //Legal Varibale names
        var name,email,fname,dob,contact;
        //Illegal Variable names
        //var my name,abc+123,String,123abc,_hello;
    </script>
    <h3>Question3</h3>
    <h3>Rules for naming JS variables</h3>
    <script>
        document.write("Variable names  can only contain , numbers , $ and _ . For example:$my_1stVariable<br>");
        document.write("Variable must begin with a letter, $ or _ . For example : $name, _name or name<br>");
        document.write("Variable names are case sensitive<br>");
        document.write("Variable names should not be JS keywords");
    </script>
    <h1>Chapter5:Math expressions</h1>
    <h3>Question1</h3>
    <script>
        num1=4;
        num2=7;
        sum=num1+num2;
        document.write("Sum of "+num1+" and "+num2+" is "+sum);
    </script>
    <h3>Question2</h3>
    <script>
        num1=4;
        num2=7;
        sub=num1-num2;
        document.write("Subtraction of "+num1+" and "+num2+" is "+sub+"<br>");
        mul=num1*num2;
        document.write("Multiplication of "+num1+" and "+num2+" is "+mul+"<br>");
        div=num1/num2;
        document.write("Division of "+num1+" and "+num2+" is "+div+"<br>");
        mod=num1%num2;
        document.write("Modulus of "+num1+" and "+num2+" is "+mod+"<br>");
    </script>
    <h3>Question3</h3>
    <script>
        var num;
        document.write("Value after varialbe declaration is: "+num+"<br>");
        num=20;
        document.write("Initial Value: "+num+"<br>");
        num=num+1;
        document.write("Value after increment is: "+num+"<br>");
        num=num+7;
        document.write("Value after addition is: "+num+"<br>");
        num=num-1;
        document.write("Value after decrement is: "+num+"<br>");
        num=num/3;
        document.write("The remainder is: "+num);
    </script>
    <h3>Question4</h3>
    <script>
        var ticketCost=600;
        numberOfTickets=5;
        fiveTicketsCost=ticketCost*numberOfTickets;
        document.write("Total cost to buy "+numberOfTickets+" tickets to a movie is "+fiveTicketsCost+"PKR");
    </script>
    <h3>Question5</h3>
    <script>
        table=7;
        document.write("Table of "+table);
        document.write("<br>"+table+" x 1 = "+table*1+"<br>"+table+" x 2 = "+table*2+"<br>"+table+" x 3 = "+table*3+"<br>"+table+" x 4 = "+table*4+"<br>"+table+" x 5 = "+table*5+"<br>"+table+" x 6 = "+table*6+"<br>"+table+" x 7 = "+table*7+"<br>"+table+" x 8 = "+table*8+"<br>"+table+" x 9 = "+table*9+"<br>"+table+" x 10 = "+table*10)
    </script>
    <h3>Question6</h3>
    <script>
        var celsiusTemp=30;
        var fahrenheit=(celsiusTemp*9/5)+32;
        document.write(celsiusTemp+"C is "+fahrenheit+"F");
        var ftemp=70;
        var ctemp=(ftemp-32)*5/9;
        document.write("<br>"+ftemp+"F is "+ctemp+"C");
    </script>
    <h3>Question7</h3>
    <script>
        var item1price=800,item2price=600,item1quantity=2,item2quantity=4,shippingCharges=300;
        document.write("Price of item 1 is "+item1price+"<br>Quantity of item 1 is "+item1quantity+"<br>Price of item 2 is "+item2price+"<br>Quantity of item 2 is "+item2quantity+"<br>Shipping Charges"+shippingCharges+"<br>");
        Tcost=(item1price*item1quantity)+(item2price*item2quantity)+shippingCharges;
        document.write("<br>Total cost of yout order is "+Tcost);
    </script>
    <h3>Question8</h3>
    <script>
        var tMarks=1100;
        var oMarks=989;
        percentage=oMarks/tMarks*100;
        document.write("Total Marks: "+tMarks+"<br>Marks obtained: "+oMarks+"<br>Percentage: "+percentage+"%");
    </script>
    <h3>Question9</h3>
    <script>
        var USDollars=10,SaudiRiyals=25,dollarExchangeRate=104.80,riyalExchangeRate=28;
        totalinPKR=(USDollars*dollarExchangeRate)+(SaudiRiyals*riyalExchangeRate);
        document.write("Total Currency in PKR: "+totalinPKR);
    </script>
    <h3>Question10</h3>
    <script>
        var anyNum=9;
        calculations=((anyNum+5)*10)/2;
        document.write(calculations);
    </script>
    <h3>Question11</h3>
    <script>
        var CurrentYear=2020,BirthYear=2000;
        age1=CurrentYear-BirthYear;
        age2=age1-1;
        document.write("Current Year: "+CurrentYear+"<br>Birth Year: "+BirthYear+"<br>2 Possible ages: "+age1+", "+age2);
    </script>
    <h3>Question12</h3>
    <script>
        var radius=30;
        var circumference=2*3.142*30;
        var area=3.142*radius*radius;
        document.write("Radius of a circle: "+radius+"<br>The circumference is: "+circumference+"<br>The area is: "+area);
    </script>
    <h3>Question13</h3>
    <script>
        favSnack="Lays";
        currAge=20;
        maxAge=70;
        amountPerDay=2;
        totalEat=((maxAge-currAge)*365)*amountPerDay;
        document.write("You will need "+totalEat+" to last you until the ripe old age of "+maxAge);
    </script>
    <h1>Chapter6-9:Math expressions</h1>
    <h3>Question1</h3>
    <script>
        var number=21;
        document.write("Result:<br>The value of is: "+number+"<br>...............................<br>");
        document.write("<br>The value of ++a is: "+(++number));
        document.write("<br>Now the value of a is: "+number+"<br>");
        document.write("<br>The value of a++ is: "+(number++));
        document.write("<br>Now the value of a is: "+number+"<br>");
        document.write("<br>The value of --a is: "+(--number));
        document.write("<br>Now the value of a is: "+number+"<br>");
        document.write("<br>The value of a-- is: "+(number--));
        document.write("<br>Now the value of a is: "+number+"<br>");
    </script>
    <h3>Question2</h3>
    <script>
        var a = 2, b = 1; 
        var result = --a - --b + ++b + b--;
        document.write("--a(Pre-decrement) --> --a = 1<br>");
        document.write("--b(Pre-decrement) --> --a- --b = 1-0 = 1<br>");
        document.write("++b(Pre-increment) --> --a - --b + ++b = 1-0+1 = 2<br>");
        document.write("b--(Post-decement) --> --a - --b + ++b + b-- = 1-0+1+1 = 3<br>");
        document.write("a is "+a+"<br>");
        document.write("b is "+b+"<br>");
        document.write("Result is "+result+"<br>");
    </script>
    <h3>Question3</h3>
    <script>
        var visitorName = prompt("Your name?", "Enter your name");
        alert("Hi! Welcome "+visitorName);
    </script>
    <h3>Question4</h3>
    <script>
        document.write("Not available in the provided pdf");
    </script>
    <h3>Question5</h3>
    <script>
        var tableOf=parseInt(prompt("Enter number to print table"));
        if(tableOf==null){
            for(var i=1;i<=10;i++){
                tableOf=5;
                document.write("<br>"+tableOf+" * "+i+" = "+(tableOf*i)+"");
            }
        }
        else{
            for(var i=1;i<=10;i++){
                document.write("<br>"+tableOf+" * "+i+" = "+(tableOf*i)+"");
            }
        }
    </script>
    <h3>Question6</h3>
    <script>
        var sub1=prompt("Enter first subject name");
        var sub2=prompt("Enter second subject name");
        var sub3=prompt("Enter third subject name");
        EachSubMarks=100;
        var marks1=parseFloat(prompt("Enter "+sub1+" marks"));
        var marks2=parseFloat(prompt("Enter "+sub2+" marks"));
        var marks3=parseFloat(prompt("Enter "+sub3+" marks"));
        document.write("Subject|Total Marks|Obtained Marks|Percentage<br>");
        document.write(sub1+" | "+EachSubMarks+" | "+marks1+" | "+(marks1/EachSubMarks*100)+"%<br>");
        document.write(sub2+" | "+EachSubMarks+" | "+marks2+" | "+(marks2/EachSubMarks*100)+"%<br>");
        document.write(sub3+" | "+EachSubMarks+" | "+marks3+" | "+(marks3/EachSubMarks*100)+"%<br>");
    </script><h3>Question7</h3>
    <script>
        document.write("Not available in the provided pdf");
    </script>
    <h1>Chapter9-11:User Input & Conditional Statement</h1>
    <h3>Question1</h3>
    <script>
        var city=prompt("Enter city name");
        if(city==="karachi"){
            alert("Welcome to city of lights");
        }
    </script>
    <h3>Question2</h3>
    <script>
        var gender=prompt("Enter your gender");
        if(gender==="male"){
            alert("Good Morning Sir");
        }
        else{
            alert("Good Morning Ma'am");
        }
    </script>
    <h3>Question3</h3>
    <script>
        var signal=prompt("Road Signal Color?");
        if(signal==="red"){
            alert("Must stop");
        }
        else if(signal==="yellow"){
            alert("Ready to move");
        }
        else if(signal==="green"){
            alert("Move now");
        }
        else{
            alert("You entered wrong");
        }
    </script>
    <h3>Question4</h3>
    <script>
        var fuel=prompt("Remaining fuel in Car?");
        if(parseFloat(fuel)<0.25){
            alert("Please refill the fuel in your car");
        }
    </script>
    <h3>Question5</h3>
    <script>
        var a = 4;
        if (++a === 5){ 
            alert("given condition for variable a is true"); 
        }
        var b = 82;
        if (b++ === 83){ 
            alert("given condition for variable b is true"); 
        } 
        var c = 12; 
        if (c++ === 13){ 
            alert("condition 1 is true"); 
        } 
        if (c === 13){ 
            alert("condition 2 is true"); 
        } 
        if (++c < 14){ 
            alert("condition 3 is true"); 
        } 
        if(c === 14){ 
            alert("condition 4 is true"); 
        }
        var materialCost = 20000;
        var laborCost = 2000; 
        var totalCost = materialCost + laborCost; 
        if (totalCost === laborCost + materialCost){ 
            alert("The cost equals"); 
        } 
        if (true){ 
            alert("True"); 
        } 
        if (false){ 
            alert("False"); 
        }
        if("car" < "cat"){ 
            alert("car is smaller than cat"); 
        }
    </script>
    <h3>Question6</h3>
    <script>
        var marks1=parseFloat(prompt("Enter sub1 marks"));
        var marks2=parseFloat(prompt("Enter sub2 marks"));
        var marks3=parseFloat(prompt("Enter sub3 marks"));
        var totalmarks=parseFloat(prompt("Enter Total marks"));
        var per=((marks1+marks2+marks3)/totalmarks)*100;
        document.write("Percentege: "+per+"<br>");
        var marksobtained,grade,remarks;
        document.write("Total Marks|Marks Obtained|Percentage|Grade|Remarks<br>")
        if(per>=80){
            marksobtained=marks1+marks2+marks3;
            grade="A-one";
            remarks="Excellent";
            document.write(totalmarks+"|"+marksobtained+"|"+per+"|"+grade+"|"+remarks+"<br>");
        }
        else if(per>=70){
            marksobtained=marks1+marks2+marks3;
            grade="A";
            remarks="Good";
            document.write(totalmarks+"|"+marksobtained+"|"+per+"|"+grade+"|"+remarks+"<br>");
        }
        else if(per>=80){
            marksobtained=marks1+marks2+marks3;
            grade="B";
            remarks="You need to improve";
            document.write(totalmarks+"|"+marksobtained+"|"+per+"|"+grade+"|"+remarks+"<br>");
        }
        else{
            marksobtained=marks1+marks2+marks3;
            grade="F";
            remarks="Sorry";
            document.write(totalmarks+"|"+marksobtained+"|"+per+"|"+grade+"|"+remarks+"<br>");
        }
    </script>
    <h3>Question7</h3>
    <script>
    </script>
    <h3>Question8</h3>
    <script>
    </script>
    <h3>Question9</h3>
    <script>
    </script>
    <h3>Question10</h3>
    <script>
    </script>
    <h3>Question11</h3>
    <script>
    </script>
</body>
</html>