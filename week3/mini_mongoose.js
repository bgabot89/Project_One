

var array =[];

function Model(name){
	this.type = name;
	this.data = [];
	this._id = 0;
}


// callback function we can use to return an object
// this is similar to how Mongoose operates
function returnThis(object) {
 return object;
}

Model.prototype.create = function(objectProperties, callbackFunction){
	var objectContainer = {};
this._id ++;
objectContainer._id = this._id;
objectContainer._timestamp = new Date();
this.data.push(objectContainer);
callbackFunction(objectContainer);

};


//var place = new Model();	

//place.where({state: "OH"});



//findbyId function

Model.prototype.findbyId = function(objectId, callback){

	//variable stores a result
	var result;
	  // iterate over data array of Model instance
	this.data.forEach(function (object){
  // if the current object being iterated over has an _id matching the objectId
  	if (object._id === objectId ){
  		result = callback(object);
  	}	
  });
  	//callsback the result	
  
  	return result;
  };

var user = new Model("user");


//Creates Variables
  [
    {first_name: "Mister", last_name: "Robot"},
    {first_name: "Stanley", last_name: "Steemer"},
    {first_name: "Action", last_name: "Bronson"},
    {first_name: "Jillian", last_name: "Murphy"},
    {first_name: "Nichole", last_name: "DeJarden"}
  ].forEach( function(person) {
    user.create(person, function(person){
      return person;
    });
  });

// DRIVER CODE

/* Find object by id */
var found = user.findByID(3, function(success) {
    return success;
});
console.log("FounByID:\n", found);


  console.log(Model); // [Function: Model]
console.log(Model.prototype); // {}




