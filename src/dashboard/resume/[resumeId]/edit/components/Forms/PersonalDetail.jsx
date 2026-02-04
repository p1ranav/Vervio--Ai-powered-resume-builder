import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "../../../../../../context/ResumeInfoContext";
import { useContext } from "react";
export const PersonalDetail = ({enabledNext}) => {
    const{resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setResumeInfo({
        ...resumeInfo,
        [name]: value,
    })
  };
  const onSave = (e) => {
    console.log("submitted");
    
    // console.log(resumeInfo);
  }
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p>Get Started with basic information</p>
      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input name="firstName" required onChange={handlechange} />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input name="lastName" required onChange={handlechange} />
          </div>
          <div className="col-span-2 mt-5 gap-3">
            <label className="text-sm">Job Title</label>
            <Input name="jobtitle" required onChange={handlechange} />
          </div>
          <div className="col-span-2 mt-5 gap-3">
            <label className="text-sm">Address</label>
            <Input name="address" required onChange={handlechange} />
          </div>
          <div>
            <label className="text-sm">Phone No</label>
            <Input name="phoneno" required onChange={handlechange} />
          </div>
          <div>
            <label className="text-sm">E-mail</label>
            <Input name="email" required onChange={handlechange} />
          </div>
        </div>
      </form>
      <div className="mt-3">
        <Button type="submit">Save</Button>
      </div>
    </div>
  );
};
