//Original code -- refactor me!
$(document).ready(function() {


var game = new DieHandler();
game.addListeners();


/* Die object
function Die (){
        this.currentSide=1;
        this.roll = function (){
            this.currentSide = Math.floor((Math.random() * 6) + 1);
        }
    }

    */
    
    
    // What does the next line do?
    $('#roller button.add').on('click', function() {
        console.log('add button was clicked');
        // What does the next line do?
        // into the end of the div with class dice-container
        //with 1 written inside 
        $('.dice-container').append('<div class="die">1</div>');
    });

    // What does the next line do?
    // and starts the function that rolls a new number
    $('#roller button.roll').on('click', function() {
        // using jQuery's each method to loop through the die elements
        $('.die').each(function(index, die) {
            // What does the next line do?
        var value = Math.floor((Math.random() * 6) + 1);
            $(die).text(value);
        /*function DieHandler(){
            this.dice = [];
        }
        */
            /*

            var value = Math.floor((Math.random() * 6) + 1);
            $(die).text(value);
            */

        });
    });
});



//objects to use Die 

