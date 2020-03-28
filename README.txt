CPSC 335-03 Project 2
Triple Sort
Group Members:
Eddie Huang
edhuang04@csu.fullerton.edu

This project is a simple HTML and javascript based application that takes three mainstream sorting algorithms, poresort,
quicksort, and mergesort and breaks their entire structure down into single step funcions.

    Gold's poresort
For this sorting method we basically compare all even index location items with their immediate neighbor.
Then we compare all odd index location items with their immediate neighbor. This is done in parallel and if any items
are swapped the pass is considered dirty and we rerun another full pass. We continue to run passes until no items have 
been swapped in a full pass, at which point a pass is considered clean and the sorting is finished.

    Mergesort
Mergesort is a recursive based sorting that splits the items being sorted into two halves and continues to do so until
each side has 1 item inside. To rebuild the list the first item from each side is read and compared to the first item on
the other side and the lower value item is added into a new list. this loops and continues until the two smaller lists are
exhausted and the new list has all the original lists items. The list builds section by section and is resorted as more sections
are added. the final sort should contain all the items within the original list.

    Quicksort
Quicksort involves selecting a pivot value. The list is sorted based on this pivot value and left and right markers are held
the list is then split where the pivot lies, anything to the left of the pivot is of smaller or equal value. Anything to the right
of the pivot is larger or equal. The sorting is then repeated for the left and right sections until it reaches 1 or zero values
before and after it. 

    Running Time
The basic loop functionality is broken down into the comparison function. This is an O(n) since its a simple comparison. For the
Poresort since the comparions are running in parallel it should take half the functioning time which gives us a bigO of (N/2) though
worst case scenario all of the items are out of order so bigO rises to (2*(N/2)-1). 

For mergesort the running time would be considered N for any given tier of the mergesort function. depending on how many elements
exist though, the number of tiers makes the number of comparisions increase at a exponential level. In the end bigO is (N log N)

For quicksort the running time is n across the board for each comparison, though unlike mergesort the number of comparisons for each 
tier stands at two since theres only a front half and back half. Though with more values a growing number of tiers will exist.
For bigO there exists two scenarios, the first is where some values are sorted and some aren't the BigO for this is (N log N), 
the second is where every value is out of order and needs to be sorted. This worst case is (N^2) since it requires the comparison
of every left value against the right. 


To run this application all you have to do is open the index.html file within a browser.

The hierarchy for the files should be as follows

Base (Base)
-> index.html
-> p5.js
-> assets (Folder)
    -> setup-function.js
    -> styles.css

All the display functionality should be ready for the sorting algorithms. mergesort is complete, and quicksort is about 75% of the way there.
The only portion is the right section's recursive sorting.

I didn't have enough time to do the poresort algorithm as team mates could not be found.


