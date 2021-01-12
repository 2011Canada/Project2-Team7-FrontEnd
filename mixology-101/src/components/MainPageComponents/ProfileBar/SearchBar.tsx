// probably a component we will never use
const searchWrapperStyle = {
    webkitUserSelect: "none",
    backgroundColor: "rgba(0,0,0,0)",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "Translate(-50%, -50%)",
}

const searchBoxStyle = {
    width: "450px",
    height: "100px", 
    position: "relative" as "relative"

}

const inputStyle = {
    position: "absolute" as "absolute",
    top: "20px",
    // boxSizing: "border box",
    right: "50px",
    width: "0px",
    height: "63px",
    border: "3px solid lightblue",
    borderRadius: "50px",
    padding: "0 20px",
    outline: "none",
    fontSize: "18px",
    color: "#29313a",
    transition: "all 0.3s ease"

}

const inputbtnStyle = {
    position: "absolute" as "absolute",
    width: "80px",
    height: "80px",
    background :"#62d474", 
    borderRadius: "50%",
    top: "10px",
    right: "45px",
    cursor: "pointer",
    lineHeight: "65px",
    fontSize: "20px",
    color: "#fff",
    transition: "all 0.8s ease"

}

const expand = (e:React.MouseEvent)=>{
e.preventDefault();
let width = document.getElementById("searchInput1").style.width
if(width == "0px"){
    document.getElementById("searchInput1").style.width = "350px"
} else {
    document.getElementById("searchInput1").style.width = "0px"
}
console.log(width)

}




const SearchBar = ()=>{
    return(

        <div style={searchWrapperStyle} className="wrapper">
            <div style={searchBoxStyle} className="search-box">
                <input style={inputStyle} id="searchInput1"  type="text" className="input" placeholder="SearchBy"/>
                <div style={inputbtnStyle} className="btn text-center" onClick={expand}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

export default SearchBar