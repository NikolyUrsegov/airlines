import React from 'react';
import { useAppSelector} from "../../store/store";
import {Ticket} from "./ticket/Ticket";
import {Navigate} from "react-router-dom";

export const Tickets = () => {
    const tickets = useAppSelector((state) => state.tickets)

    if(!tickets.tickets) {
            return <Navigate to={'/avia'}/>
        }

    return (
        <>
            <Ticket tickets={tickets!}/>
        </>
    );
};

