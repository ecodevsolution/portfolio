import React, { Component } from 'react';
import MyPhoto from '../assets/images/me.png';
import Signature from '../assets/images/signature.PNG';

const BASE_URL = 'http://uatspaj.mnclife.com/index.php/api/service/tsar/?client_name=ROLLA&birth_date=1966-04-03%2000:00:00.000&gender=m&risk_group=term&format=json';
  
class About extends Component {

    render() {
          var myOptions = { 
            method:'GET',                       
            mode: 'cors',
            cache: 'default'
        };
        
        fetch(BASE_URL, myOptions )
            .then(response => response.json())
            .then(json => {
                console.log('a',json[0]);
                // const artist = json.artists.items[0];
                // this.setState({artist});      
            });        
     
        return (
            <div>
                 <section id="about" className="section-content bg1">
                    <div className="container">
                        <div className="row">                                
                            <div className="section-title item_bottom text-center" >
                                <div>
                                    <span className="fa fa-user fa-2x"></span>
                                </div>
                                <h1>About <span>Me</span></h1>
                            </div>                            
                        </div>

                       <div className="row">
                            <div className="col-md-4 text-center item_bottom" >
                                <img src={MyPhoto} className="img-center img-responsive" alt=""/>                                
                                <div className="name-title">
                                    <h2>Adi Nugraha</h2>                                    
                                    <h5>Web and Application Developer</h5>                                    
                                </div>
                            </div>                            
                            <div className="col-md-4 item_top" >
                                <p className="quoteline">
                                    Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.
                                </p>
                                <p>
                                    Hello, I'm a "Web and Application Developer" from Jakarta, Indonesia. I hold a bachelor's degree of Information System from the Binus University.
                                </p>
                                <p>
                                    I currently make a team project and the name is EDSPROJECT, where I spend most of my time crafting and working on awesome projects.
                                </p>
                                <p className="text-right">
                                    <img src={Signature} alt="signature" />
                                </p>
                            </div>
                            
                            <div className="col-md-4 item_bottom">
                                
                                <ul className="fa-ul">
                                    <li><i className="fa fa-li fa-calendar"></i><strong>Birthdate</strong> : 04 September 1992</li>
                                    <li><i className="fa fa-li fa-mobile"></i><strong>Phone</strong> : +62 81210854342 </li>
                                    <li><i className="fa fa-li fa-envelope-o"></i><strong>Email</strong> : me@adinugraha.my.id</li>
                                    <li><i className="fa fa-li fa-globe"></i><strong>Website</strong> : https://adinugraha.my.id </li>                                    
                                </ul>
                               
                                <div className="number-counters text-center new-line" >
                                    <div className="counters-item">
                                        <i className="fa fa-group fa-2x"></i>
                                        <strong data-to="20">20</strong>                                    
                                        <p>
                                            Clients
                                        </p>
                                    </div>
                                    <div className="counters-item">
                                        <i className="fa fa-flag fa-2x"></i>
                                        <strong data-to="5">5</strong>                                        
                                        <p>
                                            Year Experience
                                        </p>
                                    </div>
                                    <div className="counters-item">
                                        <i className="fa fa-clock-o fa-2x"></i>
                                        <strong datann="0">0</strong>                                        
                                        <p>
                                            Ongoing Projects
                                        </p>
                                    </div>
                                    <div className="counters-item">
                                        <i className="fa fa-thumbs-up fa-2x"></i>
                                        <strong data-to="20">20</strong>                                        
                                        <p>
                                            Projects Done
                                        </p>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div className="row services" >
                            <div className="col-md-4">                            
                                <div className="services-box new-line item_left" >
                                    <h4>WEB DESIGN</h4>
                                    <div className="services-box-icon">
                                        <i className="fa fa-smile-o fa-3x"></i>
                                    </div>
                                    <div className="service-box-info">
                                        <p>
                                            Have ability of CSS3 and HTML5, so i can make your website like company profile or marketing website to be an amazing and responsive.
                                        </p>
                                    </div>
                                </div>                                
                            </div>
                            <div className="col-md-4">                                
                                <div className="services-box new-line item_bottom">
                                    <h4>Web Design</h4>
                                    <div className="services-box-icon">
                                        <i className="fa fa-html5 fa-3x"></i>
                                    </div>
                                    <div className="service-box-info">
                                        <p>
                                            I have great ability of PHP and i can make your custom request for application your business like e-commerce, system for event-organizer etc.
                                        </p>
                                    </div>
                                </div>                                
                            </div>
                            <div className="col-md-4 clearfix">                                
                                <div className="services-box new-line item_right">
                                    <h4>Wordpress Themes</h4>
                                    <div className="services-box-icon">
                                        <i className="fa fa-link fa-3x"></i>
                                    </div>
                                    <div className="service-box-info">
                                        <p>
                                            Great ability of C# and Java language, making an application for your business to make sure your business integrated.
                                        </p>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;