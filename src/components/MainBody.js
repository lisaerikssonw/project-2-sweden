import Article from './Article';
import Aside from './Aside';
import React, { Component } from 'react';

class MainBody extends Component {
    render() {
        if(this.props.page==="home"){
            return (
            <div>
                <Aside/>
                <Article/>
            </div>
            )
        }else if(this.props.page==="falun"){
            return (
                <article>
                <h1>Falun</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                </article>
            )

        }
    }

}

export default MainBody;