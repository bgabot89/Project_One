var clubs =  [
    {
        name: 'Yearbook',
        students: [
            { first: 'Joe', last: 'Lakin' },
            { first: 'Evalyn', last: 'Bradtke' },
            { first: 'Samuel', last: 'Black' }
        ], 
        teacher: 'James Friar'
    },
    {
        name: 'Jazz Band',
        students: [
            { first: 'Douglas', last: 'Wisoky' },
            { first: 'Cora', last: 'Thompson' },
            { first: 'Samuel', last: 'Ziemann' },
            { first: 'Alana', last: 'Cortez'}
        ], 
        teacher: 'Luther Richards'
    },
    {
        name: 'Swim Team',
        students: [
            { first: 'Cora', last: 'Thompson' },
            { first: 'Samuel', last: 'Black' },
            { first: 'Alana', last: 'Cortez'},
            { first: 'Joe', last: 'Lakin' }
        ], 
        teacher: 'Carol Darby'
    }
];

/*
1.)  

Read and console log the following:

the array that contains all the student club data - clubs;
the number of clubs - clubs.length
the object that contains all of the information for the second club - clubs[1]
the teacher of the first club - clubs[0].teacher
the array of students in the second team - clubs[1].students;
the last name of the second student on the third team - clubs[2].students[1].last

2.) Create an object literal representing a student with your name, and assign it to a variable.

var Brian = {first: "Brian", last: "Gabot"};

3.) Add yourself to one of the clubs as a student member. Add a comment saying which club you're joining.
clubs[1].students.push(Brian);

5.) Update Samuel Black's first name to Sam everywhere it occurs.
clubs[0].students[2].first = "Sam";
clubs[1].students[2].first = "Sam";
clubs[2].students[1].first = "Sam";



