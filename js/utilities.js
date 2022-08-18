function getIputFieldValueById(inputFiledId){
    const inputField =document.getElementById(inputFiledId);
    const inputFieldValueString= inputField.value;
    const inputFieldValue= parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const textelementValueString = element.innerText;
    const textElementValue = parseFloat(textelementValueString);
    return textElementValue;
}

 function setTextElementValueById(elementId,newVlue){
    const textElement = document.getElementById(elementId);
    textElement.innerText= newVlue;
 }
