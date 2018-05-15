
Entities.namespace("Entities.FatturaCli");

Entities.FatturaCli = (function () {
    var ctor = function () {

        /////////////// PROPERTIES /////////////////////////////////
        this.uid = function () { return null };
        this.descrizionereadonly = function () { return null };
        
        this.uidtipofatturacliente = function () { return null };
        this.uidtipoformatotrasmissione = function () { return null };
        this.numero = function () { return null };
        this.uidtiposezionale = function () { return null };
        this.codicesezionalereadonly = function () { return null };

        this.datadocumentogg = function () { return null };
        this.datadocumentomm = function () { return null };
        this.datadocumentoaa = function () { return null };

        this.uidsoggetto = function () { return null };
        this.righe = function () { return null };
        // [
        //          {
        //            this.uid = function () { return null };
        //            this.descrizionereadonly = function () { return null };
        //            this.descrizioneinfattura = function () { return null };
        //            this.quantita = function () { return null };
        //            this.importounitario = function () { return null };
        //            this.uidtipoaliquotaiva = function () { return null };
        //            this.uidtipounitadimisura = function () { return null };
        //            this.uidarticolo = function () { return null };
        //            this.codicearticolo = function () { return null };
        //          }
        // ],
        this.uidtipopagamento = function () { return null };
        this.uidtipocondizionepagamento = function () { return null };
        this.uidtipocoordinatebancarie = function () { return null };
        this.uidtipoesigibilitaiva = function () { return null };
        this.allegaticollection = function () { return null };

        this.datascadenzapagamentogg = function () { return null };
        this.datascadenzapagamentomm = function () { return null };
        this.datascadenzapagamentoaa = function () { return null };

        this.perccontributoprevidenziale = function () { return null };
        this.uidtipoaliquotaivasucontributoprevidenziale = function () { return null };
        this.percritenutaacconto = function () { return null };
        this.importospeseanticipoprofessionistiart15 = function () { return null };
        this.opzionalepa_ordinediacquisto_numeroordine = function () { return null };

        this.opzionalepa_ordinediacquisto_datacontrattogg = function () { return null };
        this.opzionalepa_ordinediacquisto_datacontrattomm = function () { return null };
        this.opzionalepa_ordinediacquisto_datacontrattoaa = function () { return null };

        this.opzionalepa_ordinediacquisto_codicecup = function () { return null };
        this.opzionalepa_ordinediacquisto_codicecig = function () { return null };
        this.opzionalepa_ordinediacquisto_codicecommessaconvenzione = function () { return null };
        this.opzionalepa_daticontratto_numerocontratto = function () { return null };

        this.opzionalepa_daticontratto_datacontrattogg = function () { return null };
        this.opzionalepa_daticontratto_datacontrattomm = function () { return null };
        this.opzionalepa_daticontratto_datacontrattoaa = function () { return null };

        this.opzionalepa_daticontratto_codicecup = function () { return null };
        this.opzionalepa_daticontratto_codicecig = function () { return null };
        this.opzionalepa_daticontratto_codicecommessaconvenzione = function () { return null };
        this.opzionalepa_datisal_riferimentofase = function () { return null };
        this.opzionalepa_riferimentonormativo = function () { return null };
        this.opzionalepa_riferimentoamministrazione = function () { return null };
        this.opzionalepa_importobollo = function () { return null };
        this.opzionalepa_importobollo_addebitoalcliente = function () { return null };
        this.opzionalepa_visualizzacognomeprofessionista = function () { return null };
        this.opzionalepa_visualizzanomeprofessionista = function () { return null };

        this.importototalenettoapagarsireadonly = function () { return null };
        this.importoritenutaaccontoreadonly = function () { return null };
        this.importoivareadonly = function () { return null };
        /////////////// PROPERTIES /////////////////////////////////
    };
    ctor.prototype = {
        constructor: Entities.FatturaCli,
        name: "Entities.FatturaCli",
        version: "1.0"
    };
    return ctor;
}());

