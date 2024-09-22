document.getElementById('btn-show-cash-out')
    .addEventListener('click', function(){
        //console.log('clicked');
        
        document.getElementById('cash-out-from').classList.remove('hidden');
        document.getElementById('add-money-from').classList.add('hidden')
    })

document.getElementById('btn-show-add-money')
    .addEventListener('click', function(){
        //console.log('add money');
        
        document.getElementById('add-money-from').classList.remove('hidden');
        document.getElementById('cash-out-from').classList.add('hidden');

    })