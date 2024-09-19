let a = 0;

function changeColor() {
    let color = ["lightskyblue", "linen", "cornflowerblue", "teal"];
    document.getElementById("aside2").style.backgroundColor = color[a];
    a++;
    if(a==color.length) a=0;
}


let list = [ ];


// addButton werkte niet als functie. Veranderd naar storeInput en toen werkte het wel.
function storeInput() {
    const input = document.getElementById("input1");
    const value = input.value;
    list.push(value);
    console.log(list);
    if(list.length == 10) {
        document.getElementById("input1").value = " ";

    }


    clear();
    showInput();
}

function showInput() {
    list.forEach((item) => {
        document.getElementById("ulist").innerHTML += "<li>"+item+"</li>";
    })
}


// Als je de functie niet called, werkt het niet.
function deleteInput() {
    const input = document.getElementById("input1");
    let remove = list.indexOf(input.value);
    if(remove === -1){return}
    list.splice(remove, 1);

    clear();
    showInput();
}
function clear() {
    document.getElementById("ulist").innerHTML = "";
}

function removeAll(){
    list = [ ]
    clear();
    showInput();
}
