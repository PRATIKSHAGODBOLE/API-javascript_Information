const apiurl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

function getapiurl(url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((coin) => {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');


        

        var coinImage = document.createElement('img');
        coinImage.src = coin.image + coin.id;
        td1.appendChild(coinImage);

        td2.innerHTML = coin.symbol;
        td3.innerHTML = coin.current_price;
        td4.innerHTML = coin.total_volume;
        td5.innerHTML = coin.price_change_24h
        td6.innerHTML = coin.market_cap_change_24h
      
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);



        document.querySelector('#getOutput').appendChild(tr);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

getapiurl(apiurl);
