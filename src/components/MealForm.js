import React, { Component } from 'react';
import classNames from 'classnames';

class MealForm extends Component {
	constructor() {
		super();
		this.state = {
			inputHidden: true
		};
		this.addMeal = this.addMeal.bind(this);
		this.showHideInput = this.showHideInput.bind(this);
	}

	showHideInput(event) {
		if (this.mealType.value === "Other" && this.state.inputHidden) {
			this.setState({inputHidden:false});
		} else if (this.mealType.value !== "Other" && !this.state.inputHidden) {
			this.setState({inputHidden:true});
		}
	}

	addMeal(event) {
		event.preventDefault();

		const meal = {
			mealType: this.mealType.value,
			veg: this.veg.value,
			protein: this.protein.value,
			fat: this.fat.value,
			carb: this.carb.value,
			drink: this.drink.value,
			image: this.image.value
		};
		if (meal.mealType === "Other") {
			meal.mealType = this.otherType;
		}
		this.props.addMeal(meal);
	}

  render() {

    return (
      <div className="MealForm">
      	<form onSubmit={this.addMeal}>
      		<h2>Enter meal info</h2>
      		<select onChange={this.showHideInput} ref={(mealType) => {this.mealType = mealType}}>
      			<option value={null}>Select meal type*</option>
      			<option value="Breakfast">Breakfast</option>
      			<option value="Lunch">Lunch</option>
      			<option value="Dinner">Dinner</option>
      			<option value="Snack">Snack</option>
      			<option value="Other">Other</option>
      		</select>
					<input id="hiddenInput" className={classNames({hidden:this.state.inputHidden})} type="text" placeholder="Enter Meal Name" ref={(otherType) => {this.otherType = otherType}}/>
      		<p>How many servings of _________ did you eat this meal?: </p>
      		<label>Vegetables <input type="number" defaultValue="0" min="0" max="6" ref={(veg) => {this.veg = veg}} /></label>
      		<label>Proteins <input type="number" defaultValue="0" min="0" max="6" ref={(protein) => {this.protein = protein}} /></label>
      		<label>Fats <input type="number" defaultValue="0" min="0" max="6" ref={(fat) => {this.fat = fat}} /></label>
      		<label>Carbohydrates <input type="number" defaultValue="0" min="0" max="6" ref={(carb) => {this.carb = carb}} /></label>
      		<label>Drinks <input type="number" defaultValue="0" min="0" max="6" ref={(drink) => {this.drink = drink}} /></label>
      		<label>Custom image (optional): <input type="file" accept="image/*" ref={(image) => {this.image = image}} /></label>
      		<button type="submit">Add Meal</button>
      	</form>
    	</div>
    );
  }
}

export default MealForm;