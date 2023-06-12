import {useEffect,useState} from 'react';
// import PieChart from './PieChart';
import '../Components/dashboard.scss';
import ContactsIcon from '@material-ui/icons/Contacts';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import {useNavigate} from 'react-router-dom';
import {baseURL} from '../../src/apis/baseurl';
import { SentimentVeryDissatisfiedRounded } from '@material-ui/icons';
const Dashboard = () => {
    const [datasss,setData] =useState([]);
    const [datassss,setDatas] =useState([]);
    const [month, setMonth] = useState();
    const [months, setMonths] = useState();
    const navigate = useNavigate();
    // const TodayDate = new Date();
    
   
  

    useEffect( () => {

        async function data(){
      //  await axios.get("http://localhost:5000/api/v1/plot/getplot")
      await fetch(`${baseURL}/api/product/getimageproduct`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((actualData) =>{
            if(actualData!== [] || ""){
            setData(actualData);
            console.log("Plots Details",actualData)
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
          // setData(actualData)
        }
        data();
      }, []);
      console.log(datasss.data);
      // const SearchInstallment = ()=>{
       
      // }
      useEffect( () => {

        async function data(){
      //  await axios.get("http://localhost:5000/api/v1/plot/getplot")
      await fetch(`${baseURL}/api/product/getproducts`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((actualData) =>{
            if(actualData!== [] || ""){
            setDatas(actualData);
            console.log("Communities Details",actualData)
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
          // setData(actualData)
        }
        data();
      }, []);
      console.log(datassss.data);
    return (
        <>
        <div className=" bg-none rounded-xl  ">
            {/* <h1 className="text-7xl text-white text-center mb-4 font-bold">Dashboard</h1> */}
        <div className="flex w-full    justify-center space-x-3 ">
            <div className="bg-red-400 text-center items-center m-9 rounded p-9 text-3xl text-white font-bold ">
                <ContactsIcon />
               {/* { i = datasss.data ? datasss.data.filter((x)=>x.status ==="Open"):""} */}
               {/* {alert("")} */}
                <h1 className="text-center  text-4xl mt-5">Total 3D-Products</h1>
                <h1 className="text-center  text-4xl mt-5">{datasss.data ? datasss.data.length : "Loading..."}</h1>
                {/* <h1 className="text-center  text-4xl mt-5"></h1> */}
                
            </div>
            <div className="bg-red-400 text-center items-center m-9 rounded p-9 text-3xl text-white font-bold ">
                <ContactsIcon />
               {/* { i = datasss.data ? datasss.data.filter((x)=>x.status ==="Open"):""} */}
               {/* {alert("")} */}
                <h1 className="text-center  text-4xl mt-5">Total Products</h1>
                <h1 className="text-center  text-4xl mt-5">{datassss.data ? datassss.data.length : "Loading..."}</h1>
                {/* <h1 className="text-center  text-4xl mt-5"></h1> */}
                
            </div>
            <div>
                
                
            </div>
            
        </div>
       
    
                 
    
                 
        {/* <div className="flex justify-evenly shadow-xl ">
          <button className="btn p-4 pl-8 pr-8 m-4 font-bold text-white bg-green-400 rounded "onClick={()=>navigate("/addrecipes")}>Add Recipes</button>
          <button className="btn p-4 pl-8 pr-8 m-4 font-bold text-white bg-green-400 rounded "onClick={()=>navigate("/addcommunities")}>Add Community</button>
          <button className="btn p-4 pl-8 pr-8 m-4 font-bold text-white bg-green-400 rounded "onClick={()=>navigate("/ViewFiles")}>View Recipes</button>
          <button className="btn p-4 pl-8 pr-8 m-4 font-bold text-white bg-green-400 rounded "onClick={()=>navigate("/viewcommunities")}>View Community</button>
          
        </div> */}
        </div>
        
        </>
    )
}
 
export default Dashboard