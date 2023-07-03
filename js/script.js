const formOne = document.querySelector(".form-1");
const formTwo = document.querySelector(".form-2");
const formThree = document.querySelector(".form-3");
const h1 = document.querySelector("h1")
const responseMsg = document.querySelector(".response-msg")
const p = document.querySelector("p")
const btnOne = document.querySelector(".btn-1");
const btnTwo = document.querySelector(".btn-2");
const btnThree = document.querySelector(".btn-3");
const btnReverse = document.querySelector(".btn-reverse");
const btnTwoReverse = document.querySelector(".btn-reverse-2");
const formWrap = document.querySelector(".form-wrap");
formOne.style.display = "block"
formTwo.style.display = "none"
formThree.style.display = "none"
responseMsg.style.display = "none"

//function to clear form data

const clearForm = function(){
    document.querySelector('.group-1').innerHTML = "Email" + "<input type='email' name='email' id='email' />";
    document.querySelector('.group-2').innerHTML =  "<label for='password'>Password</label>" +   "<input type='password' name='password' id='password' />";
    document.querySelector('.group-3').innerHTML = "<label for='password'>Password</label>" +   "<input type='password' name='password' id='password' />";
    document.querySelector('.group-4').innerHTML = "<label for='firstname'>First Name</label>" +   '<input type="text" name="firstname" id="firstname" />';
    document.querySelector('.group-5').innerHTML =  '<label for="middlename">Middle Name</label>' +   '<input type="text" name="middlename" id="middletname" />';
    document.querySelector('.group-6').innerHTML =  '<label for="lastname">Last Name</label>' +   '<input type="text" name="lastname" id="lastname" />';
    document.querySelector('.group-7').innerHTML =  '<label for="number">Age</label>' + '<input type="number" id="number" />';
    document.querySelector('.group-8').innerHTML =  '<label for="date">Date Of Birth</label>' + '<input type="date" id="date" />';
    document.querySelector('.group-9').innerHTML =  '<label for="sex">Sex</label>' +  '<select name="Sex" id="sex">' + ' <option value="male">male</option>' +  '<option value="female">Female</option>' + '<option value="other">Other</option>';
}


//Step one function that parses in form-1 data and stores them in an object, also to console log them in the console

const stepOne = function(){
    const userOne = new FormData(formOne)
    console.log(userOne)
    for(item of userOne){
        console.log(item)
    }
    // window.location.href = "index2.html"
}


//step two function parses in form-2data and stores them in an object, display the formdata also in the console
const stepTwo = function(){
    const userTwo = new FormData(formTwo)
    for(item of userTwo){
        console.log(item)
    }
    // window.location.href = "index2.html"
}

//step three function parses in form-3data and stores them in an object, display the formdata also in the console
const stepThree = function(){
    const userThree = new FormData(formThree)
    for(item of userThree){
        console.log(item)
    }
}

//switch between form elements
const switchForm = function(){

    if(formOne.style.display === "block" && formTwo.style.display === "none" && formThree.style.display === "none") {
        formOne.style.display = "none"
        formTwo.style.display = "block" 
        formThree.style.display = "none"
        h1.textContent = "PERSONAL INFORMATION"
        p.textContent = "tell me more about yourself"
    
      }
      
      else if (formOne.style.display === "none" && formTwo.style.display === "block" && formThree.style.display === "none"){
      formOne.style.display = "none"
        formTwo.style.display = "none" 
        formThree.style.display = "block"
        h1.textContent = "PROFESSIONAL INFORMATION"
        p.textContent = "Tell us what you do for a living"
    }
        else {
            formOne.style.display = "none"
            formTwo.style.display = "none" 
            formThree.style.display = "none"
        }
    }

    //functions to go back to previous pages

const formReverse = function(){
        if(formOne.style.display = "none") {
            formOne.style.display = "block"
            formTwo.style.display = "none" 
            h1.textContent = "Sign Up"
            p.textContent = "Wanna be a part of this amazing journey? hop on then"
    }
}

const formReverseTwo = function(){
        if(formTwo.style.display ==="none") {
            formOne.style.display = "none"
            formTwo.style.display = "block"
            formThree.style.display = "none" 
            h1.textContent = "PERSONAL INFORMATION"
            p.textContent = "tell me more about yourself"
    }
}


//click events for submitting data and manipulating the page content

btnOne.addEventListener('click', function(e){
e.preventDefault()
stepOne()
switchForm();
});

btnTwo.addEventListener('click', function(e){
e.preventDefault()
stepOne();
stepTwo();
switchForm();
});

btnThree.addEventListener('click', function(e){
e.preventDefault()
formWrap.style.display = "none"
 responseMsg.style.display = "block"
stepOne();
stepTwo();
stepThree();
clearForm();
});



btnReverse.addEventListener('click', function(e){
e.preventDefault()
formReverse();
});

btnTwoReverse.addEventListener('click', function(e){
e.preventDefault()
formReverseTwo()
});

