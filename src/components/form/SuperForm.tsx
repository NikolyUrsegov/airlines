import React from 'react';
import s from './SuperForm.module.scss';
import {useFormik} from "formik";
import {SuperInput} from "../input/SuperInput";
import {useDispatch} from "react-redux";
import {setTicketsAC} from "../../store/ticketsReducer";
import {useNavigate} from "react-router-dom";

type FormikErrorType = {
    departure?: string
    arrival?: string
    dateFrom?: string
    dateBack?: string
}

export const SuperForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            departure: "",
            arrival: "",
            dateFrom: "",
            dateBack: ""
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.departure) {
                errors.departure = "*Обязательно"
            }
            if (!values.arrival) {
                errors.arrival = "*Обязательно"
            }

            if (!values.dateFrom) {
                errors.dateFrom = "*Обязательно"
            }

            if (!!values.dateBack && values.dateBack < values.dateFrom) {
                errors.dateBack = "*Выберите дату позже"
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(setTicketsAC(values))
            navigate('/avia/info')
        }
    })

    const arrivalValidate = formik.touched.arrival && formik.errors.arrival
    const departureValidate = formik.touched.departure && formik.errors.departure
    const dateFromValidate = formik.touched.dateFrom && formik.errors.dateFrom
    const dateBackValidate = formik.touched.dateBack && formik.errors.dateBack
    const disabledFormButton = formik.errors.arrival
        || formik.errors.departure
        || formik.errors.dateFrom
        || formik.errors.dateBack

    return (
        <>
                <form onSubmit={formik.handleSubmit}>
                    <div className={s.head}>
                        <SuperInput type={'text'}
                                    validate={!!departureValidate}
                                    error={formik.errors.departure}
                                    title={"Откуда"}
                                    placeholder={"Город вылета"}
                                    {...formik.getFieldProps('departure')}
                        />
                        <SuperInput type={'text'}
                                    validate={!!arrivalValidate}
                                    error={formik.errors.arrival}
                                    title={"Куда"}
                                    placeholder={'Город прилёта'}
                                    {...formik.getFieldProps('arrival')}
                        />
                        <SuperInput type={'date'}
                                    validate={!!dateFromValidate}
                                    error={formik.errors.dateFrom}
                                    title={"Туда"}
                                    {...formik.getFieldProps('dateFrom')}
                        />
                        <div className={s.both}/>
                        <SuperInput type={'date'}
                                    validate={!!dateBackValidate}
                                    error={formik.errors.dateBack}
                                    title={"Обратно"}
                                    {...formik.getFieldProps('dateBack')}
                        />
                    </div>
                    <div className={s.footer}>
                        <button type={"submit"} className={!!disabledFormButton ? s.disabled : ''}>Найти билеты</button>
                    </div>
                </form>
        </>
    );
}

