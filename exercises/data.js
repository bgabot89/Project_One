var data = {
    school: "General Assembly",
    city: "San Francisco",
    course: "Web Development Immersive",
    course_id: "WDI22",
    classrootm: "1",
    students: [{
        id: 0,
        last_name: "Aramayo",
        first_name: "Angelo",
        github_username: "angelo2dot0"
    }, {
        id: 1,
        last_name: "Bia",
        first_name: "Racha",
        github_username: "racha_bella"
    }, {
        id: 2,
        last_name: "Gabot",
        first_name: "Brian",
        github_username: "bgabot89"
    }]
}

/*
Based on our experience in class so far and your familiarity with the above object, consider the following as you read further:
How many of the properties in data are Strings?
How many of the properties are Arrays?
If there is an array, what is the array data type?
*/

//data.students[1].github_username);

var myData = new Data();

data.students.push({id:3, last_name: ""})


 // Constructor Object Definition
 function Flower(){
    this.color = "red";
    this.petals = 32;
    this.smellsPretty= true;
    //Demonstrates a single method in an object
    this.sniff =function(){
        console.log("Sniff Sniff Sniff!");
    };
    }

 /*
 Count down from the petal number down to 1
Alternately display 'He loves me' or 'He loves me not' to the console for each petal count decrement.
Display the final phrase with an exclamation; that's the end of the game!
*/

var i;
this.petals = petals 

this.sheLovesMe=function(){
for(i=petals; i>0; i--){
 console.log("she love me");
 i--;
 console.log("she loves me not");
}
}
this.sheLovesMe();