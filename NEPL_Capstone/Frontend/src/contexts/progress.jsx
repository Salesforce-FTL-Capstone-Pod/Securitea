import { createContext, useState, useContext, useEffect } from "react";
import apiClient from "../services/apiClient";

const ProgressContext = createContext(null);

export const ProgressContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(
    {
      module_name: "Phishing",
      module_id: "",
      progress: ""
    })
    useEffect(() => {
      setLoading(true)
      const fetchProgress = async () => {
        const { data } = await apiClient.fetchProgress()
  
        if (data) {
          setProgress({
            module_name: "Phishing",
            module_id: data.progress.module_id,
            progress: data.progress.progress
          })
        }
      }
      fetchProgress()
      setLoading(false)
    }, [])

  const progressValue = { progress }

  return (
    <ProgressContext.Provider value={progressValue}>
      <>{children}</>
    </ProgressContext.Provider>
  )
}

export const useProgressContext = () => useContext(ProgressContext)