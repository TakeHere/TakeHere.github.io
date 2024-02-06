const pdfOptions = {
    pdfOpenParams: { scrollbar: '1', toolbar: '0', statusbar: '0', messages: '0', navpanes: '0' }
};

const texts = {
    "LL1 Le parfum": {
        "color": "#96D4D4",
        "texts": [
            {
                "proc": "Compléments circonstanciels de temps et de lieux",
                "cit": "(l.1) « Au XVIIIème siècle »\n" +
                    "(l.1) « en France »\n" +
                    "(l.2) « de cette époque »\n",
                "int": "Pose cadre spatio-temporel précis, + de réalisme"
            },
            {
                "proc": "Périphrase (évoque le personnage sans le nommer)",
                "cit": "(l.1) Un homme qui compta parmi les personnages les plus géniaux et les plus abominables de cette époque.",
                "int": "Susciter curiosité du lecteur à propos du personnage principal."
            },
            {
                "proc": "Comparaison et opposition entre le perso et un ensemble de persos",
                "cit": "A la différence d'autres scélérats de génies comme par exemple… (l.3-4)",
                "int": "Montre la singularité du personnage qui se démarque des autres."
            },
            {
                "proc": "- Superlatifs (le plus, la plus)\net\n- Emploi du mot génie",
                "cit": "(l.1-2) « les plus géniaux, les plus abominables »\n(l.6) « Son génie »",
                "int": "Insistent sur son caractère exceptionnel."
            },
            {
                "proc": "Lexique péjoratif car champ lexical immoralité, renforcée par une énumération.",
                "cit": "(l.5-6) « scélérats, bouffi d'orgueil, ennemi de l'humanité, immoral, impie, malfaisant. »",
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
                "proc": "Utilisation du pronom personnel « nous »",
                "cit": "(l.8) « Nous »",
                "int": "Narrateur utilise pronom personnel « nous » pour nous inclure dans la narration. Suscite l’intérêt du lecteur (impression d’être concerné)"
            },
            {
                "proc": "Hyperbole",
                "cit": "(l.8) « Une puanteur à peine imaginable »",
                "int": "Amplifie la puanteur, provoque le dégoût du lecteur."
            },
            {
                "proc": "Répétition obsessionnelle du verbe « puer » et du nom « puanteur »",
                "cit": "(l.9-18) « puer »\n(l.9-21) « puanteur » + d'une dizaine de fois",
                "int": "Crée atmosphère insalubre, dégoûtante. Dégoûte le lecteur."
            },
            {
                "proc": "Énumération de lieux et odeurs multiples Système de correspondance lieu-odeur",
                "cit": "(l.8-16) « les rues puaient le fumier, les arrières cours puaient l'urine, les cages d'escaliers puaient le bois moisi »",
                "int": "Chaque lieu a une odeur associée. Met en avant domination des mauvaises odeurs."
            },
            {
                "proc": "Énumération de lieux au pluriel",
                "cit": "(l.8-16) « chambres à coucher, cheminées, tanneries… »",
                "int": "Généralisation de la puanteur."
            },
            {
                "proc": "Références à des catégories sociales variées",
                "cit": "(l.16-18) \"paysan, prêtre, roi, noblesse, reine\"",
                "int": "Montre que la puanteur concerne toutes les classes sociales."
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
            }
        ]
    },
    "LL2 La rencontre avec Manon": {
        "color": "blue",
        "texts": [
            {
                "proc": "POV interne",
                "cit": "Pronom « Je »",
                "int": "Le narrateur raconte des souvenirs personnels"
            },
            {
                "proc": "Temps composés (Actions antérieures)",
                "cit": "(l.1-2) « j'avais marqué », « j'aurais porté »",
                "int": "Récit rétrospectif (raconte un évènement passé)"
            },
            {
                "proc": "Compléments circonstanciels de temps et de lieux",
                "cit": "(l.1-3) « Amiens », « Arras » (l.1-2) « Un jour plus tôt, la veille »",
                "int": "Précise le cadre spatio-temporel, + de réalisme"
            },
            {
                "proc": "Interjection + Phrase exclamative",
                "cit": "(l.1) « Hélas ! » (l.1) « que ne le marquai-je un jour plus tôt ! »",
                "int": "Commentaire rétrospectif du narrateur, regrette son choix, le jour de son départ"
            },
            {
                "proc": "Hyperbole",
                "cit": "(l.2) « J'aurais porté chez mon père toute mon innocence »",
                "int": "Insiste sur l'absence de péché qui le caractérise avant sa rencontre avec Manon"
            },
            {
                "proc": "Négation restrictive",
                "cit": "(l.4-5) « Nous n'avions pas d'autre motif que la curiosité »",
                "int": "Insiste sur la banalité de la scène"
            },
            {
                "proc": "Déterminant indéfini « quelques »",
                "cit": "(l.5) « Il en sortit quelques femmes »",
                "int": "Insiste sur la banalité des personnages présents"
            },
            {
                "proc": "Conjonction de coordination",
                "cit": "(l.5) « mais il en resta une »",
                "int": "Rupture dans la phrase, DG remarque cette femme"
            },
            {
                "proc": "Série d'oppositions entre les Femmes et Manon (l.6-8)",
                "cit": "(l.5-6) « quelques femmes » / « une », « se retirèrent » / « resta », « s'arrêta »",
                "int": "Cette femme est différente"
            },
            {
                "proc": "Verbes au passé simple",
                "cit": "(l.5-6) « se retirèrent » « resta » « s'arrêta »",
                "int": "Action de premier plan qui introduit l'élément perturbateur, Manon"
            },
            {
                "proc": "Évocation de détails physiques",
                "cit": "(l.6) « fort jeune » (l.7) « si charmante »",
                "int": "DG s'intéresse à cette femme"
            },
            {
                "proc": "Adverbe d'intensité « si » + adjectif mélioratif ET Etymologie : Latin « carmen », exerce un pouvoir magique",
                "cit": "(l.7) « si charmante »",
                "int": "DG s'intéresse à cette femme ET Montre le pouvoir de séduction de Manon"
            },
            {
                "proc": "Complément circonstanciel de manière",
                "cit": "(l.9) « tout d'un coup »",
                "int": "C'est un coup de foudre soudain"
            },
            {
                "proc": "Métaphore du feu",
                "cit": "(l.9) « enflammé »",
                "int": "Intensité de la passion amoureuse et violence du sentiment"
            },
            {
                "proc": "Périphrase",
                "cit": "(l.11) « Maîtresse de mon cœur »",
                "int": "DG sous domination d'une femme"
            },
            {
                "proc": "Opposition dans une phrase longue",
                "cit": "(l.7-11) « moi qui n'avais jamais pensé à la différence des sexes ni regardé une fille […] dont tout le monde admirait la sagesse et la retenue, […] excessivement timide et facile à déconcerter […] je m'avançais vers la maîtresse de mon cœur »",
                "int": "Bouleverse la vie de DG : Il passe de la timidité à l'audace, il prend initiative"
            },
            {
                "proc": "Verbe de parole",
                "cit": "(l.12) « je lui demandai »",
                "int": "DG débute le dialogue, montre son audace"
            },
            {
                "proc": "Paroles de Manon rapportées indirectement",
                "cit": "(l.13-14) « elle me répondit ingénument qu'elle y était envoyée par ses parents pour être religieuse »",
                "int": "Permet au lecteur d'en savoir plus sur les raisons de la présence de Manon"
            },
            {
                "proc": "Forme passive (le sujet ne fait pas l'action)",
                "cit": "(l.13) « elle y était envoyée par ses parents pour être religieuse",
                "int": "Rappelle la soumission de Manon à ses parents"
            },
            {
                "proc": "Opposition de 2 comparatifs : \nComparatif d'infériorité et Comparatif de supériorité",
                "cit": "(l.11) « quoiqu'elle fût encore moins âgée que moi » \n(l.16) « elle était bien plus expérimentée que moi »",
                "int": "Donne un portrait contrasté de Manon. Elle est plus jeune que DG mais plus expérimentée que lui."
            },
            {
                "proc": "Complément Circonstanciel de But",
                "cit": "(l.17) « pour arrêter sans doute son penchant au plaisir »",
                "int": "Manon ne semble pas découvrir les relations amoureuses, contrairement à DG"
            },
            {
                "proc": "Comparaison et Hyperbole",
                "cit": "(l.15) « comme un coup mortel pour mes désirs »",
                "int": "Traduisent la violence du sentiment amoureux qui s'empare de DG"
            },
            {
                "proc": "Hyperbole et registre tragique",
                "cit": "(l.17-18) « qui a causé dans la suite tous ses malheurs et les miens »",
                "int": "Intrigue le lecteur et annonce le destin tragique des personnages"
            }
        ]
    },
    "LL3 La dispute entre DG et son père": {
        "color": "#ee8bf0",
        "texts": [
            {
                "proc": "Complément circonstanciel de manière ",
                "cit": "(l.1) « En tremblant »",
                "int": "DG prend la parole en premier mais son père lui inspire une crainte"
            },
            {
                "proc": "Apostrophe (utilise un mot pour interpeller) + Vouvoiement",
                "cit": "(l.1) « Monsieur »",
                "int": "Établit une distance entre les deux + forme de respect"
            },
            {
                "proc": "Hyperbole",
                "cit": "(l.1-2) « comblé de grâces » et « vous m'avez pardonné un nombre infini de fautes »",
                "int": "La stratégie de DG consiste à flatter son père"
            },
            {
                "proc": "Lexique mélioratif",
                "cit": "(l.1) « bon père » (l.2 ) « grâces »",
                "int": "Montre l'affection qu'il a pour son père"
            },
            {
                "proc": "Modalisateur et Points de suspensions",
                "cit": "(l.3) « il me semble » et « … »",
                "int": "Traduisent l'hésitation de DG"
            },
            {
                "proc": "Interjection + La question + verbe « interrompis »",
                "cit": "(l.3-4) « Hé bien ! Ma rigueur ? Interrompis mon père »",
                "int": "Montre l'agacement et la susceptibilité du père."
            },
            {
                "proc": "Interjection",
                "cit": "(l.4) « Ah ! Monsieur »",
                "int": "Les propos du père troublent DG"
            },
            {
                "proc": "Le sujet du verbe « représenter » est le mot « haine » qui est un sentiment",
                "cit": "(l.6) « M de GM. Sa haine vous l'a représentée sous les plus noires couleurs. »",
                "int": "L’image fausse qu’il a de Manon est le résultat d’un sentiment"
            },
            {
                "proc": "Hyperbole",
                "cit": "(l.6) « Sous les plus noires couleurs »",
                "int": "Donne une vision très négative de Manon."
            },
            {
                "proc": "Adverbe d'opposition « Cependant »",
                "cit": "(l.7) « Cependant »",
                "int": "Suggère que DG veut proposer une autre vision de Manon."
            },
            {
                "proc": "Hyperbole + lexique mélioratif",
                "cit": "(l.7) « La plus douce et la plus aimable créature qui fut jamais »",
                "int": "Dresse un portrait élogieux de Manon. Montre son attachement excessif pour Manon"
            },
            {
                "proc": "Adverbe d’intensité « si »",
                "cit": "(l.12) « Un discours si passionné »",
                "int": "Intensifie la passion et l'absence de maîtrise de DG quand il parle de Manon"
            },
            {
                "proc": "Répétition de l'adverbe « Non »",
                "cit": "(l.13) « Non, non »",
                "int": "Montre que la colère du père augmente"
            },
            {
                "proc": "Nombreuses négations",
                "cit": "(l.14) « J'aime mieux te voir sans vie que sans sagesse et sans honneur, n'allons donc pas plus loin »",
                "int": "Montre le désaccord et la colère entre DG et le père"
            },
            {
                "proc": "Verbes de paroles + Compléments Circonstanciels de Manière",
                "cit": "(l.13-14) « Me dit-il d'un ton sévère » (l.14) « M'écriai-je en l'arrêtant par le bras » (l.17) « Répliqua-t-il »",
                "int": "Montre que le rythme s'accélère car le ton monte."
            },
            {
                "proc": "Adjectifs péjoratifs qualifiant la « vie »",
                "cit": "(l.15) « Vie odieuse et insupportable »",
                "int": "Intensifie le désespoir de DG et montre la rupture entre les deux personnages."
            },
            {
                "proc": "Négation restrictive (ne …que)",
                "cit": "(l.17) « Je ne te donnerais que ce tu mérites »",
                "int": "Réplique ferme de son père"
            },
            {
                "proc": "Antithèse opposant les autres Pères et lui-même",
                "cit": "(l.18) « Tes bourreaux » et « ma bonté excessive »",
                "int": "Souligne les regrets du père"
            },
            {
                "proc": "Compléments Circonstanciels de Lieux et de Manière",
                "cit": "(l.20) « Je me jetai à ses genoux » et « en les embrassant »",
                "int": "Posture de soumission, de supplication envers son père donc DG est pathétique (suscite la compassion) pour persuader son père."
            },
            {
                "proc": "Verbe à l'impératif",
                "cit": "(l.20) « songez que je suis votre fils »",
                "int": "Impératif ayant une valeur de prière : il le supplie."
            },
            {
                "proc": "Questions rhétoriques",
                "cit": "(l.21-23) « Auriez-vous souffert qu'on l'eût arrachée de vos bras ? »",
                "int": "DG pousse le père à la réflexion. Il fait une comparaison implicite entre sa situation et celle de ses parents."
            },
            {
                "proc": "Hyperbole",
                "cit": "(l.25) « Tes désordres la feraient mourir de douleur »",
                "int": "Intensifie afin de condamner fermement le comportement de DG"
            },
            {
                "proc": "Verbe au futur",
                "cit": "(l.26) « ne me fera point changer de résolution »",
                "int": "La certitude exprimée montre l'inflexibilité du père"
            }
        ]
    }
}

