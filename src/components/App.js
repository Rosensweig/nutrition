import React, { Component } from 'react';
import reactMixin from 'react-mixin';
import reactLocal from 'react-localstorage';
import Goals from './Goals';
import Day from './Day';
import MealForm from './MealForm';


class App extends Component {
	constructor() {
		super();

		// localStorage.clear();

		var today = new Date().toDateString();

		this.state = {
			days: [{date: today, meals: []}],
			current: today
		};

		console.log("In App constructor, and today's meals are: ", this.state.days[0].meals);
		this.addMeal = this.addMeal.bind(this);
	}

	addMeal(meal) {
		console.log("Adding new meal.");
		var today = new Date().toDateString();
		var meals = [ ...this.state.days[0].meals, meal];
		console.log("New meals list for today: ", meals);
		var days = [...this.state.days];
		days[0] = {date: today, meals};
		console.log("Days list: ", days);
		this.setState({days});
	}

	componentWillUpdate() {
		var today = new Date().toDateString();

		if (this.state.days[0].date !== today) {
			this.setState({days: [{date: today, meals: []},...this.state.days] });
		}
	}

  render() {
  	console.log("Inside App render and meals are: ", this.state.days[0].meals);
    return (
      <div className="App">
      	<h1>Meal Tracker</h1>
				<Goals meals={this.state.days[0].meals} />
        <Day days={this.state.days} current={this.state.current}/>
        <MealForm addMeal={this.addMeal} />
      </div>
    );
  }
}

reactMixin(App.prototype, reactLocal);

export default App;
