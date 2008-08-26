$(document).ready(function() {
	$(".snip-more").addClass('spinner').hide();
	$("#networks").hide();
	$('a[rel*=facebox]').facebox();
	$("#tweet-replace").load('/includes/twitter-latest.php');
	if ($("#mail-message").is(':visible')) setTimeout('$("#mail-message").fadeOut("")',2400);
	
	$("#contact-link").click(function () {
		if ($("#about-extended").is(':visible')) { closeContact("need to contact me?"); }
		else { openContact("don't need to contact me?"); }
	});

	/*$("#feeds")>$(".full")>$("#twitter").hover(function() {
		$(this).children(".snip-more-toggle").fadeIn("fast");
	}, function() {
		$(this).children(".snip-more-toggle").hide();
		//$(".snip-more").slideUp('').addClass('spinner');
	});*/

	$(".snip-more-link").click(function() {
		if ($(this).parent().siblings('.snip-more').is(':hidden')) {
			$(this).removeClass("more").addClass("cancel");			
			source = $(this).parent().parent().attr("id");
			$(this).parent().siblings('.snip-more').slideDown().load('/includes/'+source+'.php', function(){
				$.scrollTo("#"+source, 600, {offset:-48} );
				removeSpinner(this);
			});
		} else {
			$(this).removeClass("cancel").addClass("more").parent().siblings('.snip-more').fadeOut('fast');
			//removeSpinner(this);
		}
	});
	
	$("#contact-close-link").click(function() {
		closeContact("need to contact me?");
	})
	
	function openContact(msg) {
		$("#about-extended").slideDown('fast');
		$("#contact-link").empty().append(msg);
		$.scrollTo("#contact", 800, {offset:-96} );		
	}
	
	function closeContact(msg) {
		$("#about-extended").fadeOut('fast');
		$("#contact-link").empty().append(msg);
		$.scrollTo("#page", 600 );		
	}

	function removeSpinner(t) { $(t).removeClass('spinner'); }
	
});
