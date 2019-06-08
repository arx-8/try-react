/** @jsx jsx */
import React from "react"
import { Button, Input } from "semantic-ui-react"
import { connect } from "react-redux"
import { counterActions } from "ducks/counter"
import { css, jsx } from "@emotion/core"
import { Dispatch } from "redux"
import { Formik, Field, FieldProps, getIn } from "formik"
import { RootState } from "ducks/store"

type ReduxStateProps = {
  defaultAmount: number
}

type ReduxDispatchProps = {
  changeDefaultAmount: (amount: number) => void
}

type Props = {
  children?: never
} & ReduxStateProps &
  ReduxDispatchProps

const formInitialValues = {
  amount: "1",
}

const _CounterInput: React.FC<Props> = ({ changeDefaultAmount }) => {
  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={(values, actions) => {
        changeDefaultAmount(Number(values.amount))
        actions.setSubmitting(false)
      }}
      onReset={(_, actions) => {
        changeDefaultAmount(Number(formInitialValues.amount))
        actions.resetForm()
      }}
      render={(props) => (
        <form onSubmit={props.handleSubmit}>
          <div>
            <ErrorMessage name="amount" />
          </div>

          <Field
            name="amount"
            validate={validateAmount}
            render={({ field }: FieldProps) => (
              <Input
                {...field}
                error={!!getIn(props.errors, field.name)}
                placeholder="Input amount..."
              />
            )}
          />

          <div>
            <Button
              primary
              type="submit"
              disabled={!props.isValid || props.isSubmitting}
            >
              Apply
            </Button>
            <Button type="reset" onClick={props.handleReset}>
              Reset
            </Button>
          </div>
        </form>
      )}
    />
  )
}

const validateAmount = (value: string | null): string | null => {
  if (value == null) {
    return "数値を入力してください"
  }
  const parsed = Number.parseInt(value)
  if (Number.isNaN(parsed)) {
    return "数値を入力してください"
  }
  return null
}

const ErrorMessage: React.FC<{ name: string }> = ({ name }) => (
  <Field
    name={name}
    render={({ form }: FieldProps) => {
      const error = getIn(form.errors, name)
      const touch = getIn(form.touched, name)
      return touch && error ? <span css={errMsg}>{error}</span> : null
    }}
  />
)

const errMsg = css`
  color: red;
  font-weight: bold;
`

const mapStateToProps = (state: RootState): ReduxStateProps => {
  return {
    defaultAmount: state.counter.defaultAmount,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => {
  return {
    changeDefaultAmount: (amount) =>
      dispatch(counterActions.changeDefaultAmount(amount)),
  }
}

export const CounterInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CounterInput)
