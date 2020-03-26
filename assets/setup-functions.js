//Triple Sort
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
function update_row(bundle)
{
    if(bundle.done_split == 0)
    {
        for(i = 0; i < 12; i++)
        {
            output_text(bundle.ctx2, i, bundle.current_row, bundle.data2[i]);
        }
        bundle.current_row++;
    }
    else if(bundle.done_merge == 0)
    {
        
    }


    
}

//poresort
function poresort(bundle, status)
{
    update_row(bundle.ctx1, bundle.data1, bundle.poresort_counter+1);

}
//Mergesort
function mergesort(bundle)
{
    if(bundle.current_row == 0)
    {
        update_row(bundle);
    }
    if(bundle.blank_holder_array.length == 0)
    {
        var bundle_of_arrays = new Array();
        bundle_of_arrays.push(data2);

        bundle.blank_holder_array.push(bundle_of_arrays);
        bundle.mergesort_level_counter = 1;
        
    }
    

    //merge section
    if(bundle.done_merge == 0 && bundle.done_split == 1)
    {
        
        merge_values(bundle);
        update_row(bundle);

    }
    //splitting the array into smaller bundles.
    if(bundle.done_split == 0)
    {
        update_row(bundle);
        split_array(bundle);
       
    }

    if(bundle.done_merge == 1 && bundle.done_split == 1)
    {
        return 0;
    }
    else
    {
        return mergesort(bundle);
    }

    
}

function split_array(bundle)
{
    // splitting the arrays in each level
    if(bundle.done_split == 0)
    {
        var temp_array3 = new Array();
        for (i = 0; i < bundle.blank_holder_array[bundle.mergesort_level_counter - 1].length; i++)
        {
            //calculating the midpoint
            mid_point = Math.round(bundle.blank_holder_array[bundle.mergesort_level_counter - 1][i].length / 2);
    
                //housing the split arrays
            //front half
            var temp_array = new Array();
            var temp_array2 = new Array();
            for(j = 0; j < mid_point; j++)
            {
                if(bundle.blank_holder_array[bundle.mergesort_level_counter - 1][i][j] != null)
                {
                    temp_array[j] = bundle.blank_holder_array[bundle.mergesort_level_counter - 1][i][j];
                }
                
            }
            //back half
            for(k = 0; k < mid_point; k++)
            {
                if(bundle.blank_holder_array[bundle.mergesort_level_counter - 1][i][k + mid_point] != null)
                {
                    temp_array2[k] = bundle.blank_holder_array[bundle.mergesort_level_counter - 1][i][k + mid_point];
                }
                
            }
            
            if(temp_array.length > 0)
            {
                temp_array3.push(temp_array);
            }
            if(temp_array2.length > 0)
            {
                temp_array3.push(temp_array2);
            }
            
            
        }
        bundle.blank_holder_array.push(temp_array3);
        bundle.mergesort_level_counter++;
        if(temp_array.length > 1 || temp_array2.length > 1)
        {
            bundle.done_split = 0;
        }
        else
        {
            bundle.done_split = 1;
        }
    }
    else
    {
        bundle.done_split = 1;
    }
    
}

function merge_values(bundle)
{
    if(bundle.combined_holder_array.length == 0)
    {
        bundle.combined_holder_array.push(bundle.blank_holder_array[bundle.mergesort_level_counter - 1]);
    }
    var combined_array = new Array();

    // for(i = 0; i < bundle.mergesort_level_counter; i++ )
    // {
    //     var temp_array = new Array();

    //     temp_array = base_merge(bundle.combined_holder_array[i][i++], bundle.combined_holder_array[i][i] )
    //     combined_array.push(temp_array);

    // }
    if(bundle.combined_level < (bundle.mergesort_level_counter - 1))
    {
        var temp_array = new Array();
        for(i = 0; i < bundle.combined_holder_array[bundle.combined_level].length; i++)
        {
            if(bundle.combined_holder_array[bundle.combined_level][i] == null)
            {
                combined_array.push(bundle.combined_holder_array[bundle.combined_level][(i+1)])
            }
            else if(bundle.combined_holder_array[bundle.combined_level][(i+1)] == null)
            {
                combined_array.push(bundle.combined_holder_array[bundle.combined_level][(i)])
            }
            else
            {
                temp_array = base_merge(bundle.combined_holder_array[bundle.combined_level][i++], bundle.combined_holder_array[bundle.combined_level][(i)] )
                combined_array.push(temp_array);
            }
            
        }
    }

    bundle.combined_holder_array.push(combined_array);
    bundle.combined_level++;
    if(bundle.combined_level == bundle.mergesort_level_counter)
    {
        bundle.done_merge = 1;
        bundle.mergesort_status = 1;
    }
}

function base_merge(left, right)
{
    let array = [];

    while(left.length && right.length)
    {
        if(left[0] < right[0])
        {
            array.push(left.shift());
        }
        else
        {
            array.push(right.shift());
        }
    }
    return array.concat(left.slice().concat(right.slice()));
}

//Quicksort
function quicksort(bundle, status)
{



    update_row(bundle.ctx3, bundle.data3, bundle.quicksort_counter+1);

}

//race manager function
function race_mgr(pore_bundle, merge_bundle, quick_bundle)
{   
    poresort_status = 0;
    
    quicksort_status = 0;
    //poresort(pore_bundle, poresort_status);
    mergesort(merge_bundle);
    //quicksort(quick_bundle, quicksort_status);
    
    
    
}
// text output for single block
function output_text(ctx, xCord, yCord, text)
{
    var x = xCord || 0;
    var y = yCord || 0;
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(text, ((xCord * 20) + 3), ((yCord *20) + 17) );

}

function swap(array, left_index, right_index)
{
    var temp = items[left_index];
    items[left_index] = items[right_index];
    items[right_index] = temp;
}