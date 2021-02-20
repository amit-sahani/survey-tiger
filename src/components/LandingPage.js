import React from 'react';


class LandingPage extends React.Component {

    goToCreatePage = () =>{
        this.props.changeSurvey(true)
    }

    goToTakePage = () => {
        this.props.changeSurvey(false)
    }

    render(){
        return (    <div>
                        <div onClick={this.goToCreatePage}
                             className="survey-button text-center">
                            Create Survey
                        </div>
                        <div 
                            onClick={this.goToTakePage}
                            className="survey-button">
                            Take Survey
                        </div>
                    </div>
                
        );
    }
}

export default LandingPage; 