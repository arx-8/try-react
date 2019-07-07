import { ActionTypes } from "./actions"

function selectedSubreddit(state = "reactjs", action) {
  switch (action.type) {
    case ActionTypes.SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
  },
  action
) {
  switch (action.type) {
    case ActionTypes.INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true,
      })
    case ActionTypes.REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      })
    case ActionTypes.RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt,
      })
    default:
      return state
  }
}

function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case ActionTypes.INVALIDATE_SUBREDDIT:
    case ActionTypes.RECEIVE_POSTS:
    case ActionTypes.REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action),
      })
    default:
      return state
  }
}

export const reducers = {
  postsBySubreddit,
  selectedSubreddit,
}
