<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>

$(document).ready(function(){
	var power = undefined;
	var toughness = undefined;
	var creatureName = undefined;

	var yourCreatureMessage = 'At ' + power + ' wins and ' + toughness + ' losses, your Creature Score is ' + creatureName + '!'

	var creatureScoreFetch = function(){
		$.ajax({
			type: "GET",
			url: "http://api.mtgdb.info/search/?q=power eq " + power + " and toughness eq " + toughness + "",
			success: function(data){
				
			}
		})
	}

	$('#wins').keypress(function(text){
		if (typeof text === 'number'){
			power = text;
		} else {
			alert('Your input has to be a number!');
		}
	})

	$('#losses').keypress(function(text){
		if (typeof text === 'number'){
			toughness = text;
		} else {
			alert('Your input has to be a number!')
		}
	})
})