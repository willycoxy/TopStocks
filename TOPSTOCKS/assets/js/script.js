// var apiUrl = "https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?include_otc=false&apiKey=97jcUfkUrkUqlBMzoexxjePUT1lnkBe4"
//   async function getData () {
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       console.log(data.tickers.day);

fetch("https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/gainers?include_otc=false&apiKey=97jcUfkUrkUqlBMzoexxjePUT1lnkBe4")
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })


      // document.getElementById('a1').textContent = data
      // document.getElementById('a2').textContent = data
      // document.getElementById('a3').textContent = data
      // document.getElementById('a4').textContent = data
      // document.getElementById('b1').textContent = data
      // document.getElementById('b2').textContent = data
      // document.getElementById('b3').textContent = data
      // document.getElementById('b4').textContent = data
      // document.getElementById('c1').textContent = data
      // document.getElementById('c2').textContent = data
      // document.getElementById('c3').textContent = data
      // document.getElementById('c4').textContent = data
      // document.getElementById('d1').textContent = data
      // document.getElementById('d2').textContent = data
      // document.getElementById('d3').textContent = data
      // document.getElementById('d4').textContent = data
  
