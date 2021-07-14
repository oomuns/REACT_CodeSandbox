import React, { Component } from "react";

class TOC extends Component {
    shouldComonentUpdate(newProps, newState){   //render이전에 호출된다, false면 render가 호출되지 않도록 약속되어있다.
        console.log(newProps.data, this.props.data);
        if(this.props.data === newProps.data){
            return false;
        }
        return true;
    }
    render() {
        console.log("TOCRENDER");
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a
                        href={"/content/" + data[i].id}
                        data-id={data[i].id}
                        onClick={function (e) {
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);   //props는 readonly
                        }.bind(this)}
                    >
                        {data[i].title}
                    </a>
                </li>
            ); //파일마다 key 필요
            i = i + 1;
        }
        return (
            <nav>
                <ul>{lists}</ul>
            </nav>
        );
    }
}

export default TOC;