import { CombinatorEffect } from "@redux-saga/types"
import {
  all,
  call,
  fork,
  ForkEffectDescriptor,
  put,
  SimpleEffect,
  takeLatest,
} from "redux-saga/effects"
import {
  callGetMembers,
  CallGetMembersResponse,
} from "src/data/apis/GitHubAPIClient"
import { toSerializableError } from "src/domain/errors/SerializableError"
import { AllowedAny } from "src/types/Utils"
import * as actions from "./actions"

function* runFetchMembers(
  action: ReturnType<typeof actions.fetchMembersStart>
): AllowedAny {
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
