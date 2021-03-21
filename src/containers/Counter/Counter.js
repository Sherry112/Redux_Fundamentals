import React, { Component } from 'react';
import {connect} from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked =  {this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdditionCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractionCounter}  />
                <br />
                <br/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result=>(
                        <li key={result.id} onClick={()=>this.props.onDeleteResult(result.id)}>{result.value}</li>
                    )
                        
                    )}
                </ul>
            </div>
        );
    }
}
//*************()=>this.props.onDeleteResult(result.id) is called an annonymous function. It doesn't execute 
//************************at point of rendering *******************************/
//This state is provided by React-Redux.. this is the state which is written in Reducer.js
const mapStateToProps =state =>{
    return{
        ctr: state.ctr.counter,
        storedResults: state.rslt.results
    }
}

//This method gives access to dispatch event
const mapDispathToProps = dispatch =>{
    return {
        onIncrementCounter : ()=>dispatch(actionCreators.increment()),
        onDecrementCounter : ()=>dispatch(actionCreators.decrement()),
        onAdditionCounter: ()=>dispatch(actionCreators.addition()),
        onSubtractionCounter: ()=>dispatch(actionCreators.subtraction()),
        onStoreResult: (displayResult)=>dispatch(actionCreators.storeResult(displayResult)),
        onDeleteResult: (id)=>dispatch(actionCreators.deleteResult(id))

    }
}
//The connect method allows access of  state to an element as a Prop. We can use ctr anywhere in this componet
export default connect(mapStateToProps, mapDispathToProps)(Counter);

// export default connect(mapStateToProps)(Counter); //if no action to dispatch
// export default connect(null,mapDispathToProps)(Counter); //if no state