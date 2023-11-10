document.addEventListener("DOMContentLoaded", () => {
	const title = document.querySelector('.title');
	const cursor = document.createElement('div');
	const cursorWidth = 25;
	const cursorHeight = 25;
	const cursorWidthHover = 100;
	const cursorHeightHover = 100;
	cursor.classList.add("cursor");
	document.body.appendChild(cursor);

	document.body.addEventListener("mousemove", (e) => {
		let x = e.clientX;
		let y = e.clientY;

		const rect = title.getBoundingClientRect();
		const 
		inTitle = x > rect.left && x < rect.right && y > rect.top && y < rect.bottom;

		if (inTitle) {
			cursor.style.top = (y - cursorHeightHover / 2) + "px";
			cursor.style.left = (x - cursorWidthHover / 2) + "px";
			cursor.style.width = cursorWidthHover + "px";
			cursor.style.height = cursorHeightHover + "px";
		} else {
			cursor.style.top = (y - cursorHeight / 2) + "px";
			cursor.style.left = (x - cursorWidth / 2) + "px";
			cursor.style.width = cursorWidth + "px";
			cursor.style.height = cursorHeight + "px";
		}
	})
})

