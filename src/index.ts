//array of number  and string
const numbers:Array<number|string>=['1',2,3,4,]
console.log(numbers)

//array of date
const date:Date[]=[]
date.push(new Date())
console.log(date)

//assignability
let spooky=true
spooky=false
console.log(spooky)

//comparing objects types
interface Skeleton{
    spooky:boolean,
    scary:boolean
}

let ourFunction=(sky1:Skeleton)=>{
    console.log(sky1.spooky?'spooky':'not spooky')
    console.log(sky1.scary?'scary':'not scary')
}
ourFunction({spooky:true,scary:false})

//typescript classes

class car{
    carName=''
    public carColor=''
    protected carBrand=''
    private carLocation=''
    // #carPlaque=''
    
}

class derivered extends car{
    setCar(){
        this.carName
        this.carColor
        this.carBrand
        // this.carLocation
        // this.carPlaque

    }
  

}

const car1=new derivered()
car1.carName
car1.carColor
// car1.carBrand
// car1.carLocation
// car1.carPlaque

//functions
const func=(numbers:number, location?:string) =>{
    console.log(`${numbers}`)
    if(location){
        console.log(`${location}`)
    }

}

func(10,'kigali')
func(2)

//return types

const retunExample=(something:string)=>{
    switch(Math.floor(Math.random()*5)){
        case 0:
            return 'ange'
            case 1:
                return 'susa'
                case 2:
                    return 'knot'
                    default:
                    return 'something'
    }

   
}
console.log(retunExample('trying'))

//fibonacci

const fiboExample=(i:number):number=>{
    if(i<=1){
        return i
    }
 return fiboExample(i-1)+fiboExample(i-2);
}
console.log(fiboExample(4))


//type any

let a:any='yvonne'
a=12
a=67
console.log(a)

//readonly on array

let array:string[]=["yvonne","ange"]
array.push('kabaka')

let head:string=array[2]
console.log(head)

//tuple array

let myExample:[number,boolean,string]=[10,true,"yvonne"]
console.log(myExample)

//optional properties

let carry:{type:string,name:string,age?:number}={
    type:'sport',
    name:'bmw'
}
console.log(carry)

//enum

enum cardinalDirections{
   North=1,
   South=2,
   East,
   West

}

console.log(cardinalDirections.West)

//type aliases

type carName=string
type carType=string
type carPlaque=number
type cari={
    plaque:carPlaque,
    type:carType,
    name:carName
}


const nameOfCar:carName="BMW"
const typeOfCar:carType="bwiza"
const plaqueOfCar:carPlaque=89642
const allDetailsOfCar:cari={
      plaque:plaqueOfCar,
    type:typeOfCar,
    name:nameOfCar
}

console.log(allDetailsOfCar)

//interfaces

interface Rectangle{
    height:number,
    width:number

}
const rectangle:Rectangle={
    height:10,
    width:5
}

console.log(rectangle)

//extending interfaces

interface coloredRectangle extends Rectangle{
    color:string
}

const Colored:coloredRectangle={
    height:10,
    width:5,
    color:'blue'
}

console.log(Colored)

//union type
function age(yourage:number|string){
    console.log(`your age: ${yourage}`)
}
age(42)
age('my age is 42')


//functions

const address=(streetNumber:number, location?:string) =>{
    console.log(`${streetNumber}`)
    if(location){
        console.log(`${location}`)
    } 
}
address(10,'kigali')

const addition=(a:number,b:number,c:string)=>{
  return c+ (a + b)
}
console.log(addition(2,3,'the sum of two numbers is '))

//rest parameters

const add=(a:number,b:number,...rest:number[])=>{
    return a+b+rest.reduce((p,c)=>p+c, 0);
}
console.log(add(2,3,4,5,6));

//casting with as
const numbering:unknown="heyyvonne"
console.log((numbering as string).length)

//casting with <>
const num:unknown="hey"
console.log((<string>num).length)

//classes

class School{
   public schoolName:string
   public schoolLocation:string

   public constructor(name:string, location:string){
    this.schoolName=name
    this.schoolLocation=location
   }

   public getSchoolDetails(){
    return `the schoolName is ${this.schoolName}, Location is ${this.schoolLocation}`
  
   }

}

const obj1=new School("APEKI TUMBS TVET SCHOOL","Rulindo District")

console.log(obj1.getSchoolDetails())

//generic basis

function createPair<S,T>(v1:S,v2:T):[S,T]{
return [v1,v2]
}

console.log(createPair<number,number>(5,5))

console.log(createPair<string,number>("Yvonne IZERIMANA",23))

//partial utility type

interface point{
    x:number,
    y:number
}

const changePoint:Partial<point>={}
changePoint.x=10

console.log(changePoint)

//required utility type

interface classMembers{
    name:string
    age:number
    location?:string
}

const requiredy:Required<classMembers>={
    name:"MACIBIRI",
    age:20,
    location:"huye"
}

console.log(requiredy)

//record utility type

const mine:Record<string,number>={
    "mummy":30,
    "shami":60
}
console.log(mine)

//omit utility type
interface om{
    name:string,
    age:number,
    location:string
}
const omitExample:Omit<om,'name'|'location'>={
    age:20
}
console.log(omitExample)

//pick utility type

const pickExample:Pick<om,'name'>={
    name:"MACIBIRI"
}
console.log(pickExample)
