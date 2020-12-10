const users = [
    {
        userName: 'Mario Rossi',
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
        userName: 'Franco Verdi',
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

for (const user of users) {
    document.getElementById('show').innerHTML += `
            <ul>
                <br/>
                <li> Nome e Cognome: ${ user.userName } </li><br/>
                <li> Competenze: <br/>
                ${ printArrayOfObject(user.competenceUser) } </li>
            </ul>
        <br/><br/>
        <hr>`;
}

function clear(element) {
    element.innerHTML='';
}

function printArrayOfObject(arrOfobj) {
    let output = '';
    for (const competence of arrOfobj) {
        output += `
            <br/>
            <ul>
                <li>Competenza Conosciuta: ${ competence.nameComp } </li>
                <li>Area Competenza: ${ competence.area } </li>
                <li>Livello Competenza: ${ competence.level } </li>
            </ul>
            <br/><br/>`;   
    }
    return output;
}