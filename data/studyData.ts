import { MacroArea } from '../types';

export const MACRO_AREAS_DATA: MacroArea[] = [
    {
        id: "scienza-tecnologia-responsabilita",
        title: "SCIENZA, TECNOLOGIA E RESPONSABILITÀ",
        stimoli: [
            "Breve articolo sull'algoritmo RSA o sul protocollo TCP/IP (Informatica)",
            "Estratto su CRISPR o sulla terapia genica (Scienze Naturali)",
            "Testo divulgativo sulla Relatività Ristretta o sulla Meccanica Quantistica (Fisica)"
        ],
        collegamenti: [
            "Informatica – Crittografia: Differenza tra chiave simmetrica (Cesare) e asimmetrica (RSA)",
            "Fisica – E=mc² e Onde Elettromagnetiche: L'equivalenza massa-energia",
            "Scienze Naturali – DNA Ricombinante & Biotecnologie: CRISPR/Cas 9",
            "Filosofia – Positivismo vs Critica della Scienza: Auguste Comte vs Nietzsche",
            "Storia – L'età giolittiana: Fiducia nel progresso e industrializzazione",
            "Italiano – Futurismo e Crisi del '900: Marinetti, Pirandello, Svevo",
            "Educazione Civica – Art. 9 e 32 Cost.; Agenda 2030 Goal 3 e 9"
        ],
        ripasso: {
            "Informatica": [
                { name: "Crittografia: algoritmi simmetrici e asimmetrici", resources: [{ text: "Approfondimento sulla Crittografia (PDF)", url: "#" }, { text: "Video: RSA Explained Simply", url: "#" }] },
                { name: "Reti: Architettura TCP/IP", resources: [{ text: "Guida al modello TCP/IP", url: "#" }] }
            ],
            "Fisica": [
                { name: "Relatività Ristretta: postulati di Einstein", resources: [{ text: "Einstein e la Relatività (articolo)", url: "#" }] },
                { name: "Onde elettromagnetiche: Equazioni di Maxwell" }
            ],
            "Scienze Naturali": [
                { name: "DNA ricombinante: clonaggio genico, PCR", resources: [{ text: "Le basi del DNA Ricombinante", url: "#" }] },
                { name: "Biotecnologie: Green, Red, White" }
            ],
            "Filosofia": [
                { name: "Positivismo (Comte): legge dei tre stadi" },
                { name: "Nietzsche: critica alla morale" },
                { name: "Bergson: critica al meccanicismo" }
            ],
            "Storia": [
                { name: "Italia liberale e età giolittiana" }
            ],
            "Italiano": [
                { name: "Futurismo: Manifesto di Marinetti" },
                { name: "Svevo: figura dell'inetto" },
                { name: "Pirandello: vitalismo e forme" }
            ],
            "Educazione Civica": [
                { name: "Costituzione: Art. 3, 9, 32" },
                { name: "Agenda 2030: Goal 3 e 9" },
                { name: "Dibattito: fact-checking online" }
            ]
        }
    },
    {
        id: "guerra-totalitarismi-resistenza",
        title: "GUERRA, TOTALITARISMI E RESISTENZA",
        stimoli: [
            "Cartina geografica delle alleanze nel 1939 (Storia)",
            "Brano da 'Se questo è un uomo' di Primo Levi (Italiano)",
            "Fotografia del Muro di Berlino o battaglia di Caporetto (Storia)"
        ],
        collegamenti: [
            "Storia – Dalla 'vittoria mutilata' alla Seconda Guerra Mondiale",
            "Italiano – Ungaretti (Veglia), Primo Levi (Shoah), Fenoglio (Resistenza)",
            "Filosofia – Marx (violenza come motore), Schopenhauer (pessimismo)",
            "Fisica – Energia nucleare e responsabilità dello scienziato",
            "Matematica – Equazioni differenziali per decadimento radioattivo",
            "Arte – Guernica di Picasso, Stati d'animo di Boccioni",
            "Educazione Civica – Art. 11 Cost. (ripudio della guerra)"
        ],
        ripasso: {
            "Storia": [{name: "Prima Guerra Mondiale: cause, Caporetto"}, {name: "Totalitarismi: Fascismo, Nazismo"}, {name: "Seconda Guerra Mondiale: Resistenza"}, {name: "Guerra Fredda: Muro di Berlino"}],
            "Italiano": [{name: "Ungaretti: L'allegria (Veglia, Fratelli, Soldati)"}, {name: "Primo Levi: Se questo è un uomo"}, {name: "Fenoglio: Una questione privata"}],
            "Filosofia": [{name: "Marx: materialismo storico"}, {name: "Schopenhauer: pessimismo"}, {name: "Kierkegaard: fede come scelta"}],
            "Fisica": [{name: "Meccanica Quantistica: dualismo ondulatorio"}, {name: "Caso Majorana"}, {name: "I ragazzi di via Panisperna"}],
            "Matematica": [{name: "Equazioni Differenziali: definizione, Cauchy"}],
            "Arte": [{name: "Picasso: Guernica"}, {name: "Boccioni: La città che sale, Stati d'animo"}],
            "Educazione Civica": [{name: "Costituzione: Art. 11"}, {name: "Shoah e memoria"}, {name: "Foibe"}]
        }
    },
    {
        id: "crisi-io-alienazione-maschere",
        title: "CRISI DELL'IO, ALIENAZIONE E MASCHERE",
        stimoli: [
            "Pagina da 'Uno, nessuno e centomila' di Pirandello",
            "Immagine de 'Il Grido' di Munch o 'Les Demoiselles d'Avignon' di Picasso",
            "Dati statistici sui social network e salute mentale"
        ],
        collegamenti: [
            "Italiano – Pirandello (maschere sociali), Svevo (inettitudine e nevrosi)",
            "Filosofia – Freud (inconscio), Nietzsche (morte di Dio), Fichte (Io/Non-Io)",
            "Matematica – Funzioni discontinue come metafora della frattura",
            "Fisica – Principio di indeterminazione di Heisenberg",
            "Arte – Cubismo (Picasso), Espressionismo (Munch)",
            "Informatica – Identità digitale, deep-fake, sentiment analysis",
            "Educazione Civica – Art. 3 Cost., Agenda 2030 Goal 3"
        ],
        ripasso: {
            "Italiano": [{name: "Pirandello: vitalismo, forme, maschere, L'umorismo"}, {name: "Svevo: inetto, psicoanalisi, La coscienza di Zeno"}],
            "Filosofia": [{name: "Freud: topiche della mente, inconscio"}, {name: "Nietzsche: morte di Dio"}, {name: "Fichte: Io come fondamento"}],
            "Matematica": [{name: "Funzioni: discontinuità"}, {name: "Calcolo differenziale: non derivabilità"}, {name: "Probabilità classica"}],
            "Fisica": [{name: "Meccanica Quantistica: principio di indeterminazione"}],
            "Arte": [{name: "Munch: Il grido"}, {name: "Picasso: Les demoiselles d'Avignon"}],
            "Informatica": [{name: "Sito web in remoto"}, {name: "Concorrenza: algoritmi di scheduling"}],
            "Educazione Civica": [{name: "Costituzione: Art. 3"}, {name: "Agenda 2030: Goal 3"}]
        }
    },
     {
        id: "uomo-natura-paesaggio-sostenibilita",
        title: "UOMO-NATURA, PAESAGGIO E SOSTENIBILITÀ",
        stimoli: [
            "Immagine di 'Impressione, levar del sole' di Monet",
            "Grafico concentrazione CO₂ dal 1850 al 2024",
            "Brano da 'La ginestra' di Leopardi"
        ],
        collegamenti: [
            "Scienze Naturali – Fotosintesi (ciclo di Calvin), biotecnologie verdi",
            "Fisica – Spettro solare, legge di Planck, energie rinnovabili",
            "Matematica – Integrale definito per energia solare",
            "Italiano – Leopardi (La ginestra), Pascoli, Montale",
            "Filosofia – Bergson (slancio vitale), Schelling (spirito-natura)",
            "Arte – Romanticismo (Friedrich), Impressionismo (Monet)",
            "Educazione Civica – Agenda 2030 Goal 13-15"
        ],
        ripasso: {
            "Scienze Naturali": [{name: "Fotosintesi: ciclo di Calvin-Benson, piante CAM"}, {name: "Biotecnologie verdi: piante transgeniche"}],
            "Fisica": [{name: "Corpo nero e ipotesi di Planck"}, {name: "Onde EM: energia trasportata"}],
            "Matematica": [{name: "Calcolo Integrale: integrali definiti"}, {name: "Equazioni Differenziali"}],
            "Italiano": [{name: "Leopardi: La ginestra, Dialogo della Natura"}, {name: "Pascoli: Myricae, poetica del fanciullino"}, {name: "Montale: Ossi di seppia, I limoni"}],
            "Filosofia": [{name: "Bergson: durata reale (durée)"}, {name: "Schelling: identità spirito-natura"}],
            "Arte": [{name: "Friedrich: Viandante sul mare di nebbia"}, {name: "Turner: Pioggia, vapore, Velocità"}, {name: "Monet: Impressione, sole nascente"}],
            "Educazione Civica": [{name: "Agenda 2030: OGM e genome editing"}]
        }
    },
    {
        id: "tempo-movimento-percezione-attimo",
        title: "TEMPO, MOVIMENTO E PERCEZIONE DELL'ATTIMO",
        stimoli: [
            "Diagramma dilatazione dei tempi relativistici",
            "Immagine di 'Dinamismo di un cane al guinzaglio' di Balla",
            "Poesia 'Mattina' di Ungaretti"
        ],
        collegamenti: [
            "Fisica – Relatività Ristretta: tempo non assoluto, dilatazione",
            "Matematica – Derivata come velocità istantanea, concetto di limite",
            "Filosofia – Bergson: tempo misurato vs tempo vissuto (durata)",
            "Italiano – Ungaretti (attimo), Montale (varco), Leopardi (infinito)",
            "Arte – Futurismo (movimento), Impressionismo (istante)",
            "Informatica – Scheduling Round-Robin, timestamp di rete",
            "Educazione Civica – Art. 36 Cost. (diritto al riposo)"
        ],
        ripasso: {
            "Fisica": [{name: "Relatività Ristretta: dilatazione tempi, trasformazioni di Lorentz"}, {name: "Onde EM: luce come onda"}],
            "Matematica": [{name: "Calcolo differenziale: definizione di derivata"}, {name: "Limiti: definizione di limite"}],
            "Filosofia": [{name: "Bergson: tempo vissuto vs misurato"}],
            "Italiano": [{name: "Ungaretti: L'allegria (Mattina)"}, {name: "Montale: il varco, correlativo oggettivo"}, {name: "Leopardi: L'infinito"}],
            "Arte": [{name: "Boccioni: Forme uniche della continuità"}, {name: "Balla: Dinamismo di un cane"}, {name: "Impressionismo: tecnica dell'attimo"}],
            "Informatica": [{name: "Scheduling: round robin"}, {name: "Timestamp di rete"}],
            "Educazione Civica": [{name: "Costituzione: Art. 36"}]
        }
    },
    {
        id: "liberta-diritti-costituzione-mondo-digitale",
        title: "LIBERTÀ, DIRITTI, COSTITUZIONE E MONDO DIGITALE",
        stimoli: [
            "Articoli 3 e 21 della Costituzione + grafico fake-news",
            "Schema modello Client/Server o Peer-to-Peer",
            "Fotografia manifestazione per diritti civili"
        ],
        collegamenti: [
            "Storia – Percorso dei diritti: età giolittiana → Costituzione 1948",
            "Informatica – Reti TCP/IP, crittografia, accessibilità web",
            "Filosofia – Marx (alienazione), Feuerbach, Kierkegaard (libertà)",
            "Italiano – Pirandello (critica omologazione), Futurismo (libertà)",
            "Matematica – Codici controllo errore, probabilità hash",
            "Arte – Delacroix: La libertà che guida il popolo",
            "Educazione Civica – GDPR, Carta UE, Agenda 2030 Goal 16"
        ],
        ripasso: {
            "Storia": [{name: "Età giolittiana: politica sociale"}, {name: "Costituzione 1948: Assemblea Costituente"}, {name: "Principi fondamentali costituzionali"}],
            "Informatica": [{name: "Reti: Client-server, peer-to-peer, TCP/IP"}, {name: "Crittografia: Diffie-Hellman"}, {name: "WordPress in remoto"}],
            "Filosofia": [{name: "Marx: alienazione"}, {name: "Feuerbach: critica alla teologia"}, {name: "Kierkegaard: fede come scelta"}],
            "Italiano": [{name: "Pirandello: la trappola"}, {name: "Futurismo: Manifesto"}],
            "Matematica": [{name: "Probabilità composta"}],
            "Arte": [{name: "Delacroix: La libertà che guida il popolo"}],
            "Educazione Civica": [{name: "Costituzione: Art. 3, 7, 8"}, {name: "Accessibilità web"}, {name: "Agenda 2030: Goal 16"}]
        }
    },
    {
        id: "caso-probabilita-previsione-scientifica",
        title: "CASO, PROBABILITÀ E PREVISIONE SCIENTIFICA",
        stimoli: [
            "Tabella dati meteorologici o citazione Einstein 'Dio non gioca a dadi'",
            "Grafico decadimento radioattivo",
            "Brano da 'Il sistema periodico' di Primo Levi"
        ],
        collegamenti: [
            "Matematica – Probabilità classica vs continua, distribuzioni",
            "Fisica – Principio indeterminazione, decadimento nucleare",
            "Scienze Naturali – Mutazioni casuali, modelli epidemiologici",
            "Filosofia – Kierkegaard (angoscia), Schopenhauer (Volontà)",
            "Italiano – Pascoli (X Agosto), Montale (male di vivere), Levi",
            "Informatica – Algoritmi pseudo-casuali, crittografia",
            "Educazione Civica – Gestione del rischio sociale"
        ],
        ripasso: {
            "Matematica": [{name: "Probabilità: classica, totale, composta"}, {name: "Distribuzioni di probabilità"}, {name: "Valor medio"}],
            "Fisica": [{name: "Principio di indeterminazione"}, {name: "Decadimento radioattivo"}],
            "Scienze Naturali": [{name: "Mutazioni: meccanismi"}, {name: "Regolazione genica"}],
            "Filosofia": [{name: "Kierkegaard: angoscia e disperazione"}, {name: "Schopenhauer: volontà e rappresentazione"}],
            "Italiano": [{name: "Pascoli: Myricae (X Agosto)"}, {name: "Montale: Ossi di seppia (Spesso il male di vivere)"}, {name: "Primo Levi: Il sistema periodico"}],
            "Informatica": [{name: "Crittografia: uso del caso"}],
            "Educazione Civica": [{name: "Conferenza: fare sport in sicurezza"}]
        }
    }
];