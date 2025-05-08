type Styles = { [key: string]: string };

export const cn = (
    styles: Styles,
    base: string,
    custom1?: string,
    custom2?: string
): string => {
    return [
        styles[base],
        custom1 ? styles[custom1] : '',
        custom2 ? styles[custom2] : ''
    ]
        .filter(Boolean)
        .join(' ');
};