import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {
    const [title, setTitle] = useState('Album Title');
    const [artist, setArtist] = useState('Album Artist');
    const [date, setDate] = useState();

    const navigate = useNavigate();

    const addAlbum = async () => {
        const newAlbum = { title, artist, date };

        const response = await fetch('/records', {
            method: 'POST',
            body: JSON.stringify(newAlbum),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.status === 201){
            alert("You successfully added an album to the database.");
        } else {
            alert("Album add failed")
        }
        navigate("/records");
    };

    return (
        <>
        <h2>Add an album to the database.</h2>
        <article>
            <p>Which album would you like to add?</p>
            <table id="albums">
                <caption>Add a new album.</caption>
                <TableHead />
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><label for="albumtitle" class="required">
                            <input 
                            type="text" 
                            value={title} 
                            id="albumtitle" 
                            name="albumtitle"
                            onChange={i => setTitle(i.target.value)}
                            />
                        </label>
                        </td>

                        <td><label for="albumartist" class="required">
                            <input 
                            type="text" 
                            value={artist} 
                            id="albumartist" 
                            name="albumartist"
                            onChange={i => setArtist(i.target.value)}
                            />
                        </label>
                        </td>

                        <td><label for="albumyear" class="required">
                            <input 
                            type="date" 
                            value={date} 
                            id="albumdate" 
                            name="albumdate"
                            onChange={i => setDate(i.target.value)}
                            />
                        </label>
                        </td>
                        <td><button class="wait" onClick={addAlbum}>Save Album</button></td>
                    </tr>
                </tbody>
            </table>
        </article>
        </>
    )
}