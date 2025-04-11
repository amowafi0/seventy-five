interface Props {
    img: string;
    header: string;
    title: string;
}

function Card({ img, header, title }: Props) {
    return (
        <>
            <div className="mx-2 min-h-[464px] max-w-[382px]">
                <div className="flex flex-col items-center justify-center gap-4 text-center max-sm:flex-col-reverse">
                    <img src={img} className="max-h-[209px] max-w-[323px]" />
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-bold text-[#F05778]">
                            {header}{' '}
                        </h1>
                        <p className="min-h-[104px] max-w-[325px] text-base text-[#606B7D]">
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
