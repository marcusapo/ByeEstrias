export function formatNumber(number: number) {
    return new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(number)
}

export function orderByName(a: any, b: any) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}