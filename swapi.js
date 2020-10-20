
var donneesTatooine = {}

fetch('https://swapi.dev/api/planets/1/').then(function(response){
    return response.json();
})
.then(function(data){
    
    donneesTatooine = data;
    console.log(donneesTatooine);
    showPlanet(donneesTatooine);
});

function showPlanet(donneesTatooine){
    
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const para = document.createElement('p');

    section.setAttribute('class', 'tatooine');

    heading.textContent = donneesTatooine.name;

    para.textContent = 'Gravité : ' + donneesTatooine.gravity + 
    '\r\nClimat : ' + donneesTatooine.climate + '\r\nPopulation : ' + donneesTatooine.population + '\nDiamètre : ' + donneesTatooine.diameter+ '\nTerrain : ' + donneesTatooine.terrain;

    document.body.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
}

var donneesNewHope = {}

fetch('https://swapi.dev/api/films/1/').then(function(response){
    return response.json();
})
.then(function(data){
    
    donneesNewHope = data;
    console.log(donneesNewHope);
    showFilm(donneesNewHope);
});

function showFilm(donneesNewHope){
    
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const para = document.createElement('p');
    

    section.setAttribute('class', 'newHope');

    heading.textContent = donneesNewHope.title;

    para.textContent = 'Directeur : ' + donneesNewHope.director + '\n';
    para.textContent += 'Producteur : ' + donneesNewHope.producer ;
    para.textContent += 'Date de sortie : ' + donneesNewHope.release_date;
    para.textContent += 'Texte d\'ouverture : ' + donneesNewHope.opening_crawl;

    document.body.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
}

var donneesXWing = {}

fetch('https://swapi.dev/api/starships/12/').then(function(response){
    return response.json();
})
.then(function(data){
    
    donneesXWing = data;
    console.log(donneesXWing);
    showVehicles(donneesXWing);
});

function showVehicles(donneesXWing){
    
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const para = document.createElement('p');

    section.setAttribute('class', 'xWing');

    heading.textContent = donneesXWing.name;

    para.textContent = 'Modèle : ' + donneesXWing.model + 
    '\r\nCoûts en crédits : ' + donneesXWing.cost_in_credits + '\r\nLongueur : ' + donneesXWing.length + '\nVitesse maximum : ' + donneesXWing.max_atmosphering_speed + '\nEquipage : ' + donneesXWing.crew;

    document.body.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
}