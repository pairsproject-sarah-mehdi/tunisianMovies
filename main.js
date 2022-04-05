
var id = 0
// localStorage.setItem('dataBase', JSON.stringify({ users: [], movies: [] }));
var db = { users: [], movies: [], userlog: {} }

function User() {
    return {
        firstName: "",
        lastName: "",
        email: "",
        pwd: "",
        role: "user",
        signIn: signIn
    }
}
//user method
function signIn(firstName, lastName, email, pwd) {
    // var db = JSON.parse(localStorage.getItem("dataBase"))
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
    // db.users.push(this)
    // localStorage.setItem("dataBase", JSON.stringify(db))
}

function Movie() {
    id += 1
    return {

        movieName: "",
        year: "",
        srcsrc: "",
        rate: [3],
        sinob: "",
        id: id,
        add: add,
    }
}
//movie method

function add(movieName, year, src, sinob) {
    // var db = JSON.parse(localStorage.getItem("dataBase"))
    this.movieName = movieName
    this.year = year
    this.src = src
    this.sinob = sinob
    // this.db.movies.push(this)
    // this.localStorage.setItem("dataBase", JSON.stringify(db))

}
//general function
function logIn(email, pwd) {
    // var db = JSON.parse(localStorage.getItem("dataBase"))
    for (let i = 0; i < db.users.length; i++) {
        if (email === db.users[i].email) {

            if (pwd === db.users[i].pwd) {
                //to do with html
                db.userlog.emailId = email

                return "welcome"

            }
            else { return "pwd error" }
        }
        else { return "email not found" }

    }
}
function rating(id, note, comment, emailComment) {
    // var db = JSON.parse(localStorage.getItem("dataBase"))
    for (let i = 0; i < db.movies.length; i++) {
        if (db.movies[i].id === id) {
            db.movies[i].rate = { note: note, comment: comment, emailComment: emailComment }
        }
    }
    // localStorage.setItem("dataBase", JSON.stringify(db))
}


user1 = User()
user2 = User()
user1.signIn("sarah", "kcm", "kcm@a.com", "12345678")
user2.signIn("mehdi", "enna", "mehdi@a.com", "12345678")
db.users.push(user1)
db.users.push(user2)

var m1 = Movie()
var m2 = Movie()
var m3 = Movie()
var m4 = Movie()
var m5 = Movie()
var m6 = Movie()

m1.add("Farda W'lkat Okht'ha", "1978", `Deux Larrons En Folie.png`, "The film describes the adventures of two young simple peasants en route to the capital. Their journey begins on a national road where the two friends hitchhike to Tunis. Their mishaps lead them from the olive groves of the Tunisian hinterland to the biggest hotels in the city of Hammamet.")
m2.add("Papillon d'or", "2021", "film-papillon.png", "Moez is an angry man, a violent man, a hard shell and a tough guy. AbdelhamidBouchnak begins to defuse this colossus, his solitude, his broken heart, his lost love.The film plays with us, hits us, shakes us up and then begins to give us clues todecipher its central character.")
m3.add("Fatwa", "2018", "fatwa2.jpg", "Brahim Nadhour, a Tunisian living in France, returns to Tunis for a son who died in a motorcycle accident. He discovers that the young Marwan was working in a radical Islamist group. Brahim decides to conduct his investigation to understand the reasons for his radicalization and identifies people who have not been indoctrinated.")
m4.add("DictaShot", "2015", "dicta_shot.jpg", "In an asylum designed for political opponents to the ruling system, residents")
m5.add("Farda W'lkat Okht'ha", "1978", "Deux Larrons En Folie.png", "The film describes the adventures of two young simple peasants en route to the capital. Their journey begins on a national road where the two friends hitchhike to Tunis. Their mishaps lead them from the olive groves of the Tunisian hinterland to the biggest hotels in the city of Hammamet.")
m6.add("Beb El Falla", "2014", "Beb el Fella.png", "Death, disguised as a journalist, visits Gianni, a senile old Italian man who lives in an old people's home. Before accomplishing his mission, he gives him some time")

var average;

db.movies.push(m1)
db.movies.push(m2)
db.movies.push(m3)
db.movies.push(m4)
db.movies.push(m6)
db.movies.push(m5)

function rate(index, score){
    console.log("noted");
    var currentRate = $(`#rateUser${index+1}`).val()
    db.movies[index].rate.push(+currentRate)
    $(`#note${index}`).replaceWith(score)
    console.log(score);
}
function ave(params) {
    
}

$(document).ready(function () {
    // var db = JSON.parse(localStorage.getItem("dataBase"))



    //sign in event
    $("#btn").click(function (e) {
        if ($("#pwd").val().length < 8) {
            $("#pwdError").show()
        }
        else {
            var user = User()
            user.signIn($("#firstName").val(), $("#lastName").val(), $("#email").val(), $("#pwd").val())
            db.users.push(user)
            // localStorage.setItem("dataBase", JSON.stringify(db))
        }


    })
    
    //add movie
    $("#btnadd").click(function (e) {
        
        
            var movie = Movie()
            movie.add($("#addMovieName").val(), $("#year").val(), $("#pic").val(), $("#synob").val())
            db.movies.push(movie)
            // localStorage.setItem("dataBase", JSON.stringify(db))
        


    })
    $("#btnlog").click(function (e) {
        logIn($("#emailLog").val(), $("#pwdLog").val()) === "welcome"
        // localStorage.setItem("dataBase", JSON.stringify(db))

    })



    //loop inside db and append movies
    for (let i = 0; i < db.movies.length; i++) {
        var $movie = $(`<tile-dynamic isvideo="" data-qa="tile">
        <img src="${db.movies[i].src}" width="180" height="257">
        <a class="btn btn-primary btn-sm btn-dark" data-bs-toggle="collapse" href="#multiCollapseExample${db.movies[i].id}"
            role="button" aria-expanded="false" aria-controls="multiCollapseExample${db.movies[i].id}" id="see${db.movies[i].id}">See More</a>

        <div class="row">
            <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample${db.movies[i].id}">
                    <div class="card">
                        <h2 class="card-title">Name: ${db.movies[i].movieName}</h2>
                        <p class="card-desc"> Year: ${db.movies[i].year} 
                        Synopsis: ${db.movies[i].sinob} Note:${db.movies[i].rate.reduce((partialSum, a) => partialSum + a, 0)} /5 (Emogy) </p>
                    </div>
                    
                </div>
            </div>
            </a>
            <a class="btn btn-primary btn-sm btn-dark" data-bs-toggle="collapse" href="#multiCollapseExamplerate${db.movies[i].id}"
            role="button" aria-expanded="false" aria-controls="multiCollapseExamplerate${db.movies[i].id}" id="rate${db.movies[i].id}">give rate</a>

        <div class="row">
            <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExamplerate${db.movies[i].id}">
                    <div class="card card-body">
                    <select class="form-select" aria-label="your rate" id="rateUser${db.movies[i].id}">
                    <option selected>chose your rate</option>
                    <option value="1">&#9733;</option>
                    <option value="2">&#9733;&#9733;</option>
                    <option value="3">&#9733;&#9733;&#9733;</option>
                    <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
                    <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>


                  </select>
                  <button type="button" class="btn btn-light" id="confirm${db.movies[i].id}" onclick= "rate(${i},${5} )" >confirm</button>

                    </div>
                </div>
            </div>
            </a>

    </tile-dynamic>`)
        $("#tiles-container").append($movie)

    }

    





})


