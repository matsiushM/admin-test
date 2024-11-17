import {Employee, EmployeForm} from "entities/employers";
import {Button} from "shared/ui/Button/Button.tsx";

interface Props {
    employee: Employee;
    onSave: (data: Employee) => void;
    onBack: () => void;
}

export const EmployerEditor = ({employee, onSave, onBack}: Props) => {
    return <div>
        <div style={{display: 'flex', justifyContent: 'flex-start', marginBottom: '16px', padding: '1%'}}>
            <Button onClick={onBack}>Назад</Button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', padding: '10%'}}>
            <EmployeForm employee={employee} onSave={onSave}/>
        </div>
    </div>
};