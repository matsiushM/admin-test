import './th.sass'

interface Props {
    label: string;
    sortedBy?: 'asc' | 'desc'
    enableSorting?: boolean
    onSort?: () => void
}

export const TableHead = (
    {
        label,
        enableSorting = false,
        sortedBy = 'asc',
        onSort,
    }: Props
) => {
    return <th className={`sortable-th ${enableSorting ? 'sortable-th_sort_enabled' : ''}`} onClick={onSort}>
        <div className="sortable-th__content">
            <span className="sortable-th__label">{label}</span>
            {enableSorting && (
                <span className={`sortable-th__icon ${sortedBy}`}/>
            )}
        </div>
    </th>
};