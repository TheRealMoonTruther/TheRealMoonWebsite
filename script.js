function comparition() {
    let forcac = document.getElementByClassName("forcaci").value;
	let vigorc = document.getElementByClassName("vigorci").value;
	let percecaoc = document.getElementByClassName("percecaoci").value;
	let inteligenciac = document.getElementByClassName("inteligenciaci").value;
	let forca2 = document.getElementByClassName("forca2i").value;
	let vigor2 = document.getElementByClassName("vigor2i").value;
	let percecao2 = document.getElementByClassName("percecao2i").value;
	let inteligencia2 = document.getElementByClassName("inteligencia2i").value;
	
	let item1 = forcac * 0.10 + vigorc * 0.4 + percecaoc * 0.25 + inteligenciac * 0.25
	let item2 = forca2 * 0.10 + vigor2 * 0.4 + percecao2 * 0.25 + inteligencia2 * 0.25
	
	if (item1 < item2) {
	  alert("O item 1 é melhor");	
	} elif (item1 > item2) {
	  alert("O item 2 é melhor");	
	} else {
	  alert("Os dois items são iguais");	
	}
}

function worth() {
	let forcaw = document.getElementByClassName("forcawi").value;
	let vigorw = document.getElementByClassName("vigorwi").value;
	let percecaow = document.getElementByClassName("percecaowi").value;
	let inteligenciaw = document.getElementByClassName("inteligenciawi").value;
	let preco = document.getElementByClassName("precowi").value;
	  
    let item = forcaw * 0.10 + vigorw * 0.4 + percecaow * 0.25 + inteligenciaw * 0.25
	
	if (item1 < preco) {
	  alert("O item não vale a pena");	
	} else (item1 > preco) {
	  alert("O item vale a pena");	
}