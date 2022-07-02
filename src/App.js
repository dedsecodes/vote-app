import React,{Component} from 'react';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			sports : [
				{name: "Soccer", votes: 0},
				{name: "HandBall", votes: 0},
				{name: "BasketBall", votes: 0},
				{name: "Tennis", votes: 0}
			]
		}
	}

	vote (i) {
		let newSports = [...this.state.sports];
		newSports[i].votes++;
		function swap(array, i, j) {
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		this.setState({sports: newSports});
		
	}

	render(){
		return(
			<>
				<h1>Vote For Your Best Sport!</h1>
				<div className="sports">
					{
						this.state.sports.map((lang, i) => 
							<div key={i} className="sport">
								<div className="voteCount">
									{lang.votes}
								</div>
								<div className="sportName">
									{lang.name}
								</div>
								<button onClick={this.vote.bind(this, i)}>Click Here</button>
							</div>
						)
					}
				</div>
			</>
		);
	}
}
export default App;