document.getElementById('btn-cash-out')
    .addEventListener('click',function(event){
        event.preventDefault()
        
        const inputCashOut = document.getElementById('input-cash-out').value;
        const inputPinNumber = document.getElementById('input-cash-out-pin').value;

        const cashOutBalance = parseFloat(inputCashOut);
        //console.log(inputCashOut,inputPinNumber);
        
        if(inputPinNumber === '1234'){
            console.log('cash out success');
            
            const currentBalance = document.getElementById('account-balance').innerText;
            const mainBalance = parseFloat(currentBalance);

            const availableBalance = mainBalance - cashOutBalance;

            document.getElementById('account-balance').innerText = availableBalance
            //console.log(availableBalance);
        }
        else{
            alert('wrong pin please try again')
        }
    })
