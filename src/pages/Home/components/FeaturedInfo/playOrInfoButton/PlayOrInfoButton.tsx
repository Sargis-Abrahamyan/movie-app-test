import * as React from "react";
import clsx from "clsx";

import playIcon from '../../../../../assets/icons/play.svg'
import styles from './playOrInfoButton.module.css';

type ButtonType = "play" | "more info";
type Variant = "moreInfoButton" | "playButton";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: Variant
    text: ButtonType
}

const PlayOrInfoButton = ({text, variant, ...rest}: ButtonProps): React.JSX.Element => {
    return (
        <button className={clsx(styles.baseButton, styles[variant])} {...rest}>
            {variant === "playButton" && (
                <img src={playIcon} alt="play" width={24} height={24}/>
            )}
            {text}
        </button>
    );
};

export default PlayOrInfoButton;