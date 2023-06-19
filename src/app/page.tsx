import MainLayout from "./layouts/main";
import Image from "next/image";

const HomePage = () => {
    return <div>
        <MainLayout>
            <HomeContent></HomeContent>
        </MainLayout>
    </div>
};

const HomeContent = () => {
    return <div className="flex items-center justify-evenly flex-col mx-20 my-10">
        <div className="flex gap-5">
            <Image
                src="/poster1.jpg"
                alt="Vercel Logo"
                width={200}
                height={30}
            />
            <Image
                src="/poster2.jpeg"
                alt="Vercel Logo"
                width={200}
                height={30}
            />
            <Image
                src="/poster3.jpg"
                alt="Vercel Logo"
                width={200}
                height={30}
            />
        </div>
        <p className="text-center xl:mx-80 mt-10 md:mx-20 sm:mx-2">
            CinemaTxt is a web platform designed to provide a seamless ticket purchasing experience for movie enthusiasts. 
            With CinemaTxt, users can easily browse the latest movie releases, view showtimes, and conveniently purchase tickets online. 
            Our user-friendly interface allows customers to select their preferred seats, choose from various ticket options, and securely complete their transactions. 
            Whether its a blockbuster premiere or an indie film screening, CinemaTxt ensures that moviegoers can effortlessly secure their seats and enjoy a memorable cinematic experience
        </p>
        <a href="/movies" className="mt-5">
          <span className=" bg-yellow-400 p-2 text-black rounded-md hover:text-white hover:bg-yellow-500">Buy Ticket Now</span>
        </a>
    </div>
}

export default HomePage
