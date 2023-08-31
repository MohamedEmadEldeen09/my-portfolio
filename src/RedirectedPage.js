import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function RedirectedPage() {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/my-portfolio/main')
    },[])
    return (
        <div>
        
        </div>
    )
}

export default RedirectedPage
