$(document).ready(function() {
	$('#inputs').on('click','#budget', function() {
		$(this).closest('#content').find('.amt1').show();
		var money = +$('#inputs .budget input').val();
		$(this).closest('#content').find('.amt2 input').val(money);
		$(this).closest('#content').find('.amt2').show();
	});

	$('.entry').on('click', '.btn', function() {
		var listed = $('#item').val();
		var newrow =$('<tr></tr>');
		var col2 = $('<td><input id="a2" type="checkbox" value="No"></td>');
		var col3 = $('<td><input id= "a3" type="number" name="price" placeholder="5"></td>');
		if ($('select option:selected').val() == "Food") {
			/*var enter1 = $('<td>'+listed+'</td>');*/
			var enter1 = $('<td><input type="text" name="entry" id="item" value="'+listed+'"></td>');
			$('#data #Food .insert').prepend(newrow);
			$('#data #Food .insert tr:first').prepend(enter1, col2, col3);
		};
		if ($('select option:selected').val() == "Clothing") {
			var enter2 = $('<td><input type="text" name="entry" id="item" value="'+listed+'"></td>');
			$('#data #Clothing .insert2').prepend(newrow);
			$('#data #Clothing .insert2 tr:first').prepend(enter2, col2, col3);
		};
		if ($('select option:selected').val() == "Shelter") {
			var enter3 = $('<td><input type="text" name="entry" id="item" value="'+listed+'"></td>');
			$('#data #Shelter .insert3').prepend(newrow);
			$('#data #Shelter .insert3 tr:first').prepend(enter3, col2, col3);
		};
	});

	$('.desk tbody').on('click','#a2', function() {
		$(this).closest('tr').remove();
	});

	$('#data').on('click', '.btn', function() {
		/*alert("hello");*/
		var totalfood = $(this).parent().parent().find('#totals .ft');
		var totalcloth = $(this).parent().parent().find('#totals .ct');
		var totalshelt = $(this).parent().parent().find('#totals .st');
		var ed1 = +$('#data #Food .insert tr:first').find('#a3').val();
		var ed2 = +$('#data #Food .insert tr:last').find('#a3').val();
		$(totalfood).find('#foodt').val(ed1+ed2);

		var ed3 = +$('#data #Clothing .insert2 tr:first').find('#a3').val();
		var ed4 = +$('#data #Clothing .insert2 tr:last').find('#a3').val();
		$(totalcloth).find('#clot').val(ed3+ed4);

		var ed5 = +$('#data #Shelter .insert3 tr:first').find('#a3').val();
		var ed6 = +$('#data #Shelter .insert3 tr:last').find('#a3').val();
		$(totalshelt).find('#shelt').val(ed5+ed6);
		
		var allT = ed1+ed2+ed3+ed4+ed5+ed6;
		$(totalfood).show();
		$(totalcloth).show();
		$(totalshelt).show();
		$(this).parent().parent().find('#totals #fixit').slideDown();

		$(this).parent().parent().find('#totals #amt1f').val(allT);
		var left = +$(this).parent().parent().find('#totals #amt2f').val()
		$(this).parent().parent().find('#totals #amt2f').val(left-allT)
		/*
		$(this).parent().parent().find('#totals .ft').show();
		$(this).parent().parent().find('#totals .ct').show();
		$(this).parent().parent().find('#totals .st').show();
		*/


	});

});

