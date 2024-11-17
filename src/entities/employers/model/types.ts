export interface Employee {
    id: number;
    name: string
    isArchive: boolean;
    role: 'driver' | 'waiter' | 'cook';
    phone: string;
    birthday: string
}