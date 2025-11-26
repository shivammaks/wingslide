class Employee1 {
constructor(private name:string,id:number){}
display():void{
    console.log("name is "+this.name);
}
}
let object=new Employee("shivamma",1);
object.display();