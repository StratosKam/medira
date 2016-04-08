function setGET() {
    if (!$('#inputText').val()) {
        return;
    }
    var params = "?q=" + encodeURIComponent($('#inputText').val());
    $('#categories').find('input:checked').each(function () {
        params = params + "&" + $(this).attr('name') + "=1";
    });
    $(".custom-indeterminate").each(function () {
        params = params + "&" + $(this).attr('for') + "=0";
    });
    if (!location.origin)
        location.origin = location.protocol + "//" + location.host;
    window.location = location.protocol + '//' + location.host + location.pathname + params;

}

function getUrlPages() {
    if (window.location.hash) {
        return parseInt(window.location.hash.substring(1), 10);
    } else {
        return 1;
    }
}

function changeHash(hash) {
    window.location.replace("#" + hash);
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
}