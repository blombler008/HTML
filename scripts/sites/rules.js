//consts (basic requirements)
const CtFN = require('../Functions/getCodeToFileName');
const errorPage = require('./render404');
var exportsItems = {};
exportsItems.load = function(req, res){
    if(req.query.p){
        test = '/images/rules/maps/' + req.query.p + '.png';
        res.render('rules', { title: 'Le Infinitá Network', background: test});
    }else{
        test = '/images/rules/maps/ttt_bb_teenroom_b2.png';
        res.render('rules', { title: 'Le Infinitá Network', background: test});
    }
    
}
module.exports = exportsItems;