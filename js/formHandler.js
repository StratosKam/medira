function handleEnter(event) {
    if (event.keyCode === 13) {
        setGET();
    }
    return false;
}

function setGET() {
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
    if (!location.origin)
        location.origin = location.protocol + "//" + location.host;
    window.location = location.protocol + '//' + location.host + location.pathname + params;
}

function handleLoad() {
    var params = window.location.search.substring(1).split("&");
    params=getValidated(params);
    if (params == "") {
        $('#categories').find('input:checkbox').prop("checked", true).next('label').removeClass("custom-unchecked").addClass("custom-checked");
    } else {
        $('#categories').attr("class","categories");
        //document.getElementById("categories").className = "collapse";
        populateForm(params);
        query(params[0].split("=")[1],getMinimal(params),1029);
    }
}

function populateForm(params) {
    var i;
    for (i = 0; i < params.length; ++i) {
        var param = params[i].split("=");
        if (param[0] == "q") {
            document.getElementById("inputText").value = decodeURIComponent(param[1]);
        } else {
            if (param[1] == 0) {
                $("#" + param[0]).next('label').removeClass("custom-unchecked").addClass("custom-indeterminate");
            } else if (param[1] == 1) {
                $("#" + param[0]).prop("checked", true).next('label').removeClass("custom-unchecked").addClass("custom-checked");
            }
        }
    }
}

function query(text,categories,limit){
    if(categories.length==0){
        return;
    }
    $.getJSON(getUrl(text,categories,limit), function(result){
        var div=$('<div></div>').attr('id', 'results').attr('class','results');
        div.appendTo('body');
        if(result.response.docs.length==0){
            div.append('<h1>No images found</h1>');
        }else{
            for (var i = 0; i < result.response.docs.length; i++) {
                div.append(getResultDiv(result.response.docs[i].articleURL,result.response.docs[i].imgURL,result.response.docs[i].caption));
            }
        }
    });
}

function getUrl(text,categories,limit){
    return 'http://snf-700467.vm.okeanos.grnet.gr:8983/solr/medira_test/select/?q=*'+text+'*%20AND('+getMergedCategories(categories)+')&rows='+limit+'&wt=json&json.wrf=?';
}

function getMergedCategories(categories){
    var merged='categories.' + categories[0].split('=')[0]+':1';
    var i;
    for(i=1;i<categories.length;++i){
        merged=merged + '%20OR%20categories.' + categories[i].split('=')[0]+':1';
    }
    return merged;
}

function getResultDiv(url,img,caption){
    return '<div class=\"result\"><a href=\"'+url+'\"><img src=\"'+img+'\" title="Go to the article" alt=\"'+caption+'\"></a><p>'+caption+'</p></div>';
}

function getValidated(allParams){
    var validated=[];
    var accepted=["q","DRUS","DRMR","DRCT","DRXR","DRAN","DRPE","DRCO","DVDM","DVEN","DVOR","DSEE","DSEC","DSEM","DMLI","DMEL","DMTR","DMFL","D3DR","GTAB","GPLI","GFIG","GSCR","GFLO","GSYS","GGEN","GGEL","GCHE","GMAT","GNCP","GHPR","Dxxx","DRxx","DVxx","DMxx","DSxx","Gxxx"];
    var i;
    for(i=0;i<allParams.length;++i){
        if(accepted.indexOf(allParams[i].split("=")[0])>-1){
            validated.push(allParams[i]);
        }
    }
    return validated;
}

function getMinimal(allParams){
    var minimal=[];
    var i;
    for (i = 1; i < allParams.length; ++i) {
        var param = allParams[i].split("=");
        if (!(/[a-z]/.test(param[0]))) {
            minimal.push(allParams[i])
        }
    }
    return minimal;
}
