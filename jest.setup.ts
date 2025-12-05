import "@testing-library/jest-dom"

jest.mock("next/navigation", () => ({
    __esModule: true,
    useRouter: jest.fn(() => ({
        push: jest.fn(),
        replace: jest.fn()
    })),
    useParams: jest.fn(() => ({}))
}))