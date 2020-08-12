// let addButton = document.getElementsByClassName("add");
let Saved = [];
let transarray = [];
let addButton = document.getElementsByClassName("add");
let First = document.getElementById("First");
let contentblock = document.getElementsByClassName("contentblock");
let topic = document.getElementById("topic");
let description = document.getElementById("description");
let submit = document.getElementById("submit");
let Third = document.getElementById("Third");
let favlist = document.getElementById("favlist");
let favlistchild = document.getElementsByClassName("favlistchild");
let favtranslist = document.getElementById("favtrans");
let savedescription = document.getElementById("savedescription");
let transformtextarea = document.getElementById("transformtextarea");
let translistchild = document.getElementsByClassName("translistchild");



function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

let checkIfInFavorits = function(name){
    for(var i =0; i<Saved.length;i++){
      if(Saved[i]===name){
        alert("Already in Favorites")
        return true;
      }
    }
    return false;
}
let addToFavorits = function(name){
  Saved.push(name);

}


let refreshListener = function(){     //this function makes onclick listeners for evrey row using for loop
  var name = [];
  for (let i = 0 ; i < contentblock.length; i++)
  {
    name[i] = addButton[i].parentNode.parentNode.getElementsByClassName("contenttopic")[0].innerHTML ;
    addButton[i].addEventListener("click",function(){
      if(!checkIfInFavorits(name[i]))
      Saved.push(name[i]);
      displayFavorites();
      refreshFavoriteListener();
    })
  }
}
refreshListener();

let refreshFavoriteListener = function(){     //this function makes onclick listeners for evrey row using for loop
  for (let i = 0 ; i < favlist.childElementCount; i++)
  {
    favlistchild[i].addEventListener("click",function(){
      Saved.splice(i,1);
      displayFavorites();
      refreshFavoriteListener();
    })
  }
}
refreshFavoriteListener();


let displayFavorites= function(){
  favlist.innerHTML="";
  for(var i =0; i<Saved.length;i++){
    var fav = document.createElement("LI");
    fav.setAttribute("class", "favlistchild" );
    fav.appendChild(document.createTextNode(Saved[i]));
    favlist.appendChild(fav);
  }
}
displayFavorites();



submit.addEventListener("click",function(){
  if(topic.value!=""&&description.value!=""){
    var temp= document.getElementById("firstcontentblock");
    newObj = temp.cloneNode(true); 
    newObj.getElementsByClassName("contentimg")[0].src = "big.jpg";
    newObj.getElementsByClassName("contenttopic")[0].innerHTML = topic.value;
    newObj.getElementsByClassName("contenttext")[0].innerHTML= description.value;
    First.appendChild(newObj);
    alert(topic.value+ " Added successfully")
    topic.value="";
    description.value="";
    refreshListener();
  }
   else(alert("Missing details"));
})


let displayTrans= function(){
  favtranslist.innerHTML="";
  for(var i =0; i<transarray.length;i++){
      var fav = document.createElement("LI");
      fav.setAttribute("class", "translistchild" );
      fav.appendChild(document.createTextNode(transarray[i]));
      favtranslist.appendChild(fav);
  }
}

let addtoTransArray= function(string){
  transarray.push(string);
  displayTrans();
  refreshTransformListener();
}

savedescription.addEventListener("click",function(){
  if(transformtextarea.value!="")
  addtoTransArray(transformtextarea.value);
  transformtextarea.value ="";
});

let refreshTransformListener = function(){     //this function makes onclick listeners for evrey row using for loop
  for (let i = 0 ; i < favtranslist.childElementCount; i++)
  {
    translistchild[i].addEventListener("click",function(){
      transarray.splice(i,1);
      displayTrans();
      refreshTransformListener();
    })
  }
}


function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
}





