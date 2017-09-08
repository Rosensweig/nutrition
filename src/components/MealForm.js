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
		var mealType = this.mealType.value;
		if (mealType === "Select meal type*") {
			alert("Please select a meal type.");
			return false;
		} else if (mealType === "Other") {
			mealType = this.otherType.value;
		}

		const meal = {
			mealType: mealType,
			veg: parseInt(this.veg.value, 10),
			protein: parseInt(this.protein.value, 10),
			fat: parseInt(this.fat.value, 10),
			carb: parseInt(this.carb.value, 10),
			drink: parseInt(this.drink.value, 10),
			image: this.image.value
		};
		if (meal.mealType === "Other") {
			meal.mealType = this.otherType;
		}
		console.log("Adding new meal: ", meal);
		this.props.addMeal(meal);
		event.target.reset();
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