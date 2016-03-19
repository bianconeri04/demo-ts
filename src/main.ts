class Student {
    fullname: string;
    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    sayHello(message: string): string {
        return this.fullname + " says: " + message;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(message: string) {
    return message;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user.sayHello("Hello world"));