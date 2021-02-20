import React from 'react';


class LandingPage extends React.Component {

    state = {questions:[]}

    getQuestions = (questions) =>{
        this.setState({questions:questions})
    }    

    render(){
        return (    <div>
                        <div getQuestions = {this.getQuestions} 
                             className="survey-button text-center">
                            Create Survey
                        </div>
                        <div className="survey-button">
                            Take Survey
                        </div>
                    </div>
                
        );
    }
}

export default LandingPage; 