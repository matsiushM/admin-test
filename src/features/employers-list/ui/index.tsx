import React from "react";
import {TableVirtuoso} from "react-virtuoso";

import {Fields, FieldsProps} from "entities/employers/ui/Fields";
import {initEmployee} from "entities/employers/constants";
import {employersHooks, EmployersState, Employee, ROLES_NAMES} from "entities/employers"
import {TableHead} from "shared/ui/TableHead";
import FilterIcon from 'shared/icons/filter.svg'
import {Button} from "shared/ui/Button/Button";
import {Popover} from "shared/ui/Popover";
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
    const {sortBy, setFilters} = employersHooks.useEmployersActions()
    const employers = employersHooks.useEmployersListWithFiltersAndSort()
    const sortInfo = employersHooks.useSortInfo()
    const [filterAnchor, setFilterAnchor] = React.useState<HTMLElement | null>(null)
    const [filterEmployee, setFilterEmployee] = React.useState<Partial<Employee>>({
        role: initEmployee.role,
        isArchive: initEmployee.isArchive
    })

    const handleSort = (field: EmployersState['sort']['field']) => {
        if (sortInfo.field === field) {
            sortBy({field, direction: sortInfo.direction === 'asc' ? 'desc' : 'asc'})
        } else {
            sortBy({field, direction: "asc"})
        }
    }

    const handleOpenFilters = (e: React.MouseEvent<HTMLElement>) => {
        setFilterAnchor(e.currentTarget);
    }

    const handleCloseFilters = () => setFilterAnchor(null)

    const handleFilterChange: FieldsProps['onChange'] = ({option, value}) => {
        setFilterEmployee({
            ...filterEmployee,
            [option]: value
        })
    }

    const handleSaveFilters = () => {
        setFilters(filterEmployee)
        handleCloseFilters()
    }

    return <div style={{width: '100%', height: '100%'}}>
        <div className={styles.tableToolbar}>
            {toolbarActions}
            <Button
                className={styles.tableToolbar__button}
                onClick={handleOpenFilters}
                title="Фильтры"
            >
                <FilterIcon/>
            </Button>
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
        <Popover
            anchor={filterAnchor}
            open={Boolean(filterAnchor)}
            onClose={handleCloseFilters}
        >
            <div className={styles.filters}>
                <Fields
                    employee={filterEmployee}
                    onChange={handleFilterChange}
                    disabledFields={{
                        name: true,
                        phone: true,
                        birthday: true,
                    }}
                />
            </div>
            <Button onClick={handleSaveFilters}>
                Сохранить
            </Button>
        </Popover>
    </div>
}