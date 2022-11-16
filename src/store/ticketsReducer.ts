import {v1} from 'uuid';

export type TicketFormType = {
    departure: string
    arrival: string
    dateFrom: string
    dateBack?: string
}

export type TicketType = {
    id: string
    departure: string
    arrival: string
    dateFrom: string
    time: string[]
    airport: string[]
    dateBack?: string
}

export type TicketsStateType = {
    tickets: null | TicketType[]
    price: null | number
}

const initialTicketsState = {
    tickets: null as null | TicketType[],
    price: null as null | number
}
export const ticketsReducer = (state: TicketsStateType = initialTicketsState, action: ActionsType): TicketsStateType => {
    switch (action.type) {
        case "TICKETS/SET_TICKETS": {
            const ticketToId = v1()
            const ticketBackId = v1()

            const dateFrom = action.payload.tickets.dateFrom.split('-').reverse().join('.')
            const dateBack = action.payload.tickets.dateBack?.split('-').reverse().join('.')

            if (!action.payload.tickets.dateBack) {
                return {
                    ...state,
                    tickets: [{
                        ...action.payload.tickets,
                        dateFrom,
                        time: ['09:20', '11:05'],
                        id: ticketToId,
                        airport: ['SVO', 'ROS']
                    }],
                    price: 4150
                }
            }
            return {
                ...state,
                tickets: [
                    {
                        ...action.payload.tickets,
                        time: ['09:20', '11:05'],
                        dateFrom,
                        id: ticketToId,
                        airport: ['SVO', 'ROS']
                    },
                    {
                        departure: action.payload.tickets.arrival,
                        arrival: action.payload.tickets.departure,
                        dateFrom: dateBack!,
                        id: ticketBackId,
                        time: ['09:20', '11:05'],
                        airport: ['ROS', 'SVO']
                    },
                ],
                price: 8300
            }
        }
        case "TICKETS/SET_CHANGE_TIME":{
            return {
                ...state,
                tickets: state.tickets!.map(e => e.id === action.payload.id ? {...e, time: action.payload.time} : e)
            }
        }

        default:
            return state
    }
}

//TYPE ACs
export type ActionsType = SetTicketsACType | SetChangeTimeACType

type SetTicketsACType = ReturnType<typeof setTicketsAC>
type SetChangeTimeACType = ReturnType<typeof setChangeTimeAC>

// AC
export const setTicketsAC = (tickets: TicketFormType) => {
    return {
        type: 'TICKETS/SET_TICKETS',
        payload: {
            tickets
        }
    } as const
}
export const setChangeTimeAC = (time: string[], id: string) => {
    return {
        type: 'TICKETS/SET_CHANGE_TIME',
        payload: {
            id,
            time
        }
    } as const
}
