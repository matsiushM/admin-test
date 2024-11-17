import {TextField} from "shared/ui/TextField";
import {Select} from "shared/ui/Select";
import {PhoneInput} from "shared/ui/PhoneInput";
import {Checkbox} from "shared/ui/Checkbox";
import {Employee} from "../model/types.ts";
import {ROLES, ROLES_NAMES} from "../constants.ts";

export interface FieldsProps {
    employee: Employee;
    onChange: (v: { option: keyof Employee, value: unknown }) => void;
}

export const Fields = ({employee, onChange}: FieldsProps) => {
    return <>
        <TextField
            label="Имя"
            value={employee.name}
            onChange={(value) => onChange({option: 'name', value})}
        />
        <Select
            label="Должность"
            options={[
                {value: ROLES.DRIVER, name: ROLES_NAMES[ROLES.DRIVER]},
                {value: ROLES.WAITER, name: ROLES_NAMES[ROLES.WAITER]},
                {value: ROLES.COOK, name: ROLES_NAMES[ROLES.COOK]},
            ]}
            value={employee.role}
            onChange={(value) => onChange({option: 'role', value})}
        />
        <PhoneInput
            label="Номер телефона"
            value={employee.phone}
            onChange={(value) => onChange({option: 'phone', value})}
        />
        <Checkbox
            label='В архиве'
            value={employee.isArchive}
            onChange={(value) => onChange({option: 'isArchive', value})}
        />
    </>
};