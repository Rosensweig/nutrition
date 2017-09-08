import React, { Component } from 'react';

class Goals extends Component {
	constructor() {
		super();

		const meals = this.props.meals;
		console.log("Meals: ", meals);
		const goals = this.checkGoals(meals);
		this.state = {...goals};
	}

  render() {

    return (
      <div className="Goals">
      	<h2>Today's Goals:</h2>
      	<ul>
      		<li>Record 6 Meals: <span>{this.state.totals.recorded}</span> of 6</li>
      		<li>Eat at least 6 servings of vegetables: <span>{this.state.totals.veg}</span> of 6</li>
      		<li>Drink at least 8 drinks: <span>{this.state.totals.drink}</span> of 8</li>
      		<li>Eat no more than 3 servings of protein: <span>{this.state.totals.protein}</span> of 3</li>
      		<li>Eat no more than 2 servings of fat: <span>{this.state.totals.fat}</span> of 2</li>
      		<li>Eat no more than 2 servings of carbohydrates: <span>{this.state.totals.carb}</span> of 2</li>
      	</ul>
      </div>
    );
  }


  checkGoals(meals) {
  	var goals = {};
  	var totals = {
  		veg:0,
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