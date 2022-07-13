import { Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    // 이전 props와 newProps가 같으면 추가된게 없어 바뀐게 없다는 뜻이므로 render 호출 X
    if(this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
    render() {
      console.log('TOC render');
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i<data.length) {
        lists.push(
          <li key={data[i].id}>
            <a 
            href={"/content/"+data[i].id}
            data-id={data[i].id}
              onClick={function(e) {
                  e.preventDefault();
                  this.props.onChangePage(e.target.dataset.id);
              }.bind(this)} 
              > {data[i].title}</a>
              </li>);
        i = i+1;
      }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      )
    }
  }

  export default TOC;