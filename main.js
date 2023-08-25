
class Circle{
	
	constructor(radius){
		
		this.radius = radius;
		
	}
	


get area(){
	
	return this.findArea;
	
}


get findArea(){
	
	return Math.PI * this.radius * this.radius;
	
}

}


findArea=new Circle(5);

console.log(findArea.area);
		