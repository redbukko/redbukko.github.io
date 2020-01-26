$(function () {

    loadGoogleAnalytics(); // Load Google Analytics

});

function loadGoogleAnalytics() {
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'UA-147961672-1');
}