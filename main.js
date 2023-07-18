const changePlanet = document.getElementById("planet")


changePlanet.addEventListener("click", () =>{
    const randomPlanet = Math.ceil(Math.random()*10)
     fetch(`https://swapi.dev/api/planets/${randomPlanet}/`)
        .then(response => response.json())
        .then(planet =>{
            console.log(planet);
        })
})