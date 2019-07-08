export const ActionTypes = {
  REQUEST_POSTS: "REQUEST_POSTS",
  RECEIVE_POSTS: "RECEIVE_POSTS",
  SELECT_SUBREDDIT: "SELECT_SUBREDDIT",
  INVALIDATE_SUBREDDIT: "INVALIDATE_SUBREDDIT",
}

function selectSubreddit(subreddit) {
  return {
    type: ActionTypes.SELECT_SUBREDDIT,
    subreddit,
  }
}

function invalidateSubreddit(subreddit) {
  return {
    type: ActionTypes.INVALIDATE_SUBREDDIT,
    subreddit,
  }
}

function requestPosts(subreddit) {
  return {
    type: ActionTypes.REQUEST_POSTS,
    subreddit,
  }
}

function receivePosts(subreddit, json) {
  return {
    type: ActionTypes.RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map((child) => child.data),
    receivedAt: Date.now(),
  }
}

function fetchPosts(subreddit) {
  return (dispatch) => {
    dispatch(requestPosts(subreddit))
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((response) => response.json())
      .then((json) => dispatch(receivePosts(subreddit, json)))
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.redditPostsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}

export const actions = {
  fetchPostsIfNeeded,
  selectSubreddit,
  invalidateSubreddit,
}
