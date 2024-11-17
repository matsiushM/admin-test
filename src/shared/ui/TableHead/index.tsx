import styles from './TableHead.module.sass'

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
    return <th className={`${styles.sortableTh} ${enableSorting ? styles.sortableTh_sort_enabled : ''}`} onClick={onSort}>
        <div className={styles.sortableTh__content}>
            <span className={styles.sortableTh__label}>{label}</span>
            {enableSorting && (
                <span className={`${styles.sortableTh__icon} ${styles[sortedBy]}`}/>
            )}
        </div>
    </th>
};