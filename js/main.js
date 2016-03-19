var Student = (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    Student.prototype.sayHello = function (message) {
        return this.fullname + " says: " + message;
    };
    return Student;
})();
function greeter(message) {
    return message;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user.sayHello("Hello world"));
