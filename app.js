//                             ASSIGNMENT 31 TO 34
//                                 QUESTION 1

// var date = new Date()
// console.log(date)

//                                 QUESTION 2

// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"];

// var d = new Date();
// document.write("<h2>The current month is " + monthNames[d.getMonth()]);

//                                 QUESTION 3

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// date = new Date()
//  day = date.getDay();
// console.log(dayNames[day])
//                                 QUESTION 4

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// date = new Date()
// day = date.getDay()

// if (date === dayNames[0,6]){
// alert("Its Fun Day")
// }
// else{
//     alert("Its busy Day")
// }
// console.log(dayNames[day])

//                                 QUESTION 5

// date = new Date()
// today = date.getDate()

// if(today <= 15){
//     alert("This is starting fifteen days")
// }
// else {
//     alert("These are last days")
// }
// console.log(today)

//                                 QUESTION 6

// date = new Date();
//  mili = date.getTime()
//  min = mili / 1000 * 60 * 60  

//  document.write("<h2>Date: "+ date+ "<br/>Elapsed miliseconds from 1970: "+mili+"<br/>Elapsed Minutes from 1970: "+min)

//                                 QUESTION 7


// var today = new Date();
// time = today.getHours()
// if (time < 12){
//     alert("Its AM")
// }
// else{
//     alert("Its PM")

// }
// console.log(time)

//                                 QUESTION 8

// var date = new Date() ;
// laterDate = date.getDate() -1

// console.log(date)


//                                 QUESTION 9


// var ramadan = new Date("14 May 2021").getTime();
// var dayPass = (ramadan / (1000 * 60 *60 *24)/365)-new Date().getDay();
// dayPass= Math.floor(dayPass);

// document.write("<h2><div>"+dayPass+" days have passed since 1st Ramadan , 2021"+ "</div>");

//                                 QUESTION 10

// var current = new Date();
// var currentDate2021 = current.getTime()/1000;
// var beginYear2021=new Date("01 January 2021").getTime()/1000;
// document.write("<div>","On reference date "+current+ "</div>");
// document.write("<div>"+ (currentDate2021 - beginYear2021) + " seconds passed since the begining of 2021"+"</div>");

//                                 QUESTION 11


// var current = new Date();
// document.write("<div>","Current Date "+current+ "</div>");
// current.setHours(current.getHours()-1);
// document.write("<div>","1 hour ago, it was "+current+ "</div>");

//                                 QUESTION 12

// var current = new Date();
// document.write("<div>","Current Year "+current+ "</div>");
// current.setFullYear(current.getFullYear()-100);
// document.write("<div>","100 years ago, it was "+current+ "</div>");

//                                 QUESTION 13

// var user = +prompt("Enter Your Age");
// var abc = new Date().getFullYear();
// var x = abc-user;
// document.write("<div>","Your age is "+user+ "</div>");
// document.write("<div>","Your birth year is "+x+ "</div>");

//                                QUESTION 14
// var cust = "ABC";
// var month= "February";
// var unitUse= 410;
// var chargeUnit=16;
// var surCharge = 350;
// var netAmount = unitUse * chargeUnit;
// var grossAmount = netAmount + surCharge;

// document.write("<h1>","K-Electric Bill "+ "</h1>");
// document.write("<div>","Customer Name : "+cust+ "</div>");
// document.write("<div>","Month : "+month+ "</div>");
// document.write("<div>","Number of Units : "+unitUse+ "</div>");
// document.write("<div>","Charges per unit : "+chargeUnit+ "</div>");
// document.write("<div>"+"  "+"</div>");
// document.write("<div>","Net Amount Payble (within Due Date) : "+netAmount+ "</div>");
// document.write("<div>"+"Late payment surcharge : "+surCharge+"</div>");
// document.write("<div>","Gross Amount Payble (after Due Date) : "+grossAmount+ "</div>");