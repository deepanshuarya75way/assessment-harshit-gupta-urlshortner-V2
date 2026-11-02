import { useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";

const API_BASE= (import.meta.env.VITE_BASE_URL || "http://localhost:3000/").replace(/\/$/,"");
export default function Unlock(){
  const { shortCode } =useParams();
  const [passcode,setPasscode] = useState("");
  const [error,setError]= useState("");
  const [loading,setLoading]=useState(false);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    setError("");
    setLoading(true);
    try{
      const res= await axios.post(`${API_BASE}/${shortCode}/verify`,{ passcode
      });
      window.location.href=res.data.data.originalUrl;
      }
    catch(err){
      setError(err.response?.data?.message || "Something Went Wrong");
    }finally{
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <form 
    onSubmit={handleSubmit}
    className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm" >
    <h1 className="text-xl font-semibold mb-1"> Protected Link 
    </h1>
    <p className="text-sm text-gray-500 mb-4">
    Enter the passcode to continue.
    </p>
    <input type="password" value={passcode} onChange={(e) => setPasscode(e.target.value)}
    placeholder="Passcode"
    required className="w-full border rounded-lg px-3 py-2 mb-3" />
    {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
    <button 
    type="submit"
    disabled={loading}
    className= "w-full bg-blue-600 text-white rounded-lg py-2 disabled:opacity-50" >
    {loading ? "Checking..." : "Unlock"}
    </button>
    </form>
    </div>
  )
}