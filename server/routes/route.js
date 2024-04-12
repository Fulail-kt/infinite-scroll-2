import express from 'express'
import axios from 'axios'
const routes=express.Router()



routes.get('/getUsers',async(req,res)=>{
    const {page}=req.query
    try {
    const response =await axios.get(`https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`)
    const data = response?.data?.nodes || [];
    return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({message:'server error'})
    }
})


export default routes