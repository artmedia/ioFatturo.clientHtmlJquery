# Client rimarchiabile del gestionale ioFatturo.it  per Fatturazione Elettronica

## Cos'è

#### Client html con API Rest

Questo progetto è un **client html rimarchiabile** del famoso gestionale ioFatturo.it che offre, tra gli altri, i servizi per la gestione completa della **Fatturazione Elettronica**.

procedura guidata inizio | passaggi successivi
------------ | -------------
![Schermata 1](https://www.iofatturo.it/portals/17/images/Github_Schermata1.jpg) | ![Schermata 2](https://www.iofatturo.it/portals/17/images/Github_Schermata2.jpg)


#### Rimarchiabile

Il client puo' essere rimarchiato e personalizzato con la **propria ragione sociale**, il proprio logo e i propri riferimenti in modo che una software house/società di servizi possa offrire ai propri clienti il servizio di Fatturazione Elettronica (e prossimamente anche altri come fatture passive, magazzino, ddt, ecc..) mantenendone la gestione e vendendo il servizio con il proprio listino.
La software house/società di servizi rimane l'**unico interlocutore** con il proprio cliente.   
Questo client html non richiede installazione, se non la copia dei file su uno spazio di web hosting, non richiede manutenzione perchè tutte le funzioni sono richiamate attraverso API del gestionale in cloud ioFatturo.it.
Le maschere di questo progetto hanno il solo compito di presentare e organizzare i dati scaricati attraverso API Rest e di ripassarli sempre attraverso API al motore del gestionale ioFatturo dove vengono salvati e dove vengono eseguite le funzionalità più "pesanti" come la generazione del documento xml ed eventualmente l'invio dal SDI.

#### Fatturazione Elettronica

Tutte le funzionalità di creazione/gestione della Fattura Elettronica sono richiamate attraverso le **API Rest** che si interfacciano al motore del gestionale ioFatturo.it, viene anche gestito il servizio di firma elettronica del documento e di archiviazione digitale sostitutiva; questi ultimi vengono offerti attraverso l'interfacciamento ai server di Aruba in modo del tutto trasparente.


## A chi si rivolge

Questo progetto si rivolge a società di servizi, software house, web agency, web developer che avendo un parco clienti vogliono offrire servizi gestionali, in particolar modo la Fatturazione Elettronica. 

## Finalità del progetto

Agevolare la gestione della Fatturazione Elettronica B2G (PA), B2B e B2C alle microimprese, artigiani, professionisti.  
Come? Come attraverso **maschere con passaggi guidati** e funzionalità gestire in cloud.

## Caratteristiche tecniche

Tutto il progetto è costituito da semplici pagine html5 con jQuery e Bootstrap 4.
Pertanto l'Hosting di queste pagine html non richiede scripting lato server (niente php, java, asp.net), nè accesso a database.
Nessun dato viene salvato localmente tranne le informazioni necessarie per l'autenticazione alle API e alcune collection di dati finalizzate a migliorare l'interazione con l'utente (queste informazioni vengono salvate in LocalStorage del browser).

Pertanto si ha a disposizione un mini CMS composto da alcune pagine fisse:
- Homepage
- Assistenza tecnica 
- Assistenza commerciale
- Contatti
- Privacy
- Operazioni:
  - Creazione Fattura Elettronica
  - Consultazione Archivio Fatture

Le pagine al di sotto della voce Operazioni non possono essere personalizzate perchè si connettono alle API del gestionale ioFatturo.it.
Per tutte le altre pagine i contenuti sono personalizzabili modificando il file SiteConfig.json  
Un esempio di come possono essere personalizzate:   
https://www.nonSoloFatture.it

Homepage parametrizzabile | archivio fatture elettroniche
------------ | -------------
![Schermata 3](https://www.iofatturo.it/portals/17/images/Github_Schermata3.jpg) | ![Schermata 4](https://www.iofatturo.it/portals/17/images/Github_Schermata4.jpg)

## Funzionalità

- creazione guidata della Fattura Elettronica
- salvataggio sul server attraverso API Rest
- modifica di una Fattura precedentemente creata
- consultazione archivio Fatture con filtro per data, cliente e sezionale
- generazione documento XML
- firma elettronica del documento XML
- invio al Sistema Di Interscambio (SDI) che lo recapiterà al proprio cliente

## API gestionali (cloud funzionale)

ioFatturo mette a disposizione un set di API per svolgere le principali funzioni gestionali di cui hanno bisogno le microimprese/artigiani/professionisti.  
Automatizzare i processi attraversop queste funzioni ora è possibile:  
esempio: caricare gli ordini e gestirli in base allo stato  
oppure convertire un ordine in fattura automaticamente, ecc

## Requisiti

- un proprio spazio Web in HTTPS  (es. https://www.miosito.it)
- un account su [ioFatturo.it](https://www.ioFatturo.it)  

## Come iniziare

1. Scarica i files di questo progetto.
2. Rinomina il file SiteConfig.json.txt in SiteConfig.json 
3. Personalizza il file **SiteConfig.json** sostituendo i dati preimpostati con quelli della tua ditta
4. Pubblica il tutto sul tuo spazio Web (il sito deve essere HTTPS)
5. Imposta il sito in modo che parta con index.html

## Contatti

ioFatturo.it - gestionale in cloud  
[www.ioFatturo.it](https://www.ioFatturo.it)  

powered by Artmedia sas  
[www.Artmedia.it](https://www.Artmedia.it)  
tel.+39.0172.63.73.25  
email: info@artmedia.it  
