import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div>
                <section classID="home">

                    <div class="tp-banner-container">
                        <div class="tp-banner" >
                            <ul>
                
                                <li data-transition="fade" data-slotamount="7" data-masterspeed="500" data-saveperformance="on"  data-title="Slide 1">
                        
                                    <img src="images/slide1.jpg"  alt="slidebg1" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
                    
                                    <div class="tp-caption tp-resizeme sft sub-heading"
                                        data-x="center" data-hoffset="0"
                                        data-y="center" data-voffset="-50"
                                        data-speed="300"
                                        data-start="1200"
                                        data-easing="Power1.easeInOut"
                                        data-endeasing="Power1.easeInOut"
                                        data-captionhidden="off"
                                        data-endspeed="300">Welcome to my site
                                    </div>
                
                                    <div class="tp-caption box-title sfb tp-fade tp-resizeme"
                                        data-x="center" data-hoffset="0"
                                        data-y="center" data-voffset="30"
                                        data-speed="300"
                                        data-start="1300"
                                        data-easing="Power1.easeInOut"
                                        data-endeasing="Power1.easeInOut"
                                        data-captionhidden="off"
                                        data-endspeed="300">Jonathan Doe
                                    </div>
                                </li>
                    
                                <li data-transition="fade" data-slotamount="7" data-masterspeed="600" data-saveperformance="on"  data-title="Slide 2" >
                                    
                                    <img src="images/slide2.jpg" alt="" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
                                    <div class="tp-caption tp-resizeme sft sub-heading"
                                        data-x="center" data-hoffset="0"
                                        data-y="center" data-voffset="-50"
                                        data-speed="300"
                                        data-start="1200"
                                        data-easing="Power1.easeInOut"
                                        data-endeasing="Power1.easeInOut"
                                        data-captionhidden="off"
                                        data-endspeed="300">Creative - Professional - Passionate
                                    </div>


                                    <div class="tp-caption box-title tp-fade sfb tp-resizeme"
                                        data-x="center" data-hoffset="0"
                                        data-y="center" data-voffset="30"
                                        data-speed="300"
                                        data-start="1300"
                                        data-easing="Power1.easeInOut"
                                        data-endeasing="Power1.easeInOut"
                                        data-captionhidden="off"
                                        data-endspeed="300">Frontend Developer
                                    </div>
                                </li>
                            </ul>
                            <div class="tp-bannertimer"></div>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default Banner;