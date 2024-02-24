let row = 3, column = 3;
$(document).ready(function()
{
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
                puzzleBackground += "<div style='background-image: none;' class='pieces'></div>";
            }
        }
        $("#puzzleContainer").html(puzzleBackground)
        dragDrop()
    });

    function dragDrop()
    {
        $(".draggablePiece").draggable();
        $(".droppablePiece").droppable({
            drop: function(event, ui)
            {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("dropHere")
            }
        });
    }
    
});
class Piece
{
    constructor (rowIndex, colIndex)
    {
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
    }
}