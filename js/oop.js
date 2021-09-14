function Data(fName, lName, age){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.welcome = () => `Welcome ${this.fName} ${this.lName}`;
    if (!new.target){
        throw new Error("must be called with new keyword");
    }
}
let user1 = new Data("Mohamed", "Reda", 23);
let user2 = new Data("Mustafa", "Ayman", 24);
// let user3 = Data("Mustafa", "Ayman", 24);  there will be error here.

console.log(Data.prototype);
Data.prototype.ageToDays = function () {
    return `Your Age In Days Is : ${this.age * 365} Days.`;
    }
console.log(user1.ageToDays());

// make zfill method
String.prototype.zFill = function (width){
    let theResult = this;
    while (theResult.length < width){
        theResult = `0${theResult}`;
    }
    return theResult.toString();
}
console.log("2".zFill(6));
console.log("25".zFill(6));
console.log("264".zFill(6));
console.log("2568".zFill(6));
console.log("24886".zFill(6));
console.log("288798".zFill(6));
console.log("288798556".zFill(6));

// make You Love Me Method
String.prototype.youLoveMe = function (){return `I love you ${this}`}
console.log(user1.welcome().youLoveMe());
console.log("Mohamed Reda".youLoveMe())

// new class es6
class User {
    static counter = 0;
    constructor(fName,lName,age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        User.counter++;
    }
    welcome(){
        return `Welcome ${this.fName} ${this.lName}`;
    }
}
let user4 = new User("Mohamed", "Reda", 23);
let user5 = new User("Mustafa", "Ayman", 24);
let user7 = new User("yousef", "Araby", 21);
// let user6 = User("Mustafa", "Ayman", 24);  //there will be error here.
console.log(user4.welcome());
console.log(user5.welcome());
console.log(user7.welcome());

User.prototype.ageToDays = function () {
    return `Your Age Is ${this.age} In Days Is : ${this.age * 365} Days.`;
}
console.log(user7.ageToDays());
console.log(User.counter);
class Admin extends User{
    // make the constructor
    constructor(fname,lname,age) {
        super(fname,lname,age);
        this._fname = fname;
        this._lname = lname;
        this._age = age;
    }
    // overriding methods
    welcome() {
        return super.welcome()+" this message from child one";
    }


    get fname() {
        return this._fname;
    }

    set fname(value) {
        this._fname = value;
    }

    get lname() {
        return this._lname;
    }

    set lname(value) {
        this._lname = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}
let admin1 = new Admin("Mahmoud","Araby",18);
let admin2 = new Admin("Mahamed","Araby",11);
let admin3 = new Admin("Mustafa","Samir",21);
console.log(admin3.ageToDays());
admin3.age = 22;
console.log(admin3.ageToDays());
console.log(admin1.welcome());
console.log(admin2.welcome());
console.log(admin3.welcome());

