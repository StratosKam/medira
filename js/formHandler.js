function handleEnter(event) {
    if (event.keyCode === 13) {
        setGET();
    }
    return false;
}

function handleLoad() {
    var params = window.location.search.substring(1).split("&");
    params=getValidated(params);
    if (params == "") {
        $('#categories').find('input:checkbox').prop("checked", true).next('label').removeClass("custom-unchecked").addClass("custom-checked");
    } else {
        $('#categories').attr("class","categories");
        populateForm(params);
        startQuery();
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

function getQueryInputURI(){
    return encodeURIComponent($('#inputText').val());
}

function getCategories(){
    var categories=[];
    $('#categories').find('input:checked').each(function () {
        if(!(/[a-z]/.test($(this).attr('name')))){
            categories.push($(this).attr('name'));
        }
    });
    return categories;
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

function handleCheckboxChange(){
    if ($('#results').length){
        $('#results').remove();
        setGET();
        //startQuery();
    }
}