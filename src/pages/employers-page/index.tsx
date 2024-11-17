import {useNavigate} from "react-router-dom";

import {EmployersList} from "features/employers-list";
import styles from './Employers.module.sass'

const EmployersPage = () => {
    const navigate = useNavigate();

    const handleRowClick = (id: number) => {
        navigate(`/edit/${id}`)
    }

    return <div className={styles.tableContainer}>
        <EmployersList onClick={handleRowClick}/>
    </div>
};

export default EmployersPage;