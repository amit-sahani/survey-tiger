import React from 'react';

class TakeSurvey extends React.Component{

    render(){
       const questions = this.props.questions
       console.log(questions.questionType)
        return (<div >
                     <form>

                    {  
                        questions.map((ques, index) => {
                            return ( 
                               <div style={{float:"left", clear:"left"}}>
                                   {   <>
                                       <p>{`${index+1} : ${ques.question['question']}`}</p>
                                       {Object.keys(ques.question['answers']).map((key)=>{
                                            return (<div style={{float:"left", clear:"left", margin:"0px 0px 5px 0px"}} class="form-check">
                                                        {ques.questionType=="Multi-select"?<label class="form-check-label" for="check1">
                                                        <input type="checkbox" class="form-check-input" id="check1" name="option1" value="something" />
                                                        {ques.question['answers'][key]}
                                                        </label>:<label class="form-check-label">
                                                        <input type="radio" class="form-check-input" name="optradio" />
                                                        {ques.question['answers'][key]}
                                                        </label>
                                                        }
                                                    </div>)
                                       }
                                       )}
                                       </>
                                   }
                                   
                               </div>
                               
                            )
                        })
                    } <button style={{float:"right", clear:"left"}} className="tiny ui button">Confirm</button>
                    </form>
                </div>)
    }

}

export default TakeSurvey;