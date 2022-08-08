import React from 'react'
import { useAuthContext } from "../../../contexts/auth"
function TokenManagement() {
    const { managerToken } = useAuthContext()
    console.log(managerToken)
  return (
    <div>
        {managerToken}
    </div>
  )
}

export default TokenManagement