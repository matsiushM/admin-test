import {useNavigate} from "react-router-dom";

import {Employee} from "entities/employers";
import {EmployerEditor} from "features/employer-editor";
import {useEmployersActions} from "entities/employers/lib/storeHooks.ts";
import {initEmployee} from "entities/employers/constants.ts";

const EmployersAddPage = () => {
  const {addNewEmployee} = useEmployersActions()
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/")
  }

  const handleSave = (employee: Employee) => {
    addNewEmployee(employee)
    handleBack()
  }

  return <EmployerEditor employee={initEmployee} onSave={handleSave} onBack={handleBack}/>
};

export default EmployersAddPage;