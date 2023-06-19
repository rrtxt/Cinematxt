import Navbar from "../component/navbar";

export default function Home(){
    
    return (
        <div className="text-center">
            <Navbar/>
        </div>
    );
};

const MyButton = () => {
  return <button className="bg-indigo-500 rounded-md px-2">Click this!!!</button>;
};
//   export default Home;
