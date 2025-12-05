import { createContext, useContext } from "react"

type PracticeTypeContextType = {
    practiceType: "IELTS" | "TOEIC" | "TOEFL"
    setPracticeType: React.Dispatch<React.SetStateAction<"IELTS" | "TOEIC" | "TOEFL">>
}

const PracticeTypeContext = createContext<PracticeTypeContextType>({
    practiceType: "IELTS",
    setPracticeType: () => {}
})

function usePracticeType() {
    const context = useContext(PracticeTypeContext)
    if (context === undefined) {
        throw new Error("usePracticeType must be used within a PracticeTypeProvider")
    }
    return context
}

export {
    PracticeTypeContext,
    usePracticeType
}