let currentTextDeck = {}
let currentTextDeckWorking = {}
let currentCard = null


// ------< Stats >------
let numberOfCardGenerated = 0
let totalCardsGenerated = 0
let totalCards = 0

// ------< Selectors >------
let textSelector = null

let procUserSelector = null
let citUserSelector = null
let intUserSelector = null

let procCorrSelector = null
let citCorrSelector = null
let intCorrSelector = null

let progressScoreSelector = null
let scoreSelector = null

let cardTableTitleSelector = null

let citChoiceSelector = null
let parametersSelector = null
// ------------------

document.addEventListener('DOMContentLoaded', function () {
    getSelectors()
    populateTextSelector()

    textSelectorChanged()
    generateCard()
})

function getSelectors(){
    textSelector = document.getElementById('text-select')

    procUserSelector = document.getElementById('procUser')
    citUserSelector = document.getElementById('citUser')
    intUserSelector = document.getElementById('intUser')

    procCorrSelector = document.getElementById('procCorr')
    citCorrSelector = document.getElementById('citCorr')
    intCorrSelector = document.getElementById('intCorr')

    progressScoreSelector = document.getElementById("progressscore")
    scoreSelector = document.getElementById("score")

    cardTableTitleSelector = document.getElementById("card-table-titles")

    citChoiceSelector = document.getElementById("citChoice")
    parametersSelector = document.getElementById("parameters")
}

