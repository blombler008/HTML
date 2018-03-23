var functions = {};
functions.crawl = function (port, rootPath) {
    //vars
        //own functions
            const rootPage = require('./sites/root');
            const watchPage = require('./sites/watch');
            const errorPage = require('./sites/render404');
            const rules = require('./sites/rules');
            
        //installed functions
            const express = require('express');
        //standard functions
            const fs = require('fs');
            const sPath = require('path');
        //arrays
            var textArray = [];
            var idsMade = [];
    //server start
        var app = express();
        app.use(express.static('src'));
    //app SET
        app.set('view engine', 'pug');
        app.set('views', rootPath + '/src/views');
    //app GET
        //home Dir
            app.get('/', function (req, res) {
                rootPage.load(req, res, rootPath, textArray)
            });
        //rules
            app.get('/rules/loading', function(req, res){
                rules.load(req, res);
            });

        //watch Dir
            app.get('/watch/:textId?', function (req, res) {
                watchPage.load(req, res, textArray);
            }); 
        //error Dir
        app.get('/:iD?/*?', function (req, res) {
            errorPage.load(req, res)
        });
    //app USE
        app.listen(port);
}
module.exports = functions;