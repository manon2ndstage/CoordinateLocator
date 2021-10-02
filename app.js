
var searchButton = document.querySelector("#search");
console.log(searchButton);

searchButton.addEventListener("click",searchlocation);
var country = document.querySelector("#country");
function searchlocation(){
    var lat = document.querySelector("#lat");
    var lon = document.querySelector("#lon");
    var url = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+lat.value+"&longitude="+lon.value+"&localityLanguage=en";
    fetch(url).then(response => response.json()).then(data => {
        
        if(data.countryName==""){
            country.innerHTML = "Location is in the sea";
        } 
        else{
            country.innerHTML = data.countryName;
        }   
        
        
    
    });
}