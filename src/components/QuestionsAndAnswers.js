import React from 'react';

class QuestionsAndAnswers extends React.Component{

    state = {question:"", answers:{1:""}, add:false, publish:false}

    id = 1;

    incrementHandler = () => {
        this.id = this.id +1 ;
        if(this.id<=4){
            this.setState({answers: {...this.state.answers, [this.id]:""}})
        }

    }

    onInputChange = (e) => {
        const key = e.target.accessKey
        console.log("jai ho", key)
        this.setState({answers: {...this.state.answers, [key]:e.target.value}})
    }

    onQuestionChange = (e) => {
        this.setState({question: e.target.value})
    }

    submitQuestion = (e)=> {
        e.prevenDefault();
        if(this.state.add){
            this.props.setQuestions({question:this.state.question, answers: this.state.answers})
        }
    }

    render(){
        const ans = this.state.answers
        
        return(
            <div>
                <form onSubmit={this.submitQuestion}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">?</span>
                        </div>
                        <input type="text" className="form-control"  aria-label="Username"
                               value ={this.state.question}
                               onChange={this.onQuestionChange}
                               aria-describedby="basic-addon1" />
                    </div>
                    <span style={{float:"left", margin:"10px 0px"}}>Options</span>
                    <div>
                    {(Object.keys(this.state.answers)).map((key) => {return (<div key ={key} className="input-group">
                        <input accessKey ={key} type="text" className="form-control" value = {ans[key]} 
                            onChange={this.onInputChange} 
                            aria-label="Amount (to the nearest dollar)" />
                        <div className="input-group-append">
                            <span key ={key} onClick={this.incrementHandler} className="input-group-text">+</span>
                            <span className="input-group-text">-</span>
                        </div>
                    </div>  )
                    }
                    )
                    }
                    </div>
                    <div style={{ float: "right" }}>
                        <button type='submit' onClick ={() => {this.setState({add:true})}} className="tiny ui button">Add Question</button>
                        <button type='submit' onClick ={() => {this.setState({publish:true})}} className="tiny ui button">Publish</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default QuestionsAndAnswers;