var item1 = document.getElementById("item1");
//The variables that will be clicked//
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");

//Where the picture will show the information//
item1.addEventListener("click", function(){
    info1.innerHTML = "Anime is a Japanese cartoon that is usually based on a japanese graphic novel.";
    info2.innerHTML = "Anime is different from regular cartoons because it has a different view of characters and storyline; you could say that its a mix of a cartoon and a tv show.";
    info3.innerHTML = "There are two types of anime.The dub version,english voices, and sub version, english subttles.";
});

//"click" will allow the info inside appear on the screen//                       
item2.addEventListener("click", function(){
    info1.innerHTML = "Books are a gateway to imagination.";
    info2.innerHTML = "Some books are real or not real.The not real are called fiction and the real are called non fiction.";
    info3.innerHTML = "Sometime people imagine being in the book themselves or imagine people playing the part.";
});

item3.addEventListener("click", function(){
   info1.innerHTML="Art has been around for a very long time.";
   info2.innerHTML="Art today is seen very differently and its unique, some artist can't compare to the art that is shown today.";
   info3.innerHTML="Art is usually inspired by something, kids have imagination so they can create anything and it will be counted as art.";
});

item4.addEventListener("click", function(){
   info1.innerHTML="Poeple like to calm down to music.";
   info2.innerHTML="People dance to music because it is a sense of expression also because its fun.";
   info3.innerHTML="Music can be any sound that is made and it is important to listen for the smallest things in each song.";
});