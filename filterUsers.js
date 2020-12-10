const users = [
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

const area=["linguaggi programmazione", "Sistemi operativi"]

function getById(id){
    return document.getElementById(id)
}

var printSpace = getById("show"); //variabile utilizzata per stampare e cancellare l'output delle ricerche

function clear(element) {
    element.innerHTML = "";
}

function nameORCompetence() {
    console.log(getById("initialChoice").value)
    switch(getById("initialChoice").value){
        case "name":
            getById("searchByName").removeAttribute("hidden");
            break
        case "competenze":
            getById("searchByCompetence").removeAttribute("hidden");
            showCompetence()
            break
        case "competenzeLivello":
            getById("searchByCompetenceAndLevel").removeAttribute("hidden");
            break
    }
    getById("DivScopeChoice").setAttribute("hidden")
}

function searchByName() {
    clear(printSpace);
    for (let i = 0; i < users.length; i++) {
        let condition=users[i].userName.toLowerCase().includes(getById("nomeCercato").value.toLowerCase())
        if (condition) {
            getById("show").innerHTML += `
            <ul><br>
                <li> Nome e Cognome: ` + users[i].userName + `</li><br>
                <li> Competenze: <br> ` + printArrayOfObject(users[i].competenceUser) + `
            </ul><br><br>
            <hr>`;
        }
    }
}

function showCompetence(){
    clear(printSpace);
    for(let i=0;i<area.length;i++){
        let v=area[i].split(' ')
        areaValue=v[0]+'_'+v[1]
        getById("selectArea").innerHTML+='<option id="competenzaCercata" value='+areaValue+'>'+area[i]+'</option>'
    }
}

function searchByCompetence() {
    for (let i = 0; i < users.length; i++) {
        const length=users[i].competenceUser.length
        for (let j = 0; j < length; j++) {
            let tempComp=getById("competenzaCercata").value;
            let v=tempComp.split('_')
            tempComp=v[0]+' '+v[1]
            const searchedCompetence = tempComp
            const currentCompetence = users[i].competenceUser[j].area;
            if (currentCompetence == searchedCompetence) {
                getById("show").innerHTML += `
                <ul><br>
                    <li> Nome e Cognome: ` + users[i].userName + `</li><br>
                    <li> Competenze: <br> ` + printArrayOfObject(users[i].competenceUser) + `
                </ul>
                <br><br><hr>`;
            }
        }
    }
}

function searchByCompetenceAndLevel() {
    clear(printSpace);
    for (let i = 0; i < users.length; i++) {
    const length=users[i].competenceUser.length
        for (let j = 0; j < length; j++) {
            const currentCompetence = users[i].competenceUser[j].nameComp.toLowerCase();
            const searchedCompetence = getById("competenzaCercataLivello").value.toLowerCase();
            const levelOfCompetence = users[i].competenceUser[j].level;
            const searchedLevelOfCompetence = parseInt(getById("levels").value);
            if ((currentCompetence == searchedCompetence) && (levelOfCompetence >= searchedLevelOfCompetence)) { 
                getById("show").innerHTML += `
                <ul><br>
                    <li> Nome e Cognome: ` + users[i].userName + `</li><br>
                    <li> Competenze: <br> ` + printArrayOfObject(users[i].competenceUser) + `
                </ul>
                <br><br><hr>`;
            }
        }
    }
}

function printArrayOfObject(arrOfobj) {
    var output = "";
    for (let i = 0; i < arrOfobj.length; i++) {
        output += `<br>
        <ul>
            <li> Competenza Conosciuta: ` + arrOfobj[i].nameComp + `</li>
            <li> AreaCompetenza: ` + arrOfobj[i].area + `</li>
            <li> Livello Competenza:` + arrOfobj[i].level + `</li>
        </ul>
        <br><br>`;
    }
    return output;
}

function goBack() {
    clear(printSpace);
    getById("DivScopeChoice").removeAttribute("hidden")
    getById("searchByCompetenceAndLevel").setAttribute("hidden");
    getById("searchByCompetence").setAttribute("hidden");
    getById("searchByName").setAttribute("hidden");
}