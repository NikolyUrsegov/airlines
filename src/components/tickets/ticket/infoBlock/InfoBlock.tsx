import React from 'react';
import s from "./InfoBlock.module.scss";
import logo from "../../../../common/images/logo.svg";
import bag from "../../../../common/images/bag.svg";
import baggage from "../../../../common/images/baggage.svg";
import {TicketType} from "../../../../store/ticketsReducer";
import {ChangeTimeBlock} from "./changeTimeBlock/ChangeTimeBlock";

type InfoBlockPropsType = {
    ticket: TicketType
}

export const InfoBlock: React.FC<InfoBlockPropsType> = ({ticket}) => {
    return (
        <div className={s.block}>
            <div className={s.logoBlock}>
                <div className={s.sticker}><span>Невозвратный</span></div>
                <div className={s.logo}>
                    <img src={logo}/>
                    <span>S7 Airlines</span>
                </div>
            </div>
            <div className={s.infoBlock}>
                <div className={s.info}>
                    <div className={s.flight}>
                        <div className={s.departure}>
                            <span className={s.time}>{ticket.time[0]}</span>
                            <div className={s.infoDeparture}>
                                <span>{ticket.departure}</span>
                                <span>{ticket.dateFrom}</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.diagramBlock}>
                        <div className={s.airport}>
                            {
                                ticket.airport.map(e => <span key={e}>{e}</span>)
                            }
                        </div>
                        <div className={s.diagram}/>
                        <div className={s.pathTime}>
                            <span>В пути 1 ч 55 мин</span>
                        </div>

                    </div>
                    <div className={`${s.flight} ${s.arrival}`}>
                        <div className={s.departure}>
                            <span className={s.time}>{ticket.time[1]}</span>
                            <div className={s.infoDeparture}>
                                <span>{ticket.arrival}</span>
                                <span>{ticket.dateFrom}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <ChangeTimeBlock id={ticket.id} activeTime={ticket.time}/>
            </div>
            <div className={s.baggage}>
                <img src={bag} alt="" className={s.baggageIcon}/>
                <img src={baggage} alt="" className={s.bagIcon}/>
            </div>
        </div>
    );
};

