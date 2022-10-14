function compare(){
    let num1 = prompt('Please enter a number for Value A:'),
        num2 = prompt('Please enter a number for Value B:');

    if(num1 == num2){
        alert('Equal');
    } else if(num1 > num2){
        alert('Value A is Higher');
    } else {
        alert('Value B is Higher')
    }
}