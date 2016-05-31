// JavaScript File
var eyes = document.getElementById("eyes");
var hair = document.getElementById("hair");
var face = document.getElementById("face");
var cat = document.getElementById("cat");
var steps


function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

