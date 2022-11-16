import {setChangeTimeAC, setTicketsAC, ticketsReducer, TicketsStateType} from "./ticketsReducer";


let startState: TicketsStateType

beforeEach(() => {
    startState = {
        tickets: [ {
            departure: 'Moscow',
            arrival: 'Kazan',
            dateFrom: '2022-06-06',
            id: '1',
            time: ['09:20', '11:05'],
            airport: ['ROS', 'SVO']
        }],
        price: null
    };
})

test('correct ticket should be one', () => {
    const ticket = {
        departure: 'Moscow',
        arrival: 'Kazan',
        dateFrom: '2022-06-06'
    }
    const action = setTicketsAC(ticket);
    const endState = ticketsReducer(startState, action)

    expect(endState.tickets!.length).toBe(1);
    expect(endState.tickets![0].departure).toBe('Moscow');
    expect(endState.tickets![0].arrival).toBe('Kazan');
    expect(endState.tickets![0].dateFrom).toBe('06.06.2022');
    expect(endState.tickets![0].time[0]).toBe('09:20');
    expect(endState.tickets![0].airport[0]).toBe('SVO');
});

test('correct tickets should be two', () => {
    const ticket = {
        departure: 'Moscow',
        arrival: 'Kazan',
        dateFrom: '2022-06-06',
        dateBack: '2022-10-11'
    }
    const action = setTicketsAC(ticket);
    const endState = ticketsReducer(startState, action)

    expect(endState.tickets!.length).toBe(2);
    expect(endState.tickets![1].departure).toBe('Kazan');
    expect(endState.tickets![1].arrival).toBe('Moscow');
    expect(endState.tickets![1].dateFrom).toBe('11.10.2022');
    expect(endState.tickets![1].time[0]).toBe('09:20');
    expect(endState.tickets![1].airport[0]).toBe('ROS');
});

test('time of specified ticket should be changed', () => {
    const time = ['10:20', '12:05']
    const action = setChangeTimeAC(time, '1');
    const endState = ticketsReducer(startState, action)

    expect(endState.tickets![0].time[0]).toBe('10:20');
    expect(endState.tickets![0].time[1]).toBe('12:05');
});
