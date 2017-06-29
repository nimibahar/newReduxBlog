import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';


class PostsNew extends Component {
  renderField(field){
    {/* Destructuring properties from a nested object: */}
    const { meta: { touched, error} } = field;
    const conditionalClassName = `form-group ${ touched && error ? 'has-danger' : '' }`

    return(
      <div className={conditionalClassName}>
        <label>{field.label}</label>
        <input
          className="form-control"
          placeholder={field.placeholder}
          type={field.type}
          { ...field.input } //This is automatically being created
        />
        <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(this);
    console.log(values);
    this.props.createPost(values);
  }


  render() {
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for post"
          placeholder="Enter your title here"
          name="title"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Categories for post"
          placeholder="Enter your tags here"
          name="categories"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Content for post"
          placeholder="Enter your content here"
          name="content"
          type="textarea"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
 // console.log(values)
 const errors = {};
 // Do some logic operations on the values object
 if(!values.title || values.title.length < 3 ) {
   errors.title = "This is a mandatory field. In order to submit and save your post, please provide some title that is at least 3 character length";
 }

 if(!values.categories) {
   errors.categories = "This is a mandatory field. In order to submit and save your post, please provide some category";
 }

 if(!values.content) {
   errors.content = "This is a mandatory field. In order to submit and save your post, please provide some content";
 }

 return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(
  connect(null, { createPost })(PostsNew)
);
