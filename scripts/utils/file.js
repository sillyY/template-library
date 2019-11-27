const path = require('path')
const file = {} 

file.homeDir = function() {
    return path.join(__dirname, '../../libs')
}