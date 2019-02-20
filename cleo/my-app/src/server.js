
var url = "api-ssl.bitly.com";


fetch(url, {
        method: 'post',
        headers: { 'Authorization': 'Basic 09957d150f25858794e5ff2b3f64ea8a44ea3b3d', 
					'Content-Type' : 'application/x-www-form-urlencoded' },
      			})
    .then(res => res.json())
    .then(json => console.log(json));



