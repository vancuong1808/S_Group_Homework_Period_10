let username = document.getElementById("user_name");
let password = document.getElementById("pass_word");
let logIn = document.querySelector('.button');
let Isusername = false;
let Ispassword = false;
// console.log( Isusername );
// console.log( Ispassword );
Isusername = username.addEventListener('input', function() {
    // console.log("alo", username.value);
    // console.log( username.value[0] )
    if ( !username.checkValidity() ) {
        document.querySelector('.Invalid_username').style.display = 'block';
        Isusername = false;
    } else {
        document.querySelector('.Invalid_username').style.display = 'none';
        Isusername = true;
    }
    // console.log( Isusername );
    return Isusername
})
Ispassword = password.addEventListener('input', function() {
    // console.log("alo", username.value);
    // let check = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if ( !password.checkValidity() ) {
    document.querySelector('.Invalid_password').style.display = 'block';
    Ispassword = false;
    } else {
    document.querySelector('.Invalid_password').style.display = 'none';
    Ispassword = true;
    }
    // console.log( Ispassword );
    return Ispassword
})
logIn.addEventListener( 'click', function() {
    if ( Isusername == true && Ispassword == true && username.value != "" && password.value != ""  ) {
        alert("Success Login ");
        document.querySelector('.Invalid_password').style.display = 'none';
        document.querySelector('.Invalid_username').style.display = 'none';
    } else {
        alert("Fail Login");
        if ( Isusername == false || username.value == "" ) {
            document.querySelector('.Invalid_username').style.display = 'block';
        } 
        if ( Ispassword == false || password.value == "" ) {
            document.querySelector('.Invalid_password').style.display = 'block';
        } 
    }
})