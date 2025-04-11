type IconProps = {
    name: string;
    className?: string;
    size?: number;
    color?: string;
    stroke?: string;
};

const Icon = ({ name, className, size, color = 'currentColor', stroke }: IconProps) => (
    <svg className={className} width={size} height={size} color={color} stroke={stroke}>
        <use href={`#icon-${name}`} />
    </svg>
);

export { Icon };
