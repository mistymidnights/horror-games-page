const games2k = [
    {
        name: 'Fatal Frame II: Crimson Butterfly/零～紅い蝶～',
        year: 2003,
        Plataforms: 'PlayStation 3, PlayStation 2, Xbox',
        image: 'https://m.media-amazon.com/images/I/51F8MKPQF8L.jpg',
    },
    {
        name: 'Resident Evil 4/バイオハザード 4',
        year: 2005,
        Plataforms: '	PlayStation 2, PlayStation 3, PlayStation 4, PlayStation 5, Xbox 360, Xbox On, Xbox Series XS, Microsoft Windows, GameCube...',
        image: 'http://www.retroplace.com/pics/gamecube/packshots/58146--resident-evil-4.png',
    },
    {
        name: 'Silent Hill 2/サイレントヒル 2',
        year: 2001,
        Plataforms: 'PlayStation 2, Xbox, Microsoft Windows, PlayStation 3, Xbox 360',
        image: 'https://m.media-amazon.com/images/I/81ZX5lWqQKL._SL1500_.jpg',
    },
    {
        name: 'DOOM 3',
        year: 2004 ,
        Plataforms: 'GNU/Linux, Mac OS X, Microsoft Windows, Xbox, Xbox One, PlayStation 4, Nintendo Switch',
        image: 'http://vgboxart.com/boxes/Xbox/4708-doom-3-old-full.jpg',
    },
    {
        name: 'Left 4 Dead 2',
        year: 2009,
        Plataforms: 'Xbox 360, Microsoft Windows, GNU/Linux, Mac OS',
        image: 'https://m.media-amazon.com/images/I/91TWrJTt4SL._AC_SL1500_.jpg',
    },
    {
        name: 'Resident Evil: Code: Veronica',
        year: 2000,
        Plataforms: 'PlayStation 4, PlayStation 2, Dreamcast, Nintendo GameCube, PlayStation 3, Xbox 360',
        image: 'https://i.pinimg.com/736x/fa/2d/86/fa2d8693c3df2a76195e28495eb33ccf--games-ps-resident-evil.jpg',
    },
    {
        name: 'Dead Rising',
        year: 2006,
        Plataforms: 'Xbox 360, Wii, Steam, PlayStation 4, Xbox One',
        image: 'https://media.vandal.net/m/4763/200691214850_1.jpg',
    },
    {
        name: 'F.E.A.R.',
        year: 2005,
        Plataforms: '	Microsoft Windows, Xbox 360, PlayStation 3',
        image: 'https://pbs.twimg.com/media/EcSGI42XYAIu_lV.jpg',
    },
    {
        name: 'Eternal Darkness: Sanitys Requiem',
        year: 2002,
        Plataforms: 'GameCube',
        image: 'https://static.wikia.nocookie.net/eternaldarkness/images/8/8d/Eternal_Darkness_box.jpg',
    },
    {
        name: 'BioShock',
        year: 2007,
        Plataforms: 'Windows, Xbox 360, PlayStation 3, Mac OS X, iOS, Nube, OnLive, PS4, XboxOne, Nintendo Switch',
        image: 'https://s2.gaming-cdn.com/images/products/322/orig-fallback-v1/juego-steam-bioshock-cover.jpg?v=1618317286',
    },
];

