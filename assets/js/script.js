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

function getTicker () {
    fetch("https://api.polygon.io/v2/aggs/ticker/VOO/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=t6vX15DF8kEE3wQ4nnk9aEmGguUiai5H")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.results[0].v);
        const volume = data.results[0].v
        const high = data.results[0].h
        const low = data.results[0].l
        document.querySelector(".stockData").innerHTML = `Volume: ${volume} High: $${high} Low: $${low}`
    });
}

getTicker();



















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
