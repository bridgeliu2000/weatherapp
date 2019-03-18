//simulates catch when button pressed
function simulateCatch() {
    document.getElementById('rate').innerHTML = 'Modified catch rate: ' + getCatchRate();
    document.getElementById('ball').innerHTML = 'Pokeball modifier: ' + getPokeball();
    document.getElementById('status').innerHTML = 'Status modifier: ' + getStatus();
    document.getElementById('health').innerHTML = 'Health: ' + document.getElementById('healthinput').value + '%'; 
    document.getElementById('result').innerHTML = 'Result: ' + getResult();
    getChance();
}

//gets modified catch rate
function getCatchRate() {
    hp = document.getElementById('healthinput').value/100;
    rate = document.getElementById('rateinput').value;
    ball = getPokeball();
    status = getStatus();
    a = ((3-2*hp)/3)*rate*ball*status;
    b = Math.floor(1048560/(Math.sqrt(Math.sqrt(16711680/a))));
    return b
}

//gets chance of successful catch
function getChance() {
    noShake = 1-(getCatchRate())/65535;
    successfulCatch = Math.pow(getCatchRate()/65535, 4)
    threeShake = Math.pow(getCatchRate()/65535, 3)-successfulCatch;
    twoShake = Math.pow(getCatchRate()/65535, 2)-successfulCatch-threeShake;
    oneShake = getCatchRate()/65535-successfulCatch-threeShake-twoShake;

    document.getElementById('chance0').innerHTML = 'Chance for no shakes: ' + (noShake*100).toFixed(2) + '%';
    document.getElementById('chance1').innerHTML = 'Chance for one shakes: ' + (oneShake*100).toFixed(2) + '%';
    document.getElementById('chance2').innerHTML = 'Chance for two shakes: ' + (twoShake*100).toFixed(2) + '%';
    document.getElementById('chance3').innerHTML = 'Chance for three shakes: ' + (threeShake*100).toFixed(2) + '%';
    document.getElementById('chanceCatch').innerHTML = 'Chance for Catch: ' + (successfulCatch*100).toFixed(2) + '%';
}

//gets pokeball modifier
function getPokeball(val) {
    ball = document.getElementById('ballinput').value;
    if (ball == 'Pokeball') {
        return 1
    } else if (ball == 'Great ball') {
        return 1.5
    } else if (ball == 'Ultra ball') {
        return 2
    } else {
        return 'something went wrong!'
    }
}

//gets status modifier
function getStatus() {
    status = document.getElementById('statusinput').value;
    if (status == 'sleep' || status == 'frozen') {
        return 2.5;
    } else if (status == 'none') {
        return 1;
    } else
        return 1.5;
}

//gets # of shakes, 4 shakes = successful catch
function getResult() {
    i = 0;
    do{
        rand = Math.floor(Math.random() * 65535);
        if (rand >= getCatchRate()){
            break;
        }
        i++;
    } while(i < 4);

    if (i == 4) {
        return 'Successful Catch!'
    } else if (i == 0) {
        return 'Oh-no! The Pokemon broke free!'
    } else if (i == 1) {
        return 'Aww! It appeared to be caught!'
    } else if (i == 2) {
        return 'Aargh! Almost had it!'
    } else if (i == 3) {
        return 'Gah! It was so close, too!'
    } else {
        return 'oh no';
    }
}

//for health value scroll bar
function updateVal(val) {
    document.getElementById('healthinput').value = val;
}
