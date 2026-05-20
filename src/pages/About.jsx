import {useEffect} from "react";

export const AboutPage = () => {
    useEffect(() => {
        document.title = 'About Page';
    },[])
    return (
        <>
            <main className="about_page_main min-h-screen pt-[18rem]">
                <div className="wrapper">
                    <h1 className="font-black capitalize text-[64px]">about page</h1>
                </div>
            </main>
        </>
    )
}