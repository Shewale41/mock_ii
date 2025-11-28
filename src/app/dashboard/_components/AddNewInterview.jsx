"use client"
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { startInterviewSession } from '@/utils/AiModel';
import { useState } from 'react';
import { db } from '../../../../utils/db';
import { MockInterviewSchema } from '../../../../utils/schema';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';


function AddNewInterview() {
    const [openDialog,setOpenDialog]=useState(false);
    const [jobRole,setJobRole]=useState('');
    const [jobDesc,setJobDesc]=useState('');
    const [experience,setExperience]=useState('');
    const [jsonResponse,setJsonResponse]=useState([]);

    const onSubmit=async(e)=>{
        e.preventDefault();
        console.log(jobDesc,jobRole,experience)

        const inputPrompt = 'job role:' +jobRole+ ', job description:' + jobDesc + ', job experience:' + experience + '. based on the job position , job description , job experience give me '+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+' questions and answers of that in json format .Give Question and answer field in Json. ';

        try {

          //ithe te apan call karat aho ai la answer sathi 
            const chatSession = await startInterviewSession();
            const result = await chatSession.sendMessage(inputPrompt);
            const mockJsonResp=(result.response.text()).replace('```json','').replace('```','');
            console.log(mockJsonResp);
            setJsonResponse(mockJsonResp);

          //inserting into db ithe karat aho
          if(mockJsonResp){
            const resp = await db.insert(MockInterviewSchema)
          .values({
            mockId:uuidv4(),
            jsonMockResponse:mockJsonResp,
            jobPosition:jobRole,
            jobDescription:jobDesc,
            jobExperience:experience,
            createdBy:'someone',
            createdAt:moment().format('DD-MM-YYYY')
          }).returning({mockId:MockInterviewSchema.mockId});
          console.log('Inserted interview with mockId:', resp);
          }else{
            console.log("Error");
          }
          

        } catch (error) {
            console.error('Error:', error);
        }

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