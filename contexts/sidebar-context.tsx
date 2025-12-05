import { createContext, useContext } from "react"

type SidebarContextType = {
    openSidebar: boolean
    setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarContext = createContext<SidebarContextType>({
    openSidebar: false,
    setOpenSidebar: () => {}
})

function useSidebar() {
    const context = useContext(SidebarContext)
    if (context === undefined) {
        throw new Error("useSidebar must be used within a SidebarProvider")
    }
    return context
}

export {
    SidebarContext,
    useSidebar
}