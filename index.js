var request = require('request');
var cheerio = require('cheerio');

exports.scrap = function(amount, from, to) {
	let link = 'http://www.xe.com/currencyconverter/convert/?Amount=' + amount + '&From=' + from.toUpperCase() + '&To=' + to.toUpperCase();
	request(link, function(err, resp, body){
	    if(!err & resp.statusCode == 200) {
	        const $ = cheerio.load(body);
	        const total = $('span.uccResultAmount').text();
	        
	        console.log(amount.toString() + ' ' + from.toUpperCase() + ' > ' + to.toUpperCase() + ' = ' + total + ' ' + to.toString().toUpperCase())
	    }
	})
}
