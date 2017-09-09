import React, { Component } from 'react';

class Meal extends Component {
	render() {
		return (
			<li className="Meal">
				<h4>{this.props.mealInfo.mealType}</h4>
				<p>{this.props.mealInfo.veg} vegetables, {this.props.mealInfo.protein} proteins, {this.props.mealInfo.fat} fats, {this.props.mealInfo.carb} carbohydrates, and {this.props.mealInfo.drink} drinks. </p>
			</li>
		)
	}
}

export default Meal;