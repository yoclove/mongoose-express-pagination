$(function(){
	$('#pagesearch').click(function(e){
		e.preventDefault();
		var optionValue = $('select[name=pagin]').val();
		if (typeof(Storage) !== "undefined") {
			localStorage.setItem("optionval", optionValue); // save option value for later access
		} else {
			alert("An error has occured. Your browser doesn't support Web Storage");
		}
		$.ajax({
			type: 'post',
			url: '/admin/usersperpage/',
			// post the optionValue value to req.body.pagin in /admin/usersperpage controller
			data: { pagin : localStorage.getItem("optionval") },
			success: function(data) {
				$('body').html(data);
			},
			error: function() {
				console.log('an error has occured');
			}
		});
	}); 
	$('ul.pagination li a').click(function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		$.ajax({
			type: 'post',
			url: href,
			// post the liElements value to req.body.pagin in /admin/page/ controller
			data: { pagin: localStorage.getItem("optionval") },
			success: function(data) {
				$('body').html(data);
			}, 
			error: function() {
				console.log('an error has occured');
			}
		});
	});
});