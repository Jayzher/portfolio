export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-primary transition-colors duration-300">
            <div className="text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                    Welcome to My 3D Portfolio
                </h1>
                <p className="text-lg md:text-xl text-primary mb-10">
                    Explore my projects and skills in 3D design and development.
                </p>
                <div className="flex justify-center">
                    <div className="border-2 border-primary w-fit h-fit rounded-xl transition-all duration-300 hover:scale-105 transform">
                        <button
                            type="button"
                            className="px-6 py-3 rounded-lg font-bold text-primary hover:bg-sky-400 hover:text-white transition-all duration-300"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
