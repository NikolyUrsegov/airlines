import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './SuperInput.module.scss'
import icon from "../../assets/images/calendar.svg";
import iconBlack from "../../assets/images/calendarBlack.svg";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputPropsType = DefaultInputPropsType & {
    type: 'text' | 'date'
    validate: boolean
    error: string | undefined
    title: string
    placeholder?: string
}

export const SuperInput: React.FC<SuperInputPropsType> = ({
                                                              validate,
                                                              error,
                                                              title,
                                                              placeholder,
                                                              type,
                                                              ...restProps
                                                          }) => {
    return (
        <div className={type === 'text' ? s.formItem : s.formItemDate}>
            <span className={validate ? s.red : ''}>{title} {validate && error}</span>
            <input
                placeholder={placeholder}
                type={type}
                className={!restProps.value ? s.default : ''}
                {...restProps}
            />
            {type === 'date' && <img src={!!restProps.value ? icon : iconBlack}/>}
        </div>
    );
};

