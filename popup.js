function getLyrics() {
	chrome.tabs.getSelected(null, function(tab) {
		if (tab.url.match(/www\.kasi-time\.com\/item-[0-9]*\.html$/) != null) {
			chrome.tabs.executeScript(null, {"file": "get_lyrics/kasitime.js"});
		} else if (tab.url.match(/j-lyric\.net\/artist\/.*\/.*\.html$/) != null) {
			chrome.tabs.executeScript(null, {"file": "get_lyrics/j-lyric.js"});
		} else if (tab.url.match(/kashinavi\.com\/song_view\.html\?[0-9]*$/) != null) {
			chrome.tabs.executeScript(null, {"file": "get_lyrics/kashinavi.js"});
		} else if (tab.url.match(/www\.kget\.jp\/lyric\/.*\/.*$/) != null) {
			chrome.tabs.executeScript(null, {"file": "get_lyrics/kget.js"});
		}
		} else if (tab.url.match(/petitlyrics\.com\/lyrics\/[0-9]*$/) != null) {
			chrome.tabs.executeScript(null, {"file": "get_lyrics/petitlyrics.js"});
		}
	});
}

document.getElementById("button_copy").onclick = function() {
	getLyrics();
}
