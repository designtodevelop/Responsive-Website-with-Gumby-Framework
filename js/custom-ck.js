Gumby.ready(function(){$(".contact-form form").validation({required:[{name:"name"},{name:"email",validate:function(e){return e.val().indexOf("@")>-1}},{name:"message"}],submit:function(e){Gumby.debug(e);alert("Your Message Has Been Sent")},fail:function(){alert("Ooops looks like there's an error.")}})});