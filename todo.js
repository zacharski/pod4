const express = require('express');
var Pool = require('pg').Pool;
var bodyParser = require('body-parser');


const app = express();
var config = {
	host: 'localhost',
	user: 'todoperson',
	password: '2GL2n1ptvHmlPXs',
	database: 'life',
};

var pool = new Pool(config);

app.set('port', (8080));
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api', async (req, res) => {
	try {
		var response = await pool.query('select * from todo');
		console.log(JSON.stringify(response.rows));
		res.json (response.rows);
	}
	catch(e) {
		console.error('Error running query ' + e);
	}


});

app.post('/api', async (req, res) => {
	console.log(req.body);
	var item = req.body.item;
	var priority = req.body.priority;
	if (!item || !priority){
		res.json({error: 'parameters not given'});
	}
	else {
		try {
			var response = await pool.query('insert into todo values ($1, $2)', [item, priority]);
			res.json({status: 'inserted'});
		}
		catch(e){
			console.log('Error running insert', e);
		}
	}

});

app.delete('/api', async (req, res) => {
	console.log(req.body);
	var item = req.body.item;
	var priority = req.body.priority;
	if (!item || !priority){
		res.json({error: 'parameters not given'});
	}
	else {
		try {
			var response = await pool.query('delete from todo where task = $1 and priority = $2', [item, priority]);
			res.json({status: 'deleted'});
		}
		catch(e){
			console.log('Error running delete', e);
		}
	}

});



app.listen(app.get('port'), () => {
	console.log('Running');









}) 