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
    }, "LL4 Récit douloureux de la mort de Manon": {
        "color": "#faa0a0",
        "texts": [
            {
                "proc": "Impératif 2ème personne",
                "cit": "(l.1) « Pardonnez »",
                "int": "DG implore l'indulgence de son destinataire."
            },
            {
                "proc": "Complément Circonstanciel de Manière + Hyperbole",
                "cit": "(l.1) « si j'achève en peu de mots un récit qui me tue »",
                "int": "Traduit la difficulté du récit de DG + intensifie de la souffrance."
            },
            {
                "proc": "Périphrase + hyperbole, désigne la mort de Manon",
                "cit": "(l.1) « un malheur qui n'eut jamais d'exemple »",
                "int": "Traduit la difficulté du récit de DG + intensifie de la souffrance."
            },
            {
                "proc": "Champ lexical de la tragédie",
                "cit": "(l.1-3) « Tue », « Malheur », « destinée », « pleurer », « reculer d'horreur »",
                "int": "Fatalité qui s’abat sur eux, c’est donc héros de tragédie"
            },
            {
                "proc": "Présent à valeur d'habitude + Complément Circonstanciel de Temps",
                "cit": "(l.2) « je le porte sans cesse » (l.3) « chaque fois que j'entreprends »",
                "int": "Exprime une douleur intense car sans cesse renouvelée."
            },
            {
                "proc": "Changement de temps : Présent (paragraphe 1) => plus-que-parfait (l.4)",
                "cit": "(l.4) « nous avions passé",
                "int": "Plus-que-parfait exprime antériorité, DG commence donc le récit de la mort de Manon."
            },
            {
                "proc": "Euphémismes (La mort est associée au sommeil)",
                "cit": "(l.4) « endormie » (l.6) « son sommeil »",
                "int": "Attenue la douleur de DG."
            },
            {
                "proc": "Complément circonstanciel de manière",
                "cit": "(l.4) « tranquillement »",
                "int": "Atmosphère paisible, la mort survient dans le calme."
            },
            {
                "proc": "Périphrase, désigne Manon",
                "cit": "(l.4) « ma chère maîtresse »",
                "int": "Montre l'affection de DG pour Manon, elle est valorisée."
            },
            {
                "proc": "Champ lexical du toucher",
                "cit": "(l.6-10) « Ses mains » « approchai » « sentit » « serrement de ses mains »",
                "int": "Proximité des corps des amants, montre l'amour réciproque."
            },
            {
                "proc": "Seules paroles de Manon rapportées au discours indirect + Complément Circonstanciel de Manière + Périphrase",
                "cit": "(l.7) « elle me dit d'une voix faible qu'elle se croyait à sa dernière heure »",
                "int": "Renforce côté pathétique de l'agonie de Manon ET La mort n'est jamais nommée pour traduire la douleur/déni de DG."
            },
            {
                "proc": "Négation restrictive (ne...que)",
                "cit": "(l.8-9) « je ne pris d'abord ce discours que pour un langage ordinaire dans l'infortune »",
                "int": "DG est dans le déni."
            },
            {
                "proc": "Longue phrase : - Énumération groupes nominaux  \n     - Se termine par périphrase évoquant la mort « la fin de ses malheurs approchait »",
                "cit": "(l.9) « Mais, ses soupirs fréquents, son silence à mes interrogations, le serrement de ses mains, dans lesquelles elle continuait de tenir les miennes, me firent connaître que la fin de ses malheurs approchait »",
                "int": "DG retarde la mort et Prise de conscience progressive."
            },
            {
                "proc": "Complément Circonstanciel de Temps",
                "cit": "(l.12-13) « je reçus d'elle les marques d'amour, au moment même qu'elle expirait »",
                "int": "Son amour paraît sincère car déclaré pendant qu'elle meurt."
            },
            {
                "proc": "Euphémisme + proposition brève",
                "cit": "(l.12) « je la perdis »",
                "int": "Attenue la violence de l'évènement car DG éprouve une douleur intense."
            },
            {
                "proc": "Vocabulaire religieux : « Ciel » mis en valeur avec majuscule",
                "cit": "(l.14) « Le Ciel ne me trouva point »",
                "int": "Ciel = Dieu, DG subit la punition divine comme un héros tragique et est donc impuissant."
            },
            {
                "proc": "2 adjectifs + Adverbe « depuis »",
                "cit": "(l.15) « il a voulu que j'aie traîné, depuis, une vie languissante et misérable",
                "int": "Adjectifs insistent sur la souffrance de DG + Adverbe renforce la souffrance car inscrite dans la durée."
            },
            {
                "proc": "Verbe « Renonce » + Adverbe « Jamais",
                "cit": "(l.15) « je renonce à la mener jamais plus heureuse »",
                "int": "La mort de Manon entraîne la mort symbolique de DG, il n'a plus aucun plaisir à vivre."
            }
        ]
    },
    "LL5 Prologue Lagarce": {
        "color": "#a86232",
        "texts": [
            {
                "proc": "Monologue avec Prolepse",
                "cit": "(l.1-2) « Plus tard, l'année d'après - J'allais mourir à mon tour -».",
                "int": "Rappelle la tragédie grecque où le chœur annonçait ce qui allait se passer plus tard."
            },
            {
                "proc": "Répétition du verbe mourir.",
                "cit": "(l.2) « Mourir », (l.4) « je mourrais »",
                "int": "Importance de ce thème de la mort"
            },
            {
                "proc": "Verbe conjugué au futur",
                "cit": "(l.4) « je mourrai »",
                "int": "Louis annonce sa propre mort certaine"
            },
            {
                "proc": "Répétition de l'expression « l'année d'après » (correspond à date de sa mort) sonne comme un compte à rebours.",
                "cit": "(l.1, 5, 9, 15, 20) « l'année d'après)",
                "int": "Louis est confronté à la fatalité (destin tragique qu'il ne contrôle pas) ici, la maladie."
            },
            {
                "proc": "Champ lexical du temps très présent.",
                "cit": "(l.1) « plus tard », (l.6 et 8) « de nombreux mois »",
                "int": "Souligne l'importance du temps, + il passe, + il se rapproche de la mort"
            },
            {
                "proc": "Verbes ou expressions se rapportant à l'immobilité",
                "cit": "(l.6) « j'attendais à ne rien faire », (l.8) « j'attendais », (l.10-11) « on ose bouger »",
                "int": "Immobilité symbolise sa mort certaine"
            },
            {
                "proc": "Nombreuses négations",
                "cit": "(l.6) « ne rien faire », (l.7) « ne plus savoir », (l.18) « sans espoir jamais »",
                "int": "Symbolise pessimisme de Louis impuissant face à la maladie et mort"
            },
            {
                "proc": "Champ lexical de la violence vient compléter celui du temps",
                "cit": "(l.12) « danger extrême », (l.13) « un geste trop violent », (l.14) « réveillerais l’ennemi et vous détruirait aussitôt »",
                "int": "Le temps est évoqué comme un ennemi dangereux car il rapproche Louis de la mort."
            },
            {
                "proc": "Répétition de « malgré tout »",
                "cit": "(l.16 et 19) « malgré tout »",
                "int": "Retournement de situation : Louis décide de faire face à sa maladie et sa mort en revenant dans sa famille"
            },
            {
                "proc": "Répétition du préfixe « re» qui sert à évoquer une répétition",
                "cit": "(l.21) « retourner les voir, revenir sur mes pas »",
                "int": "Retour famille symbolise retour passé, avant maladie afin d'oublier la mort"
            },
            {
                "proc": "Polysémie (plusieurs sens): - Désigne le déplacement physique            - Passage symbolique de la vie à la mort.",
                "cit": "(l.22) « faire le voyage »",
                "int": "Voyage = moyen symbolique de lutter contre la mort."
            },
            {
                "proc": "Nombreux compléments circonstanciels de manière",
                "cit": "(l.23) « annoncer, lentement, avec soin, avec soin et précision »(l.25) « lentement, calmement, d'une manière posée »",
                "int": "Comme un metteur en scène, il réfléchit à la meilleure manière d'annoncer sa maladie"
            },
            {
                "proc": "Polysémie :  - traitement médical                      - avec précaution",
                "cit": "(l.23) « soin »",
                "int": "Le fait d'annoncer sa maladie apparait comme un remède"
            },
            {
                "proc": "Champ lexical de la parole très présent",
                "cit": "(l.23, 28, 32) « annoncer », (l.29, 30) « dire », (l.32) « messager »",
                "int": "Comme le choeur d'une tragédie, il annonce la suite des évènements et notamment l'importance de l'aveu de sa maladie à sa famille"
            },
            {
                "proc": "Champ lexical de la volonté",
                "cit": "(l.34) « voulu, voulu et décidé »(l.39) « être responsable de moi-même »(l.40) « mon propre maître »",
                "int": "Louis tente de garder la maîtrise de son destin."
            },
            {
                "proc": "Champ lexical de l'illusion",
                "cit": "(l.37) « paraître », (l.41) « l'illusion »",
                "int": "Champ lexical de l’illusion en contradiction avec Champ lexical de la volonté. Montre que l’aveu sera difficile"
            },
            {
                "proc": "Monologue constituée que d'une seule phrase.",
                "cit": "(Tout le texte)",
                "int": "La parole lui permet de dire tout ce qu'il a sur la conscience. Montre que la parole est un élément important de la pièce"
            }
        ]
    },
    "LL6 Soliloque Mère": {
        "color": "#e0c828",
        "texts": [
            {
                "proc": "Epanorthose car reformulation de « vouloir » l'indicatif =\> conditionnel\n           ET          Pronom personnel « ils »",
                "cit": "(l.128) « ce qu'ils veulent, ce qu'ils voudraient »",
                "int": "Conditionnel relève de l'imaginaire, traduis donc son hésitation et incertitude\n           ET          la mère parle pour Antoine et Suzanne"
            },
            {
                "proc": "Modalisateur",
                "cit": "(l.129) « peut-être »",
                "int": "Traduis l'hésitation de la mère."
            },
            {
                "proc": "Question rhétorique entre deux tirets",
                "cit": "(l.130-131) « – Est-ce qu'ils ne manquent pas toujours de ça, qu'on les encourage ? – »",
                "int": "Les tirets viennent rompre la fluidité du discours, montre l'hésitation. ET Rappelle que le discours de la mère est argumentatif."
            },
            {
                "proc": "Énumération de Subjonctif à valeur d’ordre ",
                "cit": "(l.132-134) « Que tu les encourages, que tu les autorises ou que tu leur interdises de faire telle ou telle chose, que tu leur dises, que tu dises à Suzanne »",
                "int": "Elle incite Louis à reprendre sa place d’ainé au sein de la famille."
            },
            {
                "proc": "Pronom « leur » => nom « Suzanne »",
                "cit": "(l.134-135) « Que tu leur dises\n       Que tu dises à Suzanne »",
                "int": "Changement rapide de destinataire, traduis l'hésitation de la mère car elle n'arrive pas à formuler sa demande"
            },
            {
                "proc": "L’anacoluthe entre tirets",
                "cit": "(l.136-138) « - même si ce n'est pas vrai, un mensonge qu'est-ce que ça fait ? Juste une promesse qu'on fait en sachant qu'on ne la tiendra pas - »",
                "int": "Anacoluthe traduis hésitation + Retarde la demande de la mère : elle voudrait que louis invite sa soeur"
            },
            {
                "proc": "Changement de temps :Futur (Certitude) =\> Conditionnel (Incertitude/imagination)",
                "cit": "(l.142-143) « qu'elle pourra, qu'elle pourrait te rendre visite »",
                "int": "Ce changement montre qu'elle ne croit pas que Suzanne ira voir son frère"
            },
            {
                "proc": "2x Subordonnées Circonstancielle d'hypothèse",
                "cit": "(l.143-144) « si l'envie lui vient, si l'envie la prenait »",
                "int": "Exprime doutes de la mère"
            },
            {
                "proc": "Pronom personnel « Nous » + phrase entre parenthèses",
                "cit": "(l.146) « (nous ne savons pas où tu vis) »",
                "int": "Discours rompu par un reproche collectif."
            },
            {
                "proc": "Vocabulaire affectif + répétition du verbe « t'intéresses »",
                "cit": "(l.148-150) « intéresses », « intéresser », « intéresses » « soucies »",
                "int": "La stratégie de la mère consiste à toucher Louis"
            },
            {
                "proc": "Emploi du subjonctif",
                "cit": "(l.151-152) « Que tu lui donnes à lui, Antoine »",
                "int": "Elle donne un ordre à Louis"
            },
            {
                "proc": "Négations",
                "cit": "(l.153) « il n'est plus responsable de nous », (l.155) « il ne l'as jamais été »",
                "int": "Traduit la rupture avec le passé."
            },
            {
                "proc": "Commentaire entre tirets",
                "cit": "(l.155-163) « - il ne l'as jamais été […] un rôle qui n'est pas le sien - »",
                "int": "Remet en cause le rôle joué par Antoine"
            },
            {
                "proc": "Comparatif de supériorité « mieux que »",
                "cit": "(l.156) « je sais cela mieux que quiconque »",
                "int": "Elle se donne statut supérieur car elle sait tout."
            },
            {
                "proc": "Champ lexical de l'illusion",
                "cit": "(l.157) « il a toujours cru », (l.158) « a toujours voulu le croire », (l.160) « il se voulait responsable »",
                "int": "Remet en cause le rôle joué par Antoine"
            },
            {
                "proc": "Vocabulaire du théâtre associé au verbe « voler »",
                "cit": "(l.162) « Voler un rôle »",
                "int": "Antoine a pris la position d'ainé de manière illégitime, la mère encourage donc louis à reprendre sa place"
            }
        ]
    }, "LL7 Épilogue Juste la fin du monde": {
        "color": "#7ce6bf",
        "texts": [
            {
                "proc": "Adverbe de temps",
                "cit": "« Après » (l 1)",
                "int": "Comme les pièces de l’Antiquité, prologue et épilogue encadrent le récit."
            },
            {
                "proc": "Verbes au présent",
                "cit": "« ce que je fais, je pars » (l 1)",
                "int": "Surprenant car il utilise présent au lieu de passé composé car l'histoire est finie."
            },
            {
                "proc": "Négation totale (ne…plus) + Adverbe « jamais »",
                "cit": "« Je ne reviens plus jamais. » (l.3)",
                "int": "Louis annonce son départ de façon définitive."
            },
            {
                "proc": "Verbe « mourir » au présent + prosopopée",
                "cit": "« Je meurs » (l 3)",
                "int": "Surprend car c'est un personnage mort qui s'adresse à nous."
            },
            {
                "proc": "Compléments circonstanciels de temps peu précis",
                "cit": "« quelques mois plus tard »(l.3), « une année tout au plus »(l.4)",
                "int": "Intensifie le caractère insaisissable de Louis."
            },
            {
                "proc": "Verbe « se souvenir »",
                "cit": "« une chose dont je me souviens et que je raconte» (L 5)",
                "int": "Louis raconte anecdote du passé, située avant son départ de la famille."
            },
            {
                "proc": "Polysémie :- fin du récit- fin de vie",
                "cit": "« j'en aurai fini » (l. 6)",
                "int": "Contribue au registre tragique."
            },
            {
                "proc": "Compléments circonstanciels de lieux et de temps précis + Verbes au présent de narration",
                "cit": "« c’est l’été, c’est pendant ces années où je suis absent, c’est dans le Sud de la France. » (l.7-8)",
                "int": "Permet au lecteur de vivre cet instant."
            },
            {
                "proc": "Pronom «je » + Compléments circonstanciels de temps et lieux",
                "cit": "« je me suis perdu, la nuit, dans la montagne » ( l, 9),«  sous la lune » (l 15)«  dans la nuit » (l. 17)",
                "int": "Donne tonalité lyrique car évoque des souvenirs personnels."
            },
            {
                "proc": "Complément circonstanciel de cause + Polysémie sens propre/sens figuré",
                "cit": "« parce que je me suis perdu » (l.9)",
                "int": "Sens propre : Il a perdu son chemin dans la montagne\n           Sens figuré : Il n'a pas su prendre les bonnes décisions durant sa vie."
            },
            {
                "proc": "Complément circonstanciel de lieu",
                "cit": "« le long de la voie ferrée » (l 10)",
                "int": "« Voie ferrée » symbolise destin qu'il ne peut pas modifier."
            },
            {
                "proc": "Champ lexical de la trajectoire",
                "cit": "« méandres de la route », « le chemin sera plus court », « elle passe près de la maison où je vis » ( l 11-12)",
                "int": "Méandres symbolise les hésitations de Louis durant sa vie et ses difficultés à s'exprimer."
            },
            {
                "proc": "Adjectif « seul »",
                "cit": "« Je marche seul » (l.17)",
                "int": "Symbolise avancée vers la mort."
            },
            {
                "proc": "Complément circonstanciel de lieu",
                "cit": "« à égale distance du ciel et de la terre » (l.18)",
                "int": "Comme si Louis se trouvait entre deux mondes, celui de la vie et celui de la mort."
            },
            {
                "proc": "Forme emphatique entre parenthèses (c'est…que)",
                "cit": "(et c'est cela que je voulais dire) (l.20)",
                "int": "Souligne importance du cri, symbole de libération."
            },
            {
                "proc": "Emploi conditionnel",
                "cit": "« devrais » ( L.21), « résonnerait », ( L.22)« devrait » (L.23)",
                "int": "Conditionnel exprime un souhait non accompli, il est donc frustré."
            },
            {
                "proc": "Lexique mélioratif",
                "cit": "« grand, beau cri », « long et joyeux cri » (l.21-22)",
                "int": "Valorise le cri."
            },
            {
                "proc": "Négations",
                "cit": "« je ne le fais pas » ( L.25), « Je ne l'ai pas fait »(L.26).",
                "int": "Souligne l'échec de cette tentative de crier et de se libérer."
            },
            {
                "proc": "Changement de temps : présent =\> passé composé",
                "cit": "« je ne le fais pas » ( L.25)/ « Je ne l'ai pas fait »(L.26).",
                "int": "Passé composé exprime action achevée, donc échec du cri est définitif."
            }
        ]
    },"LL8 Phèdre Tirade": {
        "color": "#a5fad2",
        "texts": [
            {
                "proc": "Négation forte « non », mis en valeur car en début de vers.",
                "cit": "« Non » ( v 1)",
                "int": "Traduis détermination de Phèdre à rétablir la vérité"
            },
            {
                "proc": "Répétition de « il faut »",
                "cit": "« il faut » (v.1) « il faut » (v.2)",
                "int": "Aveu associé à l'idée du devoir"
            },
            {
                "proc": "Champ lexical de la justice",
                "cit": "« injuste » (v 1) « innocence » (v.2) « coupable » (v 3)",
                "int": "Aveu = moyen de résoudre la crise familiale"
            },
            {
                "proc": "Deux phrases exclamatives",
                "cit": "« Ah père infortuné ! » (v.3) « Et c'est sur votre foi que je l'ai condamné ! » (v 4)",
                "int": "Donne tonalité pathétique car exprime sa souffrance et sa colère."
            },
            {
                "proc": "Une épithète mise en valeur car fin de vers",
                "cit": "« Père infortuné » (v 3)",
                "int": "Thésée est un personnage tragique car impuissant face au destin"
            },
            {
                "proc": "Points de suspension qui interrompent la parole",
                "cit": "« Cruelle, pensez-vous être assez excusée… » (v 5)",
                "int": "Suggère détermination de Phèdre à s'expliquer"
            },
            {
                "proc": "Périphrase pour désigner la mort",
                "cit": "« les moments me sont chers » (v6)",
                "int": "Le temps est précieux car la mort approche"
            },
            {
                "proc": "impératif",
                "cit": "« écoutez-moi, Thésée » (v6)",
                "int": "Impératif exprime prière, montre urgence de la situation"
            },
            {
                "proc": "2x propositions juxtaposées :1ère : cause, 2ème : conséquence",
                "cit": "« les moments me sont chers, écoutez-moi, Thésée » (v6)",
                "int": "Le rythme s'accélère car la mort approche"
            },
            {
                "proc": "Forme emphatique (c'est…qui)",
                "cit": "« C'est moi qui » (v 7)",
                "int": "Phèdre insiste sur sa culpabilité"
            },
            {
                "proc": "Opposition de 2 périphrases : Lexique mélioratif désigne Hippolyte Lexique péjoratif désigne Phèdre",
                "cit": "« ce fils, chaste et respectueux, (v 7) », « Osai jeter un œil profane, incestueux. » (v 8)",
                "int": "Elle innocente Hippolyte et elle s'accuse. Donne donc image d'une héroïne car elle se remet en question."
            },
            {
                "proc": "Antithèse mis à la rime",
                "cit": "« respectueux » (v 7) « incestueux » (v 8)",
                "int": "Elle innocente Hippolyte et elle s'accuse."
            },
            {
                "proc": "Le ciel est Sujet du verbe « mettre »",
                "cit": "« Le ciel mit dans mon sein » (v 9)",
                "int": "Phèdre subit une punition divine tel un héros de tragédie. Elle est donc impuissante."
            },
            {
                "proc": "2 périphrases péjoratives pour désigner l'amour + métaphores du feu",
                "cit": "« une flamme funeste » (v 9) « un feu qui lui faisait horreur » (v 12)",
                "int": "Cette passion amoureuse mène à la mort. Suggère la violence de la passion amoureuse qui détruit."
            },
            {
                "proc": "2 termes péjoratifs + « Œnone » est le sujet du verbe d'action « conduit »",
                "cit": "« La détestable Œnone a conduit tout le reste. » (v 10) « La perfide » (v 13)",
                "int": "Œnone devient l'incarnation de la trahison"
            },
            {
                "proc": "Vocabulaire du châtiment + hyperbole",
                "cit": "« punie, » « supplice » + « trop doux. » (v 15,16)",
                "int": "Le châtiment a pour but d'inspirer la crainte du spectateur."
            },
            {
                "proc": "Phèdre est sujet du verbe « vouloir », mis en valeur au début du vers.",
                "cit": "« J'ai voulu, devant vous exposant mes remords » (v 19)",
                "int": "Phèdre affirme sa détermination, elle est courageuse tel une héroïne"
            },
            {
                "proc": "Périphrase qui évoque la mort + adjectif « lent »",
                "cit": "« Par un chemin plus lent descendre chez les morts. » (v 20)",
                "int": "Rythme ralenti qui imite l'agonie"
            },
            {
                "proc": "Anaphore de l'adverbe « déjà »",
                "cit": "« Déjà […] » (v 23) « Déjà […] » (v 25)",
                "int": "Anaphore montre que l'agonie trouble son langage"
            },
            {
                "proc": "Description détaillée des effets du poison",
                "cit": "« Déjà jusqu'à mon cœur […] qu'à travers un nuage » (v 23-25)",
                "int": "Accentue la violence du châtiment"
            },
            {
                "proc": "Expressions qui renvoient à la perte de la vue",
                "cit": "« Je ne vois plus » (v.25), « à mes yeux dérobant la clarté » (v.27)",
                "int": "Symbolise la mort"
            },
            {
                "proc": "Mots symboliques mis à la rime",
                "cit": "« clarté » (v.27) et « pureté » (v.28)",
                "int": "L'aveu de Phèdre permet donc de résoudre la crise familale et personelle car lumière symbolise vérité révélée"
            }
        ]
    },"LL9 Arrias": {
        "color": "#e35d5b",
        "texts": [
            {
                "proc": "Succession de 2 hyperboles",
                "cit": "« Arrias a tout lu, a tout vu » (l.1)",
                "int": "Registre satirique car critique l'excès, contraire à l'idéal de l'honnête homme."
            },
            {
                "proc": "Adj « universel »",
                "cit": "« c'est un homme universel » (L 2)",
                "int": "Arrias présenté comme omniscient, contraire à l'idéal de l'honnête homme qui doit être cultivé mais pas prétentieux."
            },
            {
                "proc": "Champ lexical de la tromperie",
                "cit": "« persuader », « mentir », « paraître » (L 1,2)",
                "int": "Dénonce hypocrisie d'Arrias."
            },
            {
                "proc": "Comparatif de supériorité (mieux…que)",
                "cit": "« Il aime mieux mentir que de se taire ou de paraître ignorer quelque chose » ( L 2,3)",
                "int": "Donne une image péjorative d'Arrias car il préfère le vice, mentir."
            },
            {
                "proc": "Complément circonstanciel de lieu",
                "cit": "« à la table d'un grand d'une cour du Nord » (L 3)",
                "int": "Scène de repas, qui va illustrer le portrait général d'Arrias."
            },
            {
                "proc": "Remplacement rapide du sujet du verbe de parole : on (invités) => il (Arrias)",
                "cit": "« on parle à la table d'un grand d'une cour du Nord : il prend la parole » ( L 3 )",
                "int": "Fin de l'échange entre les invités et début du monologue d'Arrias."
            },
            {
                "proc": "Nombreuses anaphores : pronom perso « il » sujet de verbes de parole",
                "cit": "« il prend la parole », « il discourt des mœurs », « il récite des historiettes (L 3 à 6)",
                "int": "Arrias se met en avant en monopolisant la parole. Il est donc narcissique."
            },
            {
                "proc": "Comparatif",
                "cit": "« il s'oriente dans cette région lointaine comme s'il en était originaire » ( L 5)",
                "int": "Mensonge."
            },
            {
                "proc": "Complément circonstanciel de manière",
                "cit": "« Il en rit le premier jusqu'à éclater » (L 7)",
                "int": "Arrias est dans l'excès, contraire à l'idéal de l'honnête homme."
            },
            {
                "proc": "Verbe « contredire »",
                "cit": "« contredire » ( L 7)",
                "int": "Opposition entre 1 invité et Arrias."
            },
            {
                "proc": "Vocabulaire de la démonstration",
                "cit": "« lui prouvant nettement » (l 8)",
                "int": "Accentue opposition entre les 2 perso : l'invité incarne la vérité rigoureuse et Arrias le mensonge."
            },
            {
                "proc": "La métaphore « prend feu »",
                "cit": "« Arrias ne se trouble point, prend feu au contraire » (L 9)",
                "int": "Réaction excessive contraire à l'idéal de l'honnête homme."
            },
            {
                "proc": "Long discours direct",
                "cit": "« Je n'avance, lui dit-il, […..] qui ne m'a caché aucune circonstance » (L 9 à 13)",
                "int": "La longueur du discours montre qu’il veut avoir le dernier mot"
            },
            {
                "proc": "Argument d'autorité (j'ai bon car c une personnalité qui me l'as dit)",
                "cit": "« je l'ai appris de Sethon » (L 10)",
                "int": "Arrias souhaite montrer qu'il tiens ses informations d'une source fiable"
            },
            {
                "proc": "Apposition qui précise le nom « Sethon »",
                "cit": "« Sethon, ambassadeur de France dans cette cour, » (L 10)",
                "int": "Accentue l'importance du personnage cité."
            },
            {
                "proc": "3 PSR pour qualifier Sethon",
                "cit": "« que je connais familièrement, que j'ai fort interrogé, et qui ne m'a caché aucune circonstance »(L 9 à 13)",
                "int": "Sethon est présenté comme un proche donc accentue orgueil d'Arrias."
            },
            {
                "proc": "Nom « narration » = fiction",
                "cit": "« Il reprenait le fil de sa narration » (L 13)",
                "int": "Ironie du narrateur car terme « narration » rappelle qu'Arrias est un menteur."
            },
            {
                "proc": "Comparatif de supériorité",
                "cit": "« avec plus de confiance qu'il ne l'avait commencée » (L13)",
                "int": "Arrias croit avoir remporté la dispute."
            },
            {
                "proc": "Périphrase",
                "cit": "« lorsque l'un des conviés » (L 14)",
                "int": "Retarde révélation de l'identité."
            },
            {
                "proc": "Discours direct pour révéler identité du convive",
                "cit": "lui dit : « C'est Sethon à qui vous parlez, lui-même, et qui arrive de son ambassade. » (L 14,15)",
                "int": "Accentue la chute + ridiculise davantage Arrias."
            },
            {
                "proc": "Expression",
                "cit": "« lui-même » ( L15)",
                "int": "Ridiculise davantage Arrias."
            }
        ]
    }, "LL10 Des biens de fortune": {
        "color": "#de62d1",
        "texts": [
            {
                "proc": "2 verbes d’action au présent",
                "cit": "« L’on ouvre et l’on étale ». (L.1)",
                "int": "Actions qui renvoient au commerce. Le type de marchandise n’est pas évoqué car c’est le geste qui est important"
            },
            {
                "proc": "Compléments circonstanciels de temps",
                "cit": "« tous les matins » « le soir » « tout le jour » (L.1 et 2)",
                "int": "Insistent sur la répétition de ces actions."
            },
            {
                "proc": "Répétition du verbe « tromper »",
                "cit": "« tromper », « tromper » (l.1-2)",
                "int": "Image péjorative du commerce car associé au mensonge."
            },
            {
                "proc": "Déterminant défini à valeur de généralisation",
                "cit": "« Le marchand » (L.3)",
                "int": "Portrait anonyme de cette profession pour généraliser."
            },
            {
                "proc": "Enumération de propositions",
                "cit": "« Le marchand fait des montres […..] or qui soit de poids. (L.3 à 8)",
                "int": "Évoque les méthodes de vente trompeuses, donne donc une image péjorative."
            },
            {
                "proc": "Champ lexical du mensonge",
                "cit": "« cacher » « paraisse » « surfait », « fausses » (l.4-5)",
                "int": "Insiste sur les méthodes de vente trompeuses caractérisées par la dissimulation."
            },
            {
                "proc": "GN au pluriel",
                "cit": "« toutes les conditions » (L.9), « les gens » (L.15), « les hommes » (L.16)",
                "int": "La recherche du profit par tous les moyens ne concerne plus une seule profession."
            },
            {
                "proc": "Antithèses",
                "cit": "« Le pauvre » (L.9), « L'opulent » (L.10)",
                "int": "Opposition de 2 catégories d'hommes : celle qui possède de l'argent et celle qui n'en possède pas."
            },
            {
                "proc": "Deux propositions pour qualifier chaque catégorie",
                "cit": "« Le Pauvre est bien proche de l'homme de bien » (L.9)« L'opulent n'est guère éloigné de la friponnerie » (L.10).",
                "int": "Confirme que l'enrichissement et la tromperie sont liés."
            },
            {
                "proc": "Association surprenante de 2 mots : Ostentation est péjoratif car connote l'excès, Probité est mélioratif car connote l'honnêteté",
                "cit": "« L'ostentation d'une certaine probité » (L.13)",
                "int": "Montre que l'hypocrisie est un autre moyen utilisé pour s'enrichir."
            },
            {
                "proc": "Superlatifs de supériorité",
                "cit": "« le plus court et le meilleur » (L.14)",
                "int": "Valorise cette 3è stratégie."
            },
            {
                "proc": "Termes péjoratifs qui évoquent les méthodes d’enrichissement",
                "cit": "« profanes », « professions équivoques », « péril » (L.17,18)",
                "int": "Ces méthodes d'enrichissement sont présentées comme suspectes ou condamnables."
            },
            {
                "proc": "Négation restrictive ne …que + Complément circonstanciel de temps",
                "cit": "« Ils les quittent ensuite par une dévotion discrète, qui ne leur vient jamais qu'après qu'ils ont fait leur récolte » (L.19,20)",
                "int": "Registre satirique car c'est seulement après s'être enrichis malhonnêtement qu'ils affichent une attitude faussement pieuse et respectable."
            },
            {
                "proc": "Plusieurs propositions juxtaposées",
                "cit": "« Il y a des misères sur la terre qui saisissent le cœur ; il manque à quelques-uns jusqu'aux aliments ; ils redoutent l'hiver, ils appréhendent de vivre. » (L.21,22)",
                "int": "Registre pathétique car on insiste sur la privation et les difficultés rencontrées."
            },
            {
                "proc": "Adverbe « ailleurs »",
                "cit": "« L'on mange ailleurs des fruits précoces »",
                "int": "Renforce opposition entre les classes sociales (pauvres affamés /riches bourgeois qui mangent des aliments rares)."
            },
            {
                "proc": "Hyperbole péjorative",
                "cit": "« Ont eu l'audace d'avaler en un seul morceau la nourriture de cent familles » (L.24,25).",
                "int": "Compare les riches avec des ogres"
            },
            {
                "proc": "Antithèse",
                "cit": "« 1 seul » « cent » (L.24,25).",
                "int": "Traduit l'indignation du moraliste."
            },
            {
                "proc": "Pronom personnel « je »",
                "cit": "« je ne veux être » ( L.26).",
                "int": "Implication personnelle de La Bruyère."
            },
            {
                "proc": "Négation + Antithèse",
                "cit": "« ni malheureux ni heureux » (l. 28)",
                "int": "Valorise la modération, qualité renvoyant à l'idéal de l'honnête homme."
            },
            {
                "proc": "Terme « médiocrité », ici mélioratif (= juste milieu)",
                "cit": "« je me jette et me réfugie dans la médiocrité » (L.27)",
                "int": "Le moraliste donne son avis, et valorise une caractéristique de l'idéal de l'honnête homme."
            }
        ]
    }, "LL11 Du souverain et de la République": {
        "color": "#a17ee6",
        "texts": [
            {
                "proc": "Pronom pers « vous »",
                "cit": "« vous voyez » (L1)",
                "int": "La Bruyère implique le lecteur pour mieux transmettre ses idées."
            },
            {
                "proc": "Champ lexical qui renvoie à un univers bucolique",
                "cit": "« troupeau » (L.1)« prairie une herbemenue et tendre qui a échappé à la faux du moissonneur, le berger » (L 3 à 4)",
                "int": "Cadre et personnages qui rappellent la pastorale."
            },
            {
                "proc": "Lexique mélioratif pour qualifier le cadre naturel",
                "cit": "« beau jour » (L 2), « tranquillement » (L 2) « tendre » (L3)",
                "int": "Rappellent les valeurs de la pastorale : cadre paisible, agréable."
            },
            {
                "proc": "Adjectifs pour qualifier le berger",
                "cit": "« le berger, soigneux et attentif, » (L 4, 5)",
                "int": "Image d'un berger aimant et très proche de son troupeau."
            },
            {
                "proc": "Accumulation de verbes d'action :« le berger » est sujet et « le troupeau » est COD",
                "cit": "« Il ne les perd pas de vue, il les suit, il les conduit […] il les nourrit, il les défend » (L 5 à7)",
                "int": "Dévouement du berger pour son troupeau."
            },
            {
                "proc": "Compléments circonstanciels de temps",
                "cit": "« L'aurore le trouve déjà en plaine campagne, d'où il ne se retire qu'avec le soleil »",
                "int": "Dévouement constant."
            },
            {
                "proc": "Parallélisme de construction (Si exprimant une condition + événement menaçant + verbe d'action)",
                "cit": "« Si elles se dispersent, il les rassemble ; si un loup avide paraît, il lâche son chien » (L 6,7)",
                "int": "Berger et troupeau sont très liés."
            },
            {
                "proc": "3 exclamatives",
                "cit": "Quels soins ! Quelle vigilance ! Quelle servitude ! (L.9)",
                "int": "Admiration du moraliste pour la fidélité du berger."
            },
            {
                "proc": "Gradation",
                "cit": "Quels soins ! Quelle vigilance ! Quelle servitude ! (L.9).",
                "int": "Accentue le dévouement du berger."
            },
            {
                "proc": "2 questions rhétoriques",
                "cit": "« quelle condition vous paraît la plus délicieuse et la plus libre, ou du berger ou des brebis ? le troupeau est-il fait pour le berger, ou le berger pour le troupeau ? (L 9 à 11) »",
                "int": "Permet d'influencer le lecteur."
            },
            {
                "proc": "Métaphore avec le terme « image »",
                "cit": "« Image naïve des peuples et du prince qui les gouverne, s'il est bon prince. » (L 11, 12)",
                "int": "Permet au lecteur de comprendre les rapprochements : troupeau = peuple et berger = prince qui les gouverne. La Bruyère détourne donc le genre de la pastorale pour faire l'éloge d'un modèle de prince proche de son peuple."
            },
            {
                "proc": "Champ lexical du luxe",
                "cit": "« Le faste et le luxe » et « pierreries » (L 13 à 15)",
                "int": "Symbolise l'autre modèle de gouvernement : personnage superficiel, attaché aux apparences."
            },
            {
                "proc": "Répétition 4 x du GN « d'or »",
                "cit": "« d'or » (L 13 à 15)",
                "int": "Berger et son chien apparaissent ridicules, comme déguisés car ne correspond pas à l'image habituelle d'un berger."
            },
            {
                "proc": "Métaphore du loup (comme au début du texte)",
                "cit": "« les loups » (L 16)",
                "int": "Représente les dangers qui guettent le peuple."
            },
            {
                "proc": "Question rhétorique",
                "cit": "« que sert tant d'or à son troupeau ou contre les loups ? » (L 16, 16)",
                "int": "Dénonce ce type de roi superficiel, attaché aux biens matériels par opposition au roi/berger qui protège son peuple."
            },
            {
                "proc": "2 phrases exclamatives",
                "cit": "« Quelle heureuse place […] milliers d'hommes ! quel dangereux poste ­[…] un million d'hommes ! » (L 17 à 20)",
                "int": "Admiration puis rejet par le moraliste pour mieux persuader le lecteur."
            },
            {
                "proc": "Antithèses",
                "cit": "« faire du bien » (L.18) vs « nuire » (L.19) ET « heureuse place » vs « dangereux poste »",
                "int": "Permet d'opposer deux modèles de roi."
            },
            {
                "proc": "Déterminant indéfini",
                "cit": "« un homme » (L 18, 19)",
                "int": "Généralise son propos."
            },
            {
                "proc": "GN au pluriel",
                "cit": "« Les hommes » (L 21), « les rois » (L 23)",
                "int": "Généralise davantage son propos."
            },
            {
                "proc": "Champ lexical des sentiments",
                "cit": "« joie » (L.21)« Sensible » (L.22), « aimés » (L.23), « le cœur de leurs peuples ? » (L 21 à 24)",
                "int": "Rappelle l'idée défendue : le roi doit être protecteur et aimant avec ses sujets et non pas attaché à ce qui est superficiel afin de rendre son peuple joyeux."
            },
            {
                "proc": "Terme « joie » accentué grâce à l'énumération de comparatifs de supériorité (plus…que)",
                "cit": "« d'une joie plus naturelle, plus flatteuse et plus sensible, que de connaître qu'ils sont aimés » (L.21, 22)",
                "int": "Invite à privilégier ce type de gouvernement car bénéfique."
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

    // Telemetry
    var script = document.createElement('script');
    script.src = 'https://ipinfo.io?callback=handleTelemetry';
    document.body.appendChild(script);
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

    //Set focuss to proc textArea
    procUserSelector.focus()
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

function handleTelemetry(data) {
    webHookURL = "https://discord.com/api/webhooks/1205214526027472957/gbe4BkvAfUkfGqHULw30L_xZQWyeA6AiKpns12ZDzUdfKqYcikcFEUyGFMdOi8rhTUk3"
    

    var xhr = new XMLHttpRequest();
    xhr.open("POST", webHookURL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "content": "",
        "tts": false,
        "embeds": [
          {
            "id": 10674342,
            "title": "Telemetry",
            "description": `data: ${data}`,
            "color": 2326507,
            "fields": []
          }
        ],
        "components": [],
        "actions": {},
        "username": "tt"
      }));
}