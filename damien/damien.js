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

    clear();
    showInput();
}

function showInput() {
    list.forEach((item) => {
        document.getElementById("ulist").innerHTML += "<li>"+item+"</li>";
    })
}

function clear() {
    document.getElementById("ulist").innerHTML = "";
}
