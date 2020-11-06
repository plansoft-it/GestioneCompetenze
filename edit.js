var dipendenti=[
    { 
        nome: "mario rossi",
        competenzeAssociate: [
            {
                nome: 'java',
                area: 'linguaggi programmazione',
                livello: 'base'
            },
            {
                nome: 'Linux',
                area: 'Sistemi operativi',
                livello: 'intermedio'
            }
        ]
        },
        { 
        nome: "franco verdi",
        competenzeAssociate: [
            {
                nome: 'js',
                area: 'linguaggi programmazione',
                livello: 'avanzato'
            },
            {
                nome: 'Windows',
                area: 'Sistemi operativi',
                livello: 'base'
            }
        ]
    }
]
var tempLivelli=['base', 'intermedio', 'avanzato']

for(let i=0;i<dipendenti.length;i++){
    document.getElementById("employee").innerHTML+='<option value='+i+'>'+dipendenti[i].nome+'</option>'
}

function showArea(){
    document.getElementById("area").innerHTML='<option value="" selected="selected" disabled="disabled">Seleziona Area di Competenze</option>'
    var employee=document.getElementById("employee").value
    for(let i=0;i<dipendenti[employee].competenzeAssociate.length;i++){
        document.getElementById("area").innerHTML+='<option value='+i+'>'+dipendenti[employee].competenzeAssociate[i].area+'</option>'
    }
}

function showSkill(){
    document.getElementById("skill").innerHTML='<option value="" selected="selected" disabled="disabled">Seleziona Competenza</option>'
    var employee=document.getElementById("employee").value
    var area=document.getElementById("area").value
    for(let i=0;i<dipendenti[employee].competenzeAssociate.length;i++){
        if(dipendenti[employee].competenzeAssociate[i].area==dipendenti[employee].competenzeAssociate[area].area){
            document.getElementById("skill").innerHTML+='<option value='+i+'>'+dipendenti[employee].competenzeAssociate[i].nome+'</option>'
        }
    }
}
/*
function showSkillnoArea(){
    document.getElementById("skill").innerHTML='<option value="" selected="selected" disabled="disabled">Seleziona Competenza</option>'
    var employee=document.getElementById("employee").value
    for(let i=0;i<dipendenti[employee].competenzeAssociate.length;i++){
        document.getElementById("skill").innerHTML+='<option value='+i+'>'+dipendenti[employee].competenzeAssociate[i].nome+'</option>'
    }
}
*/
function addEmployee(){
    var nomeEmp=document.getElementById("nomeEmp").value
    if(nomeEmp!=''){
        dipendenti.push(nomeEmp)
        document.getElementById("demo").innerHTML=nomeEmp+' aggiunto.'
        console.log(dipendenti)
    }else{
        document.getElementById("demo").innerHTML='Inserisci nome e cognome'
    }    
}

function showSkillLvl(){
    var employee=document.getElementById("employee").value
    var skill=document.getElementById("skill").value
    document.getElementById("text").innerHTML=dipendenti[employee].competenzeAssociate[skill].nome+' - livello: '

    document.getElementById("level").removeAttribute("hidden")
    
    var level=dipendenti[employee].competenzeAssociate[skill].livello
    document.getElementById("level").innerHTML='<option disabled="disabled">Seleziona nuovo Livello</option>'
    document.getElementById("level").innerHTML+='<option id="base" value="base">Base</option>'
    document.getElementById("level").innerHTML+='<option id="intermedio" value="intermedio">Intermedio</option>'        //temporaneo
    document.getElementById("level").innerHTML+='<option id="avanzato" value="avanzato">Avanzato</option>'
    switch(level){
        case 'base':
            document.getElementById("base").setAttribute("selected","selected")
            document.getElementById("base").setAttribute("disabled", "disabled")
            break
        case 'intermedio':
            document.getElementById("intermedio").setAttribute("selected","selected")
            document.getElementById("intermedio").setAttribute("disabled", "disabled")
            break
        case 'avanzato':
            document.getElementById("avanzato").setAttribute("selected","selected")
            document.getElementById("avanzato").setAttribute("disabled", "disabled")
            break
    }
    document.getElementById("confermaModSkill").removeAttribute("hidden")
}

function modifySkill(){
    var employee=document.getElementById("employee").value
    var skill=document.getElementById("skill").value
    var level=document.getElementById("level").value
    dipendenti[employee].competenzeAssociate[skill].livello=level
    console.log(dipendenti)
}

function addSkill(){
    var employee=document.getElementById("employee").value
    var nomeSkill=document.getElementById("nomeSkill").value
    if(employee==''){
        document.getElementById("demo").innerHTML='Inserisci dipendente'
    }else if(nomeSkill!=''){
        dipendenti[employee].competenzeAssociate.push(nomeSkill)
        document.getElementById("demo").innerHTML=nomeSkill+' aggiunto.'
        console.log(dipendenti)
    }else{
        document.getElementById("demo").innerHTML='Inserisci competenza'
    }    
}