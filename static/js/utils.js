function validateSignupDetails(values) {

    var firstname = values['firstname'];
    var lastname = values['lastname'];
    var password = values['password'];
    var address = values['address'];
    var city = values['city'];
    var state = values['state'];
    var country = values['country'];
    var pin = values['pin'];
    var phone = values['phone'];
    var email = values['email'];
    var role = values['role'];
    
   	if (!checkField(firstname)) {
		return 'Please enter First Name';
	}
	if (!checkField(lastname)) {
		return 'Please enter Last Name';
	}
	if (!checkField(password)) {
		return 'Please enter Password';
	}
	if(!checkPassword(password)){
		return 'Invalid Password. It should have only 6 Digits';
	}
	if (!checkField(address)) {
		return 'Please enter Address';
	}
	if (!checkField(city)) {
		return 'Please enter City';
	}
	if (!checkField(state)) {
		return 'Please enter State';
	}
	if (!checkField(country)) {
		return 'Please enter Country';
	}
	if (!checkField(pin)) {
		return 'Please enter Pin';
	}
	if (!checkPin(pin)){
    	return 'Invalid Pin';
    }
	if (!checkField(phone)) {
		return 'Please enter Phone';
	}
	if (!checkField(email)) {
		return 'Please enter Email';
	}
	if (!checkEmail(email)) {
		return 'Invalid E-Mail ID';
	}   
    if (!checkRoleSelected(role)) {
		return 'Please enter Role';
	}
	
    return "";
}

function validateAddKioskDetails(values){

	var tk_name = values['tk_name'];
	var tk_area = values['tk_area'];
	var tk_operator = values['tk_operator'];
	var tk_address = values['tk_address'];
	var tk_city = values['tk_city'];
	var tk_state = values['tk_state'];
	var tk_country = values['tk_country'];
	var tk_pin = values['tk_pin'];
	
	if (!checkField(tk_name)){
		return 'Please enter the Kiosk Name';
	}
	if(!checkField(tk_area)){
		return 'Please enter the Kiosk Area';
	}
	if(!checkField(tk_operator)){
		return 'Please Enter the Opertor ID';
	}
	if(!checkField(tk_address)){
		return 'Please enter the Kiosk Address';
	}
	if(!checkField(tk_city)){
		return 'Please enter the Kiosk City';
	}
	if (!checkField(tk_state)){
		return 'Please enter the Kiosk State';
	}
	if(!checkField(tk_country)){
		return 'Please enter Country';
	}
	if(!checkField(tk_pin)){
		return 'Please enter Pin';
	}
	if (!checkPin(tk_pin)){
    	return 'Invalid Pin';
    }

    return "";
}

function checkPassword(password){

	var re = /^([0-9]{10})$/
	return re.test(password)
}

function checkPin(pin){

	var re = /^([0-9]{6})$/
	return re.test(pin)

}

function checkPhonenumber(phonenumber){

	var re = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
	return re.test(phonenumber)

}

function checkRoleSelected(role){

 	if (role ==1 || role == 2 || role == 3){
 		return true
	}else{
		return false
	}
}

function checkField(str)
{
	if (str ==''){
		return false;
	}else{
		return true;
	}
}

function checkEmail(str){
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(str);
}

