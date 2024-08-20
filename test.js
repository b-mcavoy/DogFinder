var campus = document.getElementById("campus").value;
 var buildingSelect = document.getElementById("buildingSelect");

if(campus.equals("Belfield")){
  var element = document.createElement("option");
  element.innerHTML = "Library";
  element.value = "Library";
  buildingSelect.appendChild(element);
}
else{
  var element = document.createElement("option");
  element.innerHTML = "SCAS";
  element.value = "SCAS";
  buildingSelect.appendChild(element);

  var element2 = document.createElement("option");
  element2.innerHTML = "Randolph";
  element2.value = "Randolph";
  buildingSelect.appendChild(element2);
}
