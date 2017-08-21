import React, { Component } from 'react';
import tumb from '../assets/images/portfolio/thumb1.jpg';

class Listwork extends Component {
    render() {
        return (
            <div>

                <article className="design photo">
                    <a href="#!projects/project-single.html">
                        <img src={tumb} alt=""/>
                        <div className="overlay">
                            <div className="item-info">
                                <i className="fa fa-camera"></i>
                                <h3>Project with single image</h3>
                                <span>Design / Photo</span>
                            </div>
                        </div>                                            
                    </a>
                </article>
                
            </div>
        );
    }
}

export default Listwork;