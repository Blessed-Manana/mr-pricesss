import "./NavBar.css"

const NavBar = () => {
    let navOptions = [
        {
            option: "Collabs & License"
        },
        {
            option: "What's new"
        },
        {
            option: "Ladies"
        },
        {
            option: "Mens"
        },
        {
            option: "Shoes"
        },
        {
            option: "Everyday Basics"
        },
        {
            option: "Kids"
        },
        {
            option: "Baby"
        },
        {
            option: "Beauty"
        },
        {
            option: "Novelty"
        },
        {
            option: "Inspo"
        },
        {
            option: "Promos"
        },
        {
            option: "Cellular"
        },
    ]

    let options = navOptions.map((ele) =>
        <a href="#" key={ele.option} style={ele.option === "Promos" ? { color: "red" } : {}} >{ele.option}</a>
    )

    return ( 
        <div className="navbar">
            {options}
        </div>
    );
}

export default NavBar;