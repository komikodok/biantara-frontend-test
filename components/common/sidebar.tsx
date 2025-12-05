"use client"

import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { useState } from "react"
import { useSidebar, SidebarContext } from "@/contexts/sidebar-context"

function Root({
    ...props
} : React.ComponentProps<"div">) {
    const [openSidebar, setOpenSidebar] = useState<boolean>(true)

    return (
        <SidebarContext.Provider value={{ openSidebar, setOpenSidebar }}>
            <div
                {...props}
                className={cn(
                    "w-screen h-screen overflow-x-hidden",
                    props.className
                )}
            >
                {props.children}
            </div>
        </SidebarContext.Provider>
    )
}

function Sidebar({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <aside className="">
            {children}
        </aside>
    )
}

function SidebarTrigger({
    asChild,
    ...props
} : React.ComponentProps<"button"> & {
    asChild?: boolean
}) {
    const { openSidebar, setOpenSidebar } = useSidebar()
    const Comp = asChild ? Slot : "button"
    return (
        <Comp 
            {...props}
            onClick={() => setOpenSidebar(!openSidebar)}
            className={cn(
                "w-8 h-8 flex justify-center bg-background items-center rounded-lg",
                props.className
            )}
        >
            {props.children}
        </Comp>
    )
}

function SidebarHeader({
    children,
    ...props
} : React.ComponentProps<"header">) {
    return (
        <header 
            {...props}
            className={cn(
                "flex px-1 gap-2 w-full h-fit",
                props.className
            )}
        >
            {children}
        </header>
    )
}

function SidebarBody({
    ...props
} : React.ComponentProps<"div">) {
    const { openSidebar } = useSidebar()
    
    return (
        <div
            {...props}
            className={cn(
                "w-64 fixed left-0 inset-y-0 transition-transform z-50",
                openSidebar ? "translate-x-0" : "-translate-x-full",
                props.className
            )}
        >
            {props.children}
        </div>
    )
}

function Window({
    children,
    ...props
} : React.ComponentProps<"div">) {
    const { openSidebar } = useSidebar()

    return (
        <main 
            {...props}
            className={cn(
                "w-full h-full",
                openSidebar ? "md:pl-64" : "pl-0",
                props.className
            )}
        >
            {children}
        </main>
    )
}

function Header({
    children,
    ...props
} : React.ComponentProps<"header">) {
    return (
        <header 
            {...props}
            className={cn(
                "flex px-1 gap-2 w-full h-fit",
                props.className
            )}
        >
            {children}
        </header>
    )
}

function Body({
    children,
    ...props
} : React.ComponentProps<"div">) {
    return (
        <div
            {...props}
            className={cn(
                "w-full h-full relative flex-1",
                props.className
            )}
        >
            {children}
        </div>
    )
}

export {
    Root,
    Sidebar,
    SidebarTrigger,
    SidebarHeader,
    SidebarBody,
    Window,
    Header,
    Body
}