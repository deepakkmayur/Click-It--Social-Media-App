import ChatModel from "../Modals/ChatModal.js";


export const createChat = async (req, res) => {

    let isMemberExist

    const existingChat = await ChatModel.find()

    existingChat.map((chat) => {
        if (chat.members.includes(req.body.userId) && chat.members.includes(req.body.personId)) {
            isMemberExist = true
            console.log("included");
        } else {
            isMemberExist = false
            console.log("not included");

        }
    })

    if (isMemberExist) return

    const newChat = new ChatModel(
        {
            members: [req.body.userId, req.body.personId],
        }
    );
    try {
        const result = await newChat.save()
        console.log("created");
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json(error)
    }
}


export const userChats = async (req, res) => {

    try {
        const chat = await ChatModel.find({
            members: { $in: [req.params.userId] }
        })

        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error)


    }
}


export const findChat = async (req, res) => {
    try {
        const chat = await ChatModel.findOne({
            members: { $all: [req.params.firstId, req.params.secondId] }
        })
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error)

    }
}