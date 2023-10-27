const image = document.querySelector('img');
const input = document.querySelector('input');

input.addEventListener('change', (e) => {
	image.src = URL.createObjectURL(e.target.files[0]);
});
