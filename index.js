let likeBtn = document.getElementById("like");
let like = document.querySelector(".like-span");
let dislikeBtn = document.getElementById("dislike");
let dislike = document.querySelector(".dislike-span");
let i = 0;
let d = 0;

likeBtn.addEventListener("click", function(){
    i++;
	like.innerHTML = `(${i})`;
});
dislikeBtn.addEventListener("click", function(){
    i++;
	dislike.innerHTML = `(${i})`;
});

const row = document.getElementById("TxtRows");
const colm = document.getElementById("txtColumns");
const submit = document.getElementById("submit");
const root = document.getElementById("root");
let table = "";
submit.addEventListener("click", function () {
	for (let i = 1; i <= colm.value; i++) {
		table += "<tr>";

		for (let j = 1; j <= row.value; j++) {
			table += "<td>" + j * i + "</td>";
		}
		table += "</tr>";
	}
	root.innerHTML = "<table border=1>" + table + "</table>";
});

const img = document.querySelector("#img");
const smile = document.getElementById("smile");
const sad = document.getElementById("sad");

sad.addEventListener("click", () => {
	smile.classList.remove("active");
	img.classList.remove("smile-img");
	img.classList.add("sad-img");
	sad.classList.add("active");
});

smile.addEventListener("click", () => {
	img.classList.remove("sad-img");
	sad.classList.remove("active");
	smile.classList.add("active");
	img.classList.add("smile-img");
});
