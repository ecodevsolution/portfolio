import React, { Component } from 'react';
import Slide1 from '../assets/images/slide1.jpg';
import Slide2 from '../assets/images/slide2.jpg';



class Slider extends Component {
    
    render() {

        var s1 = {
            zIndex: 2,
            maxWidth: 'auto',
            maxHeight: 'auto',        
            whiteSpace: 'nowrap' // 'ms' is the only lowercase vendor prefix
        };
        var s2 = {
            zIndex: 3,
            maxWidth: 'auto',
            maxHeight: 'auto',        
            whiteSpace: 'nowrap' // 'ms' is the only lowercase vendor prefix
        };

      

        return (
            <div>
               <section id="home">         
                    <div className="tp-banner-container">
                        <div className="tp-banner" >
                            <ul>                                
                                <li data-transition="fade" data-slotamount="7" data-masterspeed="500" data-saveperformance="on"  data-title="Slide 1">                                
                                    <img src={Slide1} alt="slidebg1" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />                                    
                                    <div className="tp-caption tp-resizeme sft sub-heading"
                                        data-x="center" data-hoffset="0"
                                        data-y="center" data-voffset="-50"
                                        data-speed="300"
                                        data-start="1200"
                                        data-easing="Power1.easeInOut"
                                        data-endeasing="Power1.easeInOut"
                                        data-captionhidden="off"
                                        data-endspeed="300"
                                        style={s1}>Welcome to my site
                                    </div>
                                    
                                    <div className="tp-caption box-title sfb tp-fade tp-resizeme"
                                        data-x="center" data-hoffset="0"
                                        data-y="center" data-voffset="30"
                                        data-speed="300"
                                        data-start="1300"
                                        data-easing="Power1.easeInOut"
                                        data-endeasing="Power1.easeInOut"
                                        data-captionhidden="off"
                                        data-endspeed="300"
                                        style={s2}>Adi Nugraha
                                    </div>
                                </li>
                                
                                <li data-transition="fade" data-slotamount="7" data-masterspeed="600" data-saveperformance="on"  data-title="Slide 2">
                                    
                                    <img src={Slide2} alt="" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
                                    
                                    <div className="tp-caption tp-resizeme sft sub-heading"
                                        data-x="center" data-hoffset="0"
                                        data-y="center" data-voffset="-50"
                                        data-speed="300"
                                        data-start="1200"
                                        data-easing="Power1.easeInOut"
                                        data-endeasing="Power1.easeInOut"
                                        data-captionhidden="off"
                                        data-endspeed="300"
                                        style={s1}>Creative - Professional - Passionate
                                    </div>
                                    
                                    <div className="tp-caption box-title tp-fade sfb tp-resizeme"
                                        data-x="center" data-hoffset="0"
                                        data-y="center" data-voffset="30"
                                        data-speed="300"
                                        data-start="1300"
                                        data-easing="Power1.easeInOut"
                                        data-endeasing="Power1.easeInOut"
                                        data-captionhidden="off"
                                        data-endspeed="300"
                                        style={s2}>Developer
                                    </div>
                                </li>
                            </ul>
                            <div className="tp-bannertimer"></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Slider;