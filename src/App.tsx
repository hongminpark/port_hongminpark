//@ts-nocheck
import { useRef, useState } from "react";
import VideoThumbnail from "./components/VideoThumbnail";

function App() {
    const [selected, setSelected] = useState("ART_PROJECT");
    const artProjectRef = useRef(null);
    const appsRef = useRef(null);
    const startupIdeasRef = useRef(null);
    const workExperienceRef = useRef(null);

    const handleClick = (name) => {
        setSelected(name);
        let ref;
        if (name === "ART_PROJECT") ref = artProjectRef;
        if (name === "APPS") ref = appsRef;
        if (name === "STARTUP_IDEAS") ref = startupIdeasRef;
        if (name === "WORK_EXPERIENCE") ref = workExperienceRef;

        ref?.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex flex-col  h-screen w-screen text-xs text-neutral-900">
            <nav className="flex flex-col justify-between px-4 py-2 border-b border-black gap-1">
                <div>
                    <a
                        href="#"
                        className="text-6xl tracking-tighter font-medium"
                    >
                        HONGMIN PARK
                    </a>
                </div>
                <div className="text-base flex flex-row gap-2">
                    <a
                        href="https://disquiet.io/@objet_dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        DISQUIET
                    </a>
                    <a
                        href="https://read.cv/hmpark"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        READ.CV
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hongmin-park-969a44115/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LINKEDIN
                    </a>
                    <a
                        href="https://www.instagram.com/hongmin_park/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        INSTAGRAM
                    </a>
                </div>
            </nav>
            <div className="flex-grow overflow-auto">
                <div className="flex h-full">
                    <div className="w-1/5 h-full flex flex-col text-lg tracking-tighter ">
                        <div
                            onClick={() => handleClick("ART_PROJECT")}
                            className={`cursor-pointer border-b border-black py-2 px-4 transition-all duration-240 ${
                                selected === "ART_PROJECT" ? "border-r-4" : ""
                            }`}
                        >
                            ART PROJECT
                        </div>
                        <div
                            onClick={() => handleClick("APPS")}
                            className={`cursor-pointer border-b border-black py-2 px-4 transition-all duration-240 ${
                                selected === "APPS" ? "border-r-4" : ""
                            }`}
                        >
                            APPS
                        </div>
                        <div
                            onClick={() => handleClick("STARTUP_IDEAS")}
                            className={`cursor-pointer border-b border-black py-2 px-4 transition-all duration-240 ${
                                selected === "STARTUP_IDEAS" ? "border-r-4" : ""
                            }`}
                        >
                            IDEAS
                        </div>
                        <div
                            onClick={() => handleClick("WORK_EXPERIENCE")}
                            className={`cursor-pointer border-b border-black py-2 px-4 transition-all duration-240 ${
                                selected === "WORK_EXPERIENCE"
                                    ? "border-r-4"
                                    : ""
                            }`}
                        >
                            WORK EXPERIENCE
                        </div>
                    </div>
                    <div className="w-px bg-black h-full" />
                    <div className="w-4/5 h-full overflow-y-auto flex flex-col gap-8">
                        <div
                            ref={artProjectRef}
                            className="grid grid-cols-2 gap-1 p-1"
                        >
                            <VideoThumbnail
                                src="/backstage.mp4"
                                url={"https://backstage-ai.vercel.app/"}
                                title={"BACKSTAGE"}
                                subTitle={
                                    "GENERATIVE AI • STABLE DIFFUSION • WEB"
                                }
                                aspectRatio={"9/16"}
                                imageUrl={
                                    "https://backstage-ai.vercel.app/favicon.ico"
                                }
                            />
                            <VideoThumbnail
                                src="/genai_person.mp4"
                                url={""}
                                title={"GENERATIVE AI / PORTRAIT"}
                                subTitle={
                                    "GENERATIVE AI • STABLE DIFFUSION • ANIMATEDIFF"
                                }
                                imageUrl={""}
                                aspectRatio="1/1"
                            />
                            <VideoThumbnail
                                src="/genai_abstract.mp4"
                                url={""}
                                title={"GENERATIVE AI / ABSTRACT"}
                                subTitle={
                                    "GENERATIVE AI • STABLE DIFFUSION • ANIMATEDIFF"
                                }
                                imageUrl={""}
                                aspectRatio="1/1"
                            />
                            <VideoThumbnail
                                src="/genai_flower.mp4"
                                url={""}
                                title={"GENERATIVE AI / ABSTRACT"}
                                subTitle={
                                    "GENERATIVE AI • STABLE DIFFUSION • ANIMATEDIFF"
                                }
                                imageUrl={""}
                            />
                            <VideoThumbnail
                                src="/jjirasi.mp4"
                                url={"https://jjirasi.vercel.app/"}
                                title={"JJIRASI"}
                                subTitle={
                                    "WEB PROJECT • AI • SEGMENT ANYTHING • COMPUTER GRAPHICS • OBJECT SEGMENTATION"
                                }
                                imageUrl={
                                    "https://jjirasi.vercel.app/favicon.ico"
                                }
                            />
                            <VideoThumbnail
                                src="/deface.mp4"
                                url={""}
                                title={"DEFACE (JJIRASI PART.2)"}
                                subTitle={"WEB PROJECT • CHROME EXTENSION"}
                                imageUrl={
                                    "https://jjirasi.vercel.app/favicon.ico"
                                }
                            />
                            <VideoThumbnail
                                src="/cliche.mp4"
                                url={"https://cliche-omega.vercel.app/"}
                                title={"CLICHE"}
                                subTitle={
                                    "WEB PROJECT • AI • COMPUTER GRAPHICS • OBJECT SEGMENTATION"
                                }
                                imageUrl={
                                    "https://cliche-omega.vercel.app/favicon.ico"
                                }
                            />
                            <VideoThumbnail
                                src="/salomon.mp4"
                                url={"https://escff-salomon.vercel.app/"}
                                title={"SALOMON"}
                                subTitle={"WEB GAME • 3D • UNITY • BLENDER"}
                                imageUrl={
                                    "https://escff-salomon.vercel.app/TemplateData/favicon.ico"
                                }
                            />
                        </div>
                        <div
                            ref={appsRef}
                            className="grid grid-cols-2 gap-1 p-1"
                        >
                            <VideoThumbnail
                                src="/objet.mp4"
                                url={
                                    "https://apps.apple.com/us/app/id1554606485"
                                }
                                title={"OBJET"}
                                subTitle={"IOS • ANDROID • PHOTO CROP APP"}
                                aspectRatio={"9/16"}
                                imageUrl={"/objet.png"}
                            />
                            <VideoThumbnail
                                src="/riff.mp4"
                                url={
                                    "https://apps.apple.com/ca/app/riff-simple-sticker-maker/id6450873731"
                                }
                                title={"RIFF"}
                                subTitle={
                                    "IOS • PHOTO SEGMENTATION APP • AI IMAGE APP"
                                }
                                aspectRatio={"9/16"}
                                imageUrl={"/riff.png"}
                            />
                        </div>
                        <div
                            ref={startupIdeasRef}
                            className="grid grid-cols-2 gap-1 p-1"
                        >
                            <VideoThumbnail
                                src="/mockup_generator.mp4"
                                url={"https://mockup-generator-chi.vercel.app/"}
                                title={"GENERATIVE AI / MOCKUP GENERATOR"}
                                subTitle={
                                    "GENERATIVE AI • STABLE DIFFUSION • WEB"
                                }
                                imageUrl={""}
                                aspectRatio="1/1"
                            />
                            <VideoThumbnail
                                src="/sofa_configurator.mp4"
                                url={"https://sofa-demo.vercel.app/"}
                                title={"3D SOFA CONFIGURATOR"}
                                subTitle={"3D • THREEJS • WEB"}
                                imageUrl={""}
                            />
                            <VideoThumbnail
                                src="/furniture_configurator.mp4"
                                url={
                                    "https://vitsoe-simulation-eruvmevym-hongminpark.vercel.app/"
                                }
                                title={"3D FURNITURE CONFIGURATOR"}
                                subTitle={"3D • THREEJS • WEB"}
                                imageUrl={""}
                            />
                            <VideoThumbnail
                                src="/glasses_configurator.mp4"
                                url={
                                    "https://breezm-demo-ey10u8y38-hongminpark.vercel.app/"
                                }
                                title={"3D GLASSES CONFIGURATOR"}
                                subTitle={"3D • THREEJS • WEB"}
                                imageUrl={""}
                            />
                        </div>
                        <div
                            ref={workExperienceRef}
                            className="flex flex-col px-4 pb-32 tracking-tight"
                        >
                            <div className="text-3xl font-medium border-b border-black">
                                WORK EXPERIENCE
                            </div>
                            <div className="text-2xl">
                                <div>DISQUIET, 2022-2023</div>
                                <div>NAVER, 2020-2022</div>
                                <div>HYUNDAI AUTOEVER, 2018-2019</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
