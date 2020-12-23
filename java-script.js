//  varName=prompt("username");

//  varpass=prompt("password?");

//  alert("Done By: Hesham Mashriqi");

// var number = 10

// CheckNumbers();
// // var number = 10;


// // if(number > 10){

// //     alert("correct");

// // } else { alert("not correct")}


// function CheckNumbers() {


//     if(number > 10){
    
//         alert("correct");
    
//     } else { alert("not correct")}
    
// }



// var names = prompt("whats your name?");

// alert("Hello" + names);



 var name = prompt("user name");
 var pass = prompt("password");

checkPassword(pass);




function printName(name) {
    alert("Hello "+name);
}

function checkPassword(password){
    if (password == 1234) {
        alert("Logged in");
        printName(name);
    } else {
        alert("password not correct");


    }


}



var limit = 25;

for (var i = 0; i < limit; i++) {
    console.log(i);
}

var myCondition = true;

while (myCondition) {

    console.log("MY condition is " + myCondition);
    myCondition = false;
}
