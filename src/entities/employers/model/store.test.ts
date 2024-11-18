import {employersSlice, actions} from './index';
import {EmployersState, Employee} from './types';
import {EMPLOYERS_MOCKED} from './employersMocked';

describe('employersSlice', () => {
    let initialState: EmployersState;

    beforeEach(() => {
        initialState = {
            list: [...EMPLOYERS_MOCKED],
            sortedList: [...EMPLOYERS_MOCKED],
            sort: { field: 'id', direction: 'asc' },
            filters: {},
        };
    });

    it('should set the sort field and direction', () => {
        const newState = employersSlice.reducer(
            initialState,
            actions.sortBy({ field: 'name', direction: 'desc' })
        );

        expect(newState.sort).toEqual({ field: 'name', direction: 'desc' });
    });

    it('should edit an existing employee', () => {
        const updatedEmployee: Employee = {
            id: EMPLOYERS_MOCKED[0].id,
            name: 'Updated Name',
            isArchive: false,
            role: EMPLOYERS_MOCKED[0].role,
            phone: EMPLOYERS_MOCKED[0].phone,
            birthday: EMPLOYERS_MOCKED[0].birthday,
        };

        const newState = employersSlice.reducer(
            initialState,
            actions.editEmployee(updatedEmployee)
        );

        expect(newState.list[0]).toEqual(updatedEmployee);
    });

    it('should add a new employee', () => {
        const newEmployee: Omit<Employee, 'id'> = {
            name: 'New Employee',
            isArchive: false,
            role: 'waiter',
            phone: '+1234567890',
            birthday: '1990-01-01',
        };

        const newState = employersSlice.reducer(
            initialState,
            actions.addNewEmployee(newEmployee as Employee)
        );

        const addedEmployee = newState.list[newState.list.length - 1];

        expect(addedEmployee).toMatchObject(newEmployee);
        expect(addedEmployee.id).toBeGreaterThan(
            Math.max(...initialState.list.map((e) => e.id))
        );
    });

    it('should set filters', () => {
        const filters: Partial<Employee> = {
            role: 'cook',
            isArchive: true
        };

        const newState = employersSlice.reducer(
            initialState,
            actions.setFilters(filters)
        );

        expect(newState.filters).toEqual(filters);
    });
});
