import "./styles.css";
import React, { Component } from "react";
import Subject from "./components/Subject"; //Subject load
import TOC from "./components/TOC";
import Content from "./components/Content";
import Control from "./components/Control";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/Createcontent";


class App extends Component {
    constructor(props) {
        //consructor 가 제일 먼저 실행 되면서 초기화를 담당한다.
        super(props);
        this.state = {
            mode: "create",
            selected_content_id: 2,
            subject: { title: "WEB2", sub: "World Wid Web!" },
            welcome: { title: "Welcome", desc: "Hello React!" },
            contents: [
                { id: 1, title: "HTML", desc: "Html is Hypertext..." },
                { id: 2, title: "CSS", desc: "CSS is for design" },
                {id: 3, title: "Javascript", desc: "Javascript is for interactive"}
            ]
        };
    }
    render() {
        var _title,
            _desc, _article = null;
        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title = {_title} desc = {_desc}></ReadContent>
        } else if (this.state.mode === "read") {
            var i = 0;
            while (i < this.state.contents.length) {
                var data = this.state.contents[i];
                if (data.id === this.state.selected_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i = i + 1;
            }
            _article = <ReadContent title = {_title} desc = {_desc}></ReadContent>
        } else if(this.state.mode === 'create'){
            _article = <CreateContent onSubmit = {function(_title,_desc){
                this.max_content_id = this.max_content_d + 1;
                var _contents = this.state.contents.concat(
                    {id : this.max_content_id, title : _title, desc : _desc}
                );
                this.setState({
                    contents : _contents
                });
            }.bind(this)}></CreateContent>
        }
        return (
            <div className="App">
                <h1>Hello world! </h1>
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function () {
                        this.setState({ mode: "welcome" });
                    }.bind(this)}
                ></Subject>
                <TOC
                    onChangePage={function (id) {
                        this.setState({
                            mode: "read",
                            selected_content_id: Number(id)
                        });
                    }.bind(this)}
                    data={this.state.contents}
                ></TOC>
                <Control onChangeMode = {function(mode){
                    this.setState({
                        mode : mode
                    });
                }.bind(this)}></Control>
                {_article}
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;