window.addEventListener('load', registerEvents,false);

var theCountApple = 0;
var theCountAvocado = 0;
var theCountBanana = 0;
var theCountStrawberry = 0;
var theCountMelon = 0;
var theCountMango = 0;


function registerEvents(a) {
  document.getElementById("incrementButtonApple").addEventListener('click', increaseCountApple,false);
  document.getElementById("decrementButtonApple").addEventListener('click', decreaseCountApple,false);
	document.getElementById("incrementButtonAvocado").addEventListener('click', increaseCountAvocado,false);
  document.getElementById("decrementButtonAvocado").addEventListener('click', decreaseCountAvocado,false);
	document.getElementById("incrementButtonBanana").addEventListener('click', increaseCountBanana,false);
  document.getElementById("decrementButtonBanana").addEventListener('click', decreaseCountBanana,false);
	document.getElementById("incrementButtonStrawberry").addEventListener('click', increaseCountStrawberry,false);
  document.getElementById("decrementButtonStrawberry").addEventListener('click', decreaseCountStrawberry,false);
	document.getElementById("incrementButtonMelon").addEventListener('click', increaseCountMelon,false);
  document.getElementById("decrementButtonMelon").addEventListener('click', decreaseCountMelon,false);
	document.getElementById("incrementButtonMango").addEventListener('click', increaseCountMango,false);
  document.getElementById("decrementButtonMango").addEventListener('click', decreaseCountMango,false);
}

function increaseCountApple(a) {
  theCountApple++;
  document.getElementById("currentCountApple").innerHTML = theCountApple;

}

function decreaseCountApple(a) {
if (theCountApple > 0) {
  theCountApple--;
}
      document.getElementById("currentCountApple").innerHTML = theCountApple;
			
}

// Countup and Countdown Functions for Avocado


function increaseCountAvocado(b) {
  theCountAvocado++;
  document.getElementById("currentCountAvocado").innerHTML = theCountAvocado;

}

function decreaseCountAvocado(b) {
if (theCountAvocado > 0) {
  theCountAvocado--;
}
      document.getElementById("currentCountAvocado").innerHTML = theCountAvocado;
			
}

// Countup and Countdown Functions for Banana

function increaseCountBanana(c) {
  theCountBanana++;
  document.getElementById("currentCountBanana").innerHTML = theCountBanana;

}

function decreaseCountBanana(c) {
if (theCountBanana > 0) {
  theCountBanana--;
}
      document.getElementById("currentCountBanana").innerHTML = theCountBanana;
			
}

// Countup and Countdown Functions for Strawberry

function increaseCountStrawberry(d) {
  theCountStrawberry++;
  document.getElementById("currentCountStrawberry").innerHTML = theCountStrawberry;

}

function decreaseCountStrawberry(d) {
if (theCountStrawberry > 0) {
  theCountStrawberry--;
}
      document.getElementById("currentCountStrawberry").innerHTML = theCountStrawberry;
			
}

// Countup and Countdown Functions for Melon

function increaseCountMelon(e) {
  theCountMelon++;
  document.getElementById("currentCountMelon").innerHTML = theCountMelon;

}

function decreaseCountMelon(e) {
if (theCountMelon > 0) {
  theCountMelon--;
}
      document.getElementById("currentCountMelon").innerHTML = theCountMelon;
			
}

// Countup and Countdown Functions for Mango

function increaseCountMango(f) {
  theCountMango++;
  document.getElementById("currentCountMango").innerHTML = theCountMango;

}

function decreaseCountMango(f) {
if (theCountMango > 0) {
  theCountMango--;
}
      document.getElementById("currentCountMango").innerHTML = theCountMango;
			
}