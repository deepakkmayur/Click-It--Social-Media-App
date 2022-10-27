import PostModal from "./Modals/postModal";

 export const getPost=async (req,res)=>{
   const id=req.params.id
    
  try {
   const post=await PostModal.findById(id)
   res.status(200).json(post)
  } catch (error) {
   res.status(500).json(error)
  }


 }