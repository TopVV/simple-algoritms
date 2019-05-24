var form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
     
//    console.log('submit');

    var emailInput = document.querySelector('input[name=email');
    var email = emailInput.value;
    
    let regexp1 = /\w@\w/;
    let regexp2 = /\w\.\w/;
//    console.log('Email:', email);
    console.log('Is email valid:', (email.match(regexp1) != null && email.match(regexp1) != null));
    
    
    
//    var isEmailValid = /^[a-z]+$/.test(email);
//    console.log('isEmailValid:', isEmailValid);
    
    
    var passwordInput = document.querySelector('input[name=password');
    var password = passwordInput.value;
  
    var passwordConfirmationInput = document.querySelector('input[name=password-confirmation');
    var passwordConfirmation = passwordConfirmationInput.value;
  
    console.log('Is password the same: ', password === passwordConfirmation);
  
    console.log('Password length > 8: ', password.length >= 8)

    // 1. check email format (name@server.domain e.g. andr@gmail.com)
    // 2. check passwords are the same
    // 3. check password length >= 8

});