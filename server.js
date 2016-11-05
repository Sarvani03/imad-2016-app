var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;


var config = {
  host: 'db.imad.hasura-app.io',
  user: 'sarvani03',
  password: process.emv-DBPASSWORD,
  database: 'sarvani03',
  port:'5432'
};


var app = express();
app.use(morgan('combined'));

var article = {
    'article-one':{
    title:'Article one made by sarvani',
    heading:'aArticle One',
    date:'Sept 5 2016',
    content:`
            <p>
                hi this is sarvanihi this is sarvani hi this is sarvani hi this is sarvani
            </p>
            <p>
                this is my 1st article
            </p>
            <p>
                hi friends
            </p> `
    },
    'article-two':{
        title:'Article two made by sarvani',
    heading:'aArticle two',
    date:'Sept 5 2016',
    content:`
            <p>
                hi this is sarvanihi this is sarvani hi this is sarvani hi this is sarvani
            </p>
            <p>
                this is my second article
            </p>
            <p>
                how r u all
            </p> `
    },
    'article-three':{
        title:'Article three made by sarvani',
    heading:'aArticle three',
    date:'Sept 5 2016',
    content:`
            <p>
                hi this is sarvanihi this is sarvani hi this is sarvani hi this is sarvani
            </p>
            <p>
                this is my third article
            </p>`
           
    }
};

function createTemplate (data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmpTemplate=
    `
    <html>
    <head>
        <title>
           ${title}
        </title>
        <meta name="viewport" content="width-device width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class="container" >
           <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </body>
</html>`;
return htmlTemplate;
}
    
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});


app.get('/:articleName', function (req, res) {
   var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articleTwo.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articleThree.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool = new Pool(config);
app.get('/test_db',function(req,res){
 //make a select request
 //return a response with the results
 pool.query('select * from test',function(err,result){
    if(err){
        res.status(500).send(err.toString());
    } else{
        res.send(JSON.stringyfy(result));
    }
 });
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
