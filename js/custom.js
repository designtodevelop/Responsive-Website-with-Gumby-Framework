Gumby.ready(function() {
        // Contact Form Validation
        $('.contact-form form').validation({
                required: [
                        {
                                name: 'name'
                        },
                        {
                                name: 'email',
                                // check this email has a @
                                validate: function($el) {
                                        return $el.val().indexOf('@') > -1;
                                }
                        },
                        {
                          name: 'message',
                        }
                ],
                // Validation Successful Message
                submit: function(formData) {
                        Gumby.debug(formData);
                        alert("Your Message Has Been Sent");
                },
                // Validation has failed message
                fail: function() {
                        alert("Ooops looks like there's an error.");
                }
        });
});