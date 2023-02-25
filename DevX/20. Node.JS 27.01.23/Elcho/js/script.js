const arrContainer = document.getElementById("notes-array");
arrContainer.innerHTML = Array.from([1, 2, 3], (_, i) => {
	return `
	<div id="note-${i}" class="note-container">
	<span>
	Array Methods
	<button id="del-${i}" class="delete-btn">-</button>
	<button id="open-${i}" class="open-btn">&and;</button>
	<button id="close-${i}" class="close-btn">&or;</button>
	</span>
	<div id="note-details-${i}"></div>
	</div>
	`;
});

const openButtons = document.querySelectorAll(".open-btn");
const closeButtons = document.querySelectorAll(".close-btn");
const deleteButtons = document.querySelectorAll(".delete-btn");

for (let i = 0; i < openButtons.length; i++) {
	(function (idx) {
		openButtons[idx].addEventListener("click", function (event) {
			event.preventDefault();
			// openButtons[idx].classList.add("hidden");
			closeButtons[idx].classList.remove("hidden");
			const currentNote = document.getElementById(`note-details-${idx}`);
			currentNote.innerHTML = "<div>TEST A NODE BODY.</div>";
			console.log("click", openButtons[idx]);
		});
		closeButtons[idx].addEventListener("click", function (event) {
			event.preventDefault();
			// closeButtons[idx].classList.remove("hidden");
			openButtons[idx].classList.remove("hidden");
			const currentNote = document.getElementById(`note-details-${idx}`);
			console.log(currentNote.innerHTML);
			currentNote.innerHTML = "";
			console.log("click", closeButtons[idx]);
		});
		deleteButtons[idx].addEventListener("click", function (event) {
			event.preventDefault();
			const currentNote = document.getElementById(`note-${idx}`);
			currentNote.remove();
		});
	})(i);
}
