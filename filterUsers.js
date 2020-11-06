let users = [
    {
        userName: "Mario Rossi",
        competenceUser: [
            {
                nameComp: 'java',
                area: 'linguaggi programmazione',
                level: 3
            },
            {
                nameComp: 'Linux',
                area: 'Sistemi operativi',
                level: 2
            }
        ]
    },
    {
        userName: "Franco Verdi",
        competenceUser: [
            {
                nameComp: 'js',
                area: 'linguaggi programmazione',
                level: 4
            },
            {
                nameComp: 'Windows',
                area: 'Sistemi operativi',
                level: 1
            }
        ]
    }
];



function nameORCompetence() {
    console.log(document.getElementById("initialChoice").value)
    if (document.getElementById("initialChoice").value == "name") {
        document.getElementById("searchByName").removeAttribute("hidden", "");
    } else if (document.getElementById("initialChoice").value == "competenze") {
        document.getElementById("searchByCompetence").removeAttribute("hidden", "");

    } else if (document.getElementById("initialChoice").value == "competenzeLivello") {
        document.getElementById("searchByCompetenceAndLevel").removeAttribute("hidden", "");

    }
    document.getElementById("DIVinitialChoice").setAttribute("hidden", "")
}


let printSpace= document.getElementById("show");

function searchByName() {
    clear(printSpace);
    for (let index = 0; index < users.length; index++) {
        if (users[index].userName.toLowerCase().includes(document.getElementById("nomeCercato").value.toLowerCase())) {
            document.getElementById("show").innerHTML += "<ul><br><li> Nome e Cognome: " + users[index].userName + "</li><br> <li> Competenze: <br> " + printArrayOfObject(users[index].competenceUser) + "</ul><br><br><hr>";
        }
    }
}



function searchByCompetence() {
    clear(printSpace);
    for (let index = 0; index < users.length; index++) {
        for (let index2 = 0; index2 < users[index].competenceUser.length; index2++) {
            let currentCompetence = users[index].competenceUser[index2].nameComp.toLowerCase();
            let searchedCompetence = document.getElementById("competenzaCercata").value.toLowerCase();
            if (currentCompetence == searchedCompetence) { //che mal di testa sa condizione
                document.getElementById("show").innerHTML += "<ul><br><li> Nome e Cognome: " + users[index].userName + "</li><br> <li> Competenze: <br> " + printArrayOfObject(users[index].competenceUser) + "</ul><br><br><hr>";
            }
        }
    }
}



function searchByCompetenceAndLevel() {
    clear(printSpace);
    for (let index = 0; index < users.length; index++) {
        for (let index2 = 0; index2 < users[index].competenceUser.length; index2++) {
            let currentCompetence = users[index].competenceUser[index2].nameComp.toLowerCase();
            let searchedCompetence = document.getElementById("competenzaCercataLivello").value.toLowerCase();
            let levelOfCompetence = users[index].competenceUser[index2].level;
            let searchedLevelOfCompetence = parseInt(document.getElementById("levels").value);
            if ((currentCompetence == searchedCompetence) && (levelOfCompetence >= searchedLevelOfCompetence) ) { //che mal di testa sa condizione
                document.getElementById("show").innerHTML += "<ul><br><li> Nome e Cognome: " + users[index].userName + "</li><br> <li> Competenze: <br> " + printArrayOfObject(users[index].competenceUser) + "</ul><br><br><hr>";
            }
        }
    }
}



function printArrayOfObject(arrOfobj) {
    var output = "";
    for (let index = 0; index < arrOfobj.length; index++) {
        output += "<br>  <ul><li>Competenza Conosciuta: " + arrOfobj[index].nameComp + "</li><li>   AreaCompetenza: " + arrOfobj[index].area + "</li><li> Livello Competenza:" + arrOfobj[index].level + "</ul><br><br>";
    }
    return output;
}

function clear(space) {

    space.innerHTML="";

}

function goBack(){
    clear(printSpace);

    document.getElementById("DIVinitialChoice").removeAttribute("hidden", "")
    document.getElementById("searchByCompetenceAndLevel").setAttribute("hidden", "");
    document.getElementById("searchByCompetence").setAttribute("hidden", "");
    document.getElementById("searchByName").setAttribute("hidden", "");



}


