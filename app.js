// create an api key 
let weather = 
{
    apiKey: "b34afbf95637029737197a12c7f0867f",  
    // fetch 
    fetchWeather: function(city) {
        //get the data from the url and format it using json 
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey
        )
        // parse the data 
        .then((res) => res.json())
        // log data to the console
        .then((data) => this.displayWeather(data)); 

    }, 
    
    // display the weather 
    displayWeather: function(data) // data is from the specified city 
    {
        // extract all of the necessary information from the object data api
        const {name} = data;  
        //const {country} = data.sys.country; // get country
        const {icon,description} = data.weather[0]; // at the beginning of the api's weather array 
        const {temp, humidity} = data.main; // get the temp and humidity  
        
        // get the country 
        let country = document.querySelector('.country'); 
        // change the inner text 
        country.innerText = data.sys.country; 
    

        // display information to page
        document.querySelector('.city').innerText = "Weather in " + name; 
        document.querySelector('.temp').innerText = temp + " ° F ";
        document.querySelector('.icon').src= "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.humidity').innerText = " Humidity: " + humidity + "%"; 
       //document.querySelector('.country').innerText = ", " + country;


 

    },

    search: function () {
        this.fetchWeather(document.querySelector(".search").value);
    },

};

// grab button 
const search = document.querySelector('.but')

// add event listener 
search.addEventListener("click", function () {
    weather.search(); 
     
})