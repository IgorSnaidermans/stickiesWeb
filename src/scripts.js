let newStickieColor=1;
let stickieIdCounter=0;
let itemIdToDrag;

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

function deleteAllStickies(){
$(".stickie-container").remove();
    stickieCounter();
}

function addNewStickie(){
    if(newStickieColor===1){
        $("nav").after("<div class=\"stickie-container stickie-blue\" id=\""+stickieIdCounter+"\">\n" +
            "        <div class=\"trash stickie-blue-title\"><i class=\"fa fa-ban\" id=\"stickie-control-icon\"></i></div>\n" +
            "        <div class=\"stickie-title stickie-blue-title\">Title</div>\n" +
            "        <div class=\"move stickie-blue-title\" id=\"stickieMoveId "+stickieIdCounter+"\" onclick=\"setItemToDrag("+stickieIdCounter+")\"><i class=\"fa fa-arrows\"\n" +
            "                                                                                  id=\"stickie-control-icon\"></i></div>\n" +
            "        <div class=\"content\"><p id=\"stickie-content-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec\n" +
            "            pellentesque pellentesque ligula.</p></div>\n" +
            "    </div>");
    }else if(newStickieColor===2){
        $("nav").after("<div class=\"stickie-container stickie-yellow\" id=\""+stickieIdCounter+"\">\n" +
            "        <div class=\"trash stickie-yellow-title\"><i class=\"fa fa-ban\" id=\"stickie-control-icon\"></i></div>\n" +
            "        <div class=\"stickie-title stickie-yellow-title\">Title</div>\n" +
            "        <div class=\"move stickie-yellow-title\" id=\"stickieMoveId "+stickieIdCounter+"\" onclick=\"setItemToDrag("+stickieIdCounter+")\"><i class=\"fa fa-arrows\"\n" +
            "                                                                                  id=\"stickie-control-icon\"></i></div>\n" +
            "        <div class=\"content\"><p id=\"stickie-content-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec\n" +
            "            pellentesque pellentesque ligula.</p></div>\n" +
            "    </div>");
    } else if(newStickieColor===3){
        $("nav").after("<div class=\"stickie-container stickie-black\" id=\""+stickieIdCounter+"\">\n" +
            "        <div class=\"trash stickie-black-title\"><i class=\"fa fa-ban\" id=\"stickie-control-icon\"></i></div>\n" +
            "        <div class=\"stickie-title stickie-black-title\">Title</div>\n" +
            "        <div class=\"move stickie-black-title\" id=\"stickieMoveId "+stickieIdCounter+"\" onclick=\"setItemToDrag("+stickieIdCounter+")\"><i class=\"fa fa-arrows\"\n" +
            "                                                                                  id=\"stickie-control-icon\"></i></div>\n" +
            "        <div class=\"content\"><p id=\"stickie-content-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec\n" +
            "            pellentesque pellentesque ligula.</p></div>\n" +
            "    </div>");
    }
    stickieCounter();
    stickieIdCounter++;
}

function setItemToDrag(itemId){
    itemIdToDrag=itemId;
    dragElement(document.getElementById(itemId));
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    document.getElementById("stickieMoveId " + itemIdToDrag).onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}






