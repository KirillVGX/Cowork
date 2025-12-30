export function getPagination(current: number, total: number): (number | 'dots')[] {
    switch (current) {
        case 0:
            return [0, 1, 'dots', total - 1];
        case 1:
            return [0, current, current + 1, 'dots'];
        case total - 2:
            return ['dots', current - 1, current, current + 1];
        case total - 1:
            return [0, 'dots', total - 2, total - 1];
        default:
            return [current - 1, current, current + 1, 'dots'];
    }
}