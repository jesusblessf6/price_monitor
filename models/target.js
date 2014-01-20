var conn = require('./db').conn;

function Target(target){
	this.url = target.url;
	this.updated = target.updated;
};

module.exports = Target;

Target.prototype.save = function(){
	
};