var express = require('express');

var app = express();
app.set('view engine', 'ejs');

//app.use('/assets', express.static('assets'));
//app.use('/assets', express.static('assets'));
//app.use(express.static('assets'));
app.get('assets/style.css',(res,req)=> {
    res.sendFile(__dirname + 'assets/style.css')
})


app.get('/', function(req,res)
{
    res.render('index');

});
app.get('/contact', function (req, res) {
    res.render('contact');

});

app.get('/about', function(req,res)
{

    res.render('index');
});

app.get('/profile/:name', function(req,res){

    var data = {age: 29, job : 'ninja', hobby: ['eating', 'drinking', 'travelling']};

    var location = {place: 'America', neighbor: 'Bob'};

    var family = {quantity: 5, maritalstat: 'Y'};

    var living = {house: 'big', floors: 5};
res.render('profile', {person: req.params.name, data: data, boom: location, mar:family, living:living });


})


app.listen(3000);

