import React from 'react';
import QuestionsAndAnswers from './QuestionsAndAnswers';
import Questions from './QuestionsAndAnswers';

class CreateSurvey extends React.Component{

    state = {open:false, selected:"Select Question Type", question:[]}

    questionId=0;

    onSelectedChange(selected){
        console.log(selected.trim());
        this.setState({selected:selected.trim()});
        console.log(this.state.question)
    }

    setQuestions = (question) => {
        this.questionId = this.questionId + 1;
        this.setState({question: [ ...question ,{[this.questionId]:question}]})
        console.log(this.state.questions)
    }


    render(){
        return (
                <div>
                    <div className="dropdown">
                            <div onClick={()=>{
                            this.setState({open: !(this.state.open)})}} className={`graydiv ui selection dropdown ${this.state.open ? 'visible active' :''}`}>
                            <i className="dropdown icon"></i>
                            <div className="text">{this.state.selected}</div>
                            <div className={`menu ${this.state.open ? 'visible transition':''}`}>
                                <div
                                    onClick={(e) => { 
                                        console.log(this.id = this.id+1)
                                        this.onSelectedChange(e.target.innerHTML) 
                                        }}
                                        className="item">
                                        Multi-select
                                </div>
                                <div
                                    onClick={(e) => { 
                                        this.onSelectedChange(e.target.innerHTML) 
                                        }}
                                        className="item">
                                        Single select
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        { (this.state.selected != "Select Question Type") ?
                            <div>
                                <QuestionsAndAnswers setQuestions = {this.setQuestions}/>
                            </div>
                            :null
                        }

                    </div>
                </div>
        );
    }

}

export default CreateSurvey;