# gestione dello stile del progetto

## posizione dei file di stile

tutti i file di stile si trovano all'interno della path [/src/styles].
I file contenti la dicitura [file].module.scss solo file modulari, validi solo per gli import scritti al loro interno.

al suo interno:

- [/src/styles/global]: contiene i file di stile globali utili per tutte le pagine.
- [/src/styles/pages]: contiene lo stile dedicato alla pagina che rappresenta, ogni file contiene la path al quale rappresenta lo stile.
- [src/styles/components]: contiene stili specifici per i componenti utilizzati per la pagina.

## tailwind

E' stato importata la libreria di Tailwind che da uno stile di base al progetto.
L'import si trova all'interno di [/src/styles/global/_tailwind.scss].
