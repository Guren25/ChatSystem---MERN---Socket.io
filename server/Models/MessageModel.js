// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const messageSchema = new Schema(
//   {
//     sender: {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//       required: true
//     },
//     recipients: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//       }
//     ],
//     text: {
//       type: String,
//       required: true
//     },
//     media: [
//       {
//         url: {
//           type: String,
//           required: true
//         },
//         type: {
//           type: String,
//           enum: ['image', 'video'],
//           required: true
//         }
//       }
//     ],
//     createdAt: {
//       type: Date,
//       default: Date.now
//     }
//   },
//   { timestamps: true }
// );

// const Message = mongoose.model('Message', messageSchema);

// module.exports = MessageModel;


const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    chatId: String,
    senderId: String,
    text: String
},
{
    timestamps: true
})

const messageModel = mongoose.model("Message", messageSchema)

module.exports = messageModel