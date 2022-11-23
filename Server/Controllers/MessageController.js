import MessageModel from '../Models/messageModal.js'


export const addMessage = async(req,res) =>{
    const {chatId,senderId,text} = req.body;

    const messages = new MessageModel(
        {
            chatId,
            senderId,
            text
        }
    );

    try {
        const result = await messages.save()
        console.log(result);
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}


export const getMessage = async(req,res) =>{
    const {chatId} = req.params;

    try {
        const result = await MessageModel.find({chatId})
        res.status(200).json(result)
    } catch (error) {
         res.status(500).json(error)
    }
}