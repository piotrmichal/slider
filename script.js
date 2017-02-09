document.addEventListener('DOMContentLoaded', function() {
	var leftArrow = document.getElementById('left');
		rightArrow = document.getElementById('right');
		imgBox = document.getElementsByClassName('img-box')[0];
		img = document.getElementsByTagName('img');
		bulletBox = document.getElementsByClassName('bullet-box')[0];
		bullets = [];
		width = 90;
		currentImg = 0;

	for (let i = 0; i < img.length; i++) {
		let bullet = document.createElement('span');
		bullet.classList.add('bullet');
		bulletBox.appendChild(bullet);
		bullets.push(bullet);

		bullet.addEventListener('click', function() {
			currentImg = i;
			switchImg();
		}, false);
	}

	function switchImg() {
		imgBox.style.left = -width * currentImg + 'rem';
	
		bullets.forEach(function(elem, i) {
			i === currentImg ? elem.classList.add('active') : elem.classList.remove('active');
		});
	};

	leftArrow.addEventListener('click', function() {
		currentImg --;
		if (currentImg < 0) {
            currentImg = img.length -1;
        }

        switchImg();
	}, false);

	rightArrow.addEventListener('click', function() {
		currentImg ++;
		if (currentImg >= img.length) {
            currentImg = 0;
        }
		
		switchImg();
	}, false);

	switchImg();
});