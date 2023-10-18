//i just want the mess console to be cleared when i do nodemon blah blah
// it could lead to some error or bad practice but I still want to do it XD
console.clear()
const mongoose = require('mongoose')
const port = 3000; //just messing with the portn option cuz i don't wanna hard code  XD
app.use(bodyParser.urlencoded({ extended: true }))

//acquiring the Campground model to use it in this express app

const Campground = require('../models/campground')

//importing the cities and seedHelpers module in the index file to use them for generating entries

const cities = require('./cities')
const seedHelpers = require('./seedHelpers')

//connecting mongo databse here through mongoose
mongoose.connect('mongodb://127.0.0.1:27017/yelpCamp')
    .then(res=>{
        console.log("Successfully Connected to the database!")
    })
    .catch(err =>{
        console.log(`Oops! couldn't login due to the error: ${err}`)
    })

const sample = array =>array[Math.floor(Math.random() * array.length)]

const seeds = async()=>{
    await Campground.deleteMany({});
    for(let i=0; i<51; i++)
    {
        const random1000 = Math.floor(Math.random()*1000)
        const camp = new Campground({
            location:  `${cities[random1000].city, cities[random1000].state}`,
            title: `${sample(seedHelpers.descriptors)}, ${sample(seedHelpers.places)}`,
            price: `${Math.floor(Math.random()*100000)}`
        })
        await camp.save()
    }
}

seeds()