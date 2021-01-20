const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  
emai:{  
    type: String,
    required: True
},

password:{  
    type: String,
    required: True
},

date:{  
    type: Date,
    default: Date.now
}

})

const User = mongoose.model('User',UserSchema)

module.exports = User