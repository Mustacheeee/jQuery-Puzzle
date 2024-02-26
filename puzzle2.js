let row = 3, column = 3;

$(document).ready(function()
{
    // cut img to 3x3 pieces
    var puzzlePiece = "";
    for (var i = 0, top = -110; i < row; i++, top -= 199)
    {
        for (var j = 0, left = -10; j < column; j++, left -= 143)
        {
            puzzlePiece += "<div style='background-position:" + left + "px " + top + "px;' class='pieces'></div>";
        }
    }
    $("#puzzleContainer").html(puzzlePiece);


    $("#mouse").click(function(){
        var pieces = $("#puzzleContainer div");
        pieces.each(function()
        { 
            var rightPosition = Math.random() * 620 + "px";
            var topPosition = Math.random() * 500 + "px";
            $(this).addClass("draggablePiece").
                css({
                position: "absolute",
                right: rightPosition,
                top: topPosition
            })
            $("#pieceContainer").append($(this));
        });
        var puzzleBackground = ""
        for (var i = 0; i < row; i++)
        {
            for (var j = 0; j < column; j++)
            {
                puzzleBackground += "<div style='background-image: none;' class='pieces dropHere'></div>";
            }
        }
        $("#puzzleContainer").html(puzzleBackground)
        dragDrop()
    });

    // hold the pieces when droped
    function dragDrop()
    {
        $(".draggablePiece").draggable();
        $(".dropHere").droppable({
            drop: function(event, ui)
            {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent");
                $(draggableElement).addClass("dropped").css({
                    top: 0,
                    left: 0,
                    buttom: 0,
                    position:"relative"
                }).appendTo(droppedOn);
            }
        });
    }
    
});