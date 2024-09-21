document.getElementById('login-btn')
    .addEventListener("click", function(event){
        event.preventDefault();
        console.log('clicked button');
        
        // get phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
    
})
