import React, { Component } from 'react';
import classNames from 'classnames';


class Goals extends Component {
	constructor(props) {
		super(props);

		this.checkGoals = this.checkGoals.bind(this);
		console.log("Inside Goals constructor and props is: ", this.props);

		this.state = this.checkGoals(this.props);
	}

	componentWillReceiveProps(nextProps) {
		console.log("In componentWillReceiveProps, setting new state");
		console.log("Props are: ", nextProps);
		if (nextProps !== this.props) {
			this.setState(this.checkGoals(nextProps));
		}
	}

  render() {
  	console.log("Goals state: ", this.state);
  	console.log("Goals props: ", this.props);

    return (
      <div className="Goals">
      	<h2>Today's Goals:</h2>
      	<ul>
      		<li>Record 6 Meals: <span className={classNames({green:this.state.recorded, red:!this.state.recorded})}>{this.state.totals.recorded}</span> of 6</li>
      		<li>Eat at least 6 servings of vegetables: <span className={classNames({green:this.state.veg, red:!this.state.veg})}>{this.state.totals.veg}</span> of 6</li>
      		<li>Drink at least 8 drinks: <span className={classNames({green:this.state.drink, red:!this.state.drink})}>{this.state.totals.drink}</span> of 8</li>
      		<li>Eat no more than 3 servings of protein: <span className={classNames({green:this.state.protein, red:!this.state.protein})}>{this.state.totals.protein}</span> of 3</li>
      		<li>Eat no more than 2 servings of fat: <span className={classNames({green:this.state.fat, red:!this.state.fat})}>{this.state.totals.fat}</span> of 2</li>
      		<li>Eat no more than 2 servings of carbohydrates: <span className={classNames({green:this.state.carb, red:!this.state.carb})}>{this.state.totals.carb}</span> of 2</li>
      	</ul>
      </div>
    );
  }


  checkGoals(props) {
  	var meals = props.meals;
  	console.log("Inside checkGoals and meals is: ", meals);
  	var goals = {};
  	var totals = {
  		veg: 0,
  		protein: 0,
  		fat: 0,
  		carb: 0,
  		drink: 0,
  		recorded: meals.length
  	};

  	for (var i=0; i<meals.length; i++) {
  		totals.veg += meals[i].veg;
  		totals.protein += meals[i].protein;
  		totals.fat += meals[i].fat;
  		totals.carb += meals[i].carb;
  		totals.drink += meals[i].drink;
  	}

  	goals.veg = totals.veg >= 6;
  	goals.protein = totals.protein <= 3;
  	goals.fat = totals.fat <= 2;
  	goals.carb = totals.carb <= 2;
  	goals.drink = totals.drink >= 8;
  	goals.recorded = totals.recorded >= 6;
  	goals.totals = totals;

  	return goals
  }


}

export default Goals;