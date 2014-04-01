
/*
 * GET home page.
 */



//exports.index = function(req, res){
//  res.render('index', { title: 'Express' });
//};

module.exports = function(app){
	app.get("/", function(req, res){
		res.render('index', { title: 'Express' });
	});

	app.get("/myItems", function(req, res){
		res.render('myItems', {title : '我关注的商品'});
	});
};