let newStickieColor=1;

function stickieCounter() {
    $(document).ready(function () {
        $(".fa-sticky-note").html(' ' + $('.stickie-container').length);
    });
}

function changeNewStickieColor(colorNumber) {
        if (colorNumber === 1) {
            newStickieColor = 1;
        } else if (colorNumber === 2) {
            newStickieColor = 2;
        } else if (colorNumber === 3) {
            newStickieColor = 3;
        }
    }

function deleteAllNotes(){
$(".stickie-container").remove();
    stickieCounter();
}

function addNewStickie(){
    if(newStickieColor===1){
        $("nav").after("<div class=\"stickie-container stickie-blue\">\n" +
            "    <div class=\"trash stickie-blue-title\"><i class=\"fa fa-ban\" id=\"stickie-control-icon\"></i></div>\n" +
            "    <div class=\"stickie-title stickie-blue-title\">Blue</div>\n" +
            "    <div class=\"move stickie-blue-title\"><i class=\"fa fa-arrows\" id=\"stickie-control-icon\"></i></div>\n" +
            "    <div class=\"content\"><p id=\"stickie-content-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec\n" +
            "        pellentesque pellentesque ligula.</p></div>\n" +
            "</div>");
    }else if(newStickieColor===2){
        $("nav").after("<div class=\"stickie-container stickie-yellow\">\n" +
            "    <div class=\"trash stickie-yellow-title\"><i class=\"fa fa-ban\" id=\"stickie-control-icon\"></i></div>\n" +
            "    <div class=\"stickie-title stickie-yellow-title\">Scroll</div>\n" +
            "    <div class=\"move stickie-yellow-title\"><i class=\"fa fa-arrows\" id=\"stickie-control-icon\"></i></div>\n" +
            "    <div class=\"content\"><p id=\"stickie-content-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec\n" +
            "        pellentesque pellentesque ligula. </p></div>\n" +
            "</div>");
    } else if(newStickieColor===3){
        $("nav").after("<div class=\"stickie-container stickie-black\">\n" +
            "    <div class=\"trash stickie-black-title\"><i class=\"fa fa-ban\" id=\"stickie-control-icon\"></i></div>\n" +
            "    <div class=\"stickie-title stickie-black-title\">Google fonts</div>\n" +
            "    <div class=\"move stickie-black-title\"><i class=\"fa fa-arrows\" id=\"stickie-control-icon\"></i></div>\n" +
            "    <div class=\"content\"><p id=\"stickie-content-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec\n" +
            "        pellentesque pellentesque ligula.</p></div>\n" +
            "</div>");

    }
    stickieCounter();
}