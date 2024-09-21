document.getElementById('login-btn')
    .addEventListener("click", function(event){
        event.preventDefault();
        //console.log('clicked button');
        
        // get phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    //console.log(phoneNumber, pinNumber);
    
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are login');
        window.location.href = "home.html"
    }
    else{
        alert('your phone number and pin wrong')
    }
})
