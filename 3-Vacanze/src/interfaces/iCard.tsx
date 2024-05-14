export interface iCard {
    titolo: string,
    descrizione: string, 
    durata: string, 
    img: string, 
    prezzo: number, 
    next: () => void, 
    prev: () => void
}