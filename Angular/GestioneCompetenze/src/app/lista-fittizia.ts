
import { Dipendente } from './dipendenti-inteface';

 export const DIPENDENTI: Dipendente[] = [
    {
        userName: "Mario",
        userSurname: "Rossi",
        id:1,
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
        userName: "Franco",
        userSurname: "Verdi",
        id:2,
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
    },
    {
        userName: "Paolo",
        userSurname: "Bianchi",
        id:3,
        competenceUser: [
            {
                nameComp: 'Phyton',
                area: 'linguaggi programmazione',
                level: 1
            },
            {
                nameComp: 'iOS',
                area: 'Sistemi operativi',
                level: 1
            }
        ]
    },
];
