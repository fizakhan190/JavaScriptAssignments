//Question 1

//var a = 10;
//document.write("Result:<br>");
//document.write("The value of a is: " + a + "<br><br>");
//document.write("The value of ++a is: " + (++a) + "<br>");
//document.write("Now the value of a is: " + a + "<br><br>");
//document.write("The value of a++ is: " + (a++) + "<br>");
//document.write("Now the value of a is: " + a + "<br><br>");
//document.write("The value of --a is: " + (--a) + "<br>");
//document.write("Now the value of a is: " + a + "<br><br>");
//document.write("The value of a-- is: " + (a--) + "<br>");
//document.write("Now the value of a is: " + a);

//Question 2

//var a = 2;
//var b = 1;
//var result = --a - --b + ++b + b--; 
      //       1  -   0  + 1   + 1 = 3
//document.write("a is " + a + "<br>");
//document.write("b is " + b + "<br>");
//document.write("result is " + result);

//Question 3

//var userName = prompt("Enter your name");
//alert("Hello " + userName + "! Welcome");

//Question 4

//var num = prompt("Enter a number", 5);
//for (var i = 1; i <= 10; i++) {
  //  document.write(num + " x " + i + " = " + (num * i) + "<br>");
//}

//Question 5


//var sub1 = prompt("Enter first subject name");
//var sub2 = prompt("Enter second subject name");
//var sub3 = prompt("Enter third subject name");
//var totalMarks = 100;
//var marks1 = Number(prompt("Enter marks for " + sub1));
//var marks2 = Number(prompt("Enter marks for " + sub2));
//var marks3 = Number(prompt("Enter marks for " + sub3));
//var totalObtained = marks1 + marks2 + marks3;
//var total = totalMarks * 3;
//var percentage = (totalObtained / total) * 100;

//document.write("<h1>Marks Sheet</h1>");
//document.write("<table border='1'>");
//document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
//document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + marks1 + "</td><td>" + (marks1 / 100 * 100) + "%</td></tr>");
//document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + marks2 + "</td><td>" + (marks2 / 100 * 100) + "%</td></tr>");
//document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + marks3 + "</td><td>" + (marks3 / 100 * 100) + "%</td></tr>");
//document.write("<tr><td></td><td>" + total + "</td><td>" + totalObtained + "</td><td>" + percentage + "%</td></tr>");
//document.write("</table>");