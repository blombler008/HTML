var exportsItems = {};
exportsItems.makeId = function() {
    var sText = "";
    var sPossible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 10; i++){
        sText += sPossible.charAt(Math.floor(Math.random() * sPossible.length));
    }
    return sText;
}
module.exports = exportsItems;