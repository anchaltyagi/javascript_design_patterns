var testModule = (function() {
	var patientList = [];
	var registerPatient = function(patientDetails) {
		console.log(patientDetails);
		patientList.push(patientDetails);
	}
	var getPatients =function(){
		return patientList;
	}	
	return {
		registerPatient: function(patientDetails){
			registerPatient(patientDetails);
		},
		getPatients: function(){
			return getPatients();
		}
	};	
}());