import PropTypes from "prop-types"
import React, { Component } from "react"

export class Posts extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
}
