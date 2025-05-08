import React, { createContext, useEffect, useState } from 'react';



export const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
    const [about,setAbout] = useState(null);
    const [contact,setContact] = useState(null);
    const [exp,setExp] = useState(null);
    const [projects,setProjects] = useState(null);
    const [skills,setSkills] = useState(null);
    const url = "https://raw.githubusercontent.com/Akash33253/akash-dev/main/content"
    const getAboutData = async () => {
        try {
            const response = await fetch(`${url}/about.json`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    };
    return <FetchContext.Provider value={{
        getAboutData
    }}>
        {children}
    </FetchContext.Provider>
}

