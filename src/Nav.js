import React,{useState, useEffect} from 'react';
import "./Nav.css";
function Nav()  {
    const [show, handleShow] = useState(false)

    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true)
        }
        else{
           handleShow(false) 
        }
    }

    useEffect(() => {
       window.addEventListener("scroll",transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
            <img
             className="nav_logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt=""
            />

           <img
            className="nav_avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VuJZoiYcxDqu1AjBY8f5BpGTXeZ3rc5Ukg&usqp=CAU"
           alt=""
           />
        
        </div>
       </div>
    );
}

export default Nav;
