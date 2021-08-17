	// ------------------- 검색바 영역
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

	// ------------------------- 뱃지영역
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

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
		// to-top 버튼 보이게
		gsap.to(toTopEl, .2, {
			x: 0,
		});
	}
	else {
		//배지 다시 보이게
		// badgeEl.style.display = 'block';
		gsap.to(badgeEl, .6, {
			opacity: 1,
			display: 'block'
		});
		// to-top 숨기게
		gsap.to(toTopEl, .2, {
			x: 100,
		});
	}
}, 300));
// _.throttle(함수, 시간밀리세컨드단위) 밀리세컨드 단위, 300밀리세컨드로 부하를 준다

// to-top 스크롤 맨위로 올리기
toTopEl.addEventListener('click', function () {
	gsap.to(window, .7, {
		scrollTo: 0
	});
})


	// ----------------- 비주얼 영역
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
	// gsap.to(요소, 지속시간(초단위), 옵션); => 애니메이션효과
	gsap.to(fadeEl, 1, {
		delay: (index + 1) * .7, //하나씩 순차적으로 나오게 하기
		opacity: 1
	});
});

// ------------------------- 스와이퍼
// Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
	direction: 'vertical',
	autoplay: true,
	loop: true
});

new Swiper('.promotion .swiper-container', {
	// direction: 'horizontal', 기본값임
	slidesPerView: 3, //한번에 보여줄 슬라이드 개수 기본값은 1
	spaceBetween: 10, // 슬라이드 사이 여백
	centeredSlides: true, // 1번 슬라이드가 가운데 보이기
	loop: true,
	// autoplay: {
	// 	delay: 5000
	// },
	pagination: {
		el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
		clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
	},
	navigation: {
		prevEl: '.promotion .swiper-prev',
		nextEl: '.promotion .swiper-next'
	}
});
// ------------swiper 아래
new Swiper('.awards .swiper-container', {
	autoplay: true,
	loop: true,
	spaceBetween: 30,
	slidesPerView: 5,
	navigation: {
		prevEl: '.awards .swiper-prev',
		nextEl: '.awards .swiper-next'
	}
})


// -------------------------- 버튼누르면 숨기고 보이게 하기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
	isHidePromotion = !isHidePromotion
	if (isHidePromotion) {
		// 숨김 처리
		promotionEl.classList.add('hide');
	} else {
		// 보이게 처리
		promotionEl.classList.remove('hide');
	}
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
	// `.toFixed()`를 통해 반환된 문자 데이터를,
	// `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
	return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
  
function floatingObject(selector, delay, size) {
	// gsap.to(요소 , 시간, 옵션)
	gsap.to(
		selector, 
		random(1.5, 2.5), 
		{
			y: size,
			repeat: -1, // -1은 무한반복
			yoyo: true, // 다시 돌아가도록 설정
			ease: Power1.easeInOut, // 둥둥 떠다니듯이 속도 조절 Easing
			delay: random(0, delay) // 1초 뒤에 시작
		}
	); 
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// ----------------------------- scroll magic
const spyElse = document.querySelectorAll('section.scroll-spy');
spyElse.forEach(function (spyEl) {
	new ScrollMagic
		.Scene({
			triggerElement: spyEl, // 보여짐의 여부를 감시할 요소를 선택
			triggerHook: .8, // 위가 0이고 아래가 1, 감지되는 지점
		})
		.setClassToggle(spyEl, 'show')
		.addTo(new ScrollMagic.Controller());
})


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
