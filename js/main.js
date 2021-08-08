const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
	searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
	searchEl.classList.add('focused');
	searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
	searchEl.classList.remove('focused');
	searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
	// console.log(window.scrollY);
	if (window.scrollY > 500) {
		//배지 요소 숨기기
		// badgeEl.style.display = 'none'; 
		// gsap.to(요소, 지속시간(초단위), 옵션); => 애니메이션효과
		gsap.to(badgeEl, .6, {
			opacity: 0,
			display: 'none'
		});
	}
	else {
		//배지 다시 보이게
		// badgeEl.style.display = 'block';
		gsap.to(badgeEl, .6, {
			opacity: 1,
			display: 'block'
		});
	}
}, 300));
// _.throttle(함수, 시간밀리세컨드단위) 밀리세컨드 단위 300밀리세컨드로 부하를 준다