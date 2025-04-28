import React, { use, useState } from 'react'

const Formval = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("");
    const [confirm,setConfirm]=useState("")
    const [age,setAge]=useState("");
    const [gender,setGender]=useState("");
    const [errorss,setErrors]=useState({});
    const validate=()=>{
        const errors={};
        if(!name){
            errors.name="name is required"
        }
        if(!email){
            errors.email="email us required"
        }
        if(!password || password.length<6){
            errors.password="invalid or password length is less"
        }
        if(!confirm || password!==confirm){
            errors.confirm='password dosnt match'
        }
        if(isNaN(age) || age<18){
            errors.age="invalid age"
        }
        if(!gender){
            errors.gender='select your gender'
        }
        return errors;
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        const errors=validate()
        if(Object.keys(errors).length>0){
            setErrors(errors)
            console.log(errorss);
            
        }
        else{
            console.log("form submitted");
        }
        
    }
    return (
        <div>
            <form action="post" onSubmit={handlesubmit}>
                <div>
                    <label>username:</label>
                    <input type='text' onChange={(e)=>setName(e.target.value)}   placeholder='enter yout username' />
                </div>
                <div>
                    <label>email:</label>
                    <input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='enter yout email' />
                </div>
                <div>
                    <label>password:</label>
                    <input type='password' onChange={(e)=>setpassword(e.target.value)} placeholder='enter yout password' />
                </div>
                <div>
                    <label>confirm password:</label>
                    <input type='password' onChange={(e)=>setConfirm(e.target.value)} placeholder='retype you password' />
                </div>
                <div>
                    <label>age:</label>
                    <input type='text' onChange={(e)=>setAge(e.target.value)} placeholder='enter your age' />
                </div>
                <div>
                    <label>gender:</label>
                    <select name="gender" onChange={(e)=>setGender(e.target.value)}>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="trans">trans</option>
                    </select>
                </div>
                <button type='submit' >submit</button>
            </form>

        </div>
    )
}

export default Formval