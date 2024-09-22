document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault()
        //console.log('clicked btn');
        
    const inputAddMoney = document.getElementById('input-add-money').value;
    const inputPinNumber = document.getElementById('input-pin-number').value;
    //console.log(inputAddMoney,inputPinNumber);
    
    if(inputPinNumber === '1234'){
        //console.log('add money success full');

        const balance = document.getElementById('account-balance').innerText;

        const addMoneyNumber =parseFloat(inputAddMoney);
        const addBalance = parseFloat(balance);
        const newBalance = addMoneyNumber + addBalance;

        document.getElementById('account-balance').innerText = newBalance
        console.log(newBalance);
        
    }
    else{
        alert('wrong pin number please try again')
    }
    })
