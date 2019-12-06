function babgreset() {
    document.getElementById("str-ev-c").innerHTML = 7;
    document.getElementById("str-ev-p").innerHTML = 50;
    document.getElementById("str-it-c").innerHTML = 1;
    document.getElementById("str-it-p").innerHTML = 7;
    document.getElementById("str-om-c").innerHTML = 4;
    document.getElementById("str-om-p").innerHTML = 29;
    document.getElementById("str-bl-c").innerHTML = 2;
    document.getElementById("str-bl-p").innerHTML = 14;
    document.getElementById("bui-ev-c").innerHTML = 7;
    document.getElementById("bui-ev-p").innerHTML = 54;
    document.getElementById("bui-it-c").innerHTML = 4;
    document.getElementById("bui-it-p").innerHTML = 31;
    document.getElementById("bui-om-c").innerHTML = 2;
    document.getElementById("bui-om-p").innerHTML = 15;
    document.getElementById("bui-bl-c").innerHTML = 0;
    document.getElementById("bui-bl-p").innerHTML = 0;
    document.getElementById("bas-ev-c").innerHTML = 3;
    document.getElementById("bas-ev-p").innerHTML = 20;
    document.getElementById("bas-it-c").innerHTML = 3;
    document.getElementById("bas-it-p").innerHTML = 20;
    document.getElementById("bas-om-c").innerHTML = 7;
    document.getElementById("bas-om-p").innerHTML = 47;
    document.getElementById("bas-bl-c").innerHTML = 2;
    document.getElementById("bas-bl-p").innerHTML = 13;
}

function strevdraw() {
    if (parseInt(document.getElementById("str-ev-c").innerHTML) != 0){
    document.getElementById("str-ev-c").innerHTML = parseInt(document.getElementById("str-ev-c").innerHTML) - 1;
    strpcalc();
    }else{
        alert("No such tile exists");
    }
}

function stritdraw() {
    if (parseInt(document.getElementById("str-it-c").innerHTML) != 0){
    document.getElementById("str-it-c").innerHTML = parseInt(document.getElementById("str-it-c").innerHTML) - 1;
    strpcalc();
    }else{
        alert("No such tile exists");
    }
}

function stromdraw() {
    if (parseInt(document.getElementById("str-om-c").innerHTML) != 0){
    document.getElementById("str-om-c").innerHTML = parseInt(document.getElementById("str-om-c").innerHTML) - 1;
    strpcalc();
    }else{
        alert("No such tile exists");
    }
}

function strbldraw() {
    if (parseInt(document.getElementById("str-bl-c").innerHTML) != 0){
    document.getElementById("str-bl-c").innerHTML = parseInt(document.getElementById("str-bl-c").innerHTML) - 1;
    strpcalc();
    }else{
        alert("No such tile exists");
    }
}

function buievdraw() {
    if (parseInt(document.getElementById("bui-ev-c").innerHTML) != 0){
    document.getElementById("bui-ev-c").innerHTML = parseInt(document.getElementById("bui-ev-c").innerHTML) - 1;
    buipcalc();
    }else{
        alert("No such tile exists");
    }
}

function buiitdraw() {
    if (parseInt(document.getElementById("bui-it-c").innerHTML) != 0){
    document.getElementById("bui-it-c").innerHTML = parseInt(document.getElementById("bui-it-c").innerHTML) - 1;
    buipcalc();
    }else{
        alert("No such tile exists");
    }
}

function buiomdraw() {
    if (parseInt(document.getElementById("bui-om-c").innerHTML) != 0){
    document.getElementById("bui-om-c").innerHTML = parseInt(document.getElementById("bui-om-c").innerHTML) - 1;
    buipcalc();
    }else{
        alert("No such tile exists");
    }
}

function buibldraw() {
    if (parseInt(document.getElementById("bui-bl-c").innerHTML) != 0){
    document.getElementById("bui-bl-c").innerHTML = parseInt(document.getElementById("bui-bl-c").innerHTML) - 1;
    buipcalc();
    }else{
        alert("No such tile exists");
    }
}

function basevdraw() {
    if (parseInt(document.getElementById("bas-ev-c").innerHTML) != 0){
    document.getElementById("bas-ev-c").innerHTML = parseInt(document.getElementById("bas-ev-c").innerHTML) - 1;
    baspcalc();
    }else{
        alert("No such tile exists");
    }
}

function basitdraw() {
    if (parseInt(document.getElementById("bas-it-c").innerHTML) != 0){
    document.getElementById("bas-it-c").innerHTML = parseInt(document.getElementById("bas-it-c").innerHTML) - 1;
    baspcalc();
    }else{
        alert("No such tile exists");
    }
}

function basomdraw() {
    if (parseInt(document.getElementById("bas-om-c").innerHTML) != 0){
    document.getElementById("bas-om-c").innerHTML = parseInt(document.getElementById("bas-om-c").innerHTML) - 1;
    baspcalc();
    }else{
        alert("No such tile exists");
    }
}

function basbldraw() {
    if (parseInt(document.getElementById("bas-bl-c").innerHTML) != 0){
    document.getElementById("bas-bl-c").innerHTML = parseInt(document.getElementById("bas-bl-c").innerHTML) - 1;
    baspcalc();
    }else{
        alert("No such tile exists");
    }
}

