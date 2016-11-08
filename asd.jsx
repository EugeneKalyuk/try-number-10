import React, {Component} from "react";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {Link} from "react-router"
import * as actions from "./category-list.actions"


class CategoryList extends Component {

    componentDidMount() {
        if (this.props.category.type === actions.CATEGORY_LIST_TYPE_NO_DATA) {
            this.props.getCategoryList();
        }
    }

    list(items, prefix) {

        if (!items || !items.length) {
            return null;
        }

        return items.map((item, index)=> {

            let link = `${prefix}/${item.alias.toLowerCase()}-${item.hashId}`;

            return (
                <li key={index}>
                    <Link to={link}>{item.name}</Link>
                    {item.children ? <ul>{this.list(item.children, link)}</ul> : null}
                </li>)
        })
    }

    render() {
        return (<ul>{this.list(this.props.category.payload, '/catalog')}</ul>)
    }
}

export default connect(({category}) => {
    return {
        category: category
    }
}, dispatch => {
    return {
        getCategoryList: bindActionCreators(actions.getCategoryList, dispatch)
    }
})(CategoryList);