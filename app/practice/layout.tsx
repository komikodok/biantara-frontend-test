"use client"

import {
    Root,
    Sidebar,
    SidebarBody,
    Window,
    Body,
} from "@/components/common/sidebar"
import PracticeSidebarHeader from "@/components/practice/practice-sidebar-header"
import PracticeSidebarContent from "@/components/practice/practice-sidebar-content"

function PracticeLayout({
  children,
} : {
  children: React.ReactNode
}) {

  return (
    <Root className="">
      <Sidebar>
        <SidebarBody className="bg-gray-950">
            <div className="w-[80%] mx-auto">
                <PracticeSidebarHeader />
                <PracticeSidebarContent />
            </div>
        </SidebarBody>
      </Sidebar>

      <Window>
        <Body>
          {children}
        </Body>
      </Window>
    </Root>
  )
}

export default PracticeLayout