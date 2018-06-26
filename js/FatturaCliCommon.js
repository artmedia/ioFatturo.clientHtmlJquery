
function doDownloadXmlFn() {

    AjaxMessageStart();

    $.ajax({
        //dataType: 'binary',
        //processData: false,
        cache: false,
        method: 'GET',
        url: myStorage.ApiUrl + '/FatturaCliente/getXmlFatturaElettronica/' + myObjFattura.uid
        , beforeSend: function (xhdr, settings) {
            xhdr.setRequestHeader("Authorization", "Bearer " + myStorage.token);
        }
    }).done(function (resp) {

        var myResponse = $.parseJSON(resp);
        var success = myResponse.success; // = true;
        var errormessage = myResponse.errormessage; // = "OK";
        var errorcode = myResponse.errorcode; // = 0;
        var pagecount = myResponse.pagecount;

        if (success == true) {

            var _myResp = $.parseJSON(myResponse.obj);
            var filecontentbase64 = _myResp.base64filecontent;
            var filename = _myResp.filename;
            var filesize = _myResp.filesize;
            var filetype = _myResp.filetype;

            var blob = b64toBlob(filecontentbase64, filetype);
            //download.js
            download(blob, filename, filetype);
        };
        AjaxMessageStop();

    }).fail(function (xhdr, statusText, errorText) {

        //alert("err=" + errorText);
        AjaxMessageStop();
        openPopupMessage('error', "Ops... c'è stato un problema.<br />" + errorText);

    });

};

function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
};

function b64toString(str) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
}

function doStampaPdfFn() {

    AjaxMessageStart();

    $.ajax({
        //dataType: 'binary',
        //processData: false,
        cache: false,
        method: 'GET',
        url: myStorage.ApiUrl + '/FatturaCliente/getPdfFatturaElettronica/' + myObjFattura.uid
        , beforeSend: function (xhdr, settings) {
            xhdr.setRequestHeader("Authorization", "Bearer " + myStorage.token);
        }
    }).done(function (resp, status, xhr) {

        var myResponse = $.parseJSON(resp);
        var success = myResponse.success; // = true;
        var errormessage = myResponse.errormessage; // = "OK";
        var errorcode = myResponse.errorcode; // = 0;
        var pagecount = myResponse.pagecount;

        if (success == true) {

            var _myResp = $.parseJSON(myResponse.obj);
            var filecontentbase64 = _myResp.base64filecontent;
            var filename = _myResp.filename;
            var filesize = _myResp.filesize;
            var filetype = _myResp.filetype;

            var blob = b64toBlob(filecontentbase64, filetype);
            //download.js
            download(blob, filename, filetype);
        }
        AjaxMessageStop();

    }).fail(function (xhdr, statusText, errorText) {
      
        AjaxMessageStop();
        openPopupMessage('error', "Ops... c'è stato un problema.<br />" + errorText);
    });

};

function doVisualizzaAnteprimaHtmlFn() {

    AjaxMessageStart();

    $.ajax({
        //dataType: 'binary',
        //processData: false,
        method: 'GET',
        cache: false,
        url: myStorage.ApiUrl + '/FatturaCliente/getHtmlFatturaElettronica/' + myObjFattura.uid
        , beforeSend: function (xhdr, settings) {
            xhdr.setRequestHeader("Authorization", "Bearer " + myStorage.token);
        }
    }).done(function (resp) {

        var myResponse = $.parseJSON(resp);
        var success = myResponse.success; // = true;
        var errormessage = myResponse.errormessage; // = "OK";
        var errorcode = myResponse.errorcode; // = 0;
        var pagecount = myResponse.pagecount;

        if (success == true) {

            var _myResp = $.parseJSON(myResponse.obj);
            var filecontentbase64 = _myResp.base64filecontent;
            var filename = _myResp.filename;
            var filesize = _myResp.filesize;
            var filetype = _myResp.filetype;

            var htmlcontent = b64toString(filecontentbase64, filetype);

            $('#myModalVisualizzaAnteprimaHtml').modal("show");
            $('#myBoxVisualizzaAnteprimaHtml').empty().append(htmlcontent);
        };

        AjaxMessageStop();

    }).fail(function (xhdr, statusText, errorText) {
       
        AjaxMessageStop();
        openPopupMessage('error', "Ops... c'è stato un problema.<br />" + errorText);
    });

};


function openModalInvioSDIFn() {
    $('#boxMessageInvioSDI').empty();
    $('#myModalInvioSDI').modal("show");
};

function doInvioSDIFn() {

    AjaxMessageStart();

    $.ajax({
        //dataType: 'binary',
        //processData: false,
        method: 'GET',
        cache: false,
        url: myStorage.ApiUrl + '/FatturaCliente/sendFatturaElettronicaToSDI/' + myObjFattura.uid
        , beforeSend: function (xhdr, settings) {
            xhdr.setRequestHeader("Authorization", "Bearer " + myStorage.token);
        }
    }).done(function (resp) {

        var myResponse = $.parseJSON(resp);
        var success = myResponse.success; // = true;
        var errormessage = myResponse.errormessage; // = "OK";
        var errorcode = myResponse.errorcode; // = 0;
        var pagecount = myResponse.pagecount;

        if (success == true) {
            var _myResp = $.parseJSON(myResponse.obj);
            //openPopupMessage('success', _myResp);
            var _htmlMessageInvioSDI = '<span style="color:green;">' + _myResp + '</span>';
            $('#boxMessageInvioSDI').empty().append(_htmlMessageInvioSDI);
        } else {
            var _myResp = "Ops... c'è stato un problema durante l'invio del documento al SDI.<br />Riprova più tardi; nel caso il problema si dovesse riproporre contatta l'assistenza.";
            try {
                // PROVO A RECUPERARE IL MESSAGGIO DI ERRORE
                _myResp = $.parseJSON(myResponse.obj);
            } catch (err) {
                //NULLA
            };
            //openPopupMessage('error', _myResp);
            var _htmlMessageInvioSDI = '<span style="color:red;">' + _myResp + '</span>';
            $('#boxMessageInvioSDI').empty().append(_htmlMessageInvioSDI);
        };

        AjaxMessageStop();

    }).fail(function (xhdr, statusText, errorText) {
       
        AjaxMessageStop();
        openPopupMessage('error', "Ops... c'è stato un problema.<br />" + errorText);
    });

};
