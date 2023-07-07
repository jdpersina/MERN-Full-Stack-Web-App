import React from 'react';

// importing the image gallery react library
import ImageGallery from 'react-image-gallery';

const galleryPictures = [
    {
        original: 'images/dan-persina-palace-of-gold-statues.jpg',
        thumbnail: 'images/dan-persina-palace-of-gold-statues.jpg',
        description: `Myself with two statues at the Palace of Gold in New Vrindaban, West Virginia`,
        originalHeight: '450px',
    },
    {
        original: 'images/liv-and-dan-at-acadia.jpg',
        thumbnail: 'images/liv-and-dan-at-acadia.jpg',
        description: `My fiancé Liv and I finished our 11-mile
        hike at the summit of Gorham Mountain in Acadia National Park, Maine. Exhaustion? What do you mean, 'exhaustion'?`,
        originalHeight: '450px',
    },
    {
        original: 'images/molly-at-henryclayfurnace.jpg',
        thumbnail: 'images/molly-at-henryclayfurnace.jpg',
        description: `My friend Molly in front of Henry Clay Furnace, 
        the oldest standing pig-iron furnace in the United States.`,
        originalHeight: '450px',
    },
    {
        original: 'images/sabo-cat-album-studio.jpg',
        thumbnail: 'images/sabo-cat-album-studio.jpg',
        description: `A picture of my gear in the studio, taken during a break from recording the Sabo Cat album.`,
        originalHeight: '450px',
    },
    {
        original: 'images/friends-at-fasnacht-helvetia-wv.jpeg',
        thumbnail: 'images/friends-at-fasnacht-helvetia-wv.jpeg',
        description: `My friends and I went to Helvetia, West Virginia to celebrate Fasnacht - a holiday brought over by Swiss-Catholic immigrants.`,
        originalHeight: '450px',
    },
    {
        original: 'images/dan-and-zoe-play-at-riverfest.jpeg',
        thumbnail: 'images/dan-and-zoe-play-at-riverfest.jpeg',
        description: `Myself playing violin for a few songs of Zoe's set at Riverfest in Moundsville, WV`,
        originalHeight: '450px',
    },
    {
        original: 'images/dan-persina-canaan-half-marathon.jpg',
        thumbnail: 'images/dan-persina-canaan-half-marathon.jpg',
        description: `Masked up, nervous, and ready to run the Canaan Valley Half Marathon. I surprised myself and my supporters by coming in 7th place overall in my first ever half`,
        originalHeight: '450px',
    },
    {
        original: 'images/grow-ohio-valley-greenhouse.jpg',
        thumbnail: 'images/grow-ohio-valley-greenhouse.jpg',
        description: `Many of my friends work or have worked for Grow Ohio Valley, I was blessed to be able to volunteer my time with such wonderful folks.`,
        originalHeight: '450px',
    },
    {
        original: 'images/dan-jon-have-laugh-at-zacs-rollerblade-fall.jpeg',
        thumbnail: 'images/dan-jon-have-laugh-at-zacs-rollerblade-fall.jpeg',
        description: `John, Zac, Christian, and I had an impromptu rollerblade night. It was the first time we'd been together since the beginning of covid lockdowns`,
        originalHeight: '450px',
    },
    {
        original: 'images/dan-darcie-eric-sabo-cat-set.jpeg',
        thumbnail: 'images/dan-darcie-eric-sabo-cat-set.jpeg',
        description: `Darcie, myself, and a sliver of Eric. Our band was called Sabo Cat, and this was Darcie's first set with us. She played way better than her face would portend.`,
        originalHeight: '450px',
    }
]

function GalleryPage() {
    return (
        <>
            <h2>My Travels and Hobbies</h2>
            <p>This gallery of photographs shows some of my most precious moments and best friends from the last few years.</p>

            <article class="gallery">
                
                {/* https://www.npmjs.com/package.react-image-gallery */}
                <ImageGallery items={galleryPictures} />

            </article>
        </>
    );
}

export default GalleryPage;