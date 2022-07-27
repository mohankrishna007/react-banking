import React from 'react';
import {Image} from 'react-bootstrap';
import './styles/ImageMain.css';

class ImageMain extends React.Component{
    render(){
        return(
            <div class="Image">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmt6AjT3s9oic-gaBw0N18yZGvzhsQnBpUZQ&usqp=CAU" alt='Image Main'
                width="500px" height="250px" style={{borderRadius: "10px"}}/>
            </div>
        );
    }
}

export default ImageMain;