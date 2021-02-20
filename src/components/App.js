import React from 'react';
import LandingPage from './LandingPage';
import './App.css';
import Header from './Header';
import CreateSurvey from './CreateSurvey';

class App extends React.Component{

    state = {survey: '', question:[]};

    render(){
        return (<div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3"></div>
                        <div className="col-lg-6 col-md-6" style={{textAlign:"-webkit-center"}}>
                            <Header />
                            {/* <LandingPage /> */}
                            <CreateSurvey questions={this.state.question}/>
                        </div>
                        <div className="col-lg-3 col-md-3"></div>
                    </div>
                    
                </div>
        )
    }
}

export default App;