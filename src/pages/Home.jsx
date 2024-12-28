import { profile } from "../../public/images";

const Home = () => {
    return (
        <header className="pt-[100px] flex flex-col md:flex-row items-center text-center p-6 bg-blue-100 h-screen">
            <img
                id="profile-photo"
                className="w-96 h-auto rounded-full mb-4"
                src={profile}
                alt="profile-photo"
            />
            <div className="md:text-left pl-4">
                <h1 className="text-xl sm:text-3xl font-medium mb-2">Hello, I am</h1>
                <h1 className="text-3xl sm:text-7xl font-bold">Charity Rymbai,</h1>
                <div className="mt-4 text-lg sm:text-xl">
                    a driven mechanical engineering student. While my academic focus lies
                    in mechanical engineering, my passion for technology extends beyond
                    traditional boundaries.
                </div>
            </div>
        </header>
  );
}

export default Home;