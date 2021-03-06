var title = null;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	//読込中の場合はタイトル等取れない場合がある
	if (changeInfo.status === "loading") {
		return;
	}
	if (tab.url.match(/www\.kasi-time\.com\/item-[0-9]*\.html$/) != null) {
		//URLが歌詞タイムの歌詞ページだったらアイコンをアドレスバーに表示する
		chrome.pageAction.show(tabId);

		chrome.tabs.executeScript(null,
			{"code":"document.getElementsByClassName('person_list_and_other_contents')[0].getElementsByTagName('h1')[0].innerHTML"
			}, function(result) {
				title = result;
			});
	} else if (tab.url.match(/j-lyric\.net\/artist\/.*\/.*\.html$/) != null) {
		//URLがJ-Lyric.netの歌詞ページだったらアイコンをアドレスバーに表示する
		chrome.pageAction.show(tabId);

		chrome.tabs.executeScript(null,
			{"code":"document.getElementsByClassName('caption')[0].getElementsByTagName('h2')[0].innerHTML"
			}, function(result) {
				title = result;
			});
	} else if (tab.url.match(/kashinavi\.com\/song_view\.html\?[0-9]*$/) != null) {
		//URLが歌詞ナビの歌詞ページだったらアイコンをアドレスバーに表示する
		chrome.pageAction.show(tabId);

		chrome.tabs.executeScript(null,
				{"code":"document.getElementsByTagName('title')[0].innerHTML.replace(/ - 歌詞ナビ/g, '')"
				}, function(result) {
					title = result;
				});
	} else if (tab.url.match(/www\.kget\.jp\/lyric\/.*\/.*$/) != null) {
		//URLが歌詞GETの歌詞ページだったらアイコンをアドレスバーに表示する
		chrome.pageAction.show(tabId);

		chrome.tabs.executeScript(null,
				{"code":"document.getElementById('status-heading').getElementsByTagName('h1')[0].innerHTML.replace(/<strong>/g, '').replace(/<\\/strong>/g, '')"
				}, function(result) {
					title = result;
				});
	} else if (tab.url.match(/petitlyrics\.com\/lyrics\/[0-9]*$/) != null) {
		//URLがプチリリの歌詞ページだったらアイコンをアドレスバーに表示する
		chrome.pageAction.show(tabId);

		chrome.tabs.executeScript(null,
			{"code":"document.getElementsByClassName('title-bar')[0].innerHTML"
			}, function(result) {
				title = result;
			});
	}
});
