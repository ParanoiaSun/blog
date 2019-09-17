const mongoose = require('mongoose');
const message = mongoose.model('message');

exports.addMessages = (name, content) => {
  let newMessage = new message({
     name: name,
     send_time: Date.now(),
     is_deleted: 0,
     content: content
  });

  newMessage.save(function (err, data) {
      if(err) {
          return err;
      }
      return data;
  }).then;
};