import "./Catalog.css"

const Catalog = () => {
    let people = [
        {
            photo: "home_ladies-wk2912072023.webp",
            btn: "SHOP LADIES"
        },
        {
            photo: "home_mens-wk2912072023.webp",
            btn: "SHOP MENS"
        },
        {
            photo: "home_bigkids-wk2912072023.webp",
            btn: "SHOP KID 7-14"
        },
        {
            photo: "home_prekids-wk2912072023.webp",
            btn: "SHOP KID 1-7"
        },
        {
            photo: "home_sustainability-wk2912072023.webp",
            btn: "SHOP LADIES"
        },
        {
            photo: "home_beauty-wk2912072023.webp",
            btn: "SHOP LADIES"
        },
        {
            photo: "home_novelty-wk2912072023.webp",
            btn: "SHOP LADIES"
        },
        {
            photo: "home_sustainability-wk2912072023.webp",
            btn: "SHOP LADIES"
        },
    ]

    let person = people.map((ele, index) =>
        <div className="imgbuttons1" key={index}>
            <img src={ele.photo} alt={ele.photo} />
            <button className="button" type="button">{ele.btn}</button>
        </div>
    )

    return (
        <div className="buttonImage-block">
            {person}
        </div>
    );
}

export default Catalog;