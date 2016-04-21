var mylogger={
	log:function(req, res, next){
		console.log('Date:'+new Date().toString()+' request:'+req.method+' '+req.originalUrl);
		next();
	},

};
module.exports=mylogger;
