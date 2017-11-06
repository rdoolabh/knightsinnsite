
// Init the form once the document is ready
jQuery( init );


// Initialize the form

function init() {

    // Hide the form initially.
    // Make submitForm() the form's submit handler.
    // Position the form so it sits in the centre of the browser window.
    jQuery('#miniRateCalc').hide().submit( submitForm ).addClass( 'positioned' );


    jQuery('a[href="#miniRateCalc"]').click( function() {

        jQuery('#miniRateCalc').fadeIn( 'slow', function() {
        } )

        return false;
    } );

    // When the "Cancel" button is clicked, close the form
    jQuery('#cancel_calc').click( function() {
        jQuery('#miniRateCalc').fadeOut();
    } );

    // When the "Escape" key is pressed, close the form
    jQuery('#miniRateCalc').keydown( function( event ) {
        if ( event.which == 27 ) {
            jQuery('#miniRateCalc').fadeOut();
        }
    } );

}

function calc_miniRate() {

    if (document.getElementById('ms').value == "5 feet x 5 feet") {

        document.getElementById('thumb_storage').innerHTML = "<img src='images/storage_thumb.png'/>";
        document.getElementById('thumb_storage_d').innerHTML = "Total: $27.00";
        document.getElementById('no_mini_tax').innerHTML = "Tax is Not Collected on Storage Units";
    }

    else if (document.getElementById('ms').value == "5 feet x 10 feet") {

        document.getElementById('thumb_storage').innerHTML = "<img src='images/storage_thumb.png'/>";
        document.getElementById('thumb_storage_d').innerHTML = "Total: $33.00";
        document.getElementById('no_mini_tax').innerHTML = "Tax is Not Collected For Monthly Rates";
    }

    else if (document.getElementById('ms').value == "10 feet x 10 feet") {

        document.getElementById('thumb_storage').innerHTML = "<img src='images/storage_thumb.png'/>";
        document.getElementById('thumb_storage_d').innerHTML = "Total: $39.00";
        document.getElementById('no_mini_tax').innerHTML = "Tax is Not Collected For Monthly Rates";
    }
    else {

        document.getElementById('thumb_storage').innerHTML = " ";
        document.getElementById('thumb_storage_d').innerHTML = " ";
        document.getElementById('no_mini_tax').innerHTML = " ";
    }

}


