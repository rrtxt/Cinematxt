'use client'

import { ReactNode, useState } from "react"

type ValidFunction = (param1 : number, param2 : boolean) => boolean

const Seat = ({id, onChange, isOccupied} : {id : number, onChange : ValidFunction, isOccupied : boolean}) => {
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const [isAvailable, setIsAvailable] = useState<boolean>(true)
    const [isValid, setIsValid] = useState<boolean>(true)

    const toggleSelected = async () => {
        if(isOccupied) return

        const newIsSelected = !isSelected;
      
        // setIsSelected(newIsSelected);
        const valid : boolean = onChange(id, isSelected); // Invoke onChange with new isSelected value
        setIsValid(valid); // Update isValid state with the returned valid value
        if (valid) {
          setIsSelected(newIsSelected);
        }
        else{
            alert('You can only order up to 6 seats')
        }
      };

    const number : ReactNode = <h3 className="">{id}</h3>

    return (
        <div>
            {isOccupied? (
                <div> 
                    <div className="w-14 h-20 bg-gray-600 rounded-md flex justify-center items-center">
                        {number}
                    </div>
                </div>
            ) : (
                <div onChange={() => onChange}>
                    {isSelected? 
                        <div onClick={toggleSelected} className="w-14 h-20 bg-yellow-500 rounded-md flex justify-center items-center">
                            {number}
                        </div> : 
                        <div onClick={toggleSelected} className="w-14 h-20 bg-blue-500 hover:bg-blue-700 rounded-md flex justify-center items-center">
                            {number}
                        </div>}
                </div>
            )}
        </div>
    )
}

export default Seat