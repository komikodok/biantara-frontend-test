"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { ChevronDown, Check } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { usePracticeType } from "@/contexts/practice-type-context"

const PracticeTypeSelector = () => {
    const [ openDropdown, setOpenDropdown ] = useState<boolean>(false)
    const { practiceType, setPracticeType } = usePracticeType()
    
    return (
        <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
            <DropdownMenuTrigger asChild>
                <Button className="!outline-none cursor-pointer flex items-center justify-center w-6 h-6 scale-80 bg-emerald-500 hover:bg-emerald-700 rounded-full">
                    <ChevronDown 
                        className={cn(
                            "size-4 text-white transition-transform duration-300",
                            openDropdown && "rotate-180"
                        )}
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Button 
                        onClick={() => setPracticeType("IELTS")}
                        className="flex w-full !bg-white !p-0 justify-between items-center font-medium text-slate-950 hover:!text-emerald-500"
                    >
                        IELTS
                        <Check 
                            className={cn(
                                "size-3 stroke-4 stroke-emerald-500",
                                practiceType === "IELTS" ? "opacity-100" : "opacity-0"
                            )}
                        />
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Button 
                        onClick={() => setPracticeType("TOEIC")}
                        className="flex w-full !bg-white !p-0 justify-between items-center font-medium text-slate-950 hover:!text-emerald-500"
                    >
                        TOEIC
                        <Check 
                            className={cn(
                                "size-3 stroke-4 stroke-emerald-500",
                                practiceType === "TOEIC" ? "opacity-100" : "opacity-0"
                            )}
                        />
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Button 
                        onClick={() => setPracticeType("TOEFL")}
                        className="flex w-full !bg-white !p-0 justify-between items-center font-medium text-slate-950 hover:!text-emerald-500"
                    >
                        TOEFL
                        <Check 
                            className={cn(
                                "size-3 stroke-4 stroke-emerald-500",
                                practiceType === "TOEFL" ? "opacity-100" : "opacity-0"
                            )}
                        />
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default PracticeTypeSelector
