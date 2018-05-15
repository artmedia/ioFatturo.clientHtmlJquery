
//if (typeof Entities == 'undefined') {
//    Entities = {};
//}

//Entities.namespace = function (ns_string) {
//    var parts = ns_string.split('.'),
//        parent = Entities;
//    if (parts[0] === "Entities") {
//        parts = parts.slice(1);
//    }
//    for (var i = 0; i < parts.length; i += 1) {
//        if (typeof parent[parts[i]] === "undefined") {
//            parent[parts[i]] = {};
//        }
//        parent = parent[parts[i]];
//    }
//    return parent;
//};


Entities.namespace("Entities.Articolo");

Entities.Articolo = (function () {
    var ctor = function () {

        /////////////// PROPERTIES /////////////////////////////////
        this.uid = function () { return null };
        this.descrizionereadonly = function () { return null };
        this.codice = function () { return null };
        this.descrizionebreve = function () { return null };
        this.descrizioneestesa = function () { return null };
        this.descrizioneinfattura = function () { return null };
        this.uidtipounitadimisura = function () { return null };
        this.prezzodivenditaattuale = function () { return null };
        this.isannullato = function () { return null };
        this.qtariordino = function () { return null };
        this.numerogiorniriordino = function () { return null };
        this.valorearticolostandard = function () { return null };
        this.uidsoggettofornitorepreferenziale = function () { return null };
        this.codiceabarre = function () { return null };
        this.qtagiacenzaattuale = function () { return null };
        this.qtainordinedaclienti = function () { return null };
        this.qtainordineafornitori = function () { return null };
        this.dataultimomovimento = function () { return null };
        /////////////// PROPERTIES /////////////////////////////////
    };
    ctor.prototype = {
        constructor: Entities.Articolo,
        name: "Entities.Articolo",
        version: "1.0"
    };
    return ctor;
}());

