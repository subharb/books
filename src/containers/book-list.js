import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return(
                <li key={book.title}
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
            );
        });
    }
    render(){
        console.log("Render book List");
        return(
            <ul className="list-group-list-sm4">
                {this.renderList()}
            </ul>
        );
    }
}
//La función que conecta el contendor con el estado
function mapStateToProps(state){
  return{
    books : state.books
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

//Esto lo hace exportarse como un contenedor
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
