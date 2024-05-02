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
                "proc": "Pronom « leur » => nom « Suzanne » ",
                "cit": "(l.134-135) « Que tu leur dises\n       Que tu dises à Suzanne »",
                "int": "Changement rapide de destinataire :\n    Traduit la difficulté pour la mère à exprimer sa demande."
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
                "int": "Exprime l'ordre qu'elle donne à Louis"
            },
            {
                "proc": "Négations",
                "cit": "(l.153) « il n'est plus responsable de nous », (l.155) « il ne l'as jamais été »",
                "int": "Traduit la rupture avec le passé."
            },
            {
                "proc": "Commentaire entre tirets",
                "cit": "(l.155-163) « - il ne l'as jamais été […] un rôle qui n'est pas le sien - »",
                "int": "Vient nuancer/annuler le rôle joué par Antoine."
            },
            {
                "proc": "Comparatif de supériorité « mieux que »",
                "cit": "(l.156) « je sais cela mieux que quiconque »",
                "int": "Elle se donne statut supérieur, elle sait tout."
            },
            {
                "proc": "Champ lexical de l'illusion",
                "cit": "(l.157) « il a toujours cru », (l.158) « a toujours voulu le croire », (l.160) « il se voulait responsable »",
                "int": "La mère remet en cause le rôle joué par Antoine."
            },
            {
                "proc": "Vocabulaire du théâtre associé au verbe « voler »",
                "cit": "(l.162) « Voler un rôle »",
                "int": "Position illégitime d’Antoine qui a pris la place de l’ainé. Elle encourage donc Louis à reprendre sa place "
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