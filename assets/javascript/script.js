$('#task').keypress(function () { 
    if($(this).val() ==="") {
        $(this).parents('#description').css('backgroundColor','#343a40');}
    else {
        $(this).parents('#description').css('backgroundColor','#51565c');
    }
});

$('#task-category').onclick(function () { 
    if($(this).val() ==="") {
        $(this).parents('#category').css('backgroundColor','#343a40');}
    else {
        $(this).parents('#category').css('backgroundColor','#51565c');
    }
});
