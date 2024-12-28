const Home = () => {
    return (
        <header className="flex items-center text-center p-6 bg-blue-100 h-screen">
            <img
                id="profile-photo"
                className="min-w-44 max-w-md h-auto rounded-full mb-4"
                src="/profilePhoto.jpg"
                alt="profile-photo"
            />
            <div className="text-left pl-4">
                <h1 className="text-3xl font-medium mb-2">Hello, I am</h1>
                <h1 className="text-7xl font-bold">Charity Rymbai,</h1>
                <div className="mt-4 text-xl">
                    a driven mechanical engineering student. While my academic focus lies
                    in mechanical engineering, my passion for technology extends beyond
                    traditional boundaries.
                </div>
            </div>
        </header>
  );
}

export default Home;