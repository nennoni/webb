let slideIndex = 0;
slideShow();

function slideShow(){
	let i;
	let slides =  document.getElementsByClassName("slide")

	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length){
		slideIndex = 1
	}
	slides[slideIndex - 1].style.display = "block";
	setTimeout(slideShow, 3000);
}