const games2k10 = [
    {
        name: 'Dead by Daylight',
        year: 2016,
        Plataforms: 'Microsoft Windows, PlayStation 4, Xbox One, Nintendo Switch, PlayStation 5, Xbox Series X, Google Stadia',
        image: 'https://i.3djuegos.com/juegos/12790/dead_by_daylight/fotos/ficha/dead_by_daylight-5242180.webp',
    },
    {
        name: 'Until Dawn',
        year: 2015,
        Plataforms: 'PlayStation Network',
        image: 'https://smartcdkeys.com/image/data/products/until-dawn-ps4/cover/until-dawn-ps4-smartcdkeys-cheap-cd-key-cover.jpg',
    },
    {
        name: 'Phasmophobia',
        year: 2020,
        Plataforms: 'Microsoft Windows',
        image: 'https://i.3djuegos.com/juegos/17586/phasmophobia/fotos/ficha/phasmophobia-5275630.jpg',
    },
    {
        name: 'The Evil Within 2',
        year: 2017 ,
        Plataforms: 'PlayStation 4, Xbox One, Xbox Cloud Gaming, Microsoft Windows',
        image: 'https://juegosdigitalesmexico.mx/files/images/productos/1571191321-the-evil-within-2-ps4.jpg',
    },
    {
        name: 'Fatal Frame: Maiden of Black Water/濡鴉ノ巫女',
        year: 2014,
        Plataforms: 'Nintendo Switch, PlayStation 4, Xbox One, Wii U, Microsoft Windows, Xbox Series X y Series S, PlayStation 5',
        image: 'https://media.vandal.net/m/24105/project-zero-maiden-of-black-water-20151029104055_1.jpg',
    },
    {
        name: 'Resident Evil 7: Biohazard',
        year: 2017,
        Plataforms: 'PlayStation 4, PlayStation 5, Xbox One, Microsoft Windows, Google Stadia ',
        image: 'https://cdn.cdkeys.com/media/catalog/product/r/e/resident_evil_7_-_biohazard_cover.jpg',
    },
    {
        name: 'The Dark Pictures: Man of Medan',
        year: 2019,
        Plataforms: 'PlayStation 4, Xbox One, Microsoft Windows',
        image: 'https://m.media-amazon.com/images/I/81dcDv0i16L._AC_SL1500_.jpg',
    },
    {
        name: 'The Quarry',
        year: 2022,
        Plataforms: 'PlayStation 4, Xbox One, PlayStation 5, Xbox Series X y Series S, Microsoft Windows',
        image: 'https://www.impactgame.es/WebRoot/StoreES/Shops/63945077/6234/5330/DC3E/61D4/D85E/0A0C/6D0E/5865/TQ_PS4_2D_FOB_FLAT_PEGI.jpg',
    },
    {
        name: 'MADiSON',
        year: 2022,
        Plataforms: 'PlayStation 4, PlayStation 5, Xbox One, Nintendo Switch, Xbox Series X y Series S, Microsoft Windows',
        image: 'https://media.discordapp.net/attachments/701164137081733201/1002585168416088134/unknown.png?width=519&height=645',
    },
    {
        name: 'Friday the 13th: The Game',
        year: 2017,
        Plataforms: 'PlayStation 4, Nintendo Switch, Xbox One, Microsoft Windows',
        image: 'https://mundogenshinimpact.com/wp-content/uploads/friday-the-13th-para-pc.jpg',
    },
];

let listGalleryGames= document.querySelector("#galleryGame");

//recorrer lista
//recorremos el contaiiner de la lista y por cada elemento de la lista creamos unn documento HTML
/* const runList = (list, container) => {
    for (const element of list) {
        createHTML(element, container);
    }
}; */

// recorrer lista de juegos
const iterateGames = (list, container) => {
    for (const element of list) {
        convertToHTML(element, container);
    }
};
//convertir html
const convertToHTML = (element, container) => {
    let myFigure;
    myFigure = `
    <div class="game-container">
        <h1>${element.name}</h1>
        <h2>${element.year}</h2>
        <div class="gallery-img-container">
            <img class="gallery-img" src="${element.image}" alt="${element.name}">
        </div>
        <h3>${element.Plataforms}</h3>
    </div>
`
//imprimir en el doc
printToDoc(container, myFigure);

};

//funcuion para imiprimir
const printToDoc = (container, element) => {
container.innerHTML += element;
}

//llamamos a todas las funciones
iterateGames(games2k, galleryGame);
iterateGames(games2k10, galleryGame);