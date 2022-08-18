
document.getElementById('btn-deposit').addEventListener('click',function(){

    /*
    1.get the element by id
    2.get the value frome  the element
    3. convert string value to a number
 */
   const newDepositAmount = getIputFieldValueById('deposit-field');
   /*
   1.get previous deposit total by id
   */
  const previousDepositTotal = getTextElementValueById('deposit-total');
  // calculate new deposit total
  const newDpositTotal = previousDepositTotal + newDepositAmount;
  // set deposit total value
   setTextElementValueById('deposit-total', newDpositTotal);
    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal);

   
})