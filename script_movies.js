// Create a class name Movie
class Movie{
    constructor(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
// setter to set the rating = PG if rating not given
set rate(flimRating)
{
    if(this.rating==undefined)
    {
        // console.log("inside");
        // flimRating="PG";
        this.rating=flimRating;
    }
}
// getter to get the specific array with rating =PG
getmovie()
{
    if(this.rating =="PG")
    {
return `title: ${this.title} 
studio: ${this.studio}
rating:${this.rating}
`;
    }
}
}

var m1= new Movie("Casino Royale","Eon Productions","PG­13");
var m2 = new Movie("Harry Potter","Warner Bros");
var m3 = new Movie("Wonder Women","Disney");
// calling the setter
m3.rate="PG";
m2.rate="PG";
console.log(m2.getmovie());
console.log(m3.getmovie());



