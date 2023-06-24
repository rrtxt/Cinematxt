'use client'

import Movie from "@/app/models/movie";
import Seat from "@/app/components/seat";
import { useState } from "react";

const SeatSelection = ({movie} : {movie : Movie|null}) => {
    const [selectedSeat, setSelectedSeat] = useState<number[]>([])
    // const [isValid, setIsValid] = useState<boolean>(true)
    const data = Array.from({ length: 64 }, (_, index) => ({ id: index + 1, seatNumber: `${index + 1}` }));

    const addSeat = (seat: number): boolean => {
        let newIsValid = true; // Initialize newIsValid as true
      
        if (!selectedSeat.includes(seat)) {
          const newSelectedSeat = [...selectedSeat, seat];
          
          if (newSelectedSeat.length <= 6) {
            setSelectedSeat(newSelectedSeat);
          } else {
            newIsValid = false; // Update newIsValid as false if seat limit exceeded
            // alert('You can select up to 6 seats.');
          }
        }
      // Update isValid state with newIsValid
        return newIsValid; // Return newIsValid value
      };
    const removeSeat = (seat : number) => {
        const updatedSeat = selectedSeat.filter((s) => s !== seat)
        setSelectedSeat(updatedSeat)
    }

    const handleChange = (id : number, isSelected : boolean) : boolean => {
        // console.log(`Seat number ${id} is taken : ${isSelected}`)
        let valid = true
        if(isSelected){
            valid = true
            removeSeat(id)
        }
        else{
            valid = addSeat(id)
        }
        return valid
    }

    const handleSubmit = () => {
        console.log(selectedSeat)
    }

    const rows = 8; // Number of rows
    const cols = 8; // Number of columns
  
    return (
        <div className="flex flex-col items-center md:flex-row md:items-start sm:justify-center gap-10 my-5">
            <div>
              {Array(rows)
                .fill(0)
                .map((_, rowIndex) => (
                  <div key={rowIndex} className="flex flex-row gap-3">
                    {data.slice(rowIndex * cols, rowIndex * cols + cols).map((item) => (
                      <div key={item.id} className="flex flex-col mb-3">
                       <Seat onChange={handleChange} id={item.id}/> 
                      </div>
                    ))}
                  </div>
                ))}
            </div>
            <div className="bg-slate-500 w-72 sm:w-80 h-32 rounded-md p-3 flex flex-col justify-between">
                <span>Qty: {selectedSeat.length}</span>
                <div className="flex flex-col">
                    <div className="text-sm text-gray-300">Price: {movie?.ticket_price}</div>
                    <div className="mt-5">
                        <div onClick={handleSubmit} className=" bg-yellow-400 p-2 text-black rounded-md hover:text-white hover:bg-yellow-500">Buy Ticket</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeatSelection