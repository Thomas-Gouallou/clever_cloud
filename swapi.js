
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
    const planet = document.getElementById('planet')
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const para = document.createElement('p');

    section.setAttribute('class', 'planets');

    heading.textContent = donneesTatooine.name;

    para.textContent = 'Gravité : ' + donneesTatooine.gravity + 
    '\r\nClimat : ' + donneesTatooine.climate + '\r\nPopulation : ' + donneesTatooine.population + '\nDiamètre : ' + donneesTatooine.diameter+ '\nTerrain : ' + donneesTatooine.terrain;

    planet.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
}

var donneesAlderaan = {}

fetch('https://swapi.dev/api/planets/2/').then(function(response){
    return response.json();
})
.then(function(data){
    
    donneesAlderaan = data;
    console.log(donneesAlderaan);
    showPlanet(donneesAlderaan);
});

function showPlanet(donneesAlderaan){
    const planet = document.getElementById('planet')
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const para = document.createElement('p');

    section.setAttribute('class', 'planets');

    heading.textContent = donneesAlderaan.name;

    para.textContent = 'Gravité : ' + donneesAlderaan.gravity + 
    '\r\nClimat : ' + donneesAlderaan.climate + '\r\nPopulation : ' + donneesAlderaan.population + '\nDiamètre : ' + donneesAlderaan.diameter+ '\nTerrain : ' + donneesAlderaan.terrain;

    planet.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
}

var donneesYavin = {}

fetch('https://swapi.dev/api/planets/3/').then(function(response){
    return response.json();
})
.then(function(data){
    
    donneesYavin = data;
    console.log(donneesYavin);
    showPlanet(donneesYavin);
});

function showPlanet(donneesYavin){
    const planet = document.getElementById('planet')
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const para = document.createElement('p');

    section.setAttribute('class', 'planets');

    heading.textContent = donneesYavin.name;

    para.textContent = 'Gravité : ' + donneesYavin.gravity + 
    '\r\nClimat : ' + donneesYavin.climate + '\r\nPopulation : ' + donneesYavin.population + '\nDiamètre : ' + donneesYavin.diameter+ '\nTerrain : ' + donneesYavin.terrain;

    planet.appendChild(section);
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
    const film = document.getElementById('film')
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const para = document.createElement('p');
    

    section.setAttribute('class', 'firstTrilogy');

    heading.textContent = donneesNewHope.title;

    para.textContent = 'Directeur : ' + donneesNewHope.director + '\n';
    para.textContent += 'Producteur : ' + donneesNewHope.producer ;
    para.textContent += 'Date de sortie : ' + donneesNewHope.release_date;
    para.textContent += 'Texte d\'ouverture : ' + donneesNewHope.opening_crawl;

    film.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
}
var donneesStrikesBack = {}

fetch('https://swapi.dev/api/films/2/').then(function(response){
    return response.json();
})
.then(function(data){
    
    donneesStrikesBack = data;
    console.log(donneesStrikesBack);
    showFilm(donneesStrikesBack);
});

function showFilm(donneesStrikesBack){
    const film = document.getElementById('film')
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const para = document.createElement('p');
    

    section.setAttribute('class', 'firstTrilogy');

    heading.textContent = donneesStrikesBack.title;

    para.textContent = 'Directeur : ' + donneesStrikesBack.director + '\n';
    para.textContent += 'Producteur : ' + donneesStrikesBack.producer ;
    para.textContent += 'Date de sortie : ' + donneesStrikesBack.release_date;
    para.textContent += 'Texte d\'ouverture : ' + donneesStrikesBack.opening_crawl;

    film.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
}

var donneesReturnJedi = {}

fetch('https://swapi.dev/api/films/3/').then(function(response){
    return response.json();
})
.then(function(data){
    
    donneesReturnJedi = data;
    console.log(donneesReturnJedi);
    showFilm(donneesReturnJedi);
});

function showFilm(donneesReturnJedi){
    const film = document.getElementById('film')
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const para = document.createElement('p');
    

    section.setAttribute('class', 'firstTrilogy');

    heading.textContent = donneesReturnJedi.title;

    para.textContent = 'Directeur : ' + donneesReturnJedi.director + '\n';
    para.textContent += 'Producteur : ' + donneesReturnJedi.producer ;
    para.textContent += 'Date de sortie : ' + donneesReturnJedi.release_date;
    para.textContent += 'Texte d\'ouverture : ' + donneesReturnJedi.opening_crawl;

    film.appendChild(section);
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
    const vehicle = document.getElementById('vehicle')
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const para = document.createElement('p');

    section.setAttribute('class', 'starship');

    heading.textContent = donneesXWing.name;

    para.textContent = 'Modèle : ' + donneesXWing.model + 
    '\r\nCoûts en crédits : ' + donneesXWing.cost_in_credits + '\r\nLongueur : ' + donneesXWing.length + '\nVitesse maximum : ' + donneesXWing.max_atmosphering_speed + '\nEquipage : ' + donneesXWing.crew;

    vehicle.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
}

var donneesCorvette = {}

fetch('https://swapi.dev/api/starships/2/').then(function(response){
    return response.json();
})
.then(function(data){
    
    donneesCorvette = data;
    console.log(donneesCorvette);
    showVehicles(donneesCorvette);
});

function showVehicles(donneesCorvette){
    const vehicle = document.getElementById('vehicle')
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const para = document.createElement('p');

    section.setAttribute('class', 'starship');

    heading.textContent = donneesCorvette.name;

    para.textContent = 'Modèle : ' + donneesCorvette.model + 
    '\r\nCoûts en crédits : ' + donneesCorvette.cost_in_credits + '\r\nLongueur : ' + donneesCorvette.length + '\nVitesse maximum : ' + donneesCorvette.max_atmosphering_speed + '\nEquipage : ' + donneesCorvette.crew;

    vehicle.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
}

var donneesStarDestroyer = {}

fetch('https://swapi.dev/api/starships/3/').then(function(response){
    return response.json();
})
.then(function(data){
    
    donneesStarDestroyer = data;
    console.log(donneesStarDestroyer);
    showVehicles(donneesStarDestroyer);
});

function showVehicles(donneesStarDestroyer){
    const vehicle = document.getElementById('vehicle')
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const para = document.createElement('p');

    section.setAttribute('class', 'starship');

    heading.textContent = donneesStarDestroyer.name;

    para.textContent = 'Modèle : ' + donneesStarDestroyer.model + 
    '\r\nCoûts en crédits : ' + donneesStarDestroyer.cost_in_credits + '\r\nLongueur : ' + donneesStarDestroyer.length + '\nVitesse maximum : ' + donneesStarDestroyer.max_atmosphering_speed + '\nEquipage : ' + donneesStarDestroyer.crew;

    vehicle.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
}

var donneesDeathStar = {}

fetch('https://swapi.dev/api/starships/9/').then(function(response){
    return response.json();
})
.then(function(data){
    
    donneesDeathStar = data;
    console.log(donneesDeathStar);
    showVehicles(donneesDeathStar);
});

function showVehicles(donneesDeathStar){
    const vehicle = document.getElementById('vehicle')
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const para = document.createElement('p');

    section.setAttribute('class', 'starship');

    heading.textContent = donneesDeathStar.name;

    para.textContent = 'Modèle : ' + donneesDeathStar.model + 
    '\r\nCoûts en crédits : ' + donneesDeathStar.cost_in_credits + '\r\nLongueur : ' + donneesDeathStar.length + '\nVitesse maximum : ' + donneesDeathStar.max_atmosphering_speed + '\nEquipage : ' + donneesDeathStar.crew;

    vehicle.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
}


var donneesDeathStarWookie = {}

fetch('https://swapi.dev/api/starships/9/?format=wookiee').then(function(response){
    return response.json();
})
.then(function(data){
    
    donneesDeathStarWookie = data;
    console.log(donneesDeathStarWookie);
    showWookieStarship(donneesDeathStarWookie);
});

function showWookieStarship(donneesDeathStarWookie){
    const wookie = document.getElementById('wookie')
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const para = document.createElement('p');

    section.setAttribute('class', 'rooohoo');

    heading.textContent = donneesDeathStarWookie.whrascwo;

    para.textContent = 'Modèle : ' + donneesDeathStarWookie.scoowawoan + 
    '\r\nCoûts en crédits : ' + donneesDeathStarWookie.oaoocao_ahwh_oarcwowaahaoc + '\r\nLongueur : ' + donneesDeathStarWookie.anwowhrraoac + '\nVitesse maximum : ' + donneesDeathStarWookie.scrak_raaoscoocakacworcahwhrr_cakwowowa + '\nEquipage : ' + donneesDeathStarWookie.oarcwooh;

    wookie.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
}

var donneesYavinWookie = {}

fetch('https://swapi.dev/api/planets/3/?format=wookiee').then(function(response){
    return response.json();
})
.then(function(data){
    
    donneesYavinWookie = data;
    console.log(donneesYavinWookie);
    showWookiePlanet(donneesYavinWookie);
});

function showWookiePlanet(donneesYavinWookie){
    const wookie = document.getElementById('wookie')
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const para = document.createElement('p');

    section.setAttribute('class', 'rooohoo');

    heading.textContent = donneesYavinWookie.whrascwo;

    para.textContent = 'Gravité : ' + donneesYavinWookie.rrrcrahoahaoro + 
    '\r\nClimat : ' + donneesYavinWookie.oaanahscraaowo + '\r\nPopulation : ' + donneesYavinWookie.akooakhuanraaoahoowh + '\nDiamètre : ' + donneesYavinWookie.waahrascwoaoworc+ '\nTerrain : ' + donneesYavinWookie.aoworcrcraahwh;

    wookie.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
}

var donneesReturnJediWookie = {}

fetch('https://swapi.dev/api/films/3/?format=wookiee').then(function(response){
    return response.json();
})
.then(function(data){
    
    donneesReturnJediWookie = data;
    console.log(donneesReturnJediWookie);
    showWookie(donneesReturnJediWookie);
});

function showWookie(donneesReturnJediWookie){
    const wookie = document.getElementById('wookie')
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const para = document.createElement('p');
    

    section.setAttribute('class', 'rooohoo');

    heading.textContent = donneesReturnJediWookie.aoahaoanwo;

    para.textContent = 'Directeur : ' + donneesReturnJediWookie.waahrcwooaaooorc + '\n';
    para.textContent += 'Producteur : ' + donneesReturnJediWookie.akrcoowahuoaworc ;
    para.textContent += 'Date de sortie : ' + donneesReturnJediWookie.rcwoanworacwo_waraaowo;
    para.textContent += 'Texte d\'ouverture : ' + donneesReturnJediWookie.ooakwowhahwhrr_oarcraohan;

    wookie.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
}