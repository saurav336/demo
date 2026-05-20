import {useEffect} from "react";

export const HomePage = () => {
    useEffect(() => {
        document.title = "No.1 Leading Tech Company In Nepal";
    }, [])
    return (
        <>
            <main className="capitalize flex min-h-dvh pt-[18rem]">
                <div
                    className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="max-w-3xl mx-auto">
                    <h1 className="capitalize font-bold text-center">#1 institute for it learning</h1>
                    <div className="text-[64px] text-center font-black leading-tight">
                        <p>where your <span className="text-[#1da077]">courage</span></p>
                    </div>
                    <div className="text-[64px] text-center mb-4 font-black leading-tight">
                        <p>Meets Opportunities</p>
                    </div>
                    <div className="text-[24px] leading-[130%] mb-10 text-center normal-case max-w-2xl mx-auto">
                        <p>Learn the skills that define your path. Your passion is your power—let’s shape it into a
                            future you'll love.

                        </p>
                    </div>
                    <div className="text-center mb-4">
                        <p className="text-sm">Guided by mentors who turn "I can't" into "Watch me do this!”</p>

                    </div>

                </div>
            </main>


        </>
    )
}