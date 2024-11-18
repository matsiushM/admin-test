import React from "react";
import {TableVirtuoso} from "react-virtuoso";

import {employersHooks, EmployersState, Employee, ROLES_NAMES} from "entities/employers"
import {TableHead} from "shared/ui/TableHead";
import styles from './EmployersList.module.sass'

interface Props {
    onClick?: (id: number) => void
    toolbarActions?: React.ReactNode
}

const columns: {
    accessor: EmployersState['sort']['field'],
    name: string,
    enableSorting?: boolean
}[] = [
    {accessor: 'name', name: 'Имя'},
    {accessor: 'role', name: 'Должность', enableSorting: true},
    {accessor: 'phone', name: 'Телефон', enableSorting: true},
]

export const EmployersList = ({onClick, toolbarActions}: Props) => {
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

    return <div style={{width: '100%', height: '100%'}}>
        <div className={styles.tableToolbar}>
            {toolbarActions}
        </div>
        <TableVirtuoso
            style={{height: '100%'}}
            components={{
                Table: ({style, ...props}) => (
                    <table
                        {...props}
                        style={style}
                        className={styles.styledTable}
                    />
                ),
                TableRow: ({children, ...props}) => {
                    const rowIndex = props['data-index'];
                    const row = employers[rowIndex];

                    return (
                        <tr
                            {...props}
                            onClick={() => onClick?.(row.id)}
                        >
                            {children}
                        </tr>
                    )
                }
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
                        return <td
                            key={`${column.accessor}_${value}`}>{ROLES_NAMES[value as Employee['role']] ?? value}</td>
                    }

                    return (
                        <td key={`${column.accessor}_${value}`}>{value}</td>
                    )
                })
            )}
        />
    </div>
}