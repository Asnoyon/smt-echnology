const MarqueeItem = ({title, icon}) => {
    return (
        <div className="flex gap-8 items-center min-w-fit">
            <img src={icon} alt="service ticker star" />
            <h2 className="text-accent text-4xl font-bold">{title}</h2>
        </div>
    )
}

export default MarqueeItem