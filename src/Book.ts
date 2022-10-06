export class Book{
    name : String;
    rating : Number;

    constructor(nev: string, rating: number){
        this.name = nev;
        this.rating = rating;
    }

    kiir() : void{
        console.log(this.name, this.rating);
    }

    public set setRating(rating : number){
        if(rating > 10 || rating <1){
            throw new Error("Nem jou");
        }else{
            this.rating = rating;
        }
    }

    public toString() : string {
        return "A könyv neve: " + this.name + " értékelése: " + this.rating;
    }
}