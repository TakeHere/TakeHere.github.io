const texts = {
    "LL1 Le parfum": [
        {
            "proc": "Indices de temps et de lieux",
            "cit": "(l.1) « Au XVIIIème siècle »\n" +
                "(l.1) « en France »\n" +
                "(l.2) « de cette époque »\n",
            "int": "Pose cadre spatio-temporel précis, + de réalisme"
        },
        {
            "proc": "Périphrase",
            "cit": "(l.1) Un homme qui compta parmi les personnages les plus géniaux et les plus abominables de cette époque.",
            "int": "Susciter curiosité du lecteur à propos du perso principal."
        },
        {
            "proc": "Comparaison et opposition entre le perso et un ensemble de persos",
            "cit": "A la différence d'autres scélérats de génies comme par Exemple… (l.3-4)",
            "int": "Montre la singularité du perso qui se démarque des autres."
        },
        {
            "proc": "Superlatifs (le plus, la plus) et emploi du mot génie",
            "cit": "(l.1-2) les plus géniaux, les plus abominables\n(l.6) Son génie",
            "int": "Insiste sur son caractère exceptionnel."
        },
        {
            "proc": "Lexique péjoratif car champ lexical immoralité, renforcée par une énumération.",
            "cit": "(l.5-6) scélérats, bouffi d'orgueil, ennemi de l'humanité, immoral, impie, malfaisant.",
            "int": "Permet d'établir son portrait moral péjoratif. C'est donc un personnage monstrueux qui va se distinguer par le mal, on ne va pas avoir un héros mais un anti-héros."
        },
        {
            "proc": "Un Oxymore",
            "cit": "(l.2) Génie abominable",
            "int": "Résume le caractère atroce du personnage. Qualités intellectuelles mises au service du mal."
        },
        {
            "proc": "Présentatif (C'est … que)",
            "cit": "(l.2-3) C'est son histoire qu'il s'agit de raconter ici",
            "int": "Met en avant l'importance de son histoire."
        },
        {
            "proc": "Narrateur inclus dans la narration",
            "cit": "(l.8) Nous",
            "int": "Narrateur utilise pronom personnel \"nous\" pour s'inclure dans la narration, soulignant ainsi une dimension collective dans la description du cadre spatio-temporel."
        },
        {
            "proc": "Hyperbole",
            "cit": "(l.8) Une puanteur à peine imaginable",
            "int": "Amplifie la puanteur, provoque le dégoût du lecteur."
        },
        {
            "proc": "Répétition obsessionnelle du verbe « puer » et du nom « puanteur »",
            "cit": "(l.9-18) « puer »\n(l.9-21) « puanteur »",
            "int": "Crée atmosphère insalubre, dégoûtante. Dégoute le lecteur."
        },
        {
            "proc": "Système de correspondance lieu-odeur",
            "cit": "(l.8-16) Énumération de lieux et odeurs multiples",
            "int": "Enumération de lieux, chacun a une odeur associée. Met en avant domination mauvaises odeurs."
        },
        {
            "proc": "Énumération de lieux au pluriel",
            "cit": "(l.8-16) « chambres à coucher, cheminées, tanneries… »",
            "int": "Généralisation de la puanteur."
        },
        {
            "proc": "Références à des catégories sociales variées",
            "cit": "(l.16-18) \"paysan, prêtre, roi, noblesse, reine\"",
            "int": "Montre que puanteur concerne toutes les classes sociales."
        },
        {
            "proc": "Conjonction de coordination",
            "cit": "(l.18-19) « car »",
            "int": "Montre volonté de donner explication à toutes ces odeurs."
        },
        {
            "proc": "Antithèses",
            "cit": "(l.20) « Constructives ou destructives » et « en germe ou à son déclin »",
            "int": "Toutes les situations entraînent de la puanteur."
        },
        {
            "proc": "Champ lexical de la mort",
            "cit": "(l.24-30) « Cimetière, cadavre, fausse commune… »",
            "int": "Crée une atmosphère funèbre."
        },
        {
            "proc": "Anaphore (Répétition en début de phrase)",
            "cit": "(l.24, 25, 26) « Pendant 800 ans »",
            "int": "Insiste sur l'omniprésence de la mort en lien avec la naissance du perso principal."
        },
        {
            "proc": "Succession de phrases longues",
            "cit": "(l.24-31) Seulement 2 phrases",
            "int": "Retarde l'annonce de la naissance du personnage."
        },
        {
            "proc": "Apparition date de naissance en fin de texte associé au superlatif",
            "cit": "(l.32) « 17 Juillet 1738 »\n(l.32) « le plus puant de tout le royaume »",
            "int": "Insiste sur l'image péjorative."
        }
    ],
    "LL2 La rencontre avec Manon": [
        "12",
        "28"
    ]
}

let currentCard = null

let textSelector = null

let procUserSelector = null
let citUserSelector = null
let intUserSelector = null

let procCorrSelector = null
let citCorrSelector = null
let intCorrSelector = null

document.addEventListener('DOMContentLoaded', function () {
    textSelector = document.getElementById('text-select')

    procUserSelector = document.getElementById('procUser')
    citUserSelector = document.getElementById('citUser')
    intUserSelector = document.getElementById('intUser')

    procCorrSelector = document.getElementById('procCorr')
    citCorrSelector = document.getElementById('citCorr')
    intCorrSelector = document.getElementById('intCorr')

    populateTextSelector()
    generateCard()
})

function generateCard(){
    let text = texts[textSelector.value]

    currentCard = text[Math.floor(Math.random()*text.length)];

    procUserSelector.value = ""
    citUserSelector.innerHTML = currentCard.cit
    intUserSelector.value = ""

    procCorrSelector.innerHTML = "..."
    citCorrSelector.innerHTML = "..."
    intCorrSelector.innerHTML = "..."
}


function populateTextSelector(){
    Object.keys(texts).forEach(value => {
        const optionElement = document.createElement("option");
        optionElement.value = value;
        optionElement.text = value;
        textSelector.appendChild(optionElement);
    })
}

function correct(){
    procCorrSelector.innerHTML = currentCard.proc
    citCorrSelector.innerHTML = currentCard.cit
    intCorrSelector.innerHTML = currentCard.int
}