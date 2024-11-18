import {useNavigate} from "react-router-dom";

import {EmployersList} from "features/employers-list";
import {Button} from "shared/ui/Button/Button";
import AddIcon from "shared/icons/add.svg";
import styles from './Employers.module.sass'

const EmployersPage = () => {
    const navigate = useNavigate();

    const handleRowClick = (id: number) => {
        navigate(`/edit/${id}`)
    }

    const handleAddNew = () => {
        navigate(`/add`)
    }

    return <div className={styles.container}>
        <EmployersList
            onClick={handleRowClick}
            toolbarActions={
                <>
                    <Button onClick={handleAddNew}>
                        <AddIcon/>
                    </Button>
                </>
            }
        />
    </div>
};

export default EmployersPage;