function setGET(pages) {
    if(!$('#inputText').val()){
        return;
    }
    var params = "?q=" + encodeURIComponent($('#inputText').val());
    $('#categories').find('input:checked').each(function () {
        params = params + "&" + $(this).attr('name') + "=1";
    });
    $(".custom-indeterminate").each(function () {
        params = params + "&" + $(this).attr('for') + "=0";
    });
    params=params+'&pages='+pages;
    window.history.pushState("object or string", $('#inputText').val(), params);
}

function getUrlPages(){
    return parseInt(getUrlParameter('pages'),10);
}

function getUrlParameter(name) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === name) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};