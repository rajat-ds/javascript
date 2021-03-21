//Before ES6

var name = "Madhav";
var age = 21;

var studentDetails = {
  name: name,
  age: age,
};

// With ES6 Enhanced Object Literals

let name = "Madhav";
let age = 21;

// No need for `name: name` and `age: age`
let studentDetails = { name, age };

// Before ES6

var physics = 98;
var maths = 95;
var chem = 89;

var studentInfo = {
  physics: physics,
  maths: maths,
  chem: chem,
  calcScore: function () {
    return (this.physics + this.maths + this.chem) / 3;
  },
};

// With ES6 Enhanced Object Literals

const physics = 98;
const maths = 95;
const chem = 89;

const studentInfo = {
  physics,
  maths,
  chem,
  calcScore() {
    return (this.physics + this.maths + this.chem) / 3;
  },
};
