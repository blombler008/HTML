//consts (basic requirements)
const CtFN = require('../Functions/getCodeToFileName');
const errorPage = require('./render404');
var exportsItems = {};
exportsItems.load = function(req, res, _Array){
    //ask for is textId pressent
    if(req.params.textId) {
        var enteredID = req.params.textId;
        var getCode0 = CtFN.getCodeToFileName(enteredID, _Array, 0);
        var getCode1 = CtFN.getCodeToFileName(enteredID, _Array, 1);
        //passing the code to show
        if (getCode0 == enteredID) {
            res.render('videoView', { title: 'Hey!', text: enteredID + ' gehoert zu ' + getCode1 });
        } else {
            errorPage.load(req, res);
        }
    }else {
        errorPage.load(req, res);
    }
}
module.exports = exportsItems;