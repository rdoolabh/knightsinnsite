function hi()
{
	window.alert("hi");
}

var messageDelay = 2000;  // How long to display status messages (in milliseconds)

	// Init the form once the document is ready
	jQuery( init );


	// Initialize the form

	function init() {

	  // Hide the form initially.
	  // Make submitForm() the form's submit handler.
	  // Position the form so it sits in the centre of the browser window.
	  jQuery('#contactForm').hide().submit( submitForm ).addClass( 'positioned' );

	  // When the "Send us an email" link is clicked:
	  // 1. Fade the content out
	  // 2. Display the form
	  // 3. Move focus to the first field
	  // 4. Prevent the link being followed

	  jQuery('a[href="#contactForm"]').click( function() {
		jQuery('#content').fadeTo( 'slow', .2 );
		jQuery('#contactForm').fadeIn( 'slow', function() {
		  jQuery('#senderName').focus();
		} )

		return false;
	  } );
	  
	  // When the "Cancel" button is clicked, close the form
	  jQuery('#cancel').click( function() { 
		jQuery('#contactForm').fadeOut();
		jQuery('#content').fadeTo( 'slow', 1 );
	  } );  

	  // When the "Escape" key is pressed, close the form
	  jQuery('#contactForm').keydown( function( event ) {
		if ( event.which == 27 ) {
		  jQuery('#contactForm').fadeOut();
		  jQuery('#content').fadeTo( 'slow', 1 );
		}
	  } );

	}


	// Submit the form via Ajax

	function submitForm() {
	  var contactForm = jQuery(this);

	  // Are all the fields filled in?

	  if ( !jQuery('#senderName').val() || !jQuery('#senderEmail').val() || !jQuery('#message').val() ) {

		// No; display a warning message and return to the form
		jQuery('#incompleteMessage').fadeIn().delay(messageDelay).fadeOut();
		contactForm.fadeOut().delay(messageDelay).fadeIn();

	  } else {

		// Yes; submit the form to the PHP script via Ajax

		jQuery('#sendingMessage').fadeIn();
		contactForm.fadeOut();

		jQuery.ajax( {
		  url: contactForm.attr( 'action' ) + "?ajax=true",
		  type: contactForm.attr( 'method' ),
		  data: contactForm.serialize(),
		  success: submitFinished
		} );
	  }

	  // Prevent the default form submission occurring
	  return false;
	}


	// Handle the Ajax response

	function submitFinished( response ) {
	  response = jQuery.trim( response );
	  jQuery('#sendingMessage').fadeOut();

	  if ( response == "success" ) {

		// Form submitted successfully:
		// 1. Display the success message
		// 2. Clear the form fields
		// 3. Fade the content back in

		jQuery('#successMessage').fadeIn().delay(messageDelay).fadeOut();
		jQuery('#senderName').val( "" );
		jQuery('#senderEmail').val( "" );
		jQuery('#message').val( "" );

		jQuery('#content').delay(messageDelay+500).fadeTo( 'slow', 1 );

	  } else {

		// Form submission failed: Display the failure message,
		// then redisplay the form
		jQuery('#failureMessage').fadeIn().delay(messageDelay).fadeOut();
		jQuery('#contactForm').delay(messageDelay+500).fadeIn();
		
		/*
		jQuery('#failureMessage').fadeIn();
		setTimeout(function delayItems(){}, 2000);
		jQuery('#failureMessage').fadeOut();
		setTimeout(function delayItems(){}, 500);
		jQuery('#contactForm').fadeIn();
		*/

	  }
	}
	