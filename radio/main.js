window.onload = function() {

	var list = document.querySelector('#list');

	list.addEventListener('click', (e) => {
		if(e.target.tagName === 'INPUT') {
			let checkedItem = list.querySelector('input:checked');
			console.log(checkedItem.id);
		}
	});
}