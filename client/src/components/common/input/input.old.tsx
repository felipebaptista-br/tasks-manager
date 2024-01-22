import { ReactNode } from "react"

interface RootProps {
    children: React.ReactNode
}

export function Root({ children }: RootProps) {
    return (
        <div>{children}</div>
    )
}