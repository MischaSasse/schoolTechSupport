let a = 0;

function changeColor() {
    let color = ["lightskyblue", "linen", "cornflowerblue", "teal"];
    document.getElementById("header").style.backgroundColor = color[a];
    document.getElementById("aside2").style.backgroundColor = color[a];
    document.getElementById("footer").style.backgroundColor = color[a];
    document.getElementById("aside1").style.backgroundColor = color[a];
    a++;
    if(a==color.length) a=0;
}


let list = [ ];


// addButton werkte niet als functie. Veranderd naar storeInput en toen werkte het wel.
function storeInput() {
    const input = document.getElementById("input1");
    const value = input.value;
    // console.log(list);
    if(list.length == 17) {
        return //msNote: added return, the moment the array hits 10, nothing else will happen
    }
    
    
    clear();
    list.push(value); //msNote: put push lower, else it would add to array, 
                      //giving 11 items and then checking if it had 10 or more (it would only display 10 but have 11 items)
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
