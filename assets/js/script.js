
fetch("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?include_otc=false&apiKey=97jcUfkUrkUqlBMzoexxjePUT1lnkBe4")
  .then(response => response.json())
  .then(data => {
    console.log(data.tickers[0])
    document.getElementById('a1').textContent = data.tickers[0].ticker
    document.getElementById('a2').textContent = data.tickers[0].day.c
    document.getElementById('a3').textContent = data.tickers[0].todaysChangePerc
    document.getElementById('a4').textContent = data.tickers[0].day.v
    document.getElementById('b1').textContent = data.tickers[1].ticker
    document.getElementById('b2').textContent = data.tickers[1].day.c
    document.getElementById('b3').textContent = data.tickers[1].todaysChangePerc
    document.getElementById('b4').textContent = data.tickers[1].day.v
    document.getElementById('c1').textContent = data.tickers[2].ticker
    document.getElementById('c2').textContent = data.tickers[2].day.c
    document.getElementById('c3').textContent = data.tickers[2].todaysChangePerc
    document.getElementById('c4').textContent = data.tickers[2].day.v
    document.getElementById('d1').textContent = data.tickers[3].ticker
    document.getElementById('d2').textContent = data.tickers[3].day.c
    document.getElementById('d3').textContent = data.tickers[3].todaysChangePerc
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

    



