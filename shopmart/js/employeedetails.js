var employee;

$(document).on('pageshow', function (event) {
	var id = getUrlVars()["id"];
	$.ajax({
            url: 'http://localhost:2693/API/Events/GetEventDetails/'+id,
            type: 'GET',
            dataType: "jsonp",
			contentType: "application/json; charset=utf-8",
		    crossDomain:true,
		    async:true,
            success: function (data) {
			     //alert('Bizze!'); 
                 displayEvent(data);
            },
            error: function (x, y, z) {
                alert(x + '\n' + y + '\n' + z);
            }
        });
});

function displayEvent(data) {
    employee = data;
    var Book = "Event Booking";
	/*console.log(employee);*/
	$('#EventPic').attr('src', 'http://localhost:2693/API/Events/GetEventImage/' + employee.eventID);
	$('#theme').text(employee.theme);
	$('#venue').text(employee.venue);
	$('#HostPic').attr('src', 'http://localhost:2693/API/Users/GetUserImage/?userID=' + employee.userID);
	$('#date').text(new Date(employee.date).toString());
	$('#time').text(employee.Time);
	$('#description').text(employee.description);
	$('#Ticketinfo').text(employee.Ticketinfo);
	localStorage.eventTheme = employee.theme;
	localStorage.eventUser = employee.userID;
	localStorage.eventID = employee.eventID;
	$('#actionList').append('<li><a href="Alist.html?act=0" rel ="external"><h3>The Alist</h3></a></li>');

	$('#actionList').append('<li><a href="EventProviders.html?act=0" rel ="external"><h3>Event Service Providers</h3></a></li>');

	$('#actionList').append('<li><a href="EventImages.html" rel ="external"><h3>Event Photos</h3></a></li>');

	if (employee.Book) {
	    $('#actionList').append('<li><a href="Booking.html?act=0" rel ="external"><h3>Booking and Reservations</h3>' +
				'<p>' + Book + '</p></a></li>');
	}
	/*if (employee.managerId>0) {
		$('#actionList').append('<li><a href="employeedetails.html?id=' + employee.managerId + '"><h3>View Manager</h3>' +
				'<p>' + employee.managerFirstName + ' ' + employee.managerLastName + '</p></a></li>');
	}
	if (employee.reportCount>0) {
		$('#actionList').append('<li><a href="reportlist.html?id=' + employee.id + '"><h3>View Direct Reports</h3>' +
				'<p>' + employee.reportCount + '</p></a></li>');
	}
	if (employee.email) {
		$('#actionList').append('<li><a href="mailto:' + employee.email + '"><h3>Email</h3>' +
				'<p>' + employee.email + '</p></a></li>');
	}
	if (employee.officePhone) {
		$('#actionList').append('<li><a href="tel:' + employee.officePhone + '"><h3>Call Office</h3>' +
				'<p>' + employee.officePhone + '</p></a></li>');
	}
	if (employee.cellPhone) {
		$('#actionList').append('<li><a href="tel:' + employee.cellPhone + '"><h3>Call Cell</h3>' +
				'<p>' + employee.cellPhone + '</p></a></li>');
		$('#actionList').append('<li><a href="sms:' + employee.cellPhone + '"><h3>SMS</h3>' +
				'<p>' + employee.cellPhone + '</p></a></li>');
	}*/
	$('#actionList').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
