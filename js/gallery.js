$(document).ready(function(){
	$("#open").hide();
	$("#grid div").click(function(){
		var content = $(this).children('img')[0]; 
		// $("#open .open_content").append(content);
		// $("#open").show();
	});

	$("#tab_nav a").click(function(){
		var alt = $(this).find('img').attr('alt');
		$('#grid div').each(function(){
			var oalt = $(this).find('img').attr('alt');
			console.log(oalt);
			if( oalt == alt){
				$(this).show().siblings().hide();
				console.log(1);
			}
			else{
				$(this).show();
				console.log(2);
			}
		});
		$('#grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 200
        });
	});
});