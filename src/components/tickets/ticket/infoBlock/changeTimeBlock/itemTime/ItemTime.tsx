import React from 'react';
import s from "./ItemTime.module.scss";

type ItemTimePropsType = {
    time: string[]
    activeTime: string[]
    changeTime: (time: string[]) => void
}

export const ItemTime: React.FC<ItemTimePropsType> = ({time, activeTime, changeTime}) => {
    const active = JSON.stringify(activeTime) === JSON.stringify(time)

    const changeTimeHandler = () => {
        changeTime(time)
    }

    return (
        <div className={active ? s.active : s.item} onClick={changeTimeHandler}>
            <div className={s.big}>
                <span>{time[0]} - </span>
            </div>
            <div className={s.small}>
                <span>{time[1]}</span>
            </div>
        </div>
    );
};

