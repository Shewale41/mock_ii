"use client"
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function AddNewInterview() {
    const [openDialog,setOpenDialog]=useState(false);
    const [jobRole,setJobRole]=useState('');
    const [jobDesc,setJobDesc]=useState('');
    const [experience,setExperience]=useState('');

    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(jobDesc,jobRole,experience)
    }

  return (<>
    <div>
       <div onClick={()=>setOpenDialog(true)} className='border-dashed border-2 border-gray-400 rounded-lg flex flex-col justify-center items-center h-40 cursor-pointer hover:border-primary hover:text-primary transition-all'>
        <h2 className='font-bold text-xl' >+ Add New Interview</h2>
       </div>
       <Dialog open={openDialog}>
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>tell us little about</DialogTitle>
      <form onSubmit={onSubmit}>
      <div>
        <h2>describe job pos,exp,skills</h2>

        <div>
        <label>Job role/pos</label>
        <Input placeholder="Ex.Java Developer" required 
         onChange={(event)=>setJobRole(event.target.value)}  />
        </div>  

        <div>
        <label>job description/tech skills</label>
        <Textarea placeholder="Ex.tech skills" required
        onChange={(event)=>setJobDesc(event.target.value)} />
        </div>

        <div>
        <label>Years of experience </label>
        <Input placeholder="Ex.3+ years" type="number" max="57" required 
        onChange={(event)=>setExperience(event.target.value)} />
        </div>
      </div>  
        <div>
            <Button type="button" variant="ghost" onClick={()=>{setOpenDialog(false)}} >Cancel</Button>
            <Button type="submit">Start Inteerview</Button>
        </div>
        </form>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
  </>
    
  )
}

export default AddNewInterview
