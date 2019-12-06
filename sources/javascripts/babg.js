function streetomendraw() {
    document.getElementById("street-omen-tiles").value = parseInt(document.getElementById("street-omen-tiles").value) - 1
};


var street = {
    items = 1,
    events = 7,
    omens = 4,
    blank = 2,
    total = function (){
        return this.items+this.events+this.omens+this.blank;
        }
};

var building = {
    items = 4,
    events = 7,
    omens = 2,
    blank = 0,
    total = function (){
        return this.items+this.events+this.omens+this.blank;
        }
};

var catacomb = {
    items = 3,
    events = 3,
    omens = 7,
    blank = 2,
    total = function (){
        return this.items+this.events+this.omens+this.blank;
        }
};

