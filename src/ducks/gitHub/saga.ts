import { CombinatorEffect } from "@redux-saga/types"
import {
  callGetMembers,
  CallGetMembersResponse,
} from "data/apis/GitHubAPIClient"
import { toSerializableError } from "domain/errors/SerializableError"
import {
  all,
  call,
  fork,
  ForkEffectDescriptor,
  put,
  SimpleEffect,
  takeLatest,
} from "redux-saga/effects"
import * as actions from "./actions"

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
    yield put(
      actions.fetchMembersFail({
        companyName,
        error: toSerializableError(error, error.response.status),
      })
    )
  }
}

function* watchFetchMembers(): IterableIterator<
  SimpleEffect<"FORK", ForkEffectDescriptor>
> {
  yield takeLatest(actions.ActionTypes.FETCH_MEMBERS_START, runFetchMembers)
}

export function* rootSaga(): IterableIterator<
  CombinatorEffect<"ALL", SimpleEffect<"FORK", ForkEffectDescriptor>>
> {
  yield all([fork(watchFetchMembers)])
}
