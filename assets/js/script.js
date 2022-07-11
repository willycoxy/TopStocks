///newsLinks = ["https://www.w3schools.com/jsref/jsref_link.asp","link2","link3","link4"]

//function displaynews(){
 // var listEl = document.querySelector('#News');
  //var newsListEl = document.createElement('li');
  //newsListEl.innerHTML = newsLinks
 // listEl.appendChild(newsListEl);

  //for (let i = 0; i < newsLinks.length; i++){ //iterates as many times as array has entries
 // alert(newsLinks[i]);
 // html.news.createLabel(newsLinks[i])
  //}

//}

//displaynews();

//function news () {
   // var a = document.createElement('a');
   // var linkText = document.createTextNode('W3schools');
    //a.appendChild(linkText)
    //a.title = "W3schools"; 
    //a.href = "https://www.w3schools.com/jsref/jsref_link.asp"
    //document.body.appendChild(a);
//}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '86bfcf7030mshdfe33363a41a034p1c55dejsn8506727b4820',
		'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com'
	}
};

fetch('https://mboum-finance.p.rapidapi.com/ne/news/?symbol=AAPL%2CMSFT', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));




















//var requestOptions = {
    //method: 'GET',
    //redirect: 'follow'
  //};
  

  //fetch("https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=1neqoZzhRlJL2QiZGUp4pNhgJggajjpK", requestOptions)
    //.then(response => response.text())
    //.then(result => console.log(result))
    //.catch(error => console.log('error', error));


  //fetch("https://api.polygon.io/v1/marketstatus/now?apiKey=1neqoZzhRlJL2QiZGUp4pNhgJggajjpK")
    //.then(response => response.text())
    //.then(result => console.log(result))
    //.catch(error => console.log('error' , error))












    





