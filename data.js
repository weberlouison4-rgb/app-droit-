// Données des matières, séances et exercices basées sur les cours L2

const subjectsData = [
    {
        id: 'droit-administratif',
        name: 'Droit Administratif',
        description: 'Étude du droit administratif français, des principes généraux et du contentieux administratif.',
        icon: '🏛️',
        sessions: [
            {
                id: 'critere-droit-administratif',
                name: 'Séance 1: Le critère du droit administratif',
                description: 'Analyse des critères de distinction du droit administratif, théorie du service public et puissance publique.',
                icon: '⚖️',
                exercises: [
                    {
                        id: 'flashcards-critere-1',
                        type: 'flashcards',
                        name: 'Flashcards - Concepts clés',
                        level: 'easy',
                        questions: 10,
                        description: 'Mémorisez les concepts fondamentaux du critère du droit administratif.',
                        data: [
                            {
                                question: "Qu'est-ce que le service public selon Duguit ?",
                                answer: "Une activité dont l'accomplissement doit être assuré, réglé et contrôlé par les gouvernants, parce qu'elle est indispensable à la réalisation et au développement de l'interdépendance sociale."
                            },
                            {
                                question: "Quel arrêt fonda la théorie du service public ?",
                                answer: "TC, 8 février 1873, Blanco"
                            },
                            {
                                question: "Quelle est la définition juridique du droit administratif selon Hauriou ?",
                                answer: "Le droit administratif est la branche du droit public qui règle l'organisation, les droits et l'exercice des droits des personnes administratives, en tant qu'ils intéressent le fonctionnement des services publics et la surveillance des services d'utilité publique."
                            },
                            {
                                question: "Quels sont les deux éléments essentiels du service public ?",
                                answer: "1) L'activité doit être indispensable à la réalisation de l'interdépendance sociale, 2) Elle ne peut être réalisée complètement que par l'intervention de la force gouvernante."
                            },
                            {
                                question: "Quelle est la différence entre service public et puissance publique ?",
                                answer: "La puissance publique est un moyen utilisé pour assurer le fonctionnement des services publics, tandis que le service public est une activité d'intérêt général."
                            },
                            {
                                question: "Quel rôle joue la continuité dans le service public ?",
                                answer: "La continuité est un des caractères essentiels du service public : il ne peut être interrompu un seul instant, et les gouvernants doivent employer leur puissance à en assurer l'accomplissement d'une manière absolument continue."
                            },
                            {
                                question: "Qu'est-ce que la théorie de la gestion publique ?",
                                answer: "Une théorie développée par Maurice Hauriou qui distingue la gestion publique (avec puissance publique) de la gestion privée (sans puissance publique) dans le fonctionnement des services publics."
                            },
                            {
                                question: "Quel est le rôle du Conseil d'État dans le développement du droit administratif ?",
                                answer: "Le Conseil d'État a joué un rôle central dans l'élaboration du droit administratif, notamment en développant la jurisprudence sur le service public."
                            },
                            {
                                question: "Quelle est la relation entre droit administratif et Constitution ?",
                                answer: "Le droit administratif s'inscrit dans le cadre constitutionnel et doit respecter les principes fondamentaux de la Constitution."
                            },
                            {
                                question: "Quels sont les critères de distinction entre droit administratif et droit privé ?",
                                answer: "Le critère principal est la présence de la puissance publique et la poursuite d'un but d'intérêt général, par opposition aux relations entre particuliers régies par le droit privé."
                            }
                        ]
                    },
                    {
                        id: 'qcm-critere-1',
                        type: 'qcm',
                        name: 'QCM - Théories du droit administratif',
                        level: 'medium',
                        questions: 10,
                        description: 'Testez vos connaissances sur les différentes théories du critère du droit administratif.',
                        data: [
                            {
                                question: "Selon Duguit, l'État est avant tout :",
                                options: ["Une puissance souverain", "Une coopération de services publics", "Un ensemble de règles juridiques", "Un territoire délimité"],
                                correctAnswer: 1,
                                explanation: "Duguit considère que l'État est une coopération de services publics organisés et contrôlés par des gouvernants."
                            },
                            {
                                question: "L'arrêt Blanco (1873) est célèbre pour :",
                                options: ["Avoir aboli la responsabilité de l'État", "Avoir établi la distinction entre droit public et droit privé", "Avoir créé le Conseil d'État", "Avoir défini le service public"],
                                correctAnswer: 1,
                                explanation: "L'arrêt Blanco a marqué la distinction fondamentale entre le droit administratif (droit public) et le droit civil (droit privé)."
                            },
                            {
                                question: "Quelle est la définition du droit administratif selon Hauriou ?",
                                options: ["L'ensemble des règles applicables à l'administration", "La branche du droit public qui règle l'organisation et les droits des personnes administratives", "Le droit qui s'applique aux services publics", "Le droit de la puissance publique"],
                                correctAnswer: 1,
                                explanation: "Hauriou définit le droit administratif comme la branche du droit public qui règle l'organisation, les droits et l'exercice des droits des personnes administratives."
                            },
                            {
                                question: "Le critère du service public a été principalement développé par :",
                                options: ["Léon Duguit", "Maurice Hauriou", "René Chapus", "Georges Vedel"],
                                correctAnswer: 0,
                                explanation: "Léon Duguit est le principal théoricien de la notion de service public comme fondement du droit administratif."
                            },
                            {
                                question: "Quelle est la conséquence de la théorie du service public sur la compétence juridictionnelle ?",
                                options: ["Tous les litiges relatifs aux services publics relèvent du juge administratif", "Seuls les litiges impliquant la puissance publique relèvent du juge administratif", "Les litiges relatifs aux services publics relèvent du juge judiciaire", "La compétence dépend de la nature de l'activité"],
                                correctAnswer: 3,
                                explanation: "La jurisprudence a évolué pour prendre en compte la nature de l'activité : si elle implique la puissance publique, elle relève du juge administratif, sinon du juge judiciaire."
                            },
                            {
                                question: "Quelle est la position de la jurisprudence concernant les services publics industriels et commerciaux ?",
                                options: ["Ils relèvent toujours du droit administratif", "Ils relèvent toujours du droit privé", "Ils peuvent relever du droit privé s'ils n'impliquent pas la puissance publique", "Ils sont exclus du champ du droit administratif"],
                                correctAnswer: 2,
                                explanation: "Les services publics industriels et commerciaux (SPIC) peuvent relever du droit privé lorsqu'ils n'impliquent pas l'exercice de la puissance publique."
                            },
                            {
                                question: "Quel est l'apport majeur de l'arrêt Société des granits porphyroïdes (1912) ?",
                                options: ["Il a confirmé la théorie du service public", "Il a établi que le service public peut être géré par des personnes privées", "Il a aboli la responsabilité de l'État", "Il a créé le critère de la puissance publique"],
                                correctAnswer: 1,
                                explanation: "Cet arrêt a confirmé que la gestion d'un service public peut être confiée à une personne privée, tout en restant soumise au droit administratif."
                            },
                            {
                                question: "Quelle est la relation entre puissance publique et service public ?",
                                options: ["La puissance publique est un moyen au service du service public", "Le service public est un moyen au service de la puissance publique", "Ce sont deux notions indépendantes", "La puissance publique remplace le service public"],
                                correctAnswer: 0,
                                explanation: "La puissance publique est un moyen utilisé par l'administration pour assurer le fonctionnement des services publics."
                            },
                            {
                                question: "Quel est le rôle du Tribunal des conflits dans l'évolution du critère du droit administratif ?",
                                options: ["Il a unifié les jurisprudences administrative et judiciaire", "Il a créé le critère du service public", "Il a aboli le dualisme juridictionnel", "Il a établi la primauté du juge administratif"],
                                correctAnswer: 0,
                                explanation: "Le Tribunal des conflits a joué un rôle important dans l'harmonisation des jurisprudences entre les deux ordres de juridiction."
                            },
                            {
                                question: "Quelle est la critique principale adressée à la théorie du service public ?",
                                options: ["Elle est trop restrictive", "Elle est trop extensive et ne permet pas de distinguer clairement le droit administratif", "Elle ignore la puissance publique", "Elle est trop théorique et peu pratique"],
                                correctAnswer: 1,
                                explanation: "La critique principale est que la notion de service public est trop vague et ne permet pas de délimiter précisément le champ du droit administratif."
                            }
                        ]
                    },
                    {
                        id: 'vrai-faux-critere-1',
                        type: 'true-false',
                        name: 'Vrai ou Faux - Service public',
                        level: 'easy',
                        questions: 10,
                        description: 'Vérifiez vos connaissances sur les caractéristiques du service public.',
                        data: [
                            {
                                statement: "Le service public est toujours géré par une personne publique.",
                                answer: false,
                                explanation: "Le service public peut être géré par des personnes privées (ex : services publics industriels et commerciaux)."
                            },
                            {
                                statement: "La continuité est un caractère essentiel du service public.",
                                answer: true,
                                explanation: "La continuité est effectivement un des caractères fondamentaux du service public, qui ne doit pas être interrompu."
                            },
                            {
                                statement: "La théorie du service public a été développée par Maurice Hauriou.",
                                answer: false,
                                explanation: "La théorie du service public a été principalement développée par Léon Duguit, bien que Hauriou l'ait approfondie."
                            },
                            {
                                statement: "L'arrêt Blanco (1873) marque la naissance du droit administratif moderne.",
                                answer: true,
                                explanation: "L'arrêt Blanco est considéré comme fondateur du droit administratif moderne en établissant la distinction entre droit public et droit privé."
                            },
                            {
                                statement: "La puissance publique est un critère autonome de distinction du droit administratif.",
                                answer: false,
                                explanation: "La puissance publique est plutôt un moyen au service du service public, et non un critère autonome."
                            },
                            {
                                statement: "Un service public peut fonctionner sans impliquer la puissance publique.",
                                answer: true,
                                explanation: "Certains services publics (comme les services industriels et commerciaux) peuvent fonctionner selon des règles de droit privé."
                            },
                            {
                                statement: "Le Conseil d'État a toujours considéré que tous les services publics relèvent du droit administratif.",
                                answer: false,
                                explanation: "Le Conseil d'État a nuancé sa position, reconnaissant que certains services publics peuvent relever du droit privé."
                            },
                            {
                                statement: "La notion de service public est définie de manière précise dans le Code civil.",
                                answer: false,
                                explanation: "La notion de service public est une construction jurisprudentielle et doctrinale, non définie dans le Code civil."
                            },
                            {
                                statement: "L'interdépendance sociale est au cœur de la théorie du service public de Duguit.",
                                answer: true,
                                explanation: "Duguit fonde sa théorie du service public sur la notion d'interdépendance sociale, qui impose aux gouvernants d'organiser les services nécessaires à la collectivité."
                            },
                            {
                                statement: "La gestion privée d'un service public est impossible en droit français.",
                                answer: false,
                                explanation: "La gestion privée d'un service public est possible, notamment pour les services publics industriels et commerciaux (SPIC)."
                            }
                        ]
                    },
                    {
                        id: 'jurisprudence-critere-1',
                        type: 'jurisprudence-matching',
                        name: 'Jurisprudence - Arrêts fondateurs',
                        level: 'hard',
                        questions: 8,
                        description: 'Associez les arrêts célèbres à leur apport en matière de critère du droit administratif.',
                        data: [
                            {
                                jurisprudence: "TC, 8 février 1873, Blanco",
                                contribution: "Fondation de la distinction entre droit public et droit privé, affirmant la responsabilité de l'État selon des règles spécifiques."
                            },
                            {
                                jurisprudence: "CE, 31 juillet 1912, Société des granits porphyroïdes",
                                contribution: "Confirmation que la gestion d'un service public peut être confiée à une personne privée, sous contrôle administratif."
                            },
                            {
                                jurisprudence: "CE, 13 janvier 1961, Magnier",
                                contribution: "Affirmation que le service public peut être géré selon des règles de droit privé lorsqu'il s'agit d'activités industrielles et commerciales."
                            },
                            {
                                jurisprudence: "CE, 20 décembre 1935, Établissement Vezia",
                                contribution: "Précision sur la notion de service public et l'application du droit administratif aux activités de l'administration."
                            },
                            {
                                jurisprudence: "CE, 6 février 1903, Terrier",
                                contribution: "Développement de la théorie de la gestion publique et privée des services publics."
                            },
                            {
                                jurisprudence: "CE, 22 février 1907, Syndicat des propriétaires",
                                contribution: "Extension de la notion de service public aux activités d'intérêt général assumées par l'administration."
                            },
                            {
                                jurisprudence: "CE, 16 novembre 1956, Union syndicale",
                                contribution: "Affirmation de la compétence du juge administratif pour les litiges relatifs aux services publics."
                            },
                            {
                                jurisprudence: "CE, 19 octobre 1956, Union des syndicats CGT",
                                contribution: "Précisions sur les droits des usagers des services publics."
                            }
                        ]
                    }
                ]
            },
            {
                id: 'sources-constitutionnelles',
                name: 'Séance 2: Les sources constitutionnelles',
                description: 'Étude de l\'impact de la Constitution sur le droit administratif.',
                icon: '📜',
                exercises: [
                    {
                        id: 'flashcards-sources-1',
                        type: 'flashcards',
                        name: 'Flashcards - Sources constitutionnelles',
                        level: 'easy',
                        questions: 10,
                        description: 'Mémorisez les concepts clés des sources constitutionnelles.',
                        data: [
                            {
                                question: "Qu'est-ce que la théorie de la loi écran ?",
                                answer: "La théorie selon laquelle l'administration ne peut être attaquée sur le fondement de l'inconstitutionnalité d'une loi, car la loi fait écran entre la Constitution et les actes administratifs."
                            },
                            {
                                question: "Quel est le rôle du Conseil constitutionnel ?",
                                answer: "Le Conseil constitutionnel contrôle la conformité des lois à la Constitution, avant leur promulgation ou après via la QPC."
                            },
                            {
                                question: "Qu'est-ce que la QPC ?",
                                answer: "Un mécanisme permettant à tout justiciable de contester la constitutionnalité d'une loi applicable à son procès, devant le Conseil constitutionnel."
                            },
                            {
                                question: "Quel est l'apport de l'arrêt GISTI (1978) ?",
                                answer: "Le Conseil d'État a affirmé que les principes généraux du droit, notamment ceux du Préambule de 1958, s'appliquent même en l'absence de texte."
                            },
                            {
                                question: "Quelle est la valeur juridique du Préambule de 1958 ?",
                                answer: "Le Préambule de 1958 a valeur constitutionnelle et fait partie du bloc de constitutionnalité."
                            }
                        ]
                    },
                    {
                        id: 'qcm-sources-1',
                        type: 'qcm',
                        name: 'QCM - Contrôle de constitutionnalité',
                        level: 'medium',
                        questions: 10,
                        description: 'Testez vos connaissances sur le contrôle de constitutionnalité.',
                        data: [
                            {
                                question: "Quel arrêt est fondateur de la théorie de la loi écran ?",
                                options: ["CE, 6 novembre 1936, Arrighi", "CE, 8 décembre 1978, GISTI", "CE, 3 juillet 1996, Koné", "CE, 3 octobre 2008, Commune d'Annecy"],
                                correctAnswer: 0,
                                explanation: "L'arrêt Arrighi de 1936 est considéré comme fondateur de la théorie de la loi écran."
                            },
                            {
                                question: "Quelle institution contrôle la constitutionnalité des lois ?",
                                options: ["Le Conseil d'État", "Le Conseil constitutionnel", "La Cour de cassation", "Le Tribunal des conflits"],
                                correctAnswer: 1,
                                explanation: "Le Conseil constitutionnel est la seule institution compétente pour contrôler la conformité des lois à la Constitution."
                            },
                            {
                                question: "Depuis quand la QPC est-elle applicable en France ?",
                                options: ["1958", "1992", "2008", "2010"],
                                correctAnswer: 2,
                                explanation: "La QPC a été introduite par la réforme constitutionnelle de 2008 et est applicable depuis le 1er mars 2010."
                            },
                            {
                                question: "Quel arrêt a marqué le tournant dans la prise en compte des normes constitutionnelles ?",
                                options: ["CE, 6 novembre 1936, Arrighi", "CE, 8 décembre 1978, GISTI", "CE, 3 juillet 1996, Koné", "CE, 3 octobre 2008, Commune d'Annecy"],
                                correctAnswer: 1,
                                explanation: "L'arrêt GISTI de 1978 marque un tournant en affirmant que les principes généraux du droit s'appliquent à l'administration."
                            },
                            {
                                question: "Quelle est la conséquence de la théorie de la loi écran ?",
                                options: ["L'administration ne peut jamais être attaquée sur le fondement de l'inconstitutionnalité", "L'administration peut être attaquée seulement si la loi est manifestement incompatible", "L'administration peut toujours être attaquée", "L'administration est soumise au même contrôle que le législateur"],
                                correctAnswer: 0,
                                explanation: "Selon la théorie de la loi écran, l'administration ne peut être attaquée sur le fondement de l'inconstitutionnalité d'une loi."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'droit-obligations',
        name: 'Droit des Obligations',
        description: 'Étude des obligations en droit civil, des contrats, de la responsabilité civile et des quasi-contrats.',
        icon: '📝',
        sessions: [
            {
                id: 'negociations-precontractuelles',
                name: 'Séance 1: Les négociations précontractuelles',
                description: 'Analyse du devoir d\'information, de la rupture des pourparlers et du préjudice réparable.',
                icon: '🤝',
                exercises: [
                    {
                        id: 'flashcards-negociations-1',
                        type: 'flashcards',
                        name: 'Flashcards - Devoir d\'information',
                        level: 'easy',
                        questions: 10,
                        description: 'Mémorisez les règles essentielles du devoir d\'information.',
                        data: [
                            {
                                question: "Qu'est-ce que le devoir d'information précontractuelle ?",
                                answer: "Obligation pesant sur les parties de communiquer à l'autre partie les informations dont l'importance est déterminante pour son consentement."
                            },
                            {
                                question: "Quel article du Code civil encadre le devoir d'information précontractuelle ?",
                                answer: "Article 1112-1 du Code civil"
                            },
                            {
                                question: "Quelles informations doivent être communiquées selon l'article 1112-1 ?",
                                answer: "Les informations qui ont un lien direct et nécessaire avec le contenu du contrat ou la qualité des parties, et dont l'importance est déterminante pour le consentement de l'autre partie."
                            },
                            {
                                question: "Quelle est la sanction du manquement au devoir d'information ?",
                                answer: "La nullité du contrat pour dol (vice du consentement) ou des dommages-intérêts pour préjudice subi."
                            },
                            {
                                question: "Quelle est la charge de la preuve en matière de devoir d'information ?",
                                answer: "C'est à la partie qui connaît une information déterminante pour le consentement de l'autre de prouver qu'elle l'a fournie."
                            },
                            {
                                question: "Un professionnel a-t-il un devoir d'information renforcé ?",
                                answer: "Oui, un professionnel a un devoir d'information renforcé envers un non-professionnel ou un consommateur."
                            },
                            {
                                question: "Qu'est-ce que la réticence dolosive ?",
                                answer: "Le fait pour une partie de taire intentionnellement une information importante qui aurait pu influencer le consentement de l'autre partie."
                            },
                            {
                                question: "Quelle est la différence entre dol et erreur ?",
                                answer: "Le dol implique une intention de tromper de la part d'une partie, tandis que l'erreur est une méprise spontanée de la part de la victime."
                            },
                            {
                                question: "Quelle est la jurisprudence sur l'obligation d'information de l'acheteur envers le vendeur ?",
                                answer: "L'acheteur, même professionnel, n'est pas tenu d'une obligation d'information au profit du vendeur sur la valeur du bien acquis (Cass. Civ. 1, 3 mai 2000)."
                            },
                            {
                                question: "Qu'est-ce que l'obligation de loyauté dans les pourparlers ?",
                                answer: "Obligation de bonne foi qui pèse sur les parties durant les négociations et qui interdit les comportements déloyaux."
                            }
                        ]
                    },
                    {
                        id: 'qcm-negociations-1',
                        type: 'qcm',
                        name: 'QCM - Rupture des pourparlers',
                        level: 'medium',
                        questions: 10,
                        description: 'Testez vos connaissances sur la rupture des pourparlers et ses conséquences.',
                        data: [
                            {
                                question: "Quelle est la condition pour qu'une rupture de pourparlers soit abusive ?",
                                options: ["La rupture doit être soudaine et sans préavis", "La rupture doit être fautive, c'est-à-dire contraires à la bonne foi", "La rupture doit être décidée par une seule partie", "La rupture doit intervenir après un accord verbal"],
                                correctAnswer: 1,
                                explanation: "La rupture des pourparlers est abusive lorsqu'elle est contraires à la bonne foi, c'est-à-dire lorsqu'elle est fautive (Cass. Com., 11 juillet 2000)."
                            },
                            {
                                question: "Quelle est la sanction de la rupture abusive des pourparlers ?",
                                options: ["La nullité du contrat", "Des dommages-intérêts pour réparer le préjudice subi", "L'obligation de conclure le contrat", "Une amende civile"],
                                correctAnswer: 1,
                                explanation: "La sanction de la rupture abusive des pourparlers est l'octroi de dommages-intérêts pour réparer le préjudice subi par la victime."
                            },
                            {
                                question: "Quelle est la nature du préjudice réparable en cas de rupture abusive ?",
                                options: ["La perte de la chance de conclure le contrat", "La perte des bénéfices attendus du contrat", "Les frais engagés pour les négociations", "Toutes ces réponses"],
                                correctAnswer: 2,
                                explanation: "Le préjudice réparable comprend principalement les frais engagés pour les négociations (frais de déplacement, études, etc.), mais pas la perte des bénéfices attendus du contrat (Cass. Com., 26 novembre 2003)."
                            },
                            {
                                question: "Quelle est la position de la jurisprudence sur la rupture des pourparlers en cas d'accord partiel ?",
                                options: ["La rupture est toujours abusive", "La rupture n'est jamais abusive", "La rupture peut être abusive si elle intervient de manière déloyale", "La rupture est interdite une fois un accord partiel obtenu"],
                                correctAnswer: 2,
                                explanation: "Même en cas d'accord partiel, la rupture des pourparlers peut être abusive si elle intervient de manière déloyale ou contraires à la bonne foi."
                            },
                            {
                                question: "Quel arrêt a précisé que la rupture des pourparlers doit être motivée par un intérêt légitime ?",
                                options: ["Cass. Com., 11 juillet 2000", "Cass. Civ. 1, 3 mai 2000", "Cass. Com., 26 novembre 2003", "Cass. Civ. 3, 17 janvier 2007"],
                                correctAnswer: 0,
                                explanation: "L'arrêt Cass. Com., 11 juillet 2000 a précisé que la rupture des pourparlers doit être motivée par un intérêt légitime et ne doit pas être contraires à la bonne foi."
                            },
                            {
                                question: "Quelle est la différence entre pourparlers et promesse de contrat ?",
                                options: ["Les pourparlers sont contraignants, la promesse ne l'est pas", "La promesse de contrat est contraignante, les pourparlers ne le sont pas", "Les deux sont contraignants", "Aucune des deux n'est contraignante"],
                                correctAnswer: 1,
                                explanation: "La promesse de contrat (promesse unilatérale ou synallagmatique) est contraignante pour son auteur, tandis que les pourparlers ne créent pas d'obligation de conclure."
                            },
                            {
                                question: "Quelle est la condition pour qu'une promesse de contrat soit valable ?",
                                options: ["Elle doit être acceptée par le bénéficiaire", "Elle doit contenir tous les éléments essentiels du contrat", "Elle doit être faite par écrit", "Toutes ces réponses"],
                                correctAnswer: 3,
                                explanation: "Pour être valable, une promesse de contrat doit contenir tous les éléments essentiels du contrat, être faite par écrit (pour certains contrats) et être acceptée par le bénéficiaire."
                            },
                            {
                                question: "Quelle est la sanction du non-respect d'une promesse de contrat ?",
                                options: ["La nullité de la promesse", "L'exécution forcée du contrat", "Des dommages-intérêts", "Toutes ces réponses"],
                                correctAnswer: 2,
                                explanation: "Le non-respect d'une promesse de contrat peut donner lieu à des dommages-intérêts, voire à l'exécution forcée du contrat si la promesse était synallagmatique."
                            },
                            {
                                question: "Quelle est la position de la jurisprudence sur l'obligation d'information en cas de vente entre professionnels ?",
                                options: ["Les professionnels n'ont pas d'obligation d'information entre eux", "Les professionnels ont une obligation d'information renforcée entre eux", "Les professionnels ont une obligation d'information normale, mais pas renforcée", "L'obligation d'information dépend du secteur d'activité"],
                                correctAnswer: 2,
                                explanation: "Les professionnels ont une obligation d'information normale entre eux, mais pas une obligation renforcée comme envers un consommateur."
                            },
                            {
                                question: "Quelle est la différence entre dol et rupture abusive des pourparlers ?",
                                options: ["Le dol vise le consentement, la rupture abusive vise les négociations", "Le dol est toujours intentionnel, la rupture abusive peut être non intentionnelle", "Le dol concerne les contrats conclus, la rupture abusive concerne les contrats non conclus", "Toutes ces réponses"],
                                correctAnswer: 3,
                                explanation: "Le dol vise le vice du consentement dans un contrat conclu, tandis que la rupture abusive des pourparlers concerne les négociations précontractuelles. Le dol est intentionnel, tandis que la rupture abusive peut être due à une simple négligence. Le dol concerne les contrats conclus, la rupture abusive concerne les contrats non conclus."
                            }
                        ]
                    },
                    {
                        id: 'vrai-faux-negociations-1',
                        type: 'true-false',
                        name: 'Vrai ou Faux - Devoir d\'information',
                        level: 'easy',
                        questions: 10,
                        description: 'Vérifiez vos connaissances sur le devoir d\'information.',
                        data: [
                            {
                                statement: "Le devoir d'information précontractuelle est encadré par l'article 1112-1 du Code civil.",
                                answer: true,
                                explanation: "L'article 1112-1 du Code civil encadre effectivement le devoir d'information précontractuelle depuis la réforme de 2016."
                            },
                            {
                                statement: "L'acheteur a toujours l'obligation d'informer le vendeur sur la valeur du bien.",
                                answer: false,
                                explanation: "L'acheteur, même professionnel, n'est pas tenu d'une obligation d'information au profit du vendeur sur la valeur du bien acquis (Cass. Civ. 1, 3 mai 2000)."
                            },
                            {
                                statement: "La réticence dolosive consiste à taire intentionnellement une information importante.",
                                answer: true,
                                explanation: "La réticence dolosive est bien le fait de taire intentionnellement une information importante qui aurait pu influencer le consentement de l'autre partie."
                            },
                            {
                                statement: "Un professionnel a toujours un devoir d'information renforcé envers un autre professionnel.",
                                answer: false,
                                explanation: "Un professionnel n'a pas de devoir d'information renforcé envers un autre professionnel, mais seulement envers un non-professionnel ou un consommateur."
                            },
                            {
                                statement: "La charge de la preuve du manquement au devoir d'information pèse sur la victime.",
                                answer: false,
                                explanation: "C'est à la partie qui connaît une information déterminante pour le consentement de l'autre de prouver qu'elle l'a fournie (article 1112-1, alinéa 2 du Code civil)."
                            },
                            {
                                statement: "La rupture des pourparlers est toujours fautive.",
                                answer: false,
                                explanation: "La rupture des pourparlers n'est pas toujours fautive. Elle n'est fautive que si elle est contraires à la bonne foi (Cass. Com., 11 juillet 2000)."
                            },
                            {
                                statement: "Le préjudice réparable en cas de rupture abusive des pourparlers comprend la perte des bénéfices attendus du contrat.",
                                answer: false,
                                explanation: "Le préjudice réparable comprend principalement les frais engagés pour les négociations, mais pas la perte des bénéfices attendus du contrat (Cass. Com., 26 novembre 2003)."
                            },
                            {
                                statement: "Une promesse de contrat est toujours contraignante.",
                                answer: true,
                                explanation: "Une promesse de contrat (unilatérale ou synallagmatique) crée une obligation pour son auteur de maintenir son offre pendant le délai convenu."
                            },
                            {
                                statement: "L'obligation de loyauté dans les pourparlers est une obligation de moyen.",
                                answer: true,
                                explanation: "L'obligation de loyauté (ou de bonne foi) dans les pourparlers est bien une obligation de moyen, qui impose aux parties d'adopter un comportement loyal."
                            },
                            {
                                statement: "Le dol et l'erreur sont deux vices du consentement similaires.",
                                answer: false,
                                explanation: "Le dol et l'erreur sont deux vices du consentement distincts : le dol implique une intention de tromper de la part d'une partie, tandis que l'erreur est une méprise spontanée de la part de la victime."
                            }
                        ]
                    },
                    {
                        id: 'jurisprudence-negociations-1',
                        type: 'jurisprudence-matching',
                        name: 'Jurisprudence - Négociations précontractuelles',
                        level: 'hard',
                        questions: 8,
                        description: 'Associez les arrêts célèbres à leur apport en matière de négociations précontractuelles.',
                        data: [
                            {
                                jurisprudence: "Cass. Civ. 1, 3 mai 2000, 98-11.381",
                                contribution: "Affirmation qu'aucune obligation d'information ne pèse sur l'acheteur, même professionnel, au profit du vendeur sur la valeur du bien acquis."
                            },
                            {
                                jurisprudence: "Cass. Civ. 3, 17 janvier 2007, 06-10.442",
                                contribution: "Confirmation que l'acquéreur, même professionnel, n'est pas tenu d'une obligation d'information au profit du vendeur sur la valeur du bien acquis."
                            },
                            {
                                jurisprudence: "Com. 14 mai 2025, n°23-17.948",
                                contribution: "Précision sur le devoir d'information précontractuelle : les informations doivent avoir un lien direct et nécessaire avec le contenu du contrat."
                            },
                            {
                                jurisprudence: "Cass. Com., 11 juillet 2000, n°97-18.275",
                                contribution: "Affirmation que la rupture des pourparlers est abusive lorsqu'elle est contraires à la bonne foi, même en l'absence de mauvaise foi manifeste."
                            },
                            {
                                jurisprudence: "Cass. Com., 26 novembre 2003, n° 00-10.243",
                                contribution: "Précision que le préjudice réparable en cas de rupture abusive des pourparlers comprend les frais engagés pour les négociations."
                            },
                            {
                                jurisprudence: "Cass. Civ. 1, 26 mai 1999",
                                contribution: "Affirmation que la promesse de contrat crée une obligation pour son auteur de maintenir son offre pendant le délai convenu."
                            },
                            {
                                jurisprudence: "Cass. Com., 26 novembre 2003, n° 00-10.949",
                                contribution: "Précision sur la responsabilité délictuelle en cas de rupture abusive des pourparlers et sur la charge de la preuve."
                            },
                            {
                                jurisprudence: "Cass. Civ. 1, 13 octobre 1998",
                                contribution: "Affirmation que l'obligation de loyauté s'impose à tout contractant et que sa violation peut entraîner la nullité du contrat pour dol."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'droit-civil',
        name: 'Droit Civil',
        description: 'Étude des principes fondamentaux du droit civil français, des personnes, de la famille, des biens et des obligations.',
        icon: '⚖️',
        sessions: []
    },
    {
        id: 'droit-constitutionnel',
        name: 'Droit Constitutionnel',
        description: 'Étude des institutions politiques, de la Constitution, des droits fondamentaux et du contrôle de constitutionnalité.',
        icon: '🏛️',
        sessions: []
    },
    {
        id: 'droit-penal',
        name: 'Droit Pénal',
        description: 'Étude des infractions, des peines, de la responsabilité pénale et de la procédure pénale.',
        icon: '🚔',
        sessions: []
    },
    {
        id: 'droit-international',
        name: 'Droit International Public',
        description: 'Étude des relations internationales, des traités, des organisations internationales et du droit international humanitaire.',
        icon: '🌍',
        sessions: []
    }
];
