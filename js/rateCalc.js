
// Init the form once the document is ready
jQuery( init );


// Initialize the form

function init() {

    // Hide the form initially.
    // Make submitForm() the form's submit handler.
    // Position the form so it sits in the centre of the browser window.
    jQuery('#rateCalc').hide().submit( submitForm ).addClass( 'positioned' );


    jQuery('a[href="#rateCalc"]').click( function() {

        jQuery('#rateCalc').fadeIn( 'slow', function() {
        } )

        return false;
    } );

    // When the "Cancel" button is clicked, close the form
    jQuery('#cancel_calc').click( function() {
        jQuery('#rateCalc').fadeOut();
    } );

    // When the "Escape" key is pressed, close the form
    jQuery('#rateCalc').keydown( function( event ) {
        if ( event.which == 27 ) {
            jQuery('#rateCalc').fadeOut();
        }
    } );

}

function calc_rate() {


    if (document.getElementById('room').value == "Non-Smoking Room With 2 Queen Beds" ||
        document.getElementById('room').value == "Smoking Room With 2 Queen Beds" ||
        document.getElementById('room').value == "Non-Smoking Handicap Room With 2 Double Beds" ||
        document.getElementById('room').value == "Smoking Handicap Room With 2 Double Beds") {

        document.getElementById('thumb').innerHTML = "<img style='border: solid;' src='images/queen_thumbnail.jpg'/>";
        document.getElementById('thumb_d').innerHTML = "Total: $" + (79.95 * document.getElementById('nights').value).toFixed(2) + " + tax";
        document.getElementById('occupancy').innerHTML = "Max Occupancy: 4";
    }

    else if (document.getElementById('room').value == "Non-Smoking Room With 1 King Bed" ||
        document.getElementById('room').value == "Smoking Room With 1 King Bed") {

        document.getElementById('thumb').innerHTML = "<img style='border: solid;' src='images/king_thumbnail.jpg'/>";
        document.getElementById('thumb_d').innerHTML = "Total: $" + (69.95 * document.getElementById('nights').value).toFixed(2) + " + tax";
        document.getElementById('occupancy').innerHTML = "Max Occupancy: 3";
    }

    else if (document.getElementById('room').value == "Non-Smoking Executive Room With 2 Queen Beds") {

        document.getElementById('thumb').innerHTML = "<img style='border: solid;' src='images/queen_thumbnail.jpg'/>";
        document.getElementById('thumb_d').innerHTML = "Total: $" + (89.95 * document.getElementById('nights').value).toFixed(2) + " + tax";
        document.getElementById('occupancy').innerHTML = "Max Occupancy: 4";
    }

    else {

        document.getElementById('thumb').innerHTML = "";
        document.getElementById('thumb_d').innerHTML = "";
        document.getElementById('occupancy').innerHTML = "";
    }
}
