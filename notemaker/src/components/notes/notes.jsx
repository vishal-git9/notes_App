import axios from 'axios'
import React, { useState } from 'react'
import "./notes.css"
import Notecard from './notecard'
import Notemodal from '../Modal/noteModal'
import { useDisclosure } from '@chakra-ui/react'
import { LoadingSkeleton } from './loadingSkeleton'
export const Notes = () => {
  const [noteData,setnoteData] = useState({})
  const [loading,setLoading] = useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data,setnotesData] = useState([])
  const getNotes = async()=>{
    try {
      const data = await axios.get(`https://rich-pink-crown.cyclic.app/notes`)
      const notesData = data.data
      setnotesData(notesData.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(true)
    }
  }
  const handleNotesData = (e)=>{
    setnoteData({...noteData,[e.target.name]:e.target.value})
  }
console.log(noteData)
const handlenoteReq = async()=>{
    try {
        const data = await axios.post(`https://rich-pink-crown.cyclic.app/notes/addnotes`,noteData)
        console.log(data.data.msg)
    } catch (error) {
        console.log(error)
    }
    onClose()
}
  useState(()=>{
    console.log("hi")
    getNotes()
  },[handlenoteReq,getNotes])
  return (
    <div className='notes'>
      All your Notes
      {!loading?data?.map((el)=>  <Notecard key={el._id} title={el.title} subject={el.subject} body={el.body}/>):<LoadingSkeleton/>}
    <div className='plus_button' onClick={onOpen} style={{cursor:"pointer"}}><span>+</span></div>
    <Notemodal onClose={onClose} isOpen={isOpen} handleNotesData={handleNotesData} handlenoteReq={handlenoteReq}/>
    </div>
  )
}
