function handleEnter(event) {
    if (event.keyCode === 13) {
        setGET();
    }
    return false;
}

function setGET(){
    var params="?q="+$('#inputText').val();
    $('#form').find('input:checked').each(function () {
        params=params+"&"+$(this).attr('name')+"=1";
    });
    $(".custom-indeterminate").each(function () {
        params=params+"&"+$(this).attr('for')+"=0";
    });
    if (!location.origin)
        location.origin = location.protocol + "//" + location.host;
    window.location = location.protocol +'//'+ location.host + location.pathname+params;
}

function handleLoad(){
    var params=window.location.search.substring(1).split("&");
    if(params==""){
        $('#form').find('input:checkbox').prop("checked", true).next('label').removeClass("custom-unchecked").addClass("custom-checked");
    }else{
        document.getElementById("categories").className = "collapse";
        populateForm(params);
        query(params);
    }

}

function populateForm(params){
    var i;
    for (i = 0; i < params.length; ++i) {
        var param=params[i].split("=");
        if(param[0]=="q"){
            document.getElementById("inputText").value=param[1];
        }else{
            if(param[1]==0){
                $("#"+param[0]).next('label').removeClass("custom-unchecked").addClass("custom-indeterminate");
            }else if(param[1]==1){
                $("#"+param[0]).prop("checked", true).next('label').removeClass("custom-unchecked").addClass("custom-checked");
            }
        }
    }
}

function query(allParams) {
    demo();
    //TODO create proper url
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
    document.getElementById("results").innerHTML =
        "<div class=\"result\"><h1>GFIG</h1><a href=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017\"> <img src=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017/bin/1297-9686-42-10-3.jpg\" alt=\"Accuracy of QTL-EBV and total EBV as a...\"></a><p>Accuracy of QTL-EBV and total EBV as a...</p></div>" +
        "<div class=\"result\"><h1>GFIG</h1><a href=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017\"> <img src=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017/bin/1297-9686-42-10-3.jpg\" alt=\"Accuracy of QTL-EBV and total EBV as a...\"></a><p>Accuracy of QTL-EBV and total EBV as a...</p></div>" +
        "<div class=\"result\"><h1>GFIG</h1><a href=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017\"> <img src=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017/bin/1297-9686-42-10-3.jpg\" alt=\"Accuracy of QTL-EBV and total EBV as a...\"></a><p>Accuracy of QTL-EBV and total EBV as a...</p></div>" +
        "<div class=\"result\"><h1>GFIG</h1><a href=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017\"> <img src=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017/bin/1297-9686-42-10-3.jpg\" alt=\"Accuracy of QTL-EBV and total EBV as a...\"></a><p>Accuracy of QTL-EBV and total EBV as a...</p></div>" +
        "<div class=\"result\"><h1>GFIG</h1><a href=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017\"> <img src=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017/bin/1297-9686-42-10-3.jpg\" alt=\"Accuracy of QTL-EBV and total EBV as a...\"></a><p>Accuracy of QTL-EBV and total EBV as a...</p></div>" +
        "<div class=\"result\"><h1>GFIG</h1><a href=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017\"> <img src=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017/bin/1297-9686-42-10-3.jpg\" alt=\"Accuracy of QTL-EBV and total EBV as a...\"></a><p>Accuracy of QTL-EBV and total EBV as a...</p></div>" +
        "<div class=\"result\"><h1>GFIG</h1><a href=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017\"> <img src=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017/bin/1297-9686-42-10-3.jpg\" alt=\"Accuracy of QTL-EBV and total EBV as a...\"></a><p>Accuracy of QTL-EBV and total EBV as a...</p></div>" +
        "<div class=\"result\"><h1>GFIG</h1><a href=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017\"> <img src=\"http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2861017/bin/1297-9686-42-10-3.jpg\" alt=\"Accuracy of QTL-EBV and total EBV as a...\"></a><p>Accuracy of QTL-EBV and total EBV as a...</p></div>";

}
