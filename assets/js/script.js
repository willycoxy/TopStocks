<<<<<<< feature/search-ticker
sPButtonEl = document.querySelector(".btn1")

function marketStatus () {
    fetch("https://api.polygon.io/v1/marketstatus/now?apiKey=t6vX15DF8kEE3wQ4nnk9aEmGguUiai5H")
    .then(response => {
        return response.json();
    })
    .then(data => {
        const status = data.market
        console.log(data.market);
        document.querySelector(".statusDisplay").innerHTML = `Market: ${status}`;
    });
}

marketStatus();

function getsP () {
    fetch("https://api.polygon.io/v2/aggs/ticker/VOO/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=t6vX15DF8kEE3wQ4nnk9aEmGguUiai5H")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.results[0].v);
        const volume = data.results[0].v
        const high = data.results[0].h
        const low = data.results[0].l
        document.querySelector(".volume").innerHTML = `Volume: ${volume}`
        document.querySelector(".high").innerHTML = `High: ${high}`
        document.querySelector(".low").innerHTML = `Low: ${low}`
    });
}

sPButtonEl.addEventListener("click", getsP);

// var getTicker = fetch("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?apiKey=97jcUfkUrkUqlBMzoexxjePUT1lnkBe4").then(function(response) {
//     response.json().then(function(data) {
//         console.log(data);
//     })
// }) 

// var marketStatus = function () {
//     var polygonApiUrl = "https://api.polygon.io/v1/marketstatus/now?apiKey=t6vX15DF8kEE3wQ4nnk9aEmGguUiai5H";

//     fetch(polygonApiUrl).then(function(response) {
//         response.json().then(function(data) {
//             console.log(data);
//         });
//     });
// };

// marketStatus();



// var getTicker = fetch("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?tickers=VOO&apiKey=97jcUfkUrkUqlBMzoexxjePUT1lnkBe4").then(function(response) {
//     response.json().then(function(data) {
//         console.log(data);
//     })
// }) 

// getTicker();


// var getTicker = function () {
//     var polygonApiUrl = "https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?apiKey=97jcUfkUrkUqlBMzoexxjePUT1lnkBe4";

//     fetch(polygonApiUrl).then(function(response) {
//         response.json().then(function(data) {
//             console.log(data);
//         });
//     });
// };

// getTicker();


// https://api.polygon.io/v3/reference/tickers?ticker=GOOGL&active=true&sort=ticker&order=asc&limit=10&apiKey=t6vX15DF8kEE3wQ4nnk9aEmGguUiai5H

// https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?apiKey=97jcUfkUrkUqlBMzoexxjePUT1lnkBe4
// marketStatus();
=======

fetch("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?include_otc=false&apiKey=97jcUfkUrkUqlBMzoexxjePUT1lnkBe4")
  .then(response => response.json())
  .then(data => {
    console.log(data.tickers[0])
    document.getElementById('a1').textContent = data.tickers[0].ticker
    document.getElementById('a2').textContent = `$ ${data.tickers[0].day.c}`
    document.getElementById('a3').textContent = `% ${data.tickers[0].todaysChangePerc}`
    document.getElementById('a4').textContent = data.tickers[0].day.v
    document.getElementById('b1').textContent = data.tickers[1].ticker
    document.getElementById('b2').textContent = `$ ${data.tickers[1].day.c}`
    document.getElementById('b3').textContent = `% ${data.tickers[1].todaysChangePerc}`
    document.getElementById('b4').textContent = data.tickers[1].day.v
    document.getElementById('c1').textContent = data.tickers[2].ticker
    document.getElementById('c2').textContent = `$ ${data.tickers[2].day.c}`
    document.getElementById('c3').textContent = `% ${data.tickers[2].todaysChangePerc}`
    document.getElementById('c4').textContent = data.tickers[2].day.v
    document.getElementById('d1').textContent = data.tickers[3].ticker
    document.getElementById('d2').textContent = `$ ${data.tickers[3].day.c}`
    document.getElementById('d3').textContent = `% ${data.tickers[3].todaysChangePerc}`
    document.getElementById('d4').textContent = data.tickers[3].day.v
  })

  function marketStatus () {
    fetch("https://api.polygon.io/v1/marketstatus/now?apiKey=t6vX15DF8kEE3wQ4nnk9aEmGguUiai5H")
    .then(response => {
        return response.json();
    })
    .then(data => {
        const status = data.market
        console.log(data.market);
        document.querySelector(".statusDisplay").innerHTML = `Market: ${status}`;
    });
}

marketStatus();

fetch('https://finviz2.p.rapidapi.com/api/v1/news?type=%3CREQUIRED%3E/rapidapi-key=14b035a1f0mshcc430d50a1c6dc4p1056b6jsn7b1435')
  .then(response => response.json())
  .then(data=>{
    console.log(response)
  })



    



>>>>>>> main
