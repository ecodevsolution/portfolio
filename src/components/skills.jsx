import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                <section id="skill" className="section-content bg2">
                    <div className="container">
                        <div className="row">                            
                            <div className="section-title item_bottom text-center">
                                <div>
                                    <span className="fa fa-bar-chart-o fa-2x"></span>
                                </div>
                                <h1>My <span>Skills</span></h1>
                            </div>                        
                        </div>
                        <div className="row text-center item_bottom">
                            <div className="col-md-2">
                                <div className="chart" data-percent="85">
                                    <span className="percent">85</span>
                                    <h4>C#</h4>
                                    <p>
                                        I have experience in C# language for 3 years.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-2 ">
                                <div className="chart" data-percent="75">
                                    <span className="percent">75</span>
                                    <h4>Java</h4>
                                    <p>
                                        I have experience in C# language for a half 2 years.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="chart" data-percent="85">
                                    <span className="percent">85</span>
                                    <h4>HTML</h4>
                                    <p>
                                        I have experience in C# language for 3 years.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="chart" data-percent="80">
                                    <span className="percent">80</span>
                                    <h4>CSS</h4>
                                    <p>
                                        I have experience in C# language for 3 years.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="chart" data-percent="75">
                                    <span className="percent">75</span>
                                    <h4>jQuery</h4>
                                    <p>
                                        I have experience in C# language for 2 years.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="chart" data-percent="85">
                                    <span className="percent">85</span>
                                    <h4>PHP</h4>
                                    <p>
                                        I have experience in C# language for 3 years.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row new-line item_bottom">
                            <div className="col-md-6">
                                <ul className="skillBar">
                                    <li>
                                        <div className="skillBg">
                                            <span data-width="85"><strong>Leadership 85%</strong></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="skillBg">
                                            <span data-width="90"><strong>Interpersonal Communication 90%</strong></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="skillBar">
                                    <li>
                                        <div className="skillBg">
                                            <span data-width="80"><strong>English 80%</strong></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;