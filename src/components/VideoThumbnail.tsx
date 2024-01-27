import { useEffect, useRef } from "react";

const VideoThumbnail = ({
    imageUrl,
    src,
    url,
    title,
    subTitle,
    description = "",
    aspectRatio = "4/3",
}) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out ">
                <video
                    ref={videoRef}
                    src={src}
                    loop
                    muted
                    className={`transition-transform duration-300 ease-in-out aspect-[${aspectRatio}] object-cover w-full`}
                />
                <div className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 flex">
                    <div className="absolute inset-0 bg-black bg-opacity-70" />
                    <div className="z-10 p-8 text-light">
                        {imageUrl !== "" && (
                            <img
                                src={imageUrl}
                                alt="LOGO"
                                className="w-12 h-12 mb-2"
                            />
                        )}
                        <div className="text-gray-100 text-xl">{title}</div>
                        <div className="text-gray-300 font-normal text-sm">
                            {subTitle}
                        </div>
                        <div className="text-gray-300 font-normal text-sm">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default VideoThumbnail;
