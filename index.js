var express = require('express');

var app = express();

var stormpath = require('express-stormpath');

console.log("The server has started");

app.use(stormpath.init(app, {
	expand: {
		customData: true,
	},
	web: {
		produces: ['application/json']
	}
}))

app.get('/notes', function(req, res) {
	res.json({notes: req.user.customData.notes || "This is your notebook. Edit this to start saving your notes!."})
})

app.listen(3000);