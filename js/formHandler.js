function handleEnter(event) {
    if (event.keyCode === 13) {
        formHandle();
    }

    return false;
}

function formHandle() {
    var text = $('#inputText').val();
    var selected = [];
    $('#form').find('input:checked').each(function () {
        selected.push($(this).attr('name'));
    });
    var categories = "";
    var i;
    for (i = 0; i < selected.length; ++i) {
        if (selected[i] != "ignore") {
            categories = categories + "&" + selected[i] + ":1";
        }
    }
    query("?q=caption:*" + text + "*" + categories);
    //TODO create correct url
}

function query(url) {
    demo();
    //var xmlhttp;
    //if (window.XMLHttpRequest) {
    //    xmlhttp = new XMLHttpRequest();
    //} else {
    //    // code for older browsers
    //    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    //}
    //xmlhttp.onreadystatechange = function () {
    //    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    ////TODO handle response
    //        document.getElementById("results").innerHTML = xmlhttp.responseText;
    //    }
    //};
    //xmlhttp.open("GET", url, true);
    //xmlhttp.send();
}

function demo() {
    document.getElementById("categories").className = "collapse";
    document.getElementById("results").innerHTML = "<a href=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017\"> <img src=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017/bin/1297-9686-42-10-3.jpg\" alt=\"Accuracy of QTL-EBV and total EBV as a...\"></a>";
}
