var url = "https://raw.githubusercontent.com/blair-mcavoy/DataFiles/main/Dogs.csv";
var temps = "https://raw.githubusercontent.com/blair-mcavoy/DataFiles/main/Dog%20Data%20-%20Unique%20Temperaments.csv";

var breedName = getColumn(url,1);

var bredFor = getColumn(url,3);
var breedGroup = getColumn(url,2);
var image = getColumn(url,11);
var maxWeight = getColumn(url, 9);
var uniqueTemperaments = getColumn(temps,0);
var temperament = getColumn(url,10);
var matchingDogs = [];


var uniqueBreeds = ["Any"];
for (var i in breedGroup){
  if (!uniqueBreeds.includes(breedGroup[i])){
    uniqueBreeds.push(breedGroup[i]);
  }
}

var breedGroupSelect = document.getElementById("breedGroup");
console.log(breedGroupSelect)

for (var i in uniqueBreeds){
  var element = document.createElement("option");
  element.innerHTML = uniqueBreeds[i];
  element.value = uniqueBreeds[i];
  breedGroupSelect.appendChild(element);
}

function buildTemperamentSection(){
  var temperamentsSelect = document.getElementById("temp1");
  for (var i = 0; i < uniqueTemperaments.length/6; i++){
  var optionBox = document.createElement("div");
  optionBox.setAttribute("class", "tempContainer");
  var labelElement = document.createElement("label");
  labelElement.innerHTML = uniqueTemperaments[i];
  labelElement.setAttribute("for", i);
  
  var element = document.createElement("input");
  element.value = uniqueTemperaments[i];
  element.type = "checkbox";
  element.id = i;
  
  temperamentsSelect.appendChild(optionBox);
  optionBox.appendChild(element);
  optionBox.appendChild(labelElement);
  }
  var temperamentsSelect1 = document.getElementById("temp2");
  for (var i = Math.floor(uniqueTemperaments.length/6)+1; i < (uniqueTemperaments.length/6)*2; i++){
  var optionBox = document.createElement("div");
  optionBox.setAttribute("class", "tempContainer");
  var labelElement = document.createElement("label");
  labelElement.innerHTML = uniqueTemperaments[i];
  labelElement.setAttribute("for", i);
  
  var element = document.createElement("input");
  element.value = uniqueTemperaments[i];
  element.type = "checkbox";
  element.id = i;
  element.setAttribute("class","checkmark");
  temperamentsSelect1.appendChild(optionBox);
  optionBox.appendChild(element);
  optionBox.appendChild(labelElement);
  }
  var temperamentsSelect2 = document.getElementById("temp3");
  for (var i = Math.floor((uniqueTemperaments.length/6)*2)+1; i < Math.floor((uniqueTemperaments.length/6)*3); i++){
  var optionBox = document.createElement("div");
  optionBox.setAttribute("class", "tempContainer");
  var labelElement = document.createElement("label");
  labelElement.innerHTML = uniqueTemperaments[i];
  labelElement.setAttribute("for", i);
  
  var element = document.createElement("input");
  element.value = uniqueTemperaments[i];
  element.type = "checkbox";
  element.id = i;
  element.setAttribute("class","checkmark");
  temperamentsSelect2.appendChild(optionBox);
  optionBox.appendChild(element);
  optionBox.appendChild(labelElement);
  }
  var temperamentsSelect3 = document.getElementById("temp4");
  for (var i = Math.floor((uniqueTemperaments.length/6)*3); i < Math.floor((uniqueTemperaments.length/6)*4); i++){
  
  var optionBox = document.createElement("div");
  optionBox.setAttribute("class", "tempContainer");
  var labelElement = document.createElement("label");
  labelElement.innerHTML = uniqueTemperaments[i];
  labelElement.setAttribute("for", i);
  
  var element = document.createElement("input");
  element.value = uniqueTemperaments[i];
  element.type = "checkbox";
  element.id = i;
  element.setAttribute("class","checkmark");
  temperamentsSelect3.appendChild(optionBox);
  optionBox.appendChild(element);
  optionBox.appendChild(labelElement);
  }

  var temperamentsSelect4 = document.getElementById("temp5");
  for (var i = Math.floor((uniqueTemperaments.length/6)*4); i < Math.floor((uniqueTemperaments.length/6)*5); i++){
  var optionBox = document.createElement("div");
  optionBox.setAttribute("class", "tempContainer");
  var labelElement = document.createElement("label");
  labelElement.innerHTML = uniqueTemperaments[i];
  labelElement.setAttribute("for", i);
  
  var element = document.createElement("input");
  element.value = uniqueTemperaments[i];
  element.type = "checkbox";
  element.id = i;
  element.setAttribute("class","checkmark");
  temperamentsSelect4.appendChild(optionBox);
  optionBox.appendChild(element);
  optionBox.appendChild(labelElement);
  }

  var temperamentsSelect5 = document.getElementById("temp6");
  for (var i = Math.floor((uniqueTemperaments.length/6)*5); i < uniqueTemperaments.length; i++){
  var optionBox = document.createElement("div");
  optionBox.setAttribute("class", "tempContainer");
  var labelElement = document.createElement("label");
  labelElement.innerHTML = uniqueTemperaments[i];
  labelElement.setAttribute("for", i);
  
  var element = document.createElement("input");
  element.value = uniqueTemperaments[i];
  element.type = "checkbox";
  element.id = i;
  element.setAttribute("class","checkmark");
  temperamentsSelect5.appendChild(optionBox);
  optionBox.appendChild(element);
  optionBox.appendChild(labelElement);
  }
}
buildTemperamentSection();

