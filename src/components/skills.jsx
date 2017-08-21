import React, { Component } from 'react';

class Skills extends Component {
    render() {

        var style = {
            opacity: '1',
            bottom: '0px'
        };

        return (
            <div>
                <section classID="skill" className="section-content bg2">
                    <div className="container">
                        <div className="row">                            
                            <div className="section-title item_bottom text-center" style={style}>
                                <div>
                                    <span className="fa fa-bar-chart-o fa-2x"></span>
                                </div>
                                <h1>My <span>Skills</span></h1>
                            </div>                        
                        </div>

                        <div className="row text-center item_bottom">
                            <div className="col-md-2">
                                <div className="chart" data-percent="91">
                                    <span className="percent">91</span>
                                    <h4>Photoshop</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                           
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;