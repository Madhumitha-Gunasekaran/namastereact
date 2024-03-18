import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:0
        }
    }
    render(){
        const {count} = this.state
        return(
            <div>
                <h2>{this.props.name}</h2>
                <button 
                onClick={()=>this.setState(
                {
                    count:this.state.count+1

                }
                )}>
                    Increment</button>
                <h2>{count}</h2>
                <h3>Location:Coimbatore</h3>
                <h4>Contact:@madhuguna</h4>
            </div>
        )
    }
}
export default UserClass;