import React, { useState, useEffect } from 'react';

function Home(){
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/repos/sujith-rocketlane/workflow-demo/actions/runs")
        .then((data) => data.json())
        .then((data) => {
            setData(data);
            setLoaded(true);
            console.log(data);
        })
    }, [])

    const render = (commit) => {
        let commitName = commit['display_title'];
        if(commit['actor']['type'] == "User"){
            return (
                <tr key = { commit['id'] }>
                    <td> { commitName } </td>
                    <td> <input type = "button" value = "Revert"/> </td>
                </tr> 
            );
        }
    }
    
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
                        <th> Commits </th>
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