import "./InfoSection.css"

const InfoSection = () => {
    let InfoSectionImgs = [
        {
            img: "home-faq-ic.png"
        },
        {
            img: "home-delivery-ic.png"
        },
        {
            img: "home-track-ic.png"
        },
        {
            img: "home-loc-ic.png"
        },
        {
            img: "home-hts-ic.png"
        },
    ]

    let imgdiv = InfoSectionImgs.map((e) =>
        <div className="imgdiv">
            <img src={e.img} alt={e.img} />
        </div>
    )

    return (
        <div className="infoSection">
            {imgdiv}
        </div>
    );
}

export default InfoSection;