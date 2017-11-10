$(document).ready(function(){
	
	

	var randomUserAPI = 'https://randomuser.me/api/?results=12&nat=us';
	var randomUserOptions = {
		dataType: 'json'
	};//end AJAX
	 function employeeData(data){
	 		
		let employeeDetails = data.results;
		console.log(employeeDetails);
		for(let i=0; i<employeeDetails.length; i++){
			let member = employeeDetails[i];
			let image = member.picture.large;
			let firstName = member.name.first;
			let lastName = member.name.last;
			let Name = firstName + ' ' + lastName;
			let phone = member.phone;
			let email = member.email;
			let city = member.location.city;
			let street = member.location.street;
			let state = member.location.state;
			let zip = member.location.postcode;
			let address = street +', ' + state + ' ' + zip;
			console.log(address);
		};
	 		
	 		
	 		
	 }
	$.getJSON(randomUserAPI, randomUserOptions, employeeData);
});