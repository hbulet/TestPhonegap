var serviceURL = "http://shopmart.co.ug/mobileApp/topposts.php";
var employees;

$(document).bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.ajax({
        type: "GET",
        url: serviceURL,

    }).done(function (data) {

        $('#employeeList li').remove();
        $.each(data, function (index, data) {
		
		for (i = 0; i < data.length; i++) {
		
		
		$('#employeeList').append('<li><a href="employeedetails.html?id=' + data[i].Id + '">' +
					'<img src="http://shopmart.co.ug/wp-content/uploads/' + data[i].meta_value + '"/>' +
					'<h4>' + data[i].post_name + '</h4>' +
					'<p>' + data[i].price + '</p></a>' +
					'<a href="Alist.html?act=' + data[i].meta_value + '" data-ajax="false"></a></li>');
			   
			}
            
        });
        $('#employeeList').listview('refresh');
    });
	
	
	
	
}
function getImage(imageID) {
    var imageUr;
	imageUr  =  "http://shopmart.co.ug/wp-content/uploads/2016/04/index-180x180.jpg";
      
	return imageUr;
}
