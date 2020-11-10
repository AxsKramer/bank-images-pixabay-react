import React from 'react';
import Image from './Image';

const ListImages = ({images}) => (
        <div className="col-12 py-5 row">
            {images.map(image => <Image key={image.id} image={image} />)}
        </div>
)
 
export default ListImages;