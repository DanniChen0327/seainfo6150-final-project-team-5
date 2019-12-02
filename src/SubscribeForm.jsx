import React, { Component } from "react";
import styles from "./SubscribeForm.module.css"

export default class SubscribeForm extends Component {

    state = {
        FirstName: '',
        LastName: '',
        email: '',
        number: '',
        gender: '',
        section: '',
        frequency: '',
        suggestion: '',
        errormessage: '',
    };

    handleFormSubmit = (e) => {
        alert('Hi ' + this.state.FirstName + '! Thank you for your subscribe!');
        e.preventDefault();
    };


    handleChanges = (e) => {
        const input = e.target;
        const name = input.name;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        this.setState({[name]: value});
        let err = '';
        if (name === "number") {
            if (value != "" && !Number(value)) {
                err = <strong>Your input must be number! </strong>;
            }
        }
        this.setState({errormessage: err});
    };

    render() {
        const genders = ['Male', 'Female', 'Prefer not to tell'];
        const Frequencies = ['Per Week', 'Per Month', 'Never'];
        const Sections = ['Thanksgiving', 'Christmas', 'Desserts', 'Soups'];

        return (
            <form onSubmit={this.handleFormSubmit}>
                <fieldset>
                    <legend className={styles.borderFont}>Personal Information:</legend>

                    <label>
                        First name :<br/>
                    </label>
                    <input name="FirstName" type="text" placeholder="First Name" value={this.state.FirstName}
                           onChange={this.handleChanges} required="required"/><br/>


                    <label>
                        Last name :<br/>
                    </label>
                    <input name="LastName" type="text" placeholder="Last Name" value={this.state.LastName}
                           onChange={this.handleChanges} required="required"/><br/>

                    <label>
                        Email Address :<br/>
                    </label>
                    <input name="email" type="text" placeholder="Email Address" value={this.state.email}
                           onChange={this.handleChanges} required="required"/><br/>

                    <label>
                        Phone Number (optional):<br/>
                    </label>
                    <input name="number" type="text" placeholder="Phone Number" value={this.state.number}
                           onChange={this.handleChanges}/>
                    {this.state.errormessage}<br/>

                    <label>Gender :</label><br/>
                    {genders.map((gender, i) =>
                        <label key={i}>
                            <input
                                name="gender"
                                value={gender.toUpperCase()}
                                checked={this.state.gender === gender.toUpperCase()}
                                onChange={this.handleChanges}
                                type="radio"
                                required="required"/>
                            {gender}
                        </label>
                    )}
                </fieldset>

                <fieldset>
                    <legend className={styles.borderFont}>Other Information :</legend>
                    <label>Favorite Section :</label><br/>
                    {Sections.map((section, i) =>
                        <label key={i}>
                            <input
                                name="section"
                                value={section.toUpperCase()}
                                checked={this.state.section === section.toUpperCase()}
                                onChange={this.handleChanges}
                                type="radio"
                                required="required"/>
                            {section}
                        </label>
                    )}<br/>

                    <label>Newsletter Frequency :</label><br/>
                    {Frequencies.map((frequency, i) =>
                        <label key={i}>
                            <input
                                name="frequency"
                                value={frequency.toUpperCase()}
                                checked={this.state.frequency === frequency.toUpperCase()}
                                onChange={this.handleChanges}
                                type="radio"
                                required="required"/>
                            {frequency}
                        </label>
                    )}<br/>

                    <label>Suggestions (optional):</label><br/>
                    <textarea name="suggestion" rows="8" cols="50" placeholder=" In case you've got something to share! " value={this.state.suggestion} onChange={this.handleChanges}/>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

