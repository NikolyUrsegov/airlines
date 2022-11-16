import React from 'react';
import s from "./Ticket.module.scss";
import {InfoBlock} from "./infoBlock/InfoBlock";
import {TicketsStateType} from "../../../store/ticketsReducer";

type TicketPropsType = {
    tickets: TicketsStateType
}

export const Ticket: React.FC<TicketPropsType> = ({tickets}) => {

    return (
        <>
            <div className={s.block}>
                <div className={s.infoBlock}>
                    {tickets.tickets!.map(e =>
                        <div key={e.id} className={tickets.tickets!.length == 2 ? s.item : ''}>
                            <InfoBlock ticket={e}/>
                        </div>
                    )}
                </div>
                <div className={s.price}>
                    <span>{tickets.price} ₽</span>
                </div>
            </div>
        </>
    );
};

