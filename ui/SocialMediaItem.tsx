import React from "react";

interface ISocialMediaItemProps {
    icon: React.ReactNode;
    link: string;
}

const SocialMediaItem = ({ icon, link }: ISocialMediaItemProps) => {
    return (
        <div>
            <a href={link} target="_blank">
                {icon}
            </a>
        </div>
    );
};

export default SocialMediaItem;
