import { useEffect, useState } from "react";
import axios from 'axios';
import config from "../config/config.js";

export default function Home(){
   
  
    const [data, setData] = useState([]);


   useEffect(() => {
    const fetchData = async () => {
        const data = await axios.get(config.users).then((res) => res.data);
        console.log(data.users)
        // console.log(data);
        setData(data.users);
    }
    fetchData()
   }, [])
   

 
    return (
       
        <div>
            Hi
         
            {data.map((item, index) => (
    <div key={index}>{item.username}</div>
))}

           
        </div>
    );


}

