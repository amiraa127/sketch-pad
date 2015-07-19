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
	if (gridSize != currGridSize){
	    $('table').remove();
	    makeGrid(gridSize);
	    currGridSize = gridSize;
	}
    });


});

function calcBlkSize(gridSize,brdrSpacing,brdrSize){
    availPix = totPixels - brdrSpacing * (gridSize - 1) -  2 * brdrSize * (gridSize - 1);
    blkSize  = (availPix/gridSize);
    return blkSize;
}

function makeGrid(gridSize){
    brdrSpacing = 2;
    brdrSize    = 3;
    blkSize = calcBlkSize(gridSize,brdrSpacing,brdrSize);
    spaceLimit = 0.5;
    sizeLimit  = 0.5;
    blkSizeThresh = 5;
    while (blkSize < blkSizeThresh && ((brdrSpacing > spaceLimit)||(brdrSize > sizeLimit))){
	if (brdrSpacing > spaceLimit){
	    brdrSpacing -= 0.5;
	}
	if (brdrSize > sizeLimit){
	    brdrSize -= 0.5;
	}
	blkSize = Math.max(calcBlkSize(gridSize,brdrSpacing,brdrSize),blkSizeThresh); 
    }
   
    if (blkSize * gridSize > totPixels){
	alert("allowable size exceeded");
    }
    
    if (blkSize > totPixels){
	blkSize = totPixels;
    }
 
    
    $("#grid").append("<table><tbody></tbody></table>");
    for(var i = 0; i < gridSize; i++){
	$("tbody").append('<tr id="row'+i+'"></tr>');
	for (var j = 0; j < gridSize; j++){
	    $("#row"+i).append('<td id="col'+j+'"><div class = "square"></div></td>');
	}
    }
    $('.square').css('width',blkSize+'px');
    $('.square').css('height',blkSize+'px'); 

    
    $('table').css('border-spacing',brdrSpacing+'px');
    $('.square').css('border',brdrSize+'px solid black');

}
