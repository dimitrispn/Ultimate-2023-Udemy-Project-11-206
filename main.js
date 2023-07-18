const changePlanet = document.getElementById("planet")



changePlanet.addEventListener("click", () =>{
     fetch("https://swapi.dev/api/planets/3/")
        .then(response => response.json())
        .then(planet =>{
            console.log(planet);
        })
})