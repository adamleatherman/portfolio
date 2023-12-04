import React from 'react';
import ImageGallery from 'react-image-gallery';

function GalleryPage() {
    const images = [
        {
            original: 'images/asm-sort.png',
            thumbnail: 'images/asm-sort.png',
            description: `Assembly code`,
            originalHeight: '450px',
            thumbnailHeight: '75px'
        },
        {
            original: 'images/python-chess.png',
            thumbnail: 'images/python-chess.png',
            description: `Chess game written in Python`,
            originalHeight: '450px',
            thumbnailHeight: '75px'
        },
        {
            original: 'images/linked-list.jpg',
            thumbnail: 'images/linked-list.jpg',
            description: `Linked list in Python`,
            originalHeight: '450px',
            thumbnailHeight: '75px'   
        },
        {
            original: 'images/sort-compare.jpg',
            thumbnail: 'images/sort-compare.jpg',
            description: `Numpy sort comparisons`,
            originalHeight: '450px',
            thumbnailHeight: '75px'   
        },
        {
            original: 'images/discrete-math.jpg',
            thumbnail: 'images/discrete-math.jpg',
            description: `Discrete math proof`,
            originalHeight: '450px',
            thumbnailHeight: '75px'   
        },
        {
            original: 'images/online-poker.jpg',
            thumbnail: 'images/online-poker.jpg',
            description: `Online poker tournament win`,
            originalHeight: '450px',
            thumbnailHeight: '75px'   
        },
        {
            original: 'images/live-poker.jpg',
            thumbnail: 'images/live-poker.jpg',
            description: `World Series of Poker chip stack`,
            originalHeight: '450px',
            thumbnailHeight: '75px'   
        },
        {
            original: 'images/family.jpg',
            thumbnail: 'images/family.jpg',
            description: `Family`,
            originalHeight: '450px',
            thumbnailHeight: '75px'   
        },
        {
            original: 'images/wedding.jpg',
            thumbnail: 'images/wedding.jpg',
            description: `Wedding photo in Thailand`,
            originalHeight: '450px',
            thumbnailHeight: '75px'   
        },
        {
            original: 'images/cliffs-of-moher-2016.jpg',
            thumbnail: 'images/cliffs-of-moher-2016.jpg',
            description: `Overlooking the Cliffs of Moher, Ireland`,
            originalHeight: '450px',
            thumbnailHeight: '75px'   
        }
    ]

    return (
        <>
            <h2>Gallery</h2>
            <p>Showcase of a diverse collection of photos capturing moments from projects, hobbies, vacations, and cherished family memories.</p>
            <article>
                <ImageGallery items={images} />
            </article>
        </>
    )
}

export default GalleryPage;