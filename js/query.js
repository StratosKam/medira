function query(text,categories){
    if(categories.length==0){
        return;
    }
    $.getJSON(getSolrUrl(text,categories), function(result){
        var div=$('#results');
        if(result.response.docs.length==0){
            if(getUrlPages()==1){
                div.append('<h1>No images found</h1>');
            }else{
                changeHash(0);
            }
        }else{
            for (var i = 0; i < result.response.docs.length; i++) {
                div.append(getResultDiv(result.response.docs[i].articleURL,result.response.docs[i].imgURL,result.response.docs[i].caption));
            }
        }
    });
}

function getSolrUrl(text,categories){
    var page=getUrlPages()-1;
    var start=page*10;
    return 'http://snf-700467.vm.okeanos.grnet.gr:8983/solr/medira_test/select/?q=*'+text+'*%20AND('+getMergedCategories(categories)+')&start='+start+'&wt=json&json.wrf=?';
}

function getMergedCategories(categories){
    var merged='categories.' + categories[0]+':1';
    var i;
    for(i=1;i<categories.length;++i){
        merged=merged + '%20OR%20categories.' + categories[i]+':1';
    }
    return merged;
}

function getResultDiv(url,img,caption){
    var id=String(img).substring(String(img).lastIndexOf('/')+1,String(img).lastIndexOf('.'));
    id='r'+String(id).replace(/-/g,'_');
    return '<div id="'+id+'" class=\"result hide\"><img onclick="showInfo(\''+id+'\')" src=\"'+img+'\" title="Click for details." alt=\"'+caption+'\"><p>'+caption+' '+getLink(url)+'</p></div>';
    //return '<div class=\"result hide\"><a href=\"'+url+'\"><img src=\"'+img+'\" title="Go to the article" alt=\"'+caption+'\"></a><p>'+caption+'</p></div>';
}

function getLink(url){
    return '<a href=\"'+url+'\">Go to the article.</a>'
}

function showInfo(id){
    var div=$('#'+id);
    if(div.hasClass("hide")){
        div.removeClass("hide");
    }else{
        div.addClass("hide");
    }

}