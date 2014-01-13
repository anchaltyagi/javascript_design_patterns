var singletonService = (function(){
	var instance;

	//Singleton
	var singleton = function(){
		this.name = "Hi! This is singleton";
		this.showName = function(){
			return "Name is:  "+ this.name;
		}
	}
	return{
		getInstance: function(){
			if (!instance) {
				instance = new singleton();
			};
			return instance;
		}
	}
}());