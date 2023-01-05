import React, { useState, useEffect } from 'react';

function Home(){
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/repos/sujith-rocketlane/workflow-demo/actions/runs")
        .then((data) => data.json())
        .then((data) => {
            setData(data);
            setLoaded(false);
            console.log(data);
        })
    }, [])

    if(!loaded){
        return (
            <div className = 'loadMsg'>
                <h1>Loading... please wait</h1>
                {/* {console.log(data)} */}
            </div>
        );
    }
    else{
        return (
            <table>
                <thead>
                    <tr>
                        <th> Pull Requests </th>
                        <th> Revert </th>
                    </tr>
                </thead>
                <tbody>
                    { data.map(render) }
                </tbody>
            </table>
        );
    }

}

export default Home;