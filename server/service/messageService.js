const mongoose = require('mongoose');
// const message = mongoose.model('message');

// exports.addMessages = (req, res, next) => {
//   let newMessage = new message({
//      name: req.body.name,
//      send_time: Date.now(),
//      is_deleted: 0,
//      content: req.body.content
//   });
//
//   newMessage.save(function (err, data) {
//       if(err) {
//           return res.json({
//               sucesss: 'false',
//               message: err.message
//           });
//       }
//       return res.json({
//           sucesss: 'true',
//           data: data
//       });
//   });
// };