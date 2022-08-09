import { createContext, useState, useContext, useEffect } from "react";
import apiClient from "../services/apiClient";
import { useAuthContext } from "./auth";
const ProgressContext = createContext(null);

export const ProgressContextProvider = ({ children }) => {
  const {user} = useAuthContext()
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(
    {
      module_name: "Phishing",
      module_id: "",
      progress: ""
    })
    useEffect(() => {
      if (user?.title){
        setLoading(true)
        const fetchProgress = async () => {
          const data = await apiClient.fetchProgress()
          console.log(data)
        }
        fetchProgress()
        setLoading(false)
      }
    }, [user])

  const progressValue = { progress }

  return (
    <ProgressContext.Provider value={progressValue}>
      <>{children}</>
    </ProgressContext.Provider>
  )
}

export const useProgressContext = () => useContext(ProgressContext)