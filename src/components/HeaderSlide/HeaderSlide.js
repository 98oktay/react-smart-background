import React from "react";
import SmartBackground from "../SmartBackground";
import './style.scss';

export default ({game}) => {
    const {
        headerImage,
        headerImageLow,
        provider,
        title,
        description,
        playUrl
    } = game;
    return <div className="headerSlide">
        <SmartBackground className="headerSlide-background" image={headerImage} lowImage={headerImageLow}>
            <div className="headerSlide-content">
                <div className="headerSlide-container">
                    <h5 className="headerSlide-provider">{provider}</h5>
                    <h6 className="headerSlide-title">{title}</h6>
                    <p className="headerSlide-description">{description}</p>
                    <a className="headerSlide-button" href={playUrl}>ŞİMDİ OYNA</a>
                </div>
            </div>
        </SmartBackground>
    </div>
}