function getTemperaments(){
  var selectedTemps = [];
  for(var i in uniqueTemperaments){
    var el = document.getElementById(i);
    if(el.checked == true){
      selectedTemps.push(el.value);
    }
    el.checked = false;
    document.getElementById("all").checked = false;
  }
  console.log(selectedTemps);
  return selectedTemps;
}

function weightLabel(){
  var weight = document.getElementById("weight").value;
  document.getElementById("weightLabel").innerHTML = weight;
}
weightLabel();

//createProfiles(getMatchingBreeds(), getMatchingImages(), getMatchingTemps(), getMatchingWeights(), getMatchingGroups());
function createProfiles(breeds, images, temperaments, weights, groups, bredfor){
  //console.log(images);
  document.getElementById('matches').innerHTML = "";
  if(breeds.length == 0){

    var row = document.createElement("div");
    row.setAttribute('class', "row");
    var description = document.createElement("p");
    description.setAttribute('text-align', "center");
    description.innerHTML = "No dogs matched your criteria. Try broadening your search!<br><br>";
    row.appendChild(description);
    
    var row2 = document.createElement("div");
    row2.setAttribute('class', "row");
    var el = document.createElement("img");
    el.setAttribute('src', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpVzkUIijaj15BiVqBQ0r7BPrQOhwjxSh13Q&usqp=CAU");
    el.setAttribute('width', "30%");
    row2.setAttribute('width', "100%");
    el.setAttribute('display', "block");
    el.setAttribute('margin-left', "auto");
    el.setAttribute('margin-right', "auto");
    
    row2.appendChild(el);
    
    document.getElementById('matches').appendChild(row);
    document.getElementById('matches').appendChild(row2);
  }
  else{
    for(var i = 0; i < breeds.length; i++){
          
          var row = document.createElement("div");
          row.setAttribute('class', "outputrow");
          var left = document.createElement("div");
          left.setAttribute("class", "profileleft");
        
          document.getElementById('matches').appendChild(row);
          row.appendChild(left);
          var el = document.createElement("img");
          //console.log(images[i]);
          el.setAttribute('src', images[i]);
          el.setAttribute('width', "100%");
          left.appendChild(el);
          var right = document.createElement("div");
          right.setAttribute("class", "profileright");
          

          var title = document.createElement("h1");
          title.innerHTML = breeds[i].toUpperCase();
          right.appendChild(title);

          var groupTitle = document.createElement("h3");
          groupTitle.innerHTML = "<br>Breed Group:";
          right.appendChild(groupTitle);
          var group = document.createElement("h4");
          group.innerHTML = groups[i];
          right.appendChild(group);

          var tempTitle = document.createElement("h3");
          tempTitle.innerHTML = "<br>Temperament:";
          right.appendChild(tempTitle);
          var temp = document.createElement("h4");
          temp.innerHTML = temperaments[i].substring(1,temperaments[i].length-1);
          right.appendChild(temp);

          var bredTitle = document.createElement("h3");
          bredTitle.innerHTML = "<br>Bred For:";
          right.appendChild(bredTitle);
          var bred = document.createElement("h4");
          if(bredfor[i].substring(0,1)=='"'){
            bred.innerHTML =  bredfor[i].substring(1,bredfor[i].length-1);
          }
          else{
            bred.innerHTML =  bredfor[i];
          }
          right.appendChild(bred);

          var weightTitle = document.createElement("h3");
          weightTitle.innerHTML = "<br>Maximum Weight:";
          right.appendChild(weightTitle);
          var weight = document.createElement("h4");
          weight.innerHTML =   weights[i] ;
          right.appendChild(weight);
      
          row.appendChild(right);
      }
  }
}

function getMatchingBreedsFromName(breedInput){
  matchingDogs = [];
    for(var i = 0; i < breedName.length; i++){
        if(breedName[i].toLowerCase().includes(breedInput) && !matchingDogs.includes(breedName[i])){
          matchingDogs.push(breedName[i]);
        }
    }
  console.log(matchingDogs);
  return matchingDogs;
}

function getMatchingBreeds(){
  matchingDogs = [];
  var group = document.getElementById("breedGroup").value;
  var temps = getTemperaments();
  var weight = document.getElementById("weight").value;
  for(var i = 0; i < breedName.length; i++){
    for(var j = 0; j < temps.length; j++){
        if(temperament[i].includes(temps[j]) && (breedGroup[i]== group || group == 'Any') && Number(maxWeight[i]) <= weight && !matchingDogs.includes(breedName[i])){
          matchingDogs.push(breedName[i]);
        }
    }
  }
  
  return matchingDogs;
}


function getMatchingImages(){
  var matchingImages = [];
  for(var i = 0; i < breedName.length; i++){
        if(matchingDogs.includes(breedName[i])){
          matchingImages.push(image[i]);
        }
    }
    return matchingImages;
}

function getMatchingBredFor(){
  var matchingBred = [];
  for(var i = 0; i < breedName.length; i++){
        if(matchingDogs.includes(breedName[i])){
          matchingBred.push(bredFor[i]);
        }
    }
    return matchingBred;
}

function getMatchingGroups(){
  var matchingGroups = [];
  for(var i = 0; i < breedName.length; i++){
        if(matchingDogs.includes(breedName[i])){
          matchingGroups.push(breedGroup[i]);
        }
    }
    return matchingGroups;
}

function getMatchingTemps(){
  var matchingTemps = [];
  for(var i = 0; i < breedName.length; i++){
      if(matchingDogs.includes(breedName[i])){
          matchingTemps.push(temperament[i]);
        }
    }
  return matchingTemps;
}

function getMatchingWeights(){
  var matchingWeights = [];
  for(var i = 0; i < breedName.length; i++){
      if(matchingDogs.includes(breedName[i])){
          matchingWeights.push(maxWeight[i]);
        }
    }
    return matchingWeights;
}


/*
THIS FUNCTION IS NO LONGER USED
function createList() {
  var matchingDogs = [];
  var matchingImages = [];
  var matchingTemperaments = [];
  var matchingWeights = [];
  var group = document.getElementById("breedGroup").value;
  var temps = getTemperaments();
  document.getElementById('matches').innerHTML = "";
  var weight = document.getElementById("weight").value;
  for (var i = 0; i < breedName.length; i++) {
    for (var j = 0; j < temps.length; j++) {
      if (temperament[i].includes(temps[j]) && (breedGroup[i] == group || group == 'Any') && Number(maxWeight[i]) <= weight && !matchingDogs.includes(breedName[i])) {
        matchingDogs.push(breedName[i]);
        matchingImages.push(image[i]);
        document.getElementById('matches').innerHTML += breedName[i] + "<br>";
        var el = document.createElement("img");
        el.setAttribute('src', image[i]);
        el.setAttribute('width', "30%");
        document.getElementById('matches').appendChild(el);
        document.getElementById('matches').innerHTML += "<br>Temperament: " + temperament[i].substring(1, temperament[i].length - 1) + "<br>Maximum Weight: " + maxWeight[i] + "<br><br><br>";

      }
    }

  }
  if (matchingDogs.length == 0) {
    document.getElementById('matches').innerHTML = "<br><br><br><br>No dogs matched your criteria. Try broadening your search!<br><br>";
    var el = document.createElement("img");
    el.setAttribute('src', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpVzkUIijaj15BiVqBQ0r7BPrQOhwjxSh13Q&usqp=CAU");
    el.setAttribute('width', "30%");
    document.getElementById('matches').appendChild(el);

  }
  console.log(matchingDogs);
  console.log(matchingImages);
}

*/
function selectAll(){
 if(document.getElementById("all").checked == true){
  for(var i in uniqueTemperaments){
    var el = document.getElementById(i);
    el.checked = true;

  }
 }
 else{
   for(var i in uniqueTemperaments){
    var el = document.getElementById(i);
    el.checked = false;
  }
 }
  
}