function strpcalc() {
    strevp();
    stritp();
    stromp();
    strblp();
}

function strevp(){
    document.getElementById("str-ev-p").innerHTML = Math.round(parseInt(document.getElementById("str-ev-c").innerHTML)/(parseInt(document.getElementById("str-ev-c").innerHTML)+parseInt(document.getElementById("str-it-c").innerHTML)+parseInt(document.getElementById("str-om-c").innerHTML)+parseInt(document.getElementById("str-bl-c").innerHTML))*100);
}

function stritp(){
    document.getElementById("str-it-p").innerHTML = Math.round(parseInt(document.getElementById("str-it-c").innerHTML)/(parseInt(document.getElementById("str-ev-c").innerHTML)+parseInt(document.getElementById("str-it-c").innerHTML)+parseInt(document.getElementById("str-om-c").innerHTML)+parseInt(document.getElementById("str-bl-c").innerHTML))*100);
}

function stromp(){
    document.getElementById("str-om-p").innerHTML = Math.round(parseInt(document.getElementById("str-om-c").innerHTML)/(parseInt(document.getElementById("str-ev-c").innerHTML)+parseInt(document.getElementById("str-it-c").innerHTML)+parseInt(document.getElementById("str-om-c").innerHTML)+parseInt(document.getElementById("str-bl-c").innerHTML))*100);
}

function strblp(){
    document.getElementById("str-bl-p").innerHTML = Math.round(parseInt(document.getElementById("str-bl-c").innerHTML)/(parseInt(document.getElementById("str-ev-c").innerHTML)+parseInt(document.getElementById("str-it-c").innerHTML)+parseInt(document.getElementById("str-om-c").innerHTML)+parseInt(document.getElementById("str-bl-c").innerHTML))*100);
}

function buipcalc() {
    buievp();
    buiitp();
    buiomp();
    buiblp();
}

function buievp(){
    document.getElementById("bui-ev-p").innerHTML = parseInt(document.getElementById("bui-ev-c").innerHTML)/(parseInt(document.getElementById("bui-ev-c").innerHTML)+parseInt(document.getElementById("bui-it-c").innerHTML)+parseInt(document.getElementById("bui-om-c").innerHTML)+parseInt(document.getElementById("bui-bl-c").innerHTML))*100;
}

function buiitp(){
    document.getElementById("bui-it-p").innerHTML = parseInt(document.getElementById("bui-it-c").innerHTML)/(parseInt(document.getElementById("bui-ev-c").innerHTML)+parseInt(document.getElementById("bui-it-c").innerHTML)+parseInt(document.getElementById("bui-om-c").innerHTML)+parseInt(document.getElementById("bui-bl-c").innerHTML))*100;
}

function buiomp(){
    document.getElementById("bui-om-p").innerHTML = parseInt(document.getElementById("bui-om-c").innerHTML)/(parseInt(document.getElementById("bui-ev-c").innerHTML)+parseInt(document.getElementById("bui-it-c").innerHTML)+parseInt(document.getElementById("bui-om-c").innerHTML)+parseInt(document.getElementById("bui-bl-c").innerHTML))*100;
}

function buiblp(){
    document.getElementById("bui-bl-p").innerHTML = parseInt(document.getElementById("bui-bl-c").innerHTML)/(parseInt(document.getElementById("bui-ev-c").innerHTML)+parseInt(document.getElementById("bui-it-c").innerHTML)+parseInt(document.getElementById("bui-om-c").innerHTML)+parseInt(document.getElementById("bui-bl-c").innerHTML))*100;
}

function baspcalc() {
    basevp();
    basitp();
    basomp();
    basblp();
}

function basevp(){
    document.getElementById("bas-ev-p").innerHTML = parseInt(document.getElementById("bas-ev-c").innerHTML)/(parseInt(document.getElementById("bas-ev-c").innerHTML)+parseInt(document.getElementById("bas-it-c").innerHTML)+parseInt(document.getElementById("bas-om-c").innerHTML)+parseInt(document.getElementById("bas-bl-c").innerHTML))*100;
}

function basitp(){
    document.getElementById("bas-it-p").innerHTML = parseInt(document.getElementById("bas-it-c").innerHTML)/(parseInt(document.getElementById("bas-ev-c").innerHTML)+parseInt(document.getElementById("bas-it-c").innerHTML)+parseInt(document.getElementById("bas-om-c").innerHTML)+parseInt(document.getElementById("bas-bl-c").innerHTML))*100;
}

function basomp(){
    document.getElementById("bas-om-p").innerHTML = parseInt(document.getElementById("bas-om-c").innerHTML)/(parseInt(document.getElementById("bas-ev-c").innerHTML)+parseInt(document.getElementById("bas-it-c").innerHTML)+parseInt(document.getElementById("bas-om-c").innerHTML)+parseInt(document.getElementById("bas-bl-c").innerHTML))*100;
}

function basblp(){
    document.getElementById("bas-bl-p").innerHTML = parseInt(document.getElementById("bas-bl-c").innerHTML)/(parseInt(document.getElementById("bas-ev-c").innerHTML)+parseInt(document.getElementById("bas-it-c").innerHTML)+parseInt(document.getElementById("bas-om-c").innerHTML)+parseInt(document.getElementById("bas-bl-c").innerHTML))*100;
}