//                                 Assignment 21 to 25 
//                                     Question 1

// var fname = prompt('Enter first name')
// lname = prompt('Enter second name')
// fullName = fname.toUpperCase() + lname.toUpperCase()
// alert("Heyloo Mr. " + fullName)

//                                     Question 2

// var name = prompt('Enter phone model name')
// document.write("<h2>Your phone model is "+ name+"<br/> Length of strings: "+ name.length)

//                                     Question 3

// var string = 'Pakistani'
// index = string.indexOf("n")

// document.write("<h2> String: Pakistani <br/> Index of 'n': "+ index)

//                                     Question 4

//  var string = "Hello world"
//  index = string.indexOf("l",5)

//  document.write ("<h2> String: Hello World <br/> last index of 'l': "+(index))

//                                     Question 5

// var string = 'Pakistani'
// index = string.charAt(3)

// document.write("<h2> String: Pakistani <br/> Charachter at Index 3: "+ index)

//                                     Question 6

// var fname = prompt('Enter first name')
// lname = prompt('Enter second name')
// fullName = fname.concat(" "+lname )
// Name = fullName.toUpperCase()
// alert("HELLO MR. "+ Name)

//                                     Question 7

// var city = "Hyderabad"
// newName = city.replace("hyder","Islam")

// document.write("<h2>City: "+ city + "<br/> After Replacement: " +newName )

//                                     Question 8

// var message = "Ali and Sami are best friends. They play cricket and football together."

// para = message.replace(/and/g,"&")

// document.write("<H2> Paragraph:</h2><h4> "+message+ "<br/></h4><h2> After Changes: </h2>"+ para )

//                                     Question 9

// var str = "472"
// number = parseInt(str)

// document.write("<h2>Value "+str +"<br/> Type:String <br/>Value: "+number+ "<br/> Type: Number")


//                                     Question 10

// input = "peanuts"
// newInput = input.toUpperCase()

// document.write("<h2>User Input: "+input+ "<br/>Upper Case: " + newInput)


//                                     Question 11

// userInput = "javascript"
// Title = userInput.slice(0,1)
// jay = Title.toUpperCase()
// document.write("User Input; " +userInput+"<br/> Title case; "+ jay+userInput.slice(1))

//                                     Question 12

// num = "35.36"
// res =num.replace(".", "")
// document.write("<h2>Number =" +num+ "<br/>Results = "+ res);

//                                     Question 13
// input = prompt("Enter your username")
// num = input.charCodeAt(33)


//    if (input === num ){
//        alert("Please Enter valid username")
//    }
//     else if (input !== num ){
//         alert("Thanks for entering username") 
//     }


//                                     Question 14

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
// input = prompt("What do you want from bakery")
// index = bakery.indexOf(input.toLowerCase())
// for (var i = 0; i < bakery.length; i++) {
//     if (input.toLowerCase() === bakery[i])
//     {
//     alert("Yes it is Available at index no. "+ index)}
//     else if(input.toLowerCase() !== bakery[i]){
//         alert("Not Available")
//     }
//     break;
// }
 //                                   Question 16

//  var name = "University of Karachi";

// for(var i = 0; i < name.length; i++){
//     console.log(name.slice(i, i+1))
// }
 //                                   Question 17

// contry = "pakistan"
// index = contry.slice(7,8)

// document.write("<h2>User Input: "+contry+ "<br/> Last charachter of input: "+index)

 //                                   Question 18

//  mess = "the quick brown fox jumps over the lazy dog"

//  for (var i = 0; i < mess.length; i++) {
//     if (mess === "the"){
// console.log(mess)
//     }
//  }
// Endd
