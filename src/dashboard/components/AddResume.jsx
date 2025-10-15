import { Loader, Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

const AddResume = ({data, setData}) => {
  
  const [openDialouge, setOpenDialouge] = useState(false);
  const [resumeTitle, setResumeTitle] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userName, setUserName] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const onCreate = () => {
    setLoading(true);
    const uuid = uuidv4();
    const newResume = {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: userEmail,
        userName: userName,
      }
    setData(prevData => [...prevData, newResume]); // <-- Append new data
    console.log([...data, newResume]); // Shows updated array
    setLoading(false);
    setOpenDialouge(false);
    setResumeTitle('');
    setUserEmail('');
    setUserName('');
    navigate(`/dashboard/resume/${uuid}/edit`);
  }
  
  return (
    <div>
      <div
        className="p-14 py-24 border flex items-center 
        justify-center bg-secondary rounded-lg h-[280px] 
        hover:scale-105 transition-all hover:shadow-md 
        cursor-pointer border-dashed"
        onClick={() => setOpenDialouge(true) }
      >
        <PlusSquare />
      </div>
      
      <Dialog open={openDialouge}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new Resume</DialogTitle>
            <DialogDescription>
              Add Title For Your New Resume
              <Input onChange = {(e) => setUserName(e.target.value)} className="mt-2 mb-2" placeholder="Name"/>
              <Input onChange = {(e) => setUserEmail(e.target.value)} className="mt-2 mb-2" placeholder="Email Address"/>
              <Input onChange = {(e) => setResumeTitle(e.target.value)} className="mt-2 mb-2" placeholder="Eg :- Full Stack Developer"/>
            </DialogDescription>
            <div className="flex justify-end items-center gap-5">
                <Button onClick={() => setOpenDialouge(false)} variant="ghost">Cancel</Button>
                <Button
                 disabled={!resumeTitle || loading}
                 onClick={() => onCreate()}>
                  {loading ? <Loader2 className="animate-spin" /> : "create"}
                </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default AddResume;
