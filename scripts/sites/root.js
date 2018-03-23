//consts (basic requirements)
const genId = require('../Functions/makeId');
const sPath = require('path');
const fs = require('fs');
//export
var exportsItems = {};
//function
exportsItems.load = function(req, res, _Path, _Array){
    const pathS = _Path + '/src/video/';
    fs.readdir(pathS, function (err, items) {
        for (var i in items) {
            /* Pops out the names of the video files
            *  itemNew will be createt and splits every item of the array into 
            *  2 parts so its easy to get the file name of the actual file ...
            */
            var itemNew = items[i].split('.');
            var fileExt = itemNew.pop();
            var fileName = itemNew.pop();
            if (_Array[i]) {
            } else {
                _Array.push([genId.makeId(), fileName, fileExt]);
            }
        }
        var hostnameX = req.protocol + '://' + req.get('host');
        res.render('index', { title: 'Hey!', textList: _Array, URL: "http://"+req.hostname+":8087" ,homeURL: hostnameX});
    });
}
//finish code
module.exports = exportsItems;