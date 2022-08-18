/*
1.add withdraw even handler
2. get withdraw amount by using getInputFieldValueById  function
3. previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5 : set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTexElementValueBAYId function
6. claculate  new balance total
7. set balance total using setTextElement

*/
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getIputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

    
})