import axios from 'axios';
import {useState} from 'react';
export default function InputContainer(){
    const [text, setText] = useState("")
    const [score,setScore]=useState(0);
    async function handleSubmit(){
        const response=await axios.post('http://127.0.0.1:5000',
            {
                "text":text,
            }
        )
        setScore(response.data);
        console.log(response.data);
    }
    return(
        <>
        
        <textarea  placeholder="Type or Paste in Content here" className='h-100 w-150 border border-indigo-600 rounded-md bg-white p-4' onChange={(e) => setText(e.target.value)}></textarea>
        <br />
        <br />
        <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-100 " onClick={handleSubmit}>Continue </button>

        
        
        </>
        
        
    )
}