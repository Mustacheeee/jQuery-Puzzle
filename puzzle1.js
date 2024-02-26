$(document).ready(function(){
    // cut img to 3x3 pieces
    var puzzlePiece = "";
    for (var i = 0, top = -110; i < row; i++, top -= 199)
    {
        for (var j = 0, left = -10; j < column; j++, left -= 143)
        {
            puzzlePiece += "<div style='background-position:" + left + "px " + top + "px;' class='pieces'></div>";
        }
    }
    $("#pieces").html(pieces);

    var finalPositions = [
        { top: 150, left: 150 },
        { top: 150, left: 250 },
        { top: 250, left: 150 },
        { top: 250, left: 250 },
        { top: 450, left: 150 },
        { top: 376, left: 546 }
    ];

    // Animate pictures into their correct positions
    $(".pieces").each(function(index){
        $(this).animate(finalPositions[index], 1000);
    });

    $("#up").click(function(){
        $(".movable-picture").animate({ top: '-=25px' }, 200);
    });

    $("#down").click(function(){
        $(".movable-picture").animate({ top: '+=25px' }, 200);
    });

    $("#left").click(function(){
        $(".movable-picture").animate({ left: '-=25px' }, 200);
    });

    $("#right").click(function(){
        $(".movable-picture").animate({ left: '+=25px' }, 200);
    });
});