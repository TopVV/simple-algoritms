var form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
     
    console.log('submit');

    var emailInput = document.querySelector('input[name=email');
    var email = emailInput.value;
    console.log('Email:', email);
    
    var isEmailValid = /^[a-z]+$/.test(email);
    console.log('isEmailValid:', isEmailValid);

    // 1. check email format (name@server.domain e.g. andr@gmail.com)
    // 2. check passwords are the same
    // 3. check password length >= 8

});