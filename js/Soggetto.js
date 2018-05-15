
Entities.namespace("Entities.Articolo");

Entities.Soggetto = (function () {
    var ctor = function () {

        /////////////// PROPERTIES /////////////////////////////////
        this.uid = function () { return null };
        this.descrizionereadonly = function () { return null };
        this.ragionesociale = function () { return null };
        this.piva = function () { return null };
        this.cf = function () { return null };
        this.sedelegaleindirizzo = function () { return null };
        this.sedelegalecap = function () { return null };
        this.sedelegalelocalita = function () { return null };
        this.sedelegaleprovincia = function () { return null };
        this.sedelegalestato = function () { return null };
        this.isannullato = function () { return null };
        this.nomeabituale = function () { return null };
        this.sede2indirizzo = function () { return null };
        this.sede2cap = function () { return null };
        this.sede2localita = function () { return null };
        this.sede2provincia = function () { return null };
        this.sede2stato = function () { return null };        
        this.telefono1 = function () { return null };
        this.telefono2 = function () { return null };
        this.fax = function () { return null };
        this.email = function () { return null };
        this.pec = function () { return null };
        this.note = function () { return null };
        this.scontostandard = function () { return null };
        this.sitoweb = function () { return null };
        this.livellointeressecrm = function () { return null }; //integer 0-4
        this.codiceunivocoipa = function () { return null };
        this.ispareadonly = function () { return null }; //Read Only: è una PA ? Se il codice univoco è di 6 caratteri
        /////////////// PROPERTIES /////////////////////////////////
    };
    ctor.prototype = {
        constructor: Entities.Soggetto,
        name: "Entities.Soggetto",
        version: "1.0"
    };
    return ctor;
}());

