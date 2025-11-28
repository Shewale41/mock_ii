"use client"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '../../../components/ui/button';

function Header() {

   const path=usePathname();
   useEffect(()=>{
    console.log("Current path:",path);
   },[]);
  return (

    <div className="flex p-4 items-center justify-between bg-secondary shadow-md">
      <Image src={'/logo.svg'} width={160} height={100} alt='logo' />
      <ul className="flex gap-6">
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard'   &&'text-primary front-bold'} `}> Dashboard</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions'   &&'text-primary front-bold'} `}>Questions</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade'   &&'text-primary front-bold'} `}>Upgrade</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/how'   &&'text-primary front-bold'} `}>how it works?</li>
      </ul>
      <Button>Sign In</Button>
    </div>
  );
}

export default Header;