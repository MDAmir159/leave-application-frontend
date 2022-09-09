export class ObjectToBeSentServerFacultyLogIn {
    constructor(object){
        this.email = object.email
        this.password = object.password
        this.userType = object.userType
    }
}

export class ObjectToBeSavedInBrowser {
    constructor(status,value){
        this.loggedIn = status
        this.userDetails = value
    }
}