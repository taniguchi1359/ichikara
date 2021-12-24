function preview(id) {
	const val = document.getElementById(id).value;
	const prev = document.getElementById('preview_' + id);
	if(!val) {
		document.getElementById('image_tag').textContent ='';
		prev.innerHTML = '';
		return;
	}
	const img = data[val];
	prev.innerHTML = '<img src="' + img.src + '" alt="' + img.alt + '" width="'+document.getElementById('image-slider').value+'" height="auto">';
	document.getElementById('image_tag').textContent = '[img id='+val+'width='+document.getElementById('image-slider').value+']';
}

window.onload = () => {
	document.getElementById('icon').onchange = function() { preview('icon'); };
	document.getElementById('image').onchange = function() { preview('image'); };
	document.getElementById('image-slider').oninput = function() {
		document.getElementById('display-size').textContent = this.value;
		const image = document.querySelector('#preview_image img');
		if(!image) {
			return;
		}
		image.width = this.value;
		document.getElementById('image_tag').textContent = '[img id='+document.getElementById('image').value+'width='+this.value+']';
	};
};


