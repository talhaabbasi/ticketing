import type { NextPage } from "next"
import { FormEvent, useState } from "react"
import axios from "axios"

const SignUp: NextPage = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [errors,setErrors] = useState([])

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try{
    const response = await axios.post('/api/users/signup', {
      email, password
    })
    console.log(response.data);
  }
  catch(err: any) {
    setErrors(err.response.data.errors)
  }
  }
  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input type="text" className="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button className="btn btn-primary">Sign Up</button>
    </form>

  )
}

export default SignUp
