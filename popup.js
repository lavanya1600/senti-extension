var para = document.getElementById("url");

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	var url = tabs[0].url;
	
	para.innerText = url;
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {url: tabs[0].url}, function(response) {
   // console.log(response.farewell);
  });
});
