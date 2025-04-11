interface props {
    name: string;
    description: string;
    image: string;
}
function Card({ description, name, image }: props) {
    return (
        <div className="px-3">
            <div className="flex min-h-[245px] max-w-[328px] flex-col items-center justify-start gap-6 rounded-3xl pt-2 text-center">
                <div className="px-2 text-base font-medium text-[#606B7D]">
                    {description}
                </div>
                <div>
                    <img src={image} className="h-[58] w-[58]" />
                </div>
                <div>{name}</div>
            </div>
        </div>
    );
}
export default Card;
