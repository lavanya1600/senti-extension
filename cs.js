

async function process(){

	var getURL = new Promise(function(resolve,reject){

			chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
			resolve(request.url);
		});
	});

	 return await getURL;
	
}

process().then(function(data){
	console.log(data);
	var mod_data = data.substring(30);
	console.log("http://localhost:3000"+mod_data);
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
       }
    };
    xhttp.open("GET", "http://localhost:3000/"+mod_data, true);
    xhttp.send(); 

});
