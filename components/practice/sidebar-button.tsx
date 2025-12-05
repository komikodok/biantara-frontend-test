import {
    SidebarTrigger
} from "@/components/common/sidebar"
import { Menu } from "lucide-react"

const SidebarButton = () => {
    return (
        <SidebarTrigger className="md:hidden w-10 h-10 fixed bottom-12 right-12 rounded-full bg-black">
            <Menu className="stroke-white size-5"/>
        </SidebarTrigger>
    )
}

export default SidebarButton
