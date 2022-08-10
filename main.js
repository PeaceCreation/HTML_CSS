let links = document.querySelectorAll(".links li");

links.forEach( link =>{
	link.addEventListener("click", (e)=>{
		e.target.parentElement.querySelectorAll(".active").forEach(li =>{
 			li.classList.remove("active");
		});
		e.target.classList.add("active");
	});
});