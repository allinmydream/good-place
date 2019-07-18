import React, { Component } from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

class Post extends Component {
    render() {
        const { postWriter, postContent, postAt, postNo } = this.props.row;
        return (
        <ListGroup>
            <ListGroupItem>
                <ListGroupItemHeading>{postNo}. {postWriter} --{postAt.toLocaleDateString('ko-KR')}</ListGroupItemHeading>
                <ListGroupItemText>{postContent}</ListGroupItemText>
            </ListGroupItem>
        </ListGroup>
        )
    }
}

export default Post
