'use client'

import { ReactNode, useState } from "react"
import { toast } from "react-hot-toast"

type ValidFunction = (param1 : number, param2 : boolean) => boolean

const Seat = ({id, onChange} : {id : number, onChange : ValidFunction}) => {
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const [isValid, setIsValid] = useState<boolean>(true)

    const toggleSelected = async () => {
        const newIsSelected = !isSelected;
      
        // setIsSelected(newIsSelected);
        const valid : boolean = onChange(id, isSelected); // Invoke onChange with new isSelected value
        setIsValid(valid); // Update isValid state with the returned valid value
        if (valid) {
          setIsSelected(newIsSelected);
        }
        else{
            toast.error('You can only order 6 seat')
        }
      };

    const number : ReactNode = <h3 className="">{id}</h3>

    return (
        <div onChange={() => onChange}>
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