var exportsItems = {};
exportsItems.getCodeToFileName = function(_var, _array,_number) {
    for (var i in _array) {
        if (_var == _array[i][0]) {
            return _array[i][_number];
        }
    }
}
module.exports = exportsItems;