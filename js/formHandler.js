function formHandle() {
    var text = $('#inputText').val();
    var selected = [];
    $('#form').find('input:checked').each(function () {
        selected.push($(this).attr('name'));
    });
    var categories="";
    var i;
    for (i = 0; i < selected.length; ++i) {
        if(selected[i]!="ignore"){
            categories=categories+"&"+selected[i]+":1";
        }
    }
    alert("?q=caption:*"+text+"*"+categories);
}