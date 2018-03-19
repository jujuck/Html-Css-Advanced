//validate password 
document.getElementById("password")).addEventListener("input", function (e) {
	var password = e.target.value;
	var passwordLength = "weak";
	var messageColor = "black";
	var passwordRegexLetter = /[A-Z]/;
	var passwordRegexNumber = /[1-9]/;
	var strength = 0;
	var Letter = "Capital letter: checked";
	var Nombre = "Number: checked";

	//Calcul de la force du mot de passe
	if (passwordRegexLetter.test(e.target.value) === true) {
		strength += 2;
	} else {
		var Letter = "Must have at least one capital Letter";
	};

	if (passwordRegexNumber.test(e.target.value) === true) {
		strength += 2;
	} else {
		var Nombre = "must have at least one number";
	};

	strength += password.length;

	//Affichage des différents cas
	if (strength > 12) {
		passwordLength = "Very Strong";
		messageColor = "green";
	} else if (strength >= 10)  {
		passwordLength = "Strong";
		messageColor = "yellow";
	} else if (strength >= 8) {
		passwordLength = "Medium";
		messageColor = " orange";
	} else if (strength >= 6) {
		passwordLength = "Poor";
		messageColor = "red";
	}

	var passwordHelpElement = document.getElementById("passwordHelp");
	passwordHelpElement.textContent = "Strength: " + passwordLength /*+", " + Letter + ", " + Nombre*/;
	passwordHelpElement.style.color = messageColor;
});