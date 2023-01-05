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
        let key = commit['id'];
        if(commit['actor']['type'] === "User"){
            return (
                <tr key = { commit['id'] }>
                    <td> { commitName } </td>
                    <td> <button id = {key} onClick = {revertCommit}>Revert</button> </td>
                </tr> 
            );
        }
    }

    const revertCommit = (event) => {
        console.log(event.target.id);
        let token = "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";
        const postMethod = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
             },
            
        };
        fetch("https://api.github.com/repos/sujith-rocketlane/workflow-demo/actions/runs/" + event.target.id + "/rerun", postMethod)
            .then(response => console.log(response))
            .then(() => alert("Succesfull!"))
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
                    { data['workflow_runs'].map(render) }
                </tbody>
            </table>
        );
    }

}

export default Home;