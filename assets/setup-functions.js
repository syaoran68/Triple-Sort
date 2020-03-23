//Cella-Rule-150
//CPSC335-03
//Eddie Huang
//edhuang04@csu.fullerton.edu

//grid
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  ) 
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var x = 0; x < width; x += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( x, 0 );
        rctx.lineTo( x, height );
        rctx.lineWidth = ( x % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        //if ( x % rmajor == 0 ) { rctx.fillText( x, x, 10 ); }
    }
    for ( var y = 0; y < height; y += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, y );
        rctx.lineTo( width, y );
        rctx.lineWidth = ( y % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        //if ( y % rmajor == 0 ) {rctx.fillText( y, 0, y + 10 );}
    }
    rctx.restore( );
}

//GUI update
function update_row(ctx, array, current_row)
{
    for(i = 0; i < 12; i++)
    {
        output_text(ctx, i, current_row, array[i]);
    }
}
//race manager function

//poresort
function poresort(array, counter)
{

}
//Mergesort

//Quicksort

// text output for single block
function output_text(ctx, xCord, yCord, text)
{
    var x = xCord || 0;
    var y = yCord || 0;
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(text, ((xCord * 20) + 3), ((yCord *20) + 17) );

}