import logo from './logo.svg';
import './App.css';
import TOC from "./components/TOC"
import Subject from './components/Subject';
import Content  from './components/Content';
import Control  from './components/Control';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:1,
      subject:{title:'WEB', sub:'Wolrd Wide Web!'},
      welcome:{title:'Welcome', descript:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', descript: 'HTML is HyperText ...'},
        {id:2, title:'CSS', descript: 'CSS is for design ...'},
        {id:3, title:'Javascript', descript: 'JavaScript is for interative ...'}
      ]
    }
  }
  render() {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.descript;
    } else if(this.state.mode === 'read') {
      var i=0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.descript;
          break;
        }
        i += 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({mode:'welcome'});
          }.bind(this)}
          >
        </Subject>
         {/* <header>
          <h1><a href='/' onClick={function(e){
            // 태그가 가지고 있는 기본적인 동작을 못하게 막는 것
            e.preventDefault();

            // bind(this) : this를 찾을 수 없다는 에러가 뜰 때 사용 
            this.setState({
              mode: 'welcome'
            })
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <TOC
        onChangePage ={function(id) {
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
        data={this.state.contents}
        ></TOC>
        <Control onChangeMode={function(_mode) {
          this.setState({
            mode:_mode,
          })
        }.bind(this)}></Control>        
        <Content title={_title} descript={_desc}></Content>
      </div>
    )
  }
}

export default App;
