import PropTypes from "prop-types"
import React, { Component } from "react"
import Helmet from "react-helmet"
import { connect } from "react-redux"
import { redditActions } from "src/ducks/reddit"
import { Picker } from "./Picker"
import { Posts } from "./Posts"

// eslint-disable-next-line @typescript-eslint/class-name-casing
class _RedditExample extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, redditSelectedSubreddit } = this.props
    dispatch(redditActions.fetchPostsIfNeeded(redditSelectedSubreddit))
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.redditSelectedSubreddit !== prevProps.redditSelectedSubreddit
    ) {
      const { dispatch, redditSelectedSubreddit } = this.props
      dispatch(redditActions.fetchPostsIfNeeded(redditSelectedSubreddit))
    }
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(redditActions.selectSubreddit(nextSubreddit))
    this.props.dispatch(redditActions.fetchPostsIfNeeded(nextSubreddit))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, redditSelectedSubreddit } = this.props
    dispatch(redditActions.invalidateSubreddit(redditSelectedSubreddit))
    dispatch(redditActions.fetchPostsIfNeeded(redditSelectedSubreddit))
  }

  render() {
    const {
      redditSelectedSubreddit,
      posts,
      isFetching,
      lastUpdated,
    } = this.props
    return (
      <div>
        <Helmet>
          <title>Reddit App</title>
        </Helmet>

        <Picker
          value={redditSelectedSubreddit}
          onChange={this.handleChange}
          options={["reactjs", "frontend"]}
        />
        <p>
          {lastUpdated && (
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{" "}
            </span>
          )}
          {!isFetching && (
            <button onClick={this.handleRefreshClick}>Refresh</button>
          )}
        </p>
        {isFetching && posts.length === 0 && <h2>Loading...</h2>}
        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
        {posts.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        )}
      </div>
    )
  }
}

_RedditExample.propTypes = {
  redditSelectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const { redditSelectedSubreddit, redditPostsBySubreddit } = state
  const { isFetching, lastUpdated, items: posts } = redditPostsBySubreddit[
    redditSelectedSubreddit
  ] || {
    isFetching: true,
    items: [],
  }

  return {
    redditSelectedSubreddit,
    posts,
    isFetching,
    lastUpdated,
  }
}

export const RedditExample = connect(mapStateToProps)(_RedditExample)
