import React from 'react';
import s from './ChangeTimeBlock.module.scss'
import {ItemTime} from "./itemTime/ItemTime";
import {useDispatch} from "react-redux";
import {setChangeTimeAC} from "../../../../../store/ticketsReducer";

type ChangeTimeBlockPropsTime = {
    id: string
    activeTime: string[]
}


export const ChangeTimeBlock: React.FC<ChangeTimeBlockPropsTime> = ({id, activeTime}) => {
    const dispatch = useDispatch()

    const variantTime = [['09:20', '11:05'], ['10:20', '12:05'], ['11:20', '13:05']]

    const changeTimeHandler = (time: string[]) => {
        dispatch(setChangeTimeAC(time, id))
    }

    return (
        <div className={s.timeBlock}>
            {
                variantTime.map(e => <ItemTime key={e[0]} time={e} activeTime={activeTime} changeTime={changeTimeHandler}/>)
            }
        </div>
    );
};
