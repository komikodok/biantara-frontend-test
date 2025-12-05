"use client"

import { PracticeHeader } from "@/components/practice/practice-header"
import { PracticeContent } from "@/components/practice/practice-content"
import { PracticeTypeContext } from "@/contexts/practice-type-context"
import { useState } from "react"

const PracticePage = () => {
    const [ practiceType, setPracticeType ] = useState<"IELTS" | "TOEIC" | "TOEFL">("IELTS")
    return (
        <PracticeTypeContext.Provider value={{ practiceType, setPracticeType }}>
            <PracticeHeader />
            <PracticeContent />
        </PracticeTypeContext.Provider>
    )
}

export default PracticePage
