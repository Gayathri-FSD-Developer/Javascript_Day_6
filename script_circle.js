class Circle{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
getRadius(){
    return `radius: ${this.radius}`;
}
set Radius(updateRadius){
    this.radius=updateRadius;
} 
getColor(){
return `color: ${this.color}`;
}
set Color(updateColor){
    this.color=updateColor;
}
toString()
{
   var colr=this.color.toString()
   var rad= this.radius.toString();
return `color= ${colr} radius =${rad}`;
}
getArea()
{
    // area formula 
    return [3.14 * this.radius] ;
    
}
getCircumstance()
{
    return [2*3.14*this.radius];
}
}
var c1= new Circle(1,"red");
c1.Color="black";
c1.Radius= 2.0;
console.log(c1);
console.log(c1.toString());
console.log(c1.getArea());
console.log(c1.getCircumstance());
