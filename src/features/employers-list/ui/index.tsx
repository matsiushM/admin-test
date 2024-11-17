import {TableVirtuoso} from "react-virtuoso";

import {employersHooks, EmployersState, Employee} from "entities/employers"
import {ROLES} from "shared/locales";
import {TableHead} from "shared/ui/TableHead";
import './style.sass'

const columns: {
    accessor: EmployersState['sort']['field'],
    name: string,
    enableSorting?: boolean
}[] = [
    {accessor: 'name', name: 'Имя'},
    {accessor: 'role', name: 'Должность', enableSorting: true},
    {accessor: 'phone', name: 'Телефон', enableSorting: true},
]

export const EmployersList = () => {
    const {sortBy} = employersHooks.useEmployersActions()
    const employers = employersHooks.useEmployersSortedList()
    const sortInfo = employersHooks.useSortInfo()

    const handleSort = (field: EmployersState['sort']['field']) => {
        if (sortInfo.field === field) {
            sortBy({field, direction: sortInfo.direction === 'asc' ? 'desc' : 'asc'})
        } else {
            sortBy({field, direction: "asc"})
        }
    }

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
                {
                    columns.map(column => (
                        <TableHead
                            key={column.accessor}
                            label={column.name}
                            enableSorting={column.enableSorting}
                            sortedBy={sortInfo.field === column.accessor ? sortInfo.direction : 'asc'}
                            onSort={column.enableSorting ? () => handleSort(column.accessor) : () => {
                            }}
                        />
                    ))
                }
            </tr>
        )}
        itemContent={(_, employer) => (
            columns.map((column) => {
                const value = employer[column.accessor]

                if (column.accessor === 'role') {
                    return <td key={`${column.accessor}_${value}`}>{ROLES[value as Employee['role']] ?? value}</td>
                }

                return (
                    <td key={`${column.accessor}_${value}`}>{value}</td>
                )
            })
        )}
    />
}