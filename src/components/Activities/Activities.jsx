import React, { useEffect, useState } from 'react';
import './Activities.css';


const Activities = (props) => {

    let activity = props.activity;
    const [listAreas, setListAreas] = useState(null);
    const [areaInfo, setAreaInfo] = useState(null);
    let areaName = "";

    /*const getAreaInfo = (activityId) => {
        if(listAreas != null){  
            listAreas.map(area => {
                if(area.id == activityId){
                    setAreaInfo(area);
                }
            });
        } 
        return areaInfo;
    };*/

    useEffect(() => {
        const fetchAreas = async () => {
            try {
                const responseAreas = await fetch(
                    `https://mammal-excited-tarpon.ngrok-free.app/api/natural-area/list?page=1&pageSize=1000`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'ngrok-skip-browser-warning': 'true'
                        }
                    }
                );

                const textAreas = await responseAreas.text();
                const dataAreas = JSON.parse(textAreas);
                setListAreas(dataAreas.items);
                const matchingArea = dataAreas.items.find(area => area.id === activity.naturalAreaId);
                if (matchingArea) {
                    setAreaInfo(matchingArea.name);
                }
            } catch (err) {
                console.error("Error fetching areas:", err);
                setListAreas([]);
            }
        };

        fetchAreas();
        //getAreaInfo(activity.naturalAreaId);

    }, []);

    return (
        <>
            <div className='activity'>
                    {
                        areaInfo !== null &&
                        <h2>
                            Área: {areaInfo}
                        </h2>
                    }
                
                <p>
                    {activity.date}
                </p>
                <p>
                    {activity.description}
                </p>
            </div>
        </>
    )
}

export default Activities