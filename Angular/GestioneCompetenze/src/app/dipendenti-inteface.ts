export interface Dipendente {
    userName: string;
    competenceUser?:{nameComp: string, area: string, level: number} []    //l ho messo opzionale perchè magari ancora non ha comptenze    
}                                                                          //ricordati sempre il tipo