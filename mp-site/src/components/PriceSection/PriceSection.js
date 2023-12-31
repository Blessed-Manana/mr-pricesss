import "./PriceSection.css"

const PriceSection = () => {
    let PriceSectionDiv =[
        {
            photo: "01_1190910005_SI_11.webp",
            photo2: "cover3.webp",
            item: "High Rise Leggings",
            discription: "Everyday Basics",
            price: "R69.99",
        },
        {
            photo: "01_1191610017_SI_11.webp",
            photo2: "cover2.webp",
            item: "Regular Tee",
            discription: "Everyday Basics",
            price: "R69.99",
        },
        {
            photo: "01_1190910006_SI_11.webp",
            photo2: "cover3.webp",
            item: "Regular Rise Leggings",
            discription: "Everyday Basics",
            price: "R119.99",
        },
        {
            photo: "01_1190910001_SI_11.webp",
            photo2: "cover5.webp",
            item: "Regular Rise Leggings",
            discription: "Everyday Basics",
            price: "R119.99",
        },
        {
            photo: "01_1190910002_SI_11.webp",
            photo2: "cover4.webp",
            item: "Regular Rise Leggings",
            discription: "Everyday Basics",
            price: "R119.99",
        },
        {
            photo: "01_1191610016_SI_11.webp",
            photo2: "cover1.webp",
            item: "Regular Top",
            discription: "Everyday Basics",
            price: "R69.99",
        },
    ]
    let display = PriceSectionDiv.map((ele)=>
         <div className="cover">
            <div className="img">
                <img id="img2" src={ele.photo} alt={ele.photo} />
                <img id="img1" src={ele.photo2} alt={ele.photo2} />
            </div>
                <div className="cover-prices">
                    <p className="redtext">{ele.item}</p>
                    <p className="greytext">{ele.discription}</p>
                    <p className="pricetext">{ele.price}</p>
                </div>
        </div>
    )

    return ( 
        <div className="PriceSection">
            <h1>There's nothing basic about these...</h1>
            <div className="PriceSectionDiv">{display}</div>
        </div>
    );
}
 
export default PriceSection;