import React, { Component } from 'react';

class UpdateContent extends Component{
  render(){
    console.log(this.props.data);
    console.log('Update render');
    return (
      <article>
        <h2>Update</h2>
        <form action = "/create_process" method = "post"
        onSubmit = {function(e){
          e.preventDefault();
          this.props.onSubmit(
            e.target.title.value,
            e.target.desc.value
          );
        }.bind(this)}>
          <p><input type = "text" name = "title" placeholder = "title"></input></p> {/* placeholder 은 빈칸에 나오는 글자 */}
          <p>
            <textarea name = "desc" placeholder = "description"></textarea>
          </p>
          <p>
            <input type = "submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;