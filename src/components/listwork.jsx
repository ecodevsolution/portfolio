import React, { Component } from 'react';
import tumb from '../assets/images/portfolio/thumb1.jpg';
import tumb2 from '../assets/images/portfolio/thumb2.jpg';

class Listwork extends Component {
    render() {
        return (
            <div>

                <article className="desktop">
                    <a href="#!projects/project-single.html">
                        <img src={tumb} alt=""/>
                        <div className="overlay">
                            <div className="item-info">
                                <i className="fa fa-film"></i>
                                <h3>Project with video</h3>
                                <span>Photo / Web</span>
                            </div>
                        </div>                                            
                    </a>
                </article>

                <article className="website">
                    <a href="#!projects/project-single.html">
                        <img src={tumb2} alt=""/>
                        <div className="overlay">
                            <div className="item-info">
                                <i className="fa fa-film"></i>
                                <h3>Project with video</h3>
                                <span>Photo / Web</span>
                            </div>
                        </div>                                            
                    </a>
                </article>
                
            </div>
        );
    }
}

export default Listwork;