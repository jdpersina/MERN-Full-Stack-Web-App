import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function LogPage() {
    const [title, setTitle] = useState('Album Title');
    const [artist, setArtist] = useState('Album Artist');
    const [date, setDate] = useState();

    const navigate = useNavigate();
}