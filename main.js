const changePlanet = document.getElementById("planet")
const planetName = document.querySelector("#planetName")

changePlanet.addEventListener("click", () =>{
    const randomPlanet = Math.ceil(Math.random()*60)
     fetch(`https://swapi.dev/api/planets/${randomPlanet}/`)
        .then(response => response.json())
        .then(planet =>{
            // console.log(planet);
            planetName.innerHTML = planet.name
            // console.log(changePlanet);
            // changePlanet.innerHTML = planet.name
            
        })
})