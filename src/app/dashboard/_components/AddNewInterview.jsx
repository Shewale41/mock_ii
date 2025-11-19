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

function AddNewInterview() {
    const [openDialog,setOpenDialog]=useState(false);
  return (<>
    <div>
       <div onClick={()=>setOpenDialog(true)} className='border-dashed border-2 border-gray-400 rounded-lg flex flex-col justify-center items-center h-40 cursor-pointer hover:border-primary hover:text-primary transition-all'>
        <h2 className='font-bold text-xl' >+ Add New Interview</h2>
       </div>
       <Dialog open={openDialog}>
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
        <div>
            <Button variant="ghost" onClick={()=>{setOpenDialog(false)}} >Cancel</Button>
            <Button>Start Inteerview</Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
  </>
    
  )
}

export default AddNewInterview
