$(document).ready(function() {
	$("#button").click(function() {
		$.get("/test", function(data, status) {
			alert("Data: " + data + "\nStatus: " + status);
		});
	});

	$(".key").on("click", function(e) {
		var curr = $("#result").val();
		$("#result").val(curr + $(this).val());
	});
	$('.equals').on('click', function(e) {
		var x = $("#result").val();
		var solution;
		var error=false;
		try {
			solution = eval(x);
		} catch (e) {
			error=true;
			if (e instanceof SyntaxError) {
				console.log("Error! Syntax Error");
			}
			if (e instanceof TypeError) {
				console.log("Error! Type Error");
			}
		}
		if(!error){
			$("#result").val(solution);
		}else{
			$("#result").val("err");
		}
		
	});
	$('.clr').on('click', function(e) {
		$("#result").val("");
	});
});