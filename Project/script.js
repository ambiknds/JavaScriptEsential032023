function getData() {
  var cityName = document.getElementById('city').value;
  alert(cityName);
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=9a523cebee2fa8a5873481b16344510d";
  fetch(url).then((res)=>{
   res.json().then(()=>{
    console.log(res.body);
});
});
}
