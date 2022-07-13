// Index Buttons
sPButtonEl = document.querySelector(".btn1")
dowJonesButtonEl = document.querySelector(".btn2");
nasdaqButtonEl = document.querySelector(".btn3");
stockTitleEl = document.querySelector(".stockTitle")

// Function that fetches api for displaying if that market is open or closed or not. 
// Displays the status in the far right of the navbar.
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

// Function that fetches api for info on Vanguard 500 etf that follows the S&P 500.
function getsP () {
    fetch("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?tickers=VOO&apiKey=97jcUfkUrkUqlBMzoexxjePUT1lnkBe4")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.tickers[0].day.v);
        const volume = data.tickers[0].day.v
        const open = data.tickers[0].day.o
        const high = data.tickers[0].day.h
        const low = data.tickers[0].day.l
        const close = data.tickers[0].day.c
        document.querySelector(".stockTitle").innerHTML = "Vanguard 500 Index Fund ETF"
        document.querySelector(".volume").innerHTML = `Volume: ${volume}`;
        document.querySelector(".open").innerHTML = `Open: ${open}`;
        document.querySelector(".high").innerHTML = `High: ${high}`;
        document.querySelector(".low").innerHTML = `Low: ${low}`;
        document.querySelector(".closer").innerHTML = `Close: ${close}`;
    });
}
// When sP Button is clicked getSp is displayed in the index card.
sPButtonEl.addEventListener("click", getsP);

// Function that fetches api for info on SPDR etf that follows the Dow Jones.
function getDowJones () {
    fetch("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?tickers=DIA&apiKey=97jcUfkUrkUqlBMzoexxjePUT1lnkBe4")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.tickers[0].day.v);
        const volume = data.tickers[0].day.v
        const open = data.tickers[0].day.o
        const high = data.tickers[0].day.h
        const low = data.tickers[0].day.l
        const close = data.tickers[0].day.c
        document.querySelector(".stockTitle").innerHTML = "SPDR Dow Jones Industrial Average ETF Trust"
        document.querySelector(".volume").innerHTML = `Volume: ${volume}`;
        document.querySelector(".open").innerHTML = `Open: ${open}`;
        document.querySelector(".high").innerHTML = `High: ${high}`;
        document.querySelector(".low").innerHTML = `Low: ${low}`;
        document.querySelector(".closer").innerHTML = `Close: ${close}`;
    });
}
// When dowJones Button is clicked getDowJones is displayed in the index card.
dowJonesButtonEl.addEventListener("click", getDowJones);

// Function that fetches api for info on QQQ etf that follows the Nasdaq.
function getNasdaq () {
    fetch("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/tickers?tickers=QQQ&apiKey=97jcUfkUrkUqlBMzoexxjePUT1lnkBe4")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.tickers[0].day.v);
        const volume = data.tickers[0].day.v
        const open = data.tickers[0].day.o
        const high = data.tickers[0].day.h
        const low = data.tickers[0].day.l
        const close = data.tickers[0].day.c
        document.querySelector(".stockTitle").innerHTML = "Invesco QQQ Trust Series 1"
        document.querySelector(".volume").innerHTML = `Volume: ${volume}`;
        document.querySelector(".open").innerHTML = `Open: ${open}`;
        document.querySelector(".high").innerHTML = `High: ${high}`;
        document.querySelector(".low").innerHTML = `Low: ${low}`;
        document.querySelector(".closer").innerHTML = `Close: ${close}`;
    });
}
// When nasdaq Button is clicked getNasdaq is displayed in the index card.
nasdaqButtonEl.addEventListener("click", getNasdaq);



//Function that fetches api for information on the current gainers in the stock market
//Fetched info is displayed in the Top Stocks Card.
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
    document.getElementById('e1').textContent = data.tickers[4].ticker
    document.getElementById('e2').textContent = `$ ${data.tickers[4].day.c}`
    document.getElementById('e3').textContent = `% ${data.tickers[4].todaysChangePerc}`
    document.getElementById('e4').textContent = data.tickers[4].day.v
  })


// const searching = doucment.getElementById("userInput");
// console.log(search)
// fetch('https://api.polygon.io/v2/reference/news?='+ searching +'&apiKey=97jcUfkUrkUqlBMzoexxjePUT1lnkBe4')
//   .then(response => response.json())
//   .then(data=>{
//     console.log(data);
//   })




  

  $(".btn1").on("click", function () {
    var text = $("#stockTitle").textContent;
    localStorage.setItem(text)
});


storeData();
function storeData () {
    var stats = stockTitleEl.textContent
    localStorage.setItem(".stockTitle", JSON.stringify(stats))
}

function time () {
    fetch("http://worldtimeapi.org/api/ip%22")
    .then(response => {
      return response.json();
    })
    .then(data => {
      const time = data.datetime.slice(11,19)
      console.log(data.datetime);
      document.querySelector(".timeDisplay").innerHTML = `Time: ${time}`;

    });
};
time ()


