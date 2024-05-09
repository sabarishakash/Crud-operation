import logo from './logo.svg';
import './App.css';
import axios from "axios";

import{useState,useEffect} from "react"
import { delete_url, get_url, post_url, update_url } from './URL/url';
function App() {
  const[name,setName]=useState("")
  const[age,setAge]=useState("")
  const[dob,setDob]=useState("")
const[data,setData]=useState([])
const[ref,setRef]=useState(true)
  const posts=async()=>{
    await axios.post(post_url,{
      name,
      age,
      dob
    })
  }
  useEffect(()=>{
    axios.get(get_url).then((res)=>{

      setData(res.data)
      
    })
  })

  const Delete=(v)=>{

    axios.delete(`${delete_url}/${v._id}`).then(()=>{
      setRef(!ref)
    })

  }

 const edit=(v)=>{
  setName(v.name)
  setAge(v.age)
  setDob(v.dob)
 }
 
 const update = async (v) => {
  await axios
    .put(`${update_url}/${v._id}`, {
      name,
      age,
      dob,
    })
    .then(() => {
      setName("");
      setAge("");
      setDob("");
    })
    .catch((err) => {
      console.log("error");
    });
};
  return (
   <>
   <div>
    <form>
      <label>Name:</label>
      <input
      type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <br/>
      <label>Age:</label>
      <input
      type="text"
      value={age}
      onChange={(e)=>setAge(e.target.value)}
      />
      <br/>
      <label>Dob:</label>
      <input
      type="text"
      value={dob}
      onChange={(e)=>setDob(e.target.value)}
      />
      <br/>
    </form>
    <button onClick={posts}>Click</button>
   
   </div>
   <div>
    {data.map((v)=>(
      <p>{v.name} {v.age} {v.dob}
      <button onClick={()=>edit(v)}>Edit</button>
 <button onClick={()=>update(v)}>Update</button>
    <button onClick={()=>Delete(v)}>Delete</button>
      </p>
    ))}
   </div>
   </>
  );
}

export default App;
