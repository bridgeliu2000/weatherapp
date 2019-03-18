//alert("This is made with javascript")


increment = 0;
content = 'here is what you wrote.'
result = 'failed'

function countClicks(){
    increment ++;
    document.getElementById('Times pressed').innerHTML = 'Times pressed: ' + increment;
}

function editText(){
    content = document.getElementById('input').innerHTML
    document.getElementById('show content').innerHTML = content;
}

