window.onload = inicio;

function inicio(){
	new Glide('.glide', {
		autoplay:2000,
		hoverpause:true,
		perView:1
	}).mount();
}
