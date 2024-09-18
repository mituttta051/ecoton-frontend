interface TitleProps {
    className?: string;
    text: string;
}
export default function Title(props: TitleProps) {
    return (
        <h2 className={`text-4xl font-bold opacity-100 ${props.className}`}>{props.text}</h2>
    )
}