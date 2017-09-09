import React, { Component } from 'react';
import Meal from './Meal';

class Day extends Component {
	constructor(props) {
		super(props);

		this.state = this.setCurrentDay(this.props);
		// this.listMealComponents = this.listMealComponents.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps !== this.props) {
			this.setState(this.setCurrentDay(nextProps));
		}
	}

	setCurrentDay(props) {
		var meals;
		for (var i=0; i<props.days.length; i++) {
			if (props.days[i].date === props.current) {
				meals=props.days[i].meals;
				return {meals, i};
			}
		}
	}

  render() {
  	var meals = [];
  	for (var i=0; i<this.state.meals.length; i++) {
  		meals.push( <Meal key={i} mealInfo={this.state.meals[i]}/> );
  	}

    return (
      <div className="Day">
      	<h2><a id="previous">&lt;</a> Meals for {this.props.current} <a id="next">&gt;</a></h2>
      	<ul>{meals}</ul>
      </div>
    );
  }
}

export default Day;