import axios from "axios";
import React, { useState } from "react";
import "./notes.css";
import Notecard from "./notecard";
import Notemodal from "../Modal/noteModal";
import {
  Grid,
  GridItem,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { LoadingSkeleton } from "./loadingSkeleton";
export const Notes = () => {
  const [editable, setEditable ] = useState(false);
  const [noteData, setnoteData] = useState({});
  // const [singlenoteData,setsinglenoteData] = useState({})
  const toast = useToast();
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setnotesData] = useState([]);
  const getNotes = async () => {
    try {
      const data = await axios.get(`https://rich-pink-crown.cyclic.app/notes`);
      const notesData = data.data;
      setnotesData(notesData.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };
  const handleNotesData = (e) => {
    setnoteData({ ...noteData, [e.target.name]: e.target.value });
  };
  console.log(noteData);
  const handlenoteReq = async () => {
    try {
      setLoading(true);
      const data = await axios.post(
        `https://rich-pink-crown.cyclic.app/notes/addnotes`,
        noteData
      );
      console.log(data.data.msg);
      getNotes();
      setLoading(false);
      toast({
        title: "Note has been added.",
        position: "top",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
    onClose();
  };

  // handleUpdate

  const handleUpdate = async (id) => {
    const res = await axios.get(
      `https://rich-pink-crown.cyclic.app/notes/${id}`
    );
    const noteData = res.data.data
    // console.log(noteData)
    setnoteData(noteData)
    setEditable(true)
    // setsinglenoteData(noteData)
    onOpen()
  };
  const handleupdateReq = async(id)=>{
    try {
      const res = await axios.patch(`https://rich-pink-crown.cyclic.app/notes/updatenote/${id}`,noteData)
      const msg = res.data.msg
      console.log(msg)
      onClose()
      getNotes()
      setEditable(false)
      setnoteData({})
    } catch (error) {
      console.log(error)
    }
  }
  // for deleting the code
  const handleDelete = async(id)=>{
    console.log(id)
    try {
      const res = await axios.delete(`https://rich-pink-crown.cyclic.app/notes/deletenote/${id}`)
      const msg = res.data.msg
      getNotes()
      console.log(msg)
      toast({
        title: "Note has been deleted.",
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error)
    }
  }
  useState(() => {
    console.log("hi");
    getNotes();
  }, [handlenoteReq, getNotes]);
  return (
    <div className="notes">
      All your Notes
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {!loading ? (
          data?.map((el) => (
            <GridItem key={el._id}>
              <Notecard
                title={el.title}
                subject={el.subject}
                body={el.body}
                id={el._id}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
              />
            </GridItem>
          ))
        ) : (
          <LoadingSkeleton />
        )}
      </Grid>
      <div
        className="plus_button"
        onClick={()=>{
          setEditable(false)
          setnoteData({})
          onOpen()
        }}
        style={{ cursor: "pointer" }}
      >
        <span>+</span>
      </div>
      {editable ? (
        <Notemodal
          onClose={onClose}
          isOpen={isOpen}
          handleNotesData={handleNotesData}
          handlenoteReq={handlenoteReq}
          data={noteData}
          editable={editable}
          handleupdateReq={handleupdateReq}
        />
      ) : (
        <Notemodal
          onClose={onClose}
          isOpen={isOpen}
          handleNotesData={handleNotesData}
          handlenoteReq={handlenoteReq}
        />
      )}
    </div>
  );
};
