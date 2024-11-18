import React, {PropsWithChildren} from 'react';

import styles from './Popover.module.sass';

export interface PopoverProps {
    anchor: HTMLElement | null;
    open: boolean;
    onClose: () => void;
}

export const Popover = ({children, anchor, open, onClose}: PropsWithChildren<PopoverProps>) => {
    const [position, setPosition] = React.useState({top: 0, left: 0});
    const popoverRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (open && anchor) {
            const anchorRect = anchor.getBoundingClientRect();
            const popoverRect = popoverRef.current?.getBoundingClientRect();

            if (popoverRect) {
                setPosition({
                    top: anchorRect.bottom + window.scrollY + 10, // Сдвиг вниз на 10px
                    left: anchorRect.left - popoverRect.width - 10, // Сдвиг влево на 10px
                });
            }
        }
    }, [open, anchor]);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(event.target as Node) &&
                !anchor?.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open, onClose, anchor]);

    if (!open) {
        return null
    }

    return <div
        ref={popoverRef}
        className={styles.popover}
        style={{top: position.top, left: position.left}}
    >
        {children}
    </div>
};
