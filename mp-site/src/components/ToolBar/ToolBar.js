import "./Toolbar.css"

const ToolBar = () => {
    return (
        <div className="toolbar">
            <section className="search-section">
                <div id="logo">
                    <img src="mrp-logo.svg" alt="logo.svg" />
                </div>
                <div id="searchbar">
                    <div id="search-icon">
                        <img className="icon" src="search.svg" alt="search.svg" />
                    </div>
                    <div id="search-input">
                        <input type="text" placeholder="Search Items, Brands & Categories" />
                    </div>
                    <div id="search-camera">
                        <div id="camera-icon">
                            <img className="icon" src="camera.svg" alt="camera.svg" />
                        </div>
                        <p>Search by Image</p>
                    </div>
                </div>
                <div id="signin">
                    <div id="person">
                        <svg className="icon" fill="#000000" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" d="M7,16 L17,16 C19.7614237,16 22,18.2385763 22,21 C22,21.5522847 21.5522847,22 21,22 C20.4871642,22 20.0644928,21.6139598 20.0067277,21.1166211 L19.9949073,20.8237272 C19.9070404,19.3072462 18.6927538,18.0929596 17.1762728,18.0050927 L17,18 L7,18 C5.34314575,18 4,19.3431458 4,21 C4,21.5522847 3.55228475,22 3,22 C2.44771525,22 2,21.5522847 2,21 C2,18.3112453 4.12230671,16.1181819 6.78311038,16.0046195 L7,16 L17,16 L7,16 Z M12,2 C15.3137085,2 18,4.6862915 18,8 C18,11.3137085 15.3137085,14 12,14 C8.6862915,14 6,11.3137085 6,8 C6,4.6862915 8.6862915,2 12,2 Z M12,4 C9.790861,4 8,5.790861 8,8 C8,10.209139 9.790861,12 12,12 C14.209139,12 16,10.209139 16,8 C16,5.790861 14.209139,4 12,4 Z"></path> </g></svg>
                        {/* <img  src="icons/user.svg" alt="user.svg"> */}
                    </div>
                    <div id="register">
                        <p>Sign In / Register</p>
                    </div>
                    <div id="handbag">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                        <p className="handbag-p">0</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ToolBar;