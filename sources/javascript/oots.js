function ootsbasereset(){
    document.getElementById("treas-c").innerHTML = 103;
    document.getElementById("trap-c").innerHTML = 21;
    percentcalc();
}

function ootsexpreset(){
    document.getElementById("treas-c").innerHTML = 115;
    document.getElementById("trap-c").innerHTML = 21;
    percentcalc();
}

function percentcalc(){
    document.getElementById("treas-p").innerHTML = Math.round(parseInt(document.getElementById("treas-c").innerHTML)/(parseInt(document.getElementById("treas-c").innerHTML)+parseInt(document.getElementById("trap-c").innerHTML))*100);
    document.getElementById("trap-p").innerHTML = Math.round(parseInt(document.getElementById("trap-c").innerHTML)/(parseInt(document.getElementById("treas-c").innerHTML)+parseInt(document.getElementById("trap-c").innerHTML))*100);
}

function drawtreasure() {
    if (parseInt(document.getElementById("treas-c").innerHTML) != 0 && document.getElementById("treas-c").innerHTML != ""){
    document.getElementById("treas-c").innerHTML = parseInt(document.getElementById("treas-c").innerHTML) - 1;
    percentcalc();
    }else{
        alert("I'm afraid there is no Treasures left");
    }
}

function drawtrap() {
    if (parseInt(document.getElementById("trap-c").innerHTML) != 0 && document.getElementById("trap-c").innerHTML != ""){
    document.getElementById("trap-c").innerHTML = parseInt(document.getElementById("trap-c").innerHTML) - 1;
    percentcalc();
    }else{
        alert("Good news, somehow you ran out of traps");
    }
}