// let users = [
//     { name: "Gabriele Puliti", competencesSO: { ubuntu: 4, windows: 2 }, competencesProgramming: { java: 3, cPlusPlus: 3 } },
//     { name: "Leonardo Scrivere", competencesSO: { linux: 2, macOS: 1 }, competencesProgramming: { ruby: 2, javascrip: 4 } },
//     { name: "Pierino Marameo", competencesSO: { Solaris: 3, windows: 2 }, competencesProgramming: { java: 1, cSharp: 2 } },
// ];

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


// let spaceShowUsers= document.getElementById("show");
// clear(spaceShowUsers);

    for (let index = 0; index < users.length; index++) {



        document.getElementById("show").innerHTML += "<ul><br><li> Nome e Cognome: " + users[index].userName + "</li><br> <li> Competenze: <br> " + printArrayOfObject(users[index].competenceUser) + "</ul><br><br><hr>";


    }



function clear(space) {

    space.innerHTML="";

}

function printArrayOfObject(arrOfobj) {
    var output = "";


    for (let index = 0; index < arrOfobj.length; index++) {
        output += "<br>  <ul><li>Competenza Conosciuta: "+arrOfobj[index].nameComp + "</li><li>   AreaCompetenza: "+arrOfobj[index].area+ "</li><li> Livello Competenza:"+arrOfobj[index].level+ "</ul><br><br>";
        
    }

    return output;

}