const addBtn = document.querySelector('#addBtn');
const removeBtn = document.querySelector('#removeBtn');
const section = document.querySelector('#imgBlock');
let inputName = document.querySelector('#inputName');

async function getGif() {
	const getResult = await axios.get(`http://api.giphy.com/v1/gifs/random?tag=${inputName.value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
	let result = getResult.data.data.fixed_height_downsampled_url;
	let newImg = createImg(result);
	return section.append(newImg);
}

function createImg(link) {
	const newImg = document.createElement('img');
	newImg.setAttribute("src", link);
	return newImg;
}

addBtn.addEventListener('click', function(e) {
	e.preventDefault();
	getGif();
});

removeBtn.addEventListener('click', function(e) {
	e.preventDefault();
	section.innerHTML = '';
	inputName.value = '';
})
