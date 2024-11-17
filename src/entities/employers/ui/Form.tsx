import React from "react";

import {Button} from "shared/ui/Button/Button.tsx";
import {Employee} from "../model/types";
import styles from "./Form.module.sass"
import {Fields, FieldsProps} from "./Fields.tsx";

interface Props {
    employee: Employee;
    onSave?: (employee: Employee) => void;
}

export const Form = ({employee, onSave}: Props) => {
    const [formEmployee, setFormEmployee] = React.useState(employee)

    const handleChange: FieldsProps['onChange'] = ({option, value}) => {
        setFormEmployee({
            ...formEmployee,
            [option]: value
        })
    }

    const handleSubmit = () => {
        onSave?.(formEmployee)
    }

    return <form>
        <div className={styles.form__body}>
            <Fields employee={formEmployee} onChange={handleChange}/>
        </div>
        <div className={styles.form__actions}>
            <Button onClick={handleSubmit}>Сохранить</Button>
        </div>
    </form>
};