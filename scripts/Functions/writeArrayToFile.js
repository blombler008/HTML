var exportsItems = {};
exportsItems.writeArrayToFile = function(sPath, fileOne, arrayFile) {
    fs.writeFile(sPath + fileOne, arrayFile, function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
}
module.exports = exportsItems;