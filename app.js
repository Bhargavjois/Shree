const imageArray = [...document.getElementsByClassName("image")];
imageArray.forEach(element => {
	element.addEventListener("click", (ev) => {
		let elementClass = element.classList[2];
		
		if (elementClass != "main"){
			
			let activeElement = document.getElementsByClassName("main")[0];
			let textElements = document.getElementsByClassName("text");
			
			activeElement.classList.remove("main");
			activeElement.classList.add(elementClass);
			
			element.classList.remove(elementClass);
			element.classList.add("main");
			
			[...textElements].forEach(text => {
				if (text.dataset.connect == element.classList[1]){
					
					let activeText = document.getElementsByClassName("mainText")[0];
					activeText.classList.remove("mainText");
					activeText.classList.add(text.classList[2]);
					
					text.classList.remove(text.classList[2]);
					text.classList.add("mainText");
				}
			})
		}
	})
})


const buttonArray = [...document.getElementsByClassName("numButton")];
const transformValue = 99;
let lastInTop = 0;

buttonArray.forEach(element => {
	element.addEventListener("click", (ev) => {
		document.getElementsByClassName("active")[0].classList.remove("active");
		element.classList.add("active");
		
		let i = parseInt(element.innerText);
		let isExec = false;
		
		while ( i <= 3 &&  parseInt(element.innerText) <= lastInTop ){
			document.getElementsByClassName(`card_${i}`)[0].animate({
				transform: `translateY(-${(100 * (i - 1))}%)`,
			},{duration: 500, fill: "forwards"});
			i = i + 1;
			lastInTop = parseInt(element.innerText);
			isExec = true;
		}
		
		while ( i >= 2 && isExec == false){
			document.getElementsByClassName(`card_${i - 1}`)[0].animate({
				transform: `translateY(-${transformValue * (i - 1)}%)`,
			},{duration: 500, fill: "forwards"});
			i = i - 1;
			lastInTop = parseInt(element.innerText) - 1;
		}
		
		document.getElementsByClassName("activeCard")[0].classList.remove("activeCard");
		document.getElementsByClassName(`card_${element.innerText}`)[0].classList.add("activeCard");
	})
})


const wishBox = document.getElementById("makWish");
const msgBox = document.getElementById("msgMe");
let extendedMsg = false;
let extendedWish = false;

function hideShowMessageBox(){
	if (!extendedMsg){
		document.getElementById("msg").animate({
			height: "200px",
		}, {duration: 500, fill:"forwards"});
		extendedMsg = true;
		msgBox.classList.add("activeClick");
	} else {
		document.getElementById("msg").animate({
			height: "0px",
		}, {duration: 500, fill:"forwards"});
		extendedMsg = false;
		msgBox.classList.remove("activeClick");
	}
}

function hideShowWishBox(){
	if (!extendedWish){
		document.getElementById("ta").animate({
			height: "200px",
		}, {duration: 500, fill:"forwards"});
		extendedWish = true;
		wishBox.classList.add("activeClick");
	} else {
		document.getElementById("ta").animate({
			height: "0px",
		}, {duration: 500, fill:"forwards"});
		extendedWish = false;
		wishBox.classList.remove("activeClick");
	}
}

wishBox.addEventListener("click", event => {
	if (extendedMsg){
		hideShowMessageBox();
		extendedMsg = false;
	}
	hideShowWishBox();
	setTimeout(() => {
		if (extendedWish){
			window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		}
	}, 500);
})

msgBox.addEventListener("click", event => {
	if (extendedWish){
		hideShowWishBox();
		extendedWish = false;
	}
	hideShowMessageBox();
	
	setTimeout(() => {
		if (extendedMsg){
			window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
		}
	}, 500);
})