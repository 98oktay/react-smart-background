import React from "react";

export default ({image, lowImage, blur, fill, alt, className, direction = "auto", edge, children, style}) => {
    const smallImage = lowImage ? lowImage : image;
    let coverStyle = {};
    if (typeof blur === "number") {
        coverStyle = {
            ...coverStyle,
            filter: `blur(${blur}px)`
        };
    }
    if (typeof fill === "string") {
        coverStyle = {
            ...coverStyle,
            background: fill
        };
    } else {
        coverStyle = {
            ...coverStyle,
            backgroundImage: `url('${smallImage}')`
        };
    }
    if (typeof edge === "number") {
        coverStyle = {
            ...coverStyle,
            left: edge * -1,
            right: edge * -1,
            top: edge * -1,
            bottom: edge * -1
        };
    }

    const classNames = ["smartBackground-background", `smartBackground-${direction}`, className].join(' ');
    return (
        <div className={classNames} style={style}>
            <div className="smartBackground-containImage" style={{backgroundImage: `url('${image}')`}}/>
            <div className="smartBackground-blurBackground">
                <div className="smartBackground-coverImage" style={coverStyle}/>
            </div>
            <img alt={alt} className="smartBackground-image-placeholder" src={smallImage}/>
            {children}
        </div>
    )
};
