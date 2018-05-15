
Entities.namespace("Entities.FatturaCliRiga");

Entities.FatturaCliRiga = (function () {
    var ctor = function () {

        /////////////// PROPERTIES /////////////////////////////////
        this.uidtemporaneo = function () { return null }; //USATO SOLO NELLA MASCHERA
        this.uid = function () { return null };
        this.descrizionereadonly = function () { return null };
        this.descrizioneinfattura = function () { return null };
        this.quantita = function () { return null };
        this.importounitario = function () { return null };
        this.uidtipoaliquotaiva = function () { return null };
        this.uidtipounitadimisura = function () { return null };
        this.uidarticolo = function () { return null };
        this.codicearticolo = function () { return null };

        this.uidddt = function () { return null };
        this.ddtnumerodescr = function () { return null };
        this.ddtdatadescr = function () { return null };
        /////////////// PROPERTIES /////////////////////////////////
    };
    ctor.prototype = {
        constructor: Entities.FatturaCliRiga,
        name: "Entities.FatturaCliRiga",
        version: "1.0"
    };
    return ctor;
}());

