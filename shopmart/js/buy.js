var filter = getUrlVars()["fil"];
var serviceURL;
var employees;

$(document).bind('pageinit', function(event) {

    if(filter == 0)
	{
	  serviceURL = "http://shopmart.co.ug/mobileApp/allproductsNewest.php";
	}
	else if(filter == 1)
	{
	  serviceURL = "http://shopmart.co.ug/mobileApp/allproductsPriceLH.php";
	}
	else if(filter == 2)
	{
	  serviceURL = "http://shopmart.co.ug/mobileApp/allproductsPriceHL.php";
	}
	getProductList();
});

function getProductList() {
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

        $('#producList li').remove();
        $.each(data, function (index, data) {
		
		for (i = 0; i < data.length; i++) {
		
		
		$('#producList').append('<li><a href="employeedetails.html?id=' + data[i].Id + '">' +
					'<img src="http://shopmart.co.ug/wp-content/uploads/' + data[i].meta_value + '"/>' +
					'<h4>' + data[i].post_name + '</h4>' +
					'<p>' + data[i].price + '</p></a>' +
					'<a href="Alist.html?act=' + data[i].meta_value + '" data-ajax="false"></a></li>');
			   
			}
            
        });
        $('#producList').listview('refresh');
    });
	
	
	
	
}
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
