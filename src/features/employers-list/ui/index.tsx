import {TableVirtuoso} from "react-virtuoso";

import {employersHooks} from "entities/employers"
import {ROLES} from "shared/locales";
import './style.sass'

export const EmployersList = () => {
    const employers = employersHooks.useEmployersList()

    return <TableVirtuoso
        style={{height: '100%'}}
        components={{
            Table: ({style, ...props}) => (
                <table
                    {...props}
                    style={style}
                    className="styled-table"
                />
            ),
        }}
        data={employers}
        totalCount={employers.length}
        fixedHeaderContent={() => (
            <tr>
                <th>Имя</th>
                <th>Должность</th>
                <th>Телефон</th>
            </tr>
        )}
        itemContent={(_, employer) => (
            <>
                <td>{employer.name}</td>
                <td>{ROLES[employer.role] ?? employer.role}</td>
                <td>{employer.phone}</td>
            </>
        )}
    />
}