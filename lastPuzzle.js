let pieces =[];
let row = 3, column = 3;
$(document).ready(function()
{
    PIECES = [];
    for (var i = 0, top = -110; i < row; i++, top -= 199)
    {
        for (var j = 0, left = -10; j < column; j++, left -= 143)
        {
            pieces += "<div style='background-position:" + left + "px " + top + "px;' class='pieces'></div>";
        }
    }
    $("#puzzleContainer").html(pieces);
    $("#mouse").click(function(){
        console.log("aya?")
        var pieses = $("puzzleContainer div");
        pieces.each(function(){
            var rightPosition = Math.floor(Math.random() * -290) + "px";
            var topPosition = Math.floor(Math.random() * 290) + "px";
            $(this).css({
                position: "absolute",
                righ: rightPosition,
                top: topPosition
            })
            $("#pieceContainer").append($(this));
        });
    });
});

class Piece
{
    constructor (rowIndex, colIndex)
    {
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
    }
}