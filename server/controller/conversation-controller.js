import Conversation from "../model/conversation.js";

export const newconversation=async (req,res)=>{
 try {
     let senderId=req.body.senderId;
     let receiverId=req.body.receiverId;
   ////databse main senderID and ReceiverID ko store karenge

   let exist=await Conversation.findOne({members:{$all:[senderId,receiverId]}})
   if(exist){
       res.status(200).json("sender receiver id alraedy exist");
       return;
   }
   const newconversationdata=new Conversation({
       members:[senderId,receiverId],
    
   })
    console.log( newconversationdata);
     await newconversationdata.save();
    
     res.status(200).json('new conversation added successfully')
 } catch (error) {
     res.status(500).json(error);
 }
}

export const getConversation=async(req,res)=>{
    try {
       
        const conversation= await Conversation.findOne({members:{$all:[req.body.sender,req.body.receiver]}})
  
        res.status(200).json(conversation);
    } catch (error) {
        res.status(500).json(error);
    }
}