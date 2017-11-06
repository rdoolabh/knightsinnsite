
// Init the form once the document is ready
jQuery( init );


// Initialize the form

function init() {

    // Hide the form initially.
    // Make submitForm() the form's submit handler.
    // Position the form so it sits in the centre of the browser window.
    jQuery('#rvRateCalc').hide().submit( submitForm ).addClass( 'positioned' );


    jQuery('a[href="#rvRateCalc"]').click( function() {

        jQuery('#rvRateCalc').fadeIn( 'slow', function() {
        } )

        return false;
    } );

    // When the "Cancel" button is clicked, close the form
    jQuery('#cancel_calc').click( function() {
        jQuery('#rvRateCalc').fadeOut();
    } );

    // When the "Escape" key is pressed, close the form
    jQuery('#rvRateCalc').keydown( function( event ) {
        if ( event.which == 27 ) {
            jQuery('#rvRateCalc').fadeOut();
        }
    } );

}

function calc_rvRate() {

    if (document.getElementById('duration').value == "Weekly RV Rate") {

        document.getElementById('thumb_rv').innerHTML = "<img style='border: solid;' src='images/rv_thumb1.jpg'/>";
        document.getElementById('thumb_rv_d').innerHTML = "Total: $" + (135 + " + tax per week");
        document.getElementById('no_tax').innerHTML = " ";
    }

    else if (document.getElementById('duration').value == "Monthly RV Rate") {

        document.getElementById('thumb_rv').innerHTML = "<img style='border: solid;' src='images/rv_thumb1.jpg'/>";
        document.getElementById('thumb_rv_d').innerHTML = "Total: $" + (365 + " per month");
        document.getElementById('no_tax').innerHTML = "Tax is Not Collected For Monthly Rates";
    }

    else {

        document.getElementById('thumb_rv').innerHTML = " ";
        document.getElementById('thumb_rv_d').innerHTML = " ";
        document.getElementById('no_tax').innerHTML = " ";
    }

}

