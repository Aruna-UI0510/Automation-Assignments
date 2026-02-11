//1.Temperature of a city in degrees Celsius: 25.5 
let temp:number =25.5
console.log(temp)

//2.Whether a customer has placed an order: true or false 
let isOrderPlaced:boolean = true
console.log(isOrderPlaced)

//3. Person's phone number: "123-456-7890"
let personNumber:string="123-456-7890"
console.log(personNumber)

//4. Amount of money in a customer's bank account: 1000.50 
let bankAmount:number=1000.50 

//5.Person's email address: "john.doe@example.com
let PersonEmailID:string="john.doe@example.com"

//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194 
interface base{
    latitude:number,
    longitude:number
}

let obj:base ={
    latitude:37.7749,
    longitude:-122.4194
}

console.log(obj)

//7. Person's marital status: true or false
let personMaritalStatus:boolean =true
console.log(personMaritalStatus)

//8.Person's occupation: "Software Engineer" 
let personOccupation:string="Software Engineer"
console.log(personOccupation)



//9. Person's favourite colour: "Blue" 
let personfavColor:string="Bule"
console.log(personfavColor)


//10.Current year: 2023 
let currentYear:number=2023
console.log(currentYear)

//11.Number of followers on a social media platform: 
let followersCount:string="1,000,000"
console.log(followersCount)

//Rating of a movie: 7.5
 let movieRating:number=7.5
 console.log(movieRating)


//13.Person's blood type: 'A'
const personblood:string='o+ve'
console.log(personblood)

//14.Title of a book: "To Kill a Mockingbird" 
let bookName:string= "To Kill a Mockingbird"
console.log(bookName)

//15.Number of employees in a company: 500 
let empCount:number=500
console.log(empCount)

//16.Time of an event: 2:30 PM 
let eventTime:string ="2:30 PM"
console.log(eventTime)

//17.Name of a country: "United States" 
let country:string="United States"
console.log(country)

//18.Person's eye color: "Brown" 
let personEyeColor:string= "Brown"
console.log(personEyeColor) 

//19.Person's birthplace: "New York City" 
let personBithPlace:string="New York City"
console.log(personBithPlace)

//20. Distance between two cities: 200.5
let distance:number=200.5
console.log(distance)

//using object to combine person records
interface personTemplates
{
    phoneNumber:string,
    EyeColor:string,
    birthPlace:string,
    bloodGroup:string,
    occupation:string,
    emailId:string,
    maritalStatus:boolean,
    favColor:string
}

const personRecord:personTemplates={

    phoneNumber:"123-4567-900",
    EyeColor:"Orange",
    birthPlace:"srirangam",
    bloodGroup:"0+ve",
    occupation:"QA Automation",
    emailId:"aruna2gmailcom",
    maritalStatus:true,
    favColor:"blue"


}

console.log(personRecord)


