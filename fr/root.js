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
            "proc": "Superlatifs (le plus, la plus) et emploi du mot génie",
            "cit": "(l.1-2) les plus géniaux, les plus abominables\n(l.6) Son génie",
            "int": "Insiste sur son caractère exceptionnel."
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
            "proc": "Narrateur inclus dans la narration",
            "cit": "(l.8) « Nous »",
            "int": "Narrateur utilise pronom personnel \"nous\" pour s'inclure dans la narration, soulignant ainsi une dimension collective dans la description du cadre spatio-temporel."
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
        },
        {
            "proc": "Champ lexical de la mort",
            "cit": "(l.24-30) « Cimetière, cadavre, fausse commune… »",
            "int": "Crée une atmosphère funèbre."
        },
        {
            "proc": "Anaphore (Répétition en début de phrase)",
            "cit": "(l.24, 25, 26) « Pendant 800 ans » x3",
            "int": "Insiste sur l'omniprésence de la mort en lien avec la naissance du personnage principal."
        },
        {
            "proc": "Succession de phrases longues",
            "cit": "(l.24-31) Seulement 2 phrases sur tout le 3ème mouvement",
            "int": "Retarde l'annonce de la naissance du personnage."
        },
        {
            "proc": "Évocation date de naissance en fin de texte Associé à Superlatif péjoratif",
            "cit": "(l.32) « 17 Juillet 1738 »\n(l.32) « l'endroit le plus puant de tout le royaume »",
            "int": "Insiste sur l'image péjorative."
        },
    ],
    "LL2 La rencontre avec Manon": [
        "12",
        "28"
    ]
}

const pdfOptions = {
    pdfOpenParams: { scrollbar: '1', toolbar: '0', statusbar: '0', messages: '0', navpanes: '0' }
};

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