function generateCard(){
    if (currentTextDeckWorking.length == 0){
        shuffleCards()
        alert("Toutes les citations ont été faites, je re-mélange le deck !")
    }

    currentCard = currentTextDeckWorking[0]
    currentTextDeckWorking.shift()

    numberOfCardGenerated++
    totalCardsGenerated++

    updateCardsAmountInfos()

    procUserSelector.value = ""
    citUserSelector.innerHTML = currentCard.cit
    intUserSelector.value = ""

    procCorrSelector.innerHTML = "..."
    citCorrSelector.innerHTML = "..."
    intCorrSelector.innerHTML = "..."

    cardTableTitleSelector.style.backgroundColor = texts[textSelector.value].color
}

function updateCardsAmountInfos(){
    progressScoreSelector.innerHTML = `Nombre de cartes vues: ${numberOfCardGenerated}/${totalCards}`
    scoreSelector.innerHTML = `Nombre total de cartes vues: ${totalCardsGenerated}`
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

function textSelectorChanged(){
    resetCitationChooser()

    currentTextDeck = Array.from(texts[textSelector.value].texts)

    shuffleCards()
    
    texts[textSelector.value].texts.forEach(line => {
        let cit = line.cit

        const trEl = document.createElement("tr")
        const citTdEl = document.createElement("td")
        const chooseTdEl = document.createElement("td")
        const chooseCheckboxEl = document.createElement("input")

        citTdEl.innerHTML = cit
        chooseCheckboxEl.type = "checkbox"
        chooseCheckboxEl.checked = true
        chooseCheckboxEl.addEventListener('change', e => {
            if(e.target.checked === true) {
                let cit = e.target.parentNode.parentNode.childNodes[0].innerHTML
                let currentText = texts[textSelector.value].texts

                currentText.forEach((e, index) => {
                    let iterationCit = e.cit
                    if(iterationCit == cit){
                        currentTextDeck.push(e)
                        shuffleCards()
                        return
                    }
                  })
            }
          if(e.target.checked === false) {
              let cit = e.target.parentNode.parentNode.childNodes[0].innerHTML
              currentTextDeck.forEach((e, index) => {
                let iterationCit = e.cit
                if(iterationCit == cit){
                    currentTextDeck.splice(index, 1)
                    shuffleCards()
                    return
                }
              })
            }
          });
        
        chooseTdEl.appendChild(chooseCheckboxEl)
        trEl.appendChild(citTdEl)
        trEl.appendChild(chooseTdEl)


        citChoiceSelector.appendChild(trEl)
    })
}

function shuffleCards(){
    resetCardsCounter()

    //currentTextDeckWorking = JSON.parse(JSON.stringify(currentTextDeck)).sort((a, b) => 0.5 - Math.random());
    currentTextDeckWorking = [...currentTextDeck]
}

function resetCardsCounter(){
    totalCards = currentTextDeck.length
    numberOfCardGenerated = 0

    updateCardsAmountInfos()
}

function resetCitationChooser(){
    while (citChoiceSelector.childNodes.length != 2) {
        citChoiceSelector.removeChild(citChoiceSelector.lastChild);
    }
}

function checkboxesCheckon(){
    citChoiceSelector.childNodes.forEach(element => {
        if(element.nodeName == "TR"){
            let checkboxSelector = element.childNodes[1].childNodes[0]
            if(checkboxSelector.checked == false){
                checkboxSelector.click()
            }
        }
    });
}

function checkboxesCheckoff(){
    citChoiceSelector.childNodes.forEach(element => {
        console.log(element)
        if(element.nodeName == "TR"){
            let checkboxSelector = element.childNodes[1].childNodes[0]
            if(checkboxSelector.checked == true){
                checkboxSelector.click()
            }
        }
    });
}

function toggleParameters(){
    if (parametersSelector.style.display === "none") {
        parametersSelector.style.display = "block";
      } else {
        parametersSelector.style.display = "none";
      }
}

function displayPdf(){
    var url = `./Textes/${textSelector.value.split(" ")[0]}.pdf`

    // Loaded via <script> tag, create shortcut to access PDF.js exports.
    var { pdfjsLib } = globalThis;

    // The workerSrc property shall be specified.
    pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.mjs';

    var pdfDoc = null,
        pageNum = 1,
        pageRendering = false,
        pageNumPending = null,
        scale = 2.0,
        canvas = document.getElementById('the-canvas'),
        ctx = canvas.getContext('2d');

    /**
     * Get page info from document, resize canvas accordingly, and render page.
     * @param num Page number.
     */
    function renderPage(num) {
        pageRendering = true;
        // Using promise to fetch the page
        pdfDoc.getPage(num).then(function(page) {
            var viewport = page.getViewport({scale: scale});
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            var renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            var renderTask = page.render(renderContext);

            // Wait for rendering to finish
            renderTask.promise.then(function() {
                pageRendering = false;
                if (pageNumPending !== null) {
                    // New page rendering is pending
                    renderPage(pageNumPending);
                    pageNumPending = null;
                }
            });
        });

        // Update page counters
        document.getElementById('page_num').textContent = num;
    }

    /**
     * If another page rendering in progress, waits until the rendering is
     * finised. Otherwise, executes rendering immediately.
     */
    function queueRenderPage(num) {
        if (pageRendering) {
            pageNumPending = num;
        } else {
            renderPage(num);
        }
    }

    /**
     * Displays previous page.
     */
    function onPrevPage() {
        if (pageNum <= 1) {
            return;
        }
        pageNum--;
        queueRenderPage(pageNum);
    }
    document.getElementById('prev').addEventListener('click', onPrevPage);

    /**
     * Displays next page.
     */
    function onNextPage() {
        if (pageNum >= pdfDoc.numPages) {
            return;
        }
        pageNum++;
        queueRenderPage(pageNum);
    }
    document.getElementById('next').addEventListener('click', onNextPage);

    /**
     * Asynchronously downloads PDF.
     */
    pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
        pdfDoc = pdfDoc_;
        document.getElementById('page_count').textContent = pdfDoc.numPages;

        // Initial/first page rendering
        renderPage(pageNum);
    });
    //PDFObject.embed(`./Textes/${textSelector.value.split(" ")[0]}.pdf`, "#pdfdiv", pdfOptions);
}