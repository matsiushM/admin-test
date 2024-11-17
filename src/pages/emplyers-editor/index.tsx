import React from "react";
import {useNavigate, useParams} from "react-router-dom";

import {Employee, EmployeForm} from "entities/employers";
import {useEmployersActions, useEmployersList} from "entities/employers/lib/storeHooks";
import {Button} from "shared/ui/Button/Button.tsx";

const EmployersEditor = () => {
    const {id} = useParams()
    const {editEmployee} = useEmployersActions()
    const employees = useEmployersList()
    const navigate = useNavigate();

    const selectedEmployee = React.useMemo(
        () => employees.find((e) => e.id === Number(id)),
        [id, employees]
    )

    const handleBack = () => {
        navigate("/")
    }

    const handleSave = (employee: Employee) => {
        editEmployee(employee)
        handleBack()
    }

    React.useEffect(() => {
        if (!selectedEmployee) {
            navigate('/')
        }
    }, [selectedEmployee])

    if (!selectedEmployee) {
        return null
    }

    return <div>
        <div style={{display: 'flex', justifyContent: 'flex-start', marginBottom: '16px', padding: '1%'}}>
            <Button onClick={handleBack}>Назад</Button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', padding: '10%'}}>
            <EmployeForm employee={selectedEmployee} onSave={handleSave}/>
        </div>
    </div>
};

export default EmployersEditor;