function getData() {
  let cityName = document.getElementById('city').value;
  // alert(cityName);
  let temp = "";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=9a523cebee2fa8a5873481b16344510d";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      var temp =  data.main.temp ;
      temp = temp + " Degree Celsius";
      var weatherType = data.weather[0].description
      document.getElementById('temperature').innerText = temp;
      document.getElementById('weatherType').innerText = weatherType ;
  });
  
}
