import React, { useState } from 'react';

function HomePage(){
    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('male');
    const [plan, setPlan] = useState('$299');

    return (
        <div class = "form">
            <form action = "">
                <label htmlFor = 'name'>Name</label>
                <input type = "text" value = { name } onChange = {(e) => setName(e.target.value)} placeholder = 'Enter your Name..'/>
                <label htmlFor = 'age'>Age</label>
                <input type = "text" value = { age } onChange = {(e) => setAge(e.target.value)} placeholder = 'Enter your Age..'/>
                <label htmlFor = 'mail'>mail</label>
                <input type = "text" value = { mail } onChange = {(e) => setMail(e.target.value)} placeholder = 'Enter your Mail..'/>
                <label htmlFor = 'password' >password</label>
                <input type = "password" value = { password } onChange = {(e) => setPassword(e.target.value)} placeholder = 'Enter your password..'/>
                <label htmlFor = 'gender'>gender</label>
                <select id = "gender" name = "gender" value = {gender} onChange = {(e) => setGender(e.target.value)}>
                    <option value = "male" >Male</option>
                    <option value = "female" >Female</option>
                    <option value = "others" >Others</option>
                </select>
                <label htmlFor = 'plan'>membership planssssss</label>
                <select id = "plan" name = "plan" value = {plan} onChange = {(e) => setPlan(e.target.value)}>
                    <option value = "$299">$299</option>
                    <option value = "$499">$499</option>
                    <option value = "$999">$999</option>
                    <option value = "$1499">$1499</option>
                    <option value = "$1999">$1499</option>
                    <option value = "$2499">$2499</option>
                    <option value = "$2999">$2999</option>
                    <option value = "$4999">$4999</option>
                    <option value = "$5999">$5999</option>
                </select>
            </form>
        </div>
    );
}

export default HomePage;