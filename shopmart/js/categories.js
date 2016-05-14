var serviceURL = "http://shopmart.co.ug/mobileApp/categories.php";

$(document).bind('pageinit', function(event) {
	getCategoryList();
});

function getCategoryList() {
	$.ajax({
        type: "GET",
        url: serviceURL,
		crossDomain:true,
		cache:false,
		async: true,
		xhrFields: {
			withCredentials: true
		},
		beforeSend: function () {
                                
        setTimeout(function () { $.mobile.loading('show'); }, 1); 
        },
        complete: function () {
        setTimeout(function () { $.mobile.loading('hide'); }, 1); 
        },

    }).done(function (data) {

        $('#categoryList li').remove();
        $.each(data, function (index, data) {
		
		for (i = 0; i < data.length; i++) {
		
		    $('#categoryList').append('<li><a href="Products.html?pid=' + data[i].term_taxonomy_id + '" rel="external">'+ data[i].name +'<span class="ui-li-count">'+ data[i].products +'</span></a></li>');
			   
			}
        });
        $('#categoryList').listview('refresh');
    });
	
}

