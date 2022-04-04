
var id = 0
localStorage.setItem('dataBase', JSON.stringify({ users: [], movies: [] }));
function User() {
    return {
        firstName: "",
        lastName: "",
        email: "",
        pwd: "",
        id: id + 1,
        role: "user",
        signIn: signIn
    }
}
//user method
function signIn(firstName, lastName, email, pwd) {
    var db = JSON.parse(localStorage.getItem("dataBase"))
    for (let i = 0; i < db.users.length; i++) {
        if (email === db.users[i].email) {
            //to do with html
            return "this email alredy exist"
        }
    }
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.pwd = pwd
    db.users.push(this)
    localStorage.setItem("dataBase", JSON.stringify(db))
}

function Movie() {
    return {
        movieName: "",
        year: "",
        scr: "",
        Rate: { note: 0, comment: "" },
        sinob: "",
        id: id + 1,
        add: add,
    }
}
//movie method

function add(movieName, year, scr, sinob) {
    var db = JSON.parse(localStorage.getItem("dataBase"))
    this.movieName = movieName
    this.year = year
    this.scr = scr
    this.sinob = sinob
    this.db.movies.push(this)
    this.localStorage.setItem("dataBase", db)

}
//general function
function logIn(email, pwd) {
    var db = JSON.parse(localStorage.getItem("dataBase"))
    for (let i = 0; i < db.users.length; i++) {
        if (email === db.users[i].email) {
            if (pwd === db.users[i].pwd) {
                //to do with html
                return "welcome"
            }
        }

    }
}
function rating(id, note, comment) {
    var db = JSON.parse(localStorage.getItem("dataBase"))
    for (let i = 0; i < db.movies.length; i++) {
        if (db.movies[i].id === id) {
            db.movies[i].note = note
            db.movies[i].comment = comment
        }
    }
    localStorage.setItem("dataBase", JSON.stringify(db))
}





