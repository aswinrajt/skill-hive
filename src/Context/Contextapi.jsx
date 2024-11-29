import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const addeventResponseContext=createContext()
export const editeventResponseContext=createContext()
export const authContext=createContext()


function Contextapi({children}) {
const [addResponse,setAddResponse]=useState("")
const [editResponse,setEditResponse]=useState("")
const [authContextStatus,setAuthContextStatus]=useState(false)

  return (
<>

<addeventResponseContext.Provider value={{addResponse,setAddResponse}}> 
<editeventResponseContext.Provider value={{editResponse,setEditResponse}}>
<authContext.Provider value={{authContext,setAuthContextStatus}}>

{children}

</authContext.Provider>
</editeventResponseContext.Provider>
</addeventResponseContext.Provider>


</>  )
}

export default Contextapi