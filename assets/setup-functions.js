//Cella-Rule-150
//CPSC335-03
//Eddie Huang
//edhuang04@csu.fullerton.edu


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
        if ( x % rmajor == 0 ) { rctx.fillText( x, x, 10 ); }
    }
    for ( var y = 0; y < height; y += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, y );
        rctx.lineTo( width, y );
        rctx.lineWidth = ( y % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( y % rmajor == 0 ) {rctx.fillText( y, 0, y + 10 );}
    }
    rctx.restore( );
}
//rules setup for the cella-150 
// 0 black / 1 white
function rules(left, center, right)
{
    //rule 1
    if(left == 0 && center == 0 && right == 0)
    {
        return 0;
    }
    //rule 2
    if(left == 0 && center == 0 && right == 1)
    {
        return 1;
    }
    //rule 3
    if(left == 0 && center == 1 && right == 0)
    {
        return 1;
    }
    //rule 4     
    if(left == 0 && center == 1 && right == 1)
    {
        return 0;
    }
    //rule 5 
    if(left == 1 && center == 0 && right == 0)
    {
        return 1;
    }
    //rule 6 
    if(left == 1 && center == 0 && right == 1)
    {
        return 0;
    }
    //rule 7 
    if(left == 1 && center == 1 && right == 0)
    {
        return 0;
    }
    //rule 8 
    if(left == 1 && center == 1 && right == 1)
    {
        return 1;
    }

    return 0;
}

// fill in rectangle with proper color
function fill_square(ctx, xCord, yCord, fillColor)
{
    var x = xCord || 0;
	var y = yCord || 0;
    var fill = fillColor || "white";
    ctx.save( );
    ctx.fillStyle = fill;
    ctx.rect(x * 10, y * 10, 10, 10);
    ctx.fill();
    ctx.restore( );
}