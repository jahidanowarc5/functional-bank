


function getInputValue(inputId){

    const inputField = document.getElementById(inputId);
        const inputAmountText = inputField.value;
        const newInputAmount = parseFloat(inputAmountText);
        inputField.value = '';
        return newInputAmount;

}


function updateTotalField(totalFieldId,amount){

    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
    
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;

}

function updateBalance(newDepositAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + newDepositAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - newDepositAmount;
    }
     
}











    document.getElementById('deposit-button').addEventListener('click', function (){
        // const depositInput = document.getElementById('deposit-input');
        // const depositAmountText = depositInput.value;
        // const newDepositAmount = parseFloat(depositAmountText);
        const newDepositAmount = getInputValue('deposit-input');
        if(newDepositAmount > 0){
            updateTotalField('deposit-total', newDepositAmount);
            updateBalance(newDepositAmount, true);
        }
       

    // // const depositTotal = document.getElementById('deposit-total');
    // // const depositTotalText = depositTotal.innerText;
    // // const previousDepositAmount = parseFloat(depositTotalText);
    // // const totalDepositAmount = previousDepositAmount + newDepositAmount
    // depositTotal.innerText = totalDepositAmount;
    

    
    
    
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const totalBalanceAmount = previousBalanceTotal + newDepositAmount;
    // balanceTotal.innerText = totalBalanceAmount; 
    

   
});

document.getElementById('withdraw-button').addEventListener('click', function (){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    
    
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdraTotalAmount = parseFloat(withdrawTotalText);
    // const totalWithdrawAmount = previousWithdraTotalAmount +  newWithdrawAmount;
    // withdrawTotal.innerText = totalWithdrawAmount;
   

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const totalBalanceAmount = previousBalanceTotal - newWithdrawAmount;
    // balanceTotal.innerText = totalBalanceAmount;
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance){
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    
    }
    if(newWithdrawAmount > currentBalance){
        console.log('you have insufficient balance');
    }
    
    

})