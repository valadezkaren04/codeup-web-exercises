//
// var like = document.getElementById("like");
// var dontLike = document.getElementById("dontlike");
// var preference = "dc";
// var output = dontLike.innerHTML + ' ' + document.getElementById(preference).innerHTML;
// alert(output);


// var like = document.getElementById("like");
// var dontLike = document.getElementById("dontlike");
// var dc = document.getElementById("dc");
// dc.innerHTML = dc.innerHTML + " Animated Universe";
// var output = like.innerHTML + ' ' + dc.innerHTML;
// alert(output);


// css - color hot pink implemented inside js
//not setting a color; setting name of a class; *set attribute to an element*
var like = document.getElementById("like");
var dontLike = document.getElementById("dontlike");
var dc = document.getElementById("dc");
dc.innerHTML = dc.innerHTML + " Animated Universe";
var output = like.innerHTML + ' ' + dc.innerHTML;

var marvel = document.getElementById("marvel");
marvel.setAttribute('class', 'hotpink'); //changes marvel to hot pink
marvel.innerHTML = marvel.innerHTML + ' Cinematic Universe'; //adds cinematic universe to marvel

dc.setAttribute('class', 'hotpink'); //changes dc animated universe to hot pink

var hotPinky = document.getElementsByClassName("hotpink");
//grabs 2 elements (marvel and dc - b.c they are hot pink...which is an array (node list)
// hotPinky[0].style.color = 'rebeccapurple';
// hotPinky[1].style.color = 'green';
// hotPinky[1].style.fontFamily = 'sans-serif'; //changes font

//changes the group of same class at once with a for loop
for (var i = 0; i < hotPinky.length; i++) {
    hotPinky[i].style.color = 'skyblue';
    hotPinky[i].style.fontFamily = 'monospace';
}

//grabbing the content of a form input using js
var submitButtom = document.getElementById('colorSubmission');
submitButtom.onclick = function () {
    var colorInput = document.getElementById('colorPreference');
   var paragraphs = document.getElementsByTagName('p');
    colorPreference = colorInput.value;
    alert(colorPreference);
    for  (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = colorInput.value;
    }
    colorInput.value = "";
}

//The Hulk
var theHulk = document.getElementById("theHulk");
var hulkState = theHulk.getAttribute('data-state');
var hulkStrength = theHulk.getAttribute('data-strength');
var hulkIntelligence = theHulk.getAttribute('data-intelligence');
// alert(hulkState);
alert("The Hulk is currently in " + hulkState + " state. His strength is " + hulkStrength + " and his intelligence is " + hulkIntelligence);

var transformButton = document.getElementById("transformHulk");
transformButton.onclick = function() {
    var hulkState = theHulk.getAttribute("data-state");
    if (hulkState === "The Hulk") {
        theHulk.setAttribute("data-strength", "Bruce Banner");
    }   else {
        theHulk.setAttribute("data-state", "The Hulk");
    }
    var hulkStrength = theHulk.getAttribute("data-strength");
    if (hulkStrength === "super") {
        theHulk.setAttribute("data-strength", "normal");
    } else {
        theHulk.setAttribute("data-strength", "super");
    }
    var hulkIntelligence = theHulk.getAttribute("data-intelligence");
    if (hulkIntelligence === "low") {
        theHulk.setAttribute("data-intelligence", "exceptional");
    } else {
        theHulk.setAttribute("data-intelligence", "low");
    }
}
    // var hulkNameElement = document.getElementById("theHulk");
    // var output = hulkState + " is currently in " + hulkState + " state. His strength is " + hulkStrength + " and his intelligence is " + hulkIntelligence;
    // if (hulkStrength === "super") {
    // hulkNameElement.style.color = "green";
    // hulkNameElement.innerHTML = output;
    // } else {
    // hulkNameElement.style.color = "hotpink";
    // hulkNameElement.innerHTML = output;
    // }
