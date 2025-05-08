import React, { createContext, useEffect, useState } from 'react';



export const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
    const [about, setAbout] = useState(null);
    const [contact, setContact] = useState(null);
    const [exp, setExp] = useState(null);
    const [projects, setProjects] = useState(null);
    const [skills, setSkills] = useState(null);
    const url = "https://raw.githubusercontent.com/Akash33253/akash-dev/main/content"

    const getAboutData = async () => {
        try {
            const response = await fetch(`${url}/about.json`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data) {
                setAbout(data);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    };


    const getContactData = async () => {
        try {
            const response = await fetch(`${url}/contact.json`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data) {
                setContact(data);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    };


    const getExperienceData = async () => {
        try {
            const response = await fetch(`${url}/experience.json`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data) {
                setExp(data);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    };


    const getProjectsData = async () => {
        try {
            const response = await fetch(`${url}/projects.json`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data) {
                setProjects(data);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    };


    const getSkillsData = async () => {
        try {
            const response = await fetch(`${url}/skills.json`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data) {
                setSkills(data);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    };



    const fetchAllData = ()=>{
        getAboutData();
        getContactData();
        getExperienceData();
        getProjectsData();
        getSkillsData();
    }








    return <FetchContext.Provider value={{
        about, contact,exp,skills,projects, fetchAllData
    }}>
        {children}
    </FetchContext.Provider>
}

