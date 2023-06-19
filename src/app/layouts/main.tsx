import { ReactNode } from "react"
import Navbar from "../components/navbar"

type MainLayoutProps = {
    children : ReactNode
}

const MainLayout = ({children} : MainLayoutProps) => {
    return <div>
        <Navbar/>
        <main>
            {children}
        </main>
    </div>
}

export default MainLayout