import {TextField} from "shared/ui/TextField";
import {Select} from "shared/ui/Select";
import {PhoneInput} from "shared/ui/PhoneInput";
import {Checkbox} from "shared/ui/Checkbox";
import {DateInput} from "shared/ui/DateInput";
import {Employee} from "../model/types.ts";
import {ROLES, ROLES_NAMES} from "../constants.ts";

export interface FieldsProps {
    employee: Partial<Employee>;
    onChange: (v: { option: keyof Employee, value: unknown }) => void;
    disabledFields?: Partial<Record<keyof Employee, boolean>>
}

export const Fields = ({
                           employee,
                           onChange,
                           disabledFields
                       }: FieldsProps) => {
    return <>
        {!disabledFields?.name && (
            <TextField
                label="Имя"
                value={employee?.name ?? ''}
                onChange={(value) => onChange({option: 'name', value})}
            />
        )}
        {!disabledFields?.role && (
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
        )}
        {!disabledFields?.phone && (
            <PhoneInput
                label="Номер телефона"
                value={employee.phone}
                onChange={(value) => onChange({option: 'phone', value})}
            />
        )}
        {!disabledFields?.birthday && (
            <DateInput
                label="Дата рождения"
                value={employee?.birthday ?? ''}
                onChange={(value) => onChange({option: 'birthday', value})}
            />
        )}
        {!disabledFields?.isArchive && (
            <Checkbox
                label='В архиве'
                value={employee?.isArchive ?? false}
                onChange={(value) => onChange({option: 'isArchive', value})}
            />
        )}
    </>
};