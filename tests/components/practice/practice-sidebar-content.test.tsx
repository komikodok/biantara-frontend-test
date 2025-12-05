import { act, fireEvent, render, screen } from "@testing-library/react"
import PracticeSidebarContent from "@/components/practice/practice-sidebar-content"
import { useParams, useRouter } from "next/navigation"


const replaceMock = jest.fn()

describe("PracticeSidebarContent", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test("should render", async () => {
        render(<PracticeSidebarContent />)
        
        const practiceItems = await screen.findAllByTestId("practice-items")

        expect(practiceItems).toHaveLength(9)
    })

    test("should be redirect to practice page when practice item is clicked", async () => {
        ;(useRouter as jest.Mock).mockReturnValue({
            replace: replaceMock,
        })
        
        render(<PracticeSidebarContent />)

        const practiceItems = await screen.findAllByTestId("practice-items")
        
        await act(async () => {
            fireEvent.click(practiceItems[0])
        })

        expect(replaceMock).toHaveBeenCalledWith('/practice/1')

    })

    test("should be render with params id 1", () => {
        ;(useParams as jest.Mock).mockReturnValue({ id: "1" })
        
        render(<PracticeSidebarContent />)
        
        const practiceItem = screen.getByText("Practice 1")

        expect(practiceItem).toBeInTheDocument()
    })
})