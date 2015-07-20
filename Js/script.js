var currGridSize = 16;
var totPixels    = 600;
$(document).ready(function(){

    makeGrid(currGridSize);

    $(".square").hover(function(){
	$(this).removeClass('divClear')
	$(this).addClass('divHover');
    });
    
    $("button").click(function(){
	$(".square").removeClass('divHover')
	$(".square").addClass('divClear')
	gridSize = prompt("Enter grid size >>")
	cntu = 'yes';
	if (gridSize > 100){
	    cntu = prompt("Warning! This grid size is too large. Continue? (only 'yes' will continue)")
	}else{
	    cntu = 'yes'
	}
	if (cntu == 'yes'){
	    if (gridSize != currGridSize && gridSize > 0){
		makeGrid(gridSize);
		currGridSize = gridSize;
	    }
	}
    });


});


function makeGrid(gridSize){
    $('table').remove();	
    $("#grid").append("<table><tbody></tbody></table>");
    for(var i = 0; i < gridSize; i++){
	$("tbody").append('<tr id="row'+i+'"></tr>');
	for (var j = 0; j < gridSize; j++){
	    $("#row"+i).append('<td id="col'+j+'" class = "square"></td>');
	    
	}
    }
}
