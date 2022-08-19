let val = document.querySelector('.txt')

function check() {
    
    if(val.value % 2 == 0)
    {
        document.getElementById("output").value = "Even";
    }
    else
    {
        document.getElementById("output").value = "Odd";
    }
}