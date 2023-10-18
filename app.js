//i just want the mess console to be cleared when i do nodemon blah blah
// it could lead to some error or bad practice but I still want to do it XD
console.clear()

const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate');
const port = 3000; //just messing with the port option cuz i don't wanna hard code  XD

//acquiring the Campground model to use it in this express app
const Campground = require('./models/campground')
const { error } = require('console')

//connecting mongo databse here through mongoose
mongoose.connect('mongodb://127.0.0.1:27017/yelpCamp')
    .then(res=>{
        console.log("Successfully Connected to the database!")
    })
    .catch(err =>{
        console.log(`Oops! couldn't login due to the error: ${err}`)
    })

//setting view engine and paths
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/campgrounds', async (req, res )=>{
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', {campgrounds});
})

app.get('/campgrounds/new', async(req, res)=>{
    res.render('campgrounds/new')
})

app.post('/campgrounds', async (req, res)=>{

    const {location, title, price, desc} = req.body;
    Campground.insertMany({location, title, price, desc})
    res.redirect('/campgrounds')
})

app.get('/campgrounds/:id', async (req, res)=>{
    const{id}=req.params;
    // console.log(id)
    // console.log(typeof(id))
    await Campground.findById(id).then(
        resp=>{
            const reqObject = resp;
            res.render('campgrounds/details', {reqObject})
    })
    .catch(err=>{res.send('not found')})
})

app.get('/campgrounds/:id/edit', async(req, res)=>{
    const{id}=req.params;
    await Campground.findById(id).then(
        resp=>{
            const reqObject = resp;
            res.render('campgrounds/edit', {reqObject})
    })
    .catch(err=>{res.send('not found')})
})

app.put('/campgrounds/:id', async (req, res)=>{
    const {id} = req.params;
    const update = req.body;
    // console.log(req.body)
    await Campground.findByIdAndUpdate(id, update )
    res.redirect('/campgrounds')
})

app.delete('/campgrounds/:id', async (req, res)=>{
    const {id} = req.params;
    await Campground.findByIdAndDelete(id)
    res.redirect('/campgrounds')
})







app.listen(port, ()=>{
    console.log(`Listening at port ${port}`)
})