import { Component } from 'react';

class ReadContent extends Component {
    render () {
      console.log('Content render');
      return (
        <article>
          <h2>Create</h2>
          <form action='/create_process' method='post'
          onSubmit={function(e) {
            e.preventDefault();
          }.bind(this)}
          >
            <p><input type="text" name="title" placeholder='title' /></p>
            <p><textarea name="desc" placeholder='description'></textarea></p>
            <p><input type="submit"/></p>
          </form>
        </article>
      )
    }
  }

  export default ReadContent;