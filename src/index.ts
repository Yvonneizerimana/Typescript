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



