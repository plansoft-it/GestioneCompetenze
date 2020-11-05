var dipendenti=[
    { 
        nome: "mario rossi",
        competenzeAssociate: [
            {
                nome: 'java',
                area: 'linguaggi programmazione',
                livello: 'buono'
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
                livello: 'ottimo'
            },
            {
                nome: 'Windows',
                area: 'Sistemi operativi',
                livello: 'scarso'
            }
        ]
    }
]
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

function addEmployee(){
    
}