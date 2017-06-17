import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          placeholder={field.placeholder}
          type={field.type}
          { ...field.input }
        />
      </div>
    );
  }


  render() {
    return(
      <from>
        <Field
          label="Title for post"
          placeholder="Enter your title here"
          name="title"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Tags for post"
          placeholder="Enter your tags here"
          name="tags"
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
      </from>
    );
  }
}

export default reduxForm({
  form: "PostsNewForm"
})(PostsNew);
