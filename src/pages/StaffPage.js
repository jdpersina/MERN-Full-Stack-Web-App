import React, { useState }  from 'react';
import StaffRow from '../components/StaffRow.js'

function StaffPage () {

    const [effects, setEffects] = useState([]);
    const fetchEffects = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then((response) => response.json())
            .then((data => {
                setEffects(data.results);
            }))
            .catch(() => {
                alert("The Random User Generator seems to be offline, please try again later!")
            });
        };
        return (
            <>
            <h2>Staff List</h2>

            <p>
                <button id="fromRandomUser" onClick={fetchEffects} value="generate">Generate</button>
                 &nbsp; ten users from the <a href="https://randomuser.me/" target="_blank" rel="noreferrer">random user website</a>
            </p>

            <table>
                <caption>Name, email, phone, location</caption>
                <thead>
                    <tr>
                        <th>Portrait</th>
                        <th>Name &amp; Email</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {effects.map((user, index) => <StaffRow user={user} key={index} /> )}
                </tbody>
            </table>
            </>
        );
        }

export default StaffPage