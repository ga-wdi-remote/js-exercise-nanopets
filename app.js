var nanoPet = {
  name: "Gertrude",
  foodInTummy: 0
};

var namePet = function(){
    nanoPet.name = prompt("What is your pet's new name?");
    showMenu();
};

var feedPet = function(){
    nanoPet.foodInTummy += 5;
    showMenu();
};

var exercisePet = function(){
  nanoPet.foodInTummy -= 3;
  showMenu();
};

var showStatus = function(){
  alert(nanoPet.name + " has " + nanoPet.foodInTummy + " food in its tummy");
}

var showMenu = function(){
  showStatus();
  var choice = prompt("What do you want to do? \n 1. name pet \n 2. feed pet \n 3. exercise pet");

  if (choice === "1"){
    namePet();
  } else if (choice === "2") {
    feedPet();
  } else if (choice === "3"){
    exercisePet();
  }
};

showMenu();
