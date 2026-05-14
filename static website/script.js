document.querySelector("form").addEventListener("submit", function(event) {

    let fullname = document.querySelector("[name='fullname']").value.trim();
    let age = document.querySelector("[name='age']").value;
    let course = document.querySelector("[name='course']").value;
    let gender = document.querySelector("input[name='gender']:checked");
    let dob = document.querySelector("[name='dob']").value;
    let email = document.querySelector("[name='email']").value.trim();
    let mobile = document.querySelector("[name='mobile']").value.trim();
    let address = document.querySelector("textarea").value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let mobilePattern = /^[0-9]{10}$/;
    let namePattern = /^[A-Za-z ]+$/;

    /* Full Name */
    if(fullname==""){
        alert("Full Name is required");
        event.preventDefault();
        return;
    }

    if(!namePattern.test(fullname)){
        alert("Name should contain only letters");
        event.preventDefault();
        return;
    }

    /* Age */
    if(age=="" || age<15 || age>100){
        alert("Enter valid age between 15 and 100");
        event.preventDefault();
        return;
    }

    /* Course */
    if(course=="-- Select Course --"){
        alert("Please select a course");
        event.preventDefault();
        return;
    }

    /* Gender */
    if(!gender){
        alert("Please select gender");
        event.preventDefault();
        return;
    }

    /* Date */
    if(dob==""){
        alert("Please select Date of Birth");
        event.preventDefault();
        return;
    }

    /* Email */
    if(!emailPattern.test(email)){
        alert("Enter valid email");
        event.preventDefault();
        return;
    }

    /* Mobile */
    if(!mobilePattern.test(mobile)){
        alert("Mobile number must contain 10 digits");
        event.preventDefault();
        return;
    }

    /* Address */
    if(address.length<10){
        alert("Address should contain minimum 10 characters");
        event.preventDefault();
        return;
    }




    alert("Registration Successful");


    console.log("===== Student Details =====");

console.log("Full Name: " + fullname);

console.log("Age: " + age);

console.log("Course: " + course);

console.log("Gender: " + gender.value);

console.log("Date of Birth: " + dob);

console.log("Email: " + email);

console.log("Mobile: " + mobile);

console.log("Address: " + address);

console.log("===========================");
});
