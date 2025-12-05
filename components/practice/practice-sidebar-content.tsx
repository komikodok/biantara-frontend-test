"use client"

import { cn } from "@/lib/utils"
import { ScrollArea } from "../ui/scroll-area"
import { useRouter, useParams } from "next/navigation"

const PracticeSidebarContent = () => {
    const router = useRouter()
    const params = useParams()
    
    return (
        <div className="mt-6 space-y-4">
            <h2 className='text-white/50 text-xs'>PREMIUM</h2>
            <ScrollArea className='w-full h-82'>
                <ul className="space-y-4">
                    {Array.from({ length: 9 }).map((_, index) => {
                        index += 1

                        return (
                            <li 
                                data-testid="practice-items"
                                key={index}
                                className={cn(
                                    'cursor-pointer hover:bg-white/10 rounded-full flex gap-2 items-center px-2 py-3',
                                    Number(params.id) === index && "bg-white/10 border border-white"
                                )}
                                onClick={() => router.replace(`/practice/${index}`)}
                            >
                                <div className='w-[11px] h-[11px] border-3 border-white rounded-full'></div>
                                <h3 className='text-[11px] text-slate-300'>Practice { index }</h3>
                            </li>
                        )
                    })}
                </ul>
            </ScrollArea>
        </div>
    )
}

export default PracticeSidebarContent
