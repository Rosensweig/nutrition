import React, { Component } from 'react';
import reactMixin from 'react-mixin';
import reactLocal from 'react-localstorage';
import Goals from './Goals';
import Day from './Day';
import MealForm from './MealForm';


class App extends Component {
	constructor() {
		super();

		localStorage.clear();

		var today = new Date().toDateString();

		this.state = {
			days: [{date: today, meals: []}],
			current: today
		};

		// if (!this.state.days[0] || this.state.days[0].date !== today) {
		// 	this.state.days = [ {date: today, meals: []}, ...this.state.days ];
		// }

		console.log("Today's meals: ", this.state.days[0].meals);
		this.addMeal = this.addMeal.bind(this);
	}

	addMeal(meal) {
		var today = new Date().toDateString();
		var meals = [ ...this.state.days[today], meal];
		var days = [ {date: today, meals}, ...this.state.days];
		this.setState({days});
	}


  render() {
    return (
      <div className="App">
      	<h1>Meal Tracker</h1>
				<Goals meals={[...this.state.days[0].meals]} />
        <Day/>
        <MealForm addMeal={this.addMeal} />
      </div>
    );
  }
}

reactMixin(App.prototype, reactLocal);

export default App;
