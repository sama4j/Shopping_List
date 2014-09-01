$(document).ready(function() {
	
	$('#inputs').on('click','#budget', function() {
		$('.amt1').show();
		var money = +$('#inputs .budget input').val();
		$('.amt2 input').val(money);
		$('.amt2').show();
	});

	$('.entry').on('click', '.btn', function() {
		var listed = $('#item').val();
		var newrow =$('<tr></tr>');
		var col2 = $('<td><input id="a2" type="checkbox" value="No"></td>');
		var col3 = $('<td><input id= "a3" type="number" name="price" placeholder="5"></td>');
		if ($('select option:selected').val() == "Food") {
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
		var foodRow = $('#data #Food .insert tr').length;
		var clothRow = $('#data #Clothing .insert2 tr').length
		var sheltRow = $('#data #Shelter .insert3 tr').length

		$('#foodt').val(totalFood(foodRow));
		$('#clot').val(totalClothing(clothRow));
		$('#shelt').val(totalShelter(sheltRow));
		
		var one = +$('#foodt').val();
		var two = +$('#clot').val();
		var three = +$('#shelt').val()
		var allT =  one + two + three;
		$('.ft').show();
		$('.ct').show();
		$('.st').show();

		$('#totals #amt1f').val(allT);
		var left = +$('#totals #amt2f').val()
		$('#totals #amt2f').val(left-allT)

	});

});

var totalFood = function(now) {
	var sum = 0;
	for (var i = 1; i <= now; i++) {
		sum = +$('#data #Food .insert tr:nth-child('+i+') #a3').val() + sum;
	};
	return sum;
}

var totalClothing = function(now) {
	var sum = 0;
	for (var i = 1; i <= now; i++) {
		sum = +$('#data #Clothing .insert2 tr:nth-child('+i+') #a3').val() + sum;
	};
	return sum;
}

var totalShelter = function(now) {
	var sum = 0;
	for (var i = 1; i <= now; i++) {
		sum = +$('#data #Shelter .insert3 tr:nth-child('+i+') #a3').val() + sum;
	};
	return sum;
}