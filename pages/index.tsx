import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="flex w-full h-screen overflow-hidden">
            <div
                className="mx-auto"
                style={{
                    maxWidth: "100%",
                    height: "100vh",
                    aspectRatio: "3/4",
                    backgroundImage: `url("/people.jpg")`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="flex py-20 px-5">
                    <div className="mx-auto">
                        <div className="mb-5 flex justify-center">
                            <img src="/logo-full.png" style={{ width: 200 }} />
                        </div>
                        <div>
                            <h1 className="text-7xl text-black">
                                Cooming Soon
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
