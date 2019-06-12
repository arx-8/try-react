import {
  all,
  call,
  fork,
  put,
  takeLatest,
  SimpleEffect,
  ForkEffectDescriptor,
} from "redux-saga/effects"
import { actions, ActionTypes } from "./actions"
import {
  callGetMembers,
  CallGetMembersResponse,
} from "data/repository/GitHubRepository"
import { CombinatorEffect } from "@redux-saga/types"

function* runFetchMembers(
  action: ReturnType<typeof actions.fetchMembersStart>
): any {
  const { companyName } = action.payload

  try {
    const caller = (): ReturnType<typeof callGetMembers> =>
      callGetMembers({ organizationName: companyName })
    const resp: CallGetMembersResponse = yield call(caller)

    yield put(
      actions.fetchMembersSucceed({
        companyName,
        users: resp.data,
      })
    )
  } catch (error) {
    yield put(actions.fetchMembersFail({ companyName, error }))
  }
}

function* watchFetchMembers(): IterableIterator<
  SimpleEffect<"FORK", ForkEffectDescriptor>
> {
  yield takeLatest(ActionTypes.FETCH_MEMBERS_START, runFetchMembers)
}

export function* rootSaga(): IterableIterator<
  CombinatorEffect<"ALL", SimpleEffect<"FORK", ForkEffectDescriptor>>
> {
  yield all([fork(watchFetchMembers)])
}
