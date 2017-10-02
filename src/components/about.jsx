import React, { Component } from 'react';
import MyPhoto from '../assets/images/me.png';
import Signature from '../assets/images/signature.PNG';
 
class About extends Component {
    
   constructor(){
        super();
        this.state = {
            data: [],
            exp:null,
            client:null,
            ongoing:null,
            done:null,
            abil: []
        };
    };    

    componentDidMount() {            
        const BASE_URL = 'https://api.shoper.co.id/about.php'; 
        fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            this.setState({ data: json }); 
            
        });   

        
        const EXP = 'https://api.shoper.co.id/experience.php'; 
        fetch(EXP)
        .then(response => response.json())
        .then(item => {
            this.setState({
                          exp: item.experience,
                          client: item.clients,
                          ongoing: item.ongoing,
                          done: item.done
                        });                

        });

        const ABILITY = 'https://api.shoper.co.id/ability.php';  
        fetch(ABILITY)
        .then(response => response.json())
        .then(data => {
                this.setState({abil: data});
        });     
    }

    render() {
        const abilities = this.state.abil.map((abiliti, i) =>{
            return <div key={abiliti.id}>
                       <div className="col-md-4">                            
                           <div className="services-box new-line" >
                               <h4> {abiliti.title}</h4>
                               <div className="services-box-icon">
                                    <i className={abiliti.icon}></i>
                               </div>
                               <div className="service-box-info">
                                   <p>
                                      {abiliti.description}
                                   </p>
                               </div>
                           </div>                                
                       </div>
                   </div>
        });

        const datas = this.state.data.map((data, i) => {
          
            return <div  key = {i}>
                        <p>                            
                           {data.description}
                        </p>
                    </div>
                
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
                                {datas}
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
                                        <strong data-to={this.state.client}>{this.state.client}</strong>
                                        <p>
                                            Clients
                                        </p>
                                    </div>
                                    <div className="counters-item">
                                        <i className="fa fa-flag fa-2x"></i>
                                        <strong data-to={this.state.exp}>{this.state.exp}</strong>                                        
                                        <p>
                                            Year Experience
                                        </p>
                                    </div>
                                    <div className="counters-item">
                                        <i className="fa fa-clock-o fa-2x"></i>
                                        <strong data={this.state.ongoing}>{this.state.ongoing}</strong>                                        
                                        <p>
                                            Ongoing Projects
                                        </p>
                                    </div>
                                    <div className="counters-item">
                                        <i className="fa fa-thumbs-up fa-2x"></i>
                                        <strong data-to={this.state.done}>{this.state.done}</strong>                                        
                                        <p>
                                            Projects Done
                                        </p>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div className="row services" >
                           {abilities}
                           
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;