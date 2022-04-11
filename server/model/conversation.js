import mongoose from "mongoose";

const conversationSchema =new mongoose.Schema({
  members:{
      type:Array,
  }},
  {
    timestamps: true
  }
)

const Conversation=mongoose.model('conversation-1',conversationSchema);
export default Conversation;