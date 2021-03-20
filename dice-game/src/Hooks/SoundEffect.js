import useSound from 'use-sound';
import Disabled from "./sounds/disable-sound.mp3";
import pop from "./sounds/pop.mp3";
import popUpOn from "./sounds/pop-up-on.mp3";
import sewitch from "./sounds/switch-on.mp3";

const DisabledSound = props => {
    const [play] = useSound(Disabled);
    return <div onClick={play}>{props.children}</div>;
};

const Switch = props => {
    const [play] = useSound(sewitch);
    return <div onClick={play}>{props.children}</div>;
}

const PopUpOn = props => {
    const [play] = useSound(popUpOn);
    return <div onClick={play}>{props.children}</div>;
}

const Pop = props => {
    const [play] = useSound(pop);
    return <div onClick={play}>{props.children}</div>;
}

export {DisabledSound, Switch, PopUpOn, Pop}