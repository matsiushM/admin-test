import {Employee} from "./model/types.ts";

export const ROLES = {
    DRIVER: 'driver',
    WAITER: 'waiter',
    COOK: 'cook'
}

export const ROLES_NAMES = {
    [ROLES.DRIVER]: 'Водитель',
    [ROLES.WAITER]: 'Официант',
    [ROLES.COOK]: 'Повар'
}

export const initEmployee: Employee = {
    id: 0,
    name: '',
    isArchive: false,
    role: ROLES.DRIVER,
    phone: '',
    birthday: '',
}