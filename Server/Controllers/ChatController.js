import ChatModel from "../Modals/ChatModal.js";


export const createChat = async (req,res) => {
    console.log(req.body);
    const newChat = new ChatModel(
        
        {
            members : [req.body.senderId, req.body.receiverId],
        }
    );

    try {
        const result = await newChat.save()
        res.status(200).json(result)
        
    } catch (error) {
        res.status(500).json(error)
    }
}


export const userChats = async(req,res) => {

    try {
        const chat = await ChatModel.find({
            members : {$in : [req.params.userId]}
        })
        
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error)

        
    }
}


export const findChat = async(req,res) =>{
    try {
        const chat = await ChatModel.findOne({
            members :{$all : [req.params.firstId,req.params.secondId]}
        })
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error)

    }
}