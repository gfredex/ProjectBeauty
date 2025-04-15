type Styles = { [key: string]: string };

export const cn = (styles: Styles, base: string, custom?: string): string => {
    return `${styles[base]}${custom ? ` ${styles[custom]}` : ''}`;
};