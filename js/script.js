/* Variable Declaration */
$(document).ready(function () {
	var contentArray = ['&#8220Marketing is an organizational function and a set of processes for creating, communicating and delivering value to customers and for managing customer relationships in ways that benefit the organization and its stakeholders.&#8221 (American Marketing Association, 2004)',
'Market segmentation is the process of dividing an overall market into submarkets (&#8220segments&#8221) that differ in their potential needs and wants.','Target market refers to the segment of customers an organization pursues with its offerings.','Value is the difference in the perceived benefits of a product or service to a consumer compared to its costs. This is sometimes represented as Key Benefits/Key Costs.',
'A value proposition is the cluster of benefits the company promises (&#8220proposes&#8221) to deliver to its target market. Note that in this class we will usually discuss the costs associated with a Value Proposition as well. <br><br>It is important to be able to state the theme of your value proposition in as few words as possible. Think about the tagline or &#8220bumper sticker&#8221 for your product. For example, the BMW tagline for over two decades has been &#8221the ultimate driving machine.&#8221 Altoids has carved out a niche in a competitive market by emphasizing its &#8220curiously strong mints.&#8221',
'Positioning is the act of designing the company&#8217s offerings and image to occupy a distinctive place in the target market&#8217s mind compared to the competition. Another way to think about this is that a position is simply one organization&#8217s value proposition in comparison to relevant competing value propositions.'];

	var textArray = ["text0", "text1", "text2", "text3", "text4", "text5"];
	var currentItem;
	var item;
	var clickedItem = [];
	var clicked=[];
  var position=[0, 60, 130, 200, 120, 260];

	/* Click Event*/

	$('.inner-text').click(function () {
			$('.inner-text').removeClass('bg-color focus-color disable')
			currentItem = $(this).attr('data-pos');
			$(this).addClass('focus-color');
			$('#textcontent').css({top: position[currentItem]+"px"});
			clickedItem.push(currentItem);
		       if(clickedItem.length > 1 && clickedItem[clickedItem.length - 2] == 			clickedItem[clickedItem.length - 1]) {
			$("#textcontent").hide().css({left:'260px'});
			$('#textcontent').show().stop().animate({left:'260px'}).html(contentArray[currentItem]);
			} else {
			$("#textcontent").hide().css({left:'600px'});
			$('#textcontent').show().stop().animate({left:'260px'}).html(contentArray[currentItem]);
			}
});
	  $('.left-text').click(function () {
		$('.left-text').removeClass('red-color disable');
		$(this).addClass('red-color');
	});

/* Keyboard Event*/
	$('.inner-text').keydown(function (e) {
	    if (e.which == 13) {
			  $("#textcontent").hide().css({left:'600px'});
				$('.inner-text').removeClass('bg-color focus-color disable')
				currentItem = $(this).attr('data-pos');
				$(this).addClass('bg-color');
				$('#textcontent').show().stop().animate({left:'260px'},function(){$('#textcontent').focus()}).html(contentArray[currentItem]);
				$('#textcontent').attr('class', "textcontent" + currentItem);
				$('#textcontent').css({top: position[currentItem]+"px"}).attr("tabindex", "0");
			}
});
$('.left-text').focusin(function() {
	     $('.left-text').children().removeClass("focus-color");
	     if($(this).prev().children().hasClass("bg-color")){
		   $(this).prev().children().addClass("focus-color");
	}
});

$('.left-text').keydown(function (e) {
	    if (e.which == 13) {
				$('.left-text').removeClass('red-color disable');
				$(this).addClass('red-color');
		}
});
$('.left-text').focusin(function() {
		$('.left-text').removeClass('red-color inner-text-hover');
		$(this).addClass('inner-text-hover');
});

	$('#textcontent').focusin(function () {
		$('#textcontent').keydown(function (e) {
			if (e.which == 9) {
				$('#' + (textArray[parseInt(currentItem)])).attr("tabindex", "0").focus();
				item = $('#textcontent').attr("class");
	}
   if (item == 'textcontent5') {
				setTimeout(function () {
					$('#text0').attr('tabindex', '0').focus();
				}, 0);
			}
});
});
});
