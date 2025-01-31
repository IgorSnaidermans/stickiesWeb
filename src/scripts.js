let newStickieColor="blue";
let stickieIdCounter=0;

function stickieCounter() {
    $(document).ready(function () {
        $(".fa-sticky-note").html(' ' + $('.stickie-container').length);
    });
}

function changeNewStickieColor(colorNumber) {
        if (colorNumber === 1) {
            newStickieColor = "blue";
            $("#paintBrushIcon").css("color","rgb(16, 204, 255)");
        } else if (colorNumber === 2) {
            newStickieColor = "yellow";
            $("#paintBrushIcon").css("color", "rgb(245,224,101)");
        } else if (colorNumber === 3) {
            newStickieColor = "black";
            $("#paintBrushIcon").css("color", "black");
        }
    }

function deleteAllStickies(){
$(".stickie-container").remove();
    stickieCounter();
}

function deleteStickie(stickieId){
    $(".stickie-container#" + stickieId).remove();
    stickieCounter();
}

function addNewStickie(){
    if(newStickieColor==="blue"){
        $("nav").after("<div class=\"stickie-container stickie-blue\" id=\""+stickieIdCounter+"\">\n" +
            "        <div class=\"trash stickie-blue-title\"><i class=\"fa fa-ban\" id=\"stickie-remove-icon\" onclick=\"deleteStickie("+stickieIdCounter+")\"></i></div>\n" +
            "        <div class=\"stickie-title stickie-blue-title\"><input type=\"text\" id=\"stickie-title-text\"></div>\n" +
            "        <div class=\"move stickie-blue-title\" id=\"stickieMoveId "+stickieIdCounter+"\"><i class=\"fa fa-arrows\"\n" +
            "                                                                                  id=\"stickie-move-icon\"></i></div>\n" +
            "        <div class=\"content\"><textarea type=\"text\" id=\"stickie-content-text\"></textarea></div>\n" +
            "    </div>");
    }else if(newStickieColor==="yellow"){
        $("nav").after("<div class=\"stickie-container stickie-yellow\" id=\""+stickieIdCounter+"\">\n" +
            "        <div class=\"trash stickie-yellow-title\"><i class=\"fa fa-ban\" id=\"stickie-remove-icon\" onclick=\"deleteStickie("+stickieIdCounter+")\"></i></div>\n" +
            "        <div class=\"stickie-title stickie-yellow-title\"><input type=\"text\" id=\"stickie-title-text\"></div>\n" +
            "        <div class=\"move stickie-yellow-title\" id=\"stickieMoveId "+stickieIdCounter+"\"><i class=\"fa fa-arrows\"\n" +
            "                                                                                  id=\"stickie-move-icon\"></i></div>\n" +
            "        <div class=\"content\"><textarea type=\"text\" id=\"stickie-content-text\"></textarea></div>\n" +
            "    </div>");
    } else if(newStickieColor==="black"){
        $("nav").after("<div class=\"stickie-container stickie-black\" id=\""+stickieIdCounter+"\">\n" +
            "        <div class=\"trash stickie-black-title\"><i class=\"fa fa-ban\" id=\"stickie-remove-icon\" onclick=\"deleteStickie("+stickieIdCounter+")\"></i></div>\n" +
            "        <div class=\"stickie-title stickie-black-title\"><input type=\"text\" id=\"stickie-title-text\" style='color:white'></div>\n" +
            "        <div class=\"move stickie-black-title\" id=\"stickieMoveId "+stickieIdCounter+"\"><i class=\"fa fa-arrows\"\n" +
            "                                                                                  id=\"stickie-move-icon\"></i></div>\n" +
            "        <div class=\"content\"><textarea type=\"text\" id=\"stickie-content-text\" style='color:white'></textarea></div>\n" +
            "    </div>");
    }

    stickieCounter();
    dragElement(document.getElementById(stickieIdCounter.toString()), stickieIdCounter);
    stickieIdCounter++;
}



function dragElement(elmnt, itemId) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    document.getElementById("stickieMoveId " + itemId).onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}






