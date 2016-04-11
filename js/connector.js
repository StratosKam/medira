function startQuery(){
    changeHash(1);
    $('#input').addClass("withResults");
    $('#categories').removeClass("center").addClass("left");
    var div=$('<div></div>').attr('id', 'results').attr('class','results');
    div.appendTo('body');
    query(getQueryInputURI(),getCategories());
}

function addPage(){
    if(getUrlPages()!=0){
        changeHash(getUrlPages()+1);
        query(getQueryInputURI(),getCategories());
    }
}

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        addPage();
    }
});