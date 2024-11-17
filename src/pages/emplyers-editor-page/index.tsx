import React from "react";
import {useNavigate, useParams} from "react-router-dom";

import {EmployerEditor} from "features/employer-editor";
import {Employee} from "entities/employers";
import {useEmployersActions, useEmployersList} from "entities/employers/lib/storeHooks";

const EmployersEditorPage = () => {
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

    return <EmployerEditor employee={selectedEmployee} onSave={handleSave} onBack={handleBack}/>
};

export default EmployersEditorPage;