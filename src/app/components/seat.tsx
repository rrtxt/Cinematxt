'use client'

import { ReactNode, useState } from "react"

const Seat = ({id} : {id : number}) => {
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const toggleSelected = () => {
        setIsSelected(!isSelected)
    }

    const number : ReactNode = <h3 className="">{id}</h3>

    return (
        <div>
            {isSelected? 
                <div onClick={toggleSelected} className="w-14 h-20 bg-yellow-500 rounded-md flex justify-center items-center">
                    {number}
                </div> : 
                <div onClick={toggleSelected} className="w-14 h-20 bg-blue-500 hover:bg-blue-700 rounded-md flex justify-center items-center">
                    {number}
                </div>}
        </div>
    )
}

export default Seat