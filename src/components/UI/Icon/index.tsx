type IconProps = {
    name: string
    size?: number
    className?: string
    color?: string
}

const Icon = ({ name, size, className, color = 'currentColor' }: IconProps) => (
    <svg className={className} width={size} height={size} color={color}>
        <use href={`#icon-${name}`} />
    </svg>
)

export { Icon };
