function squarefunction(){
    let num = document.getElementById("square-input").value;
    document.getElementById("area-result-square").innerHTML = num*num;
    document.getElementById("perimeter-result-square").innerHTML = num*4;
}

function rectanglefunction(){
    let l = document.getElementById("length").value;
    let b = document.getElementById("breadth").value;
    document.getElementById("area-result-rectangle").innerHTML = l*b;
    document.getElementById("perimeter-result-rectangle").innerHTML = (l*2)+(b*2);
}

function circlefunction(){
    let pi = 22/7;
    let r = document.getElementById("circle-input").value;
    document.getElementById("area-result-circle").innerHTML = pi*r*r;
    document.getElementById("perimeter-result-circle").innerHTML = 2*pi*r;
}

function trianglefunction(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let base = document.getElementById("base").value;
    let h = document.getElementById("height").value;
    document.getElementById("area-result-triangle").innerHTML = (base*h)/2;
    document.getElementById("perimeter-result-triangle").innerHTML = (a*1)+(b*1)+(c*1);
}