interface Props {
    num: string;
    header: string;
    title: string;
}

function Card({ num, header, title }: Props) {
    return (
        <>
            <div className="flex w-[253px] flex-col items-center justify-center">
                <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#F057780A] text-[46px] font-bold text-[#F05778]">
                    {num}
                </div>

                <div className="pt-4 text-base font-semibold">{header}</div>
                <div className="w-[253px] pt-4 text-center text-sm font-medium text-[#606B7D]">
                    {title}
                </div>
            </div>
        </>
    );
}

export default Card;
