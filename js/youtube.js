// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', { // html의 player 
	videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
	playerVars: {
		autoplay: true, // 자동재생유무
		loop: true, // 반복 재생 유무
		playlist: 'An6LvWQuj_8'
	},
	events: {
		// 영상이 준비가 될때 실행되는 메소드
		onReady: function (event) {
			event.target.mute() //음소거
		}
	}
  });
}