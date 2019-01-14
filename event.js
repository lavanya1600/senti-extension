/*chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {url: "Hello"}, function(response) {
   // console.log(response.farewell);
  });
});

console.log("run"); */

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
		
		if(changeInfo.status=="complete"){
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  				chrome.tabs.sendMessage(tabs[0].id, {url: tabs[0].url}, function(response) {
   			// console.log(response.farewell);
 			 });
			});

		}

});