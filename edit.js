const userList = [
    {
        name: "mario rossi",
        competenceUser: [
            {
                name: 'java',
                area: 'linguaggi programmazione',
                level: 'base'
            },
            {
                name: 'Linux',
                area: 'Sistemi operativi',
                level: 'intermedio'
            }
        ]
    },
    {
        name: "franco verdi",
        competenceUser: [
            {
                name: 'js',
                area: 'linguaggi programmazione',
                level: 'avanzato'
            },
            {
                name: 'Windows',
                area: 'Sistemi operativi',
                level: 'base'
            }
        ]
    }
]


for (let i = 0; i < userList.length; i++) {
    const { name } = userList[i];
    document.getElementById("employee").innerHTML+=`<option value="${i}"> ${ name } </option>`

}

function showArea() {
    document.getElementById("area").innerHTML = '<option value="" selected="selected" disabled="disabled">Seleziona Area di Competenze</option>'
    const employee = document.getElementById("employee").value
    const comp = userList[employee].competenceUser
    for (let i = 0; i < comp.length; i++) {
        document.getElementById("area").innerHTML += '<option value=' + i + '>' + userList[employee].competenceUser[i].area + '</option>'
    }
}

function showSkill() {
    document.getElementById("skill").innerHTML = '<option value="" selected="selected" disabled="disabled">Seleziona Competenza</option>'
    const employee = document.getElementById("employee").value
    const area = document.getElementById("area").value
    const comp = userList[employee].competenceUser
    for (let i = 0; i < comp.length; i++) {
        if (userList[employee].competenceUser[i].area == userList[employee].competenceUser[area].area) {
            document.getElementById("skill").innerHTML += '<option value=' + i + '>' + userList[employee].competenceUser[i].name + '</option>'
        }
    }
}

function addEmployee() {
    const nameEmp = document.getElementById("nameEmp").value
    if (nameEmp != '') {
        userList.push(nameEmp)
        document.getElementById("demo").innerHTML = nameEmp + ' aggiunto.'
        console.log(userList)
    } else {
        document.getElementById("demo").innerHTML = 'Inserisci nome e cognome'
    }
}

function showSkillLvl() {
    const employee = document.getElementById("employee").value
    const skill = document.getElementById("skill").value
    document.getElementById("text").innerHTML = userList[employee].competenceUser[skill].name + ' - livello: '

    document.getElementById("level").removeAttribute("hidden")

    var level = userList[employee].competenceUser[skill].level
    document.getElementById("level").innerHTML = '<option disabled="disabled">Seleziona nuovo Livello</option>'
    document.getElementById("level").innerHTML += '<option id="base" value="base">Base</option>'
    document.getElementById("level").innerHTML += '<option id="intermedio" value="intermedio">Intermedio</option>'        //temporaneo
    document.getElementById("level").innerHTML += '<option id="avanzato" value="avanzato">Avanzato</option>'
    switch (level) {
        case 'base':
            document.getElementById("base").setAttribute("selected", "selected")
            document.getElementById("base").setAttribute("disabled", "disabled")
            break
        case 'intermedio':
            document.getElementById("intermedio").setAttribute("selected", "selected")
            document.getElementById("intermedio").setAttribute("disabled", "disabled")
            break
        case 'avanzato':
            document.getElementById("avanzato").setAttribute("selected", "selected")
            document.getElementById("avanzato").setAttribute("disabled", "disabled")
            break
    }
    document.getElementById("confermaModSkill").removeAttribute("hidden")
}

function modifySkill() {
    const employee = document.getElementById("employee").value
    const skill = document.getElementById("skill").value
    const level = document.getElementById("level").value
    userList[employee].competenceUser[skill].level = level
    console.log(userList)
}

function addSkill() {
    const employee = document.getElementById("employee").value
    const nameSkill = document.getElementById("inputNameSkill").value
    if (employee == '') {
        document.getElementById("demo").innerHTML = 'Inserisci dipendente'
    } else if (nameSkill != '') {
        userList[employee].competenceUser.push(nameSkill)
        document.getElementById("demo").innerHTML = nameSkill + ' aggiunto.'
        console.log(userList)
    } else {
        document.getElementById("demo").innerHTML = 'Inserisci competenza'
    }
}