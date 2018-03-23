//consts (basic requirements)
var exportsItems = {};
exportsItems.load = function(req,res){
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    var hostnameX = req.protocol + '://' + req.get('host');
    res.status(404).render('404', { title:'404: Not Found',error:'Error:',errorMassage:'404: Not Found', url:fullUrl, hostnameB:hostnameX,hostnameA:req.hostname});
} 
module.exports = exportsItems;