let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');


function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let jsonDatabase = [
  {
    "title" : "Aries Sun",
    "picture" : "https://live.staticflickr.com/65535/48619033106_7864f7567d_k.jpg",
    "usedColor" : "#F97525",
    "traits" : ["playful", "hot-headed", "loud :)", "impulsive"],
  },
  {
    "title" : "Virgo Moon",
    "picture" : "https://live.staticflickr.com/35/71100491_bc8e65cc90_m.jpg",
    "usedColor" : "#0b006b",
    "traits" : ["organized", "logical", "anxious", "helpful"],
  },
  {
    "title" : "Sagittarius Rising",
    "picture" : "https://live.staticflickr.com/65535/51504833664_f83c52b55e_h.jpg",
    "usedColor" : "#F975C7",
    "traits" : ["confident", "extroverted", "funny"],
  }
]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementMessy(incomingJSON) {

  var incompleteHTML = "<div class=\"contentItem\" style=\"background-color: " + incomingJSON['usedColor'] + "\"> <h3 class=\"contentTitle\">" + incomingJSON['title'] + "</h3><h4>My Pets:</h4><ul class=\"petList\">";

  for (var i = 0; i < incomingJSON['traits'].length; i++) {
    var traitsString = "<li>" + incomingJSON['traits'][i] + "</li>";
    incompleteHTML += traitsString;
  }

  incompleteHTML += "</ul></div>";
    contentGridElement.innerHTML = incompleteHTML;
    console.log(incompleteHTML);
  }

  function createElementProper(incomingJSON) {

    let newContentElement = document.createElement("div");
    newContentElement.style.backgroundColor = incomingJSON['usedColor'];
    newContentElement.classList.add('contentItem');

    let newContentHeading = document.createElement("H3");
    newContentHeading.classList.add('contentTitle');
    newContentHeading.innerText = incomingJSON['title'];
    newContentElement.appendChild(newContentHeading);

    let newContentSubhead = document.createElement("H4");
    newContentSubhead.innerText = "the characteristics:";
    newContentElement.appendChild(newContentSubhead);

    let newContenttraitsList = document.createElement("UL");
    newContentElement.appendChild(newContenttraitsList);

    for (var i = 0; i < incomingJSON['traits'].length; i++) {
   var currenttraitsString = incomingJSON['traits'][i];
   var newTraitsItem = document.createElement("LI");
   newTraitsItem.innerText = currenttraitsString;
   newContenttraitsList.appendChild(newTraitsItem);

   contentGridElement.appendChild(newContentElement);
  }
  let newImage = document.createElement("img");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture'];
  newContentElement.appendChild(newImage);
}
