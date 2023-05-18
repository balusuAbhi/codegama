import React,{useState,useEffect} from "react";
import "./filter.css";
import { connect } from "react-redux";
import { filterdData } from "../../action";

function Filter({filterDatas}) {
  const [filter,setFilter] = useState([]);
 const men = "men's clothing";
 const women = "women's clothing";
 const electronics = "electronics";
 const jewelery = "jewelery";

useEffect(()=>{
  console.log(filter)
  filterDatas(filter)
},[filter])


const handleFilter = (event)=>{
  if(event.target.checked){
    setFilter([...filter,event.target.value]);
  }else{
    const indexValue = filter.indexOf(event.target.value);
    filter.splice(indexValue,1);
    setFilter([...filter])
  }
  // filterDatas(filter)
}


  return (
    <div className="filter-container">
      <h1>Filter</h1>
        <form>
          <div className="each-cat">
          <input type="checkbox" onChange={handleFilter} value={men}/>
          <label>Men</label>
          </div>
          <div className="each-cat">
          <input type="checkbox" onChange={handleFilter} value={women}/>
          <label>Women</label>
          </div>
          <div className="each-cat">
          <input type="checkbox" onChange={handleFilter}value={electronics}/>
          <label>Electronics</label>
          </div>
          <div className="each-cat">
          <input type="checkbox" onChange={handleFilter} value={jewelery}/>
          <label>Jewelery</label>
          </div>
        </form>
    </div>
  );
}

const  mapStateToProps = (state)=>{
  return{
    allpadat : state.allProducts
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    filterDatas : (data)=>dispatch(filterdData(data))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Filter);
