//<!--


function checkForm(form)
{


	if (form.name.value == ""){
	alert( "Please enter a Name" );
	form.name.focus();
	return false ;
	}

	if (form.telcode.value == ""){
	alert( "Please enter a Country code" );
	form.telcode.focus();
	return false ;
	}

	if (form.telcode2.value == ""){
	alert( "Please enter a City code" );
	form.telcode2.focus();
	return false ;
	}

	if (form.phone.value == ""){
	alert( "Please enter a Phone Number." );
	form.phone.focus();
	return false ;
	}

	if (form.mobcode.value == ""){
	alert( "Please enter a Country code for Mobile." );
	form.mobcode.focus();
	return false ;
	}

	if (form.mobile.value == ""){
	alert( "Please enter a Mobile Number." );
	form.mobile.focus();
	return false ;
	}

	if (form.country.value == ""){
	alert( "Please select your Country Name" );
	form.country.focus();
	return false ;
	}

	if(form.email.value == "" ) {
	alert("Kindly enter your E-mail ID.");
	form.email.focus();
	return false;
    }
	if (form.email.value.length != 0){ 
		var e_check  = form.email.value;
		if(form.email.value.indexOf(" ") != -1)	{
			alert("Kindly enter correct E-Mail ID without any spaces in it.");
			form.email.focus(); 
			return false;
		}

		if(form.email.value.indexOf("@") == -1)	{
		alert("Invalid E-Mail ID! Kindly enter correct E-Mail ID.");
		form.email.focus(); 
		return false;
		}
	   	validarr = form.email.value.split("@");
	   	if(validarr[0].length==0) {
	   		alert("Invalid E-Mail ID! Kindly enter the correct E-mail ID.");
	   		form.email.focus(); 
	   	return false;
   		}
	  	if(validarr[1].indexOf("@") >=0) {
		   	alert("Invalid E-Mail ID! Kindly enter the correct E-mail ID.");
		   	form.email.focus(); 
	   	return false;
	   	}
	   	if(validarr[1].length==0) {
		   	alert("Invalid E-Mail ID! Kindly enter the correct E-mail ID.");
		   	form.email.focus(); 
		   	return false;
	   	}
	   	if(validarr[1].length != 0){ 
			if(validarr[1].indexOf(".") == -1){
				alert("Invalid E-Mail ID! Kindly enter the correct E-mail ID.");
				form.email.focus(); 
				return false;
			}
			validemail = validarr[1].split(".");
		   if(validemail[0].length==0){ 
			 alert("Invalid E-Mail ID! Kindly enter the correct E-mail ID.");
			 form.email.focus(); 
			 return false;
			}
			if(validemail[1].length==0){
				alert("Invalid E-Mail ID! Kindly enter the correct E-mail ID.");
				form.email.focus(); 
				return false;
			}
		  }
	   }
		
	
return true;
}

//-->

