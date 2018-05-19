var fs = require('fs');

module.exports = function (dirpath, extension, callback) {
  var dotExtension = '.' + extension;
  var inputRegExp = new RegExp(dotExtension, 'g');
  
  fs.readdir(dirpath, function(error, items){
    if(error) {
      return callback (error) 
    } else {
      filteredItems = items.filter(function(item){
        if(item.match(inputRegExp)) return true
      })
      return callback(null, filteredItems)
    }
  });
}