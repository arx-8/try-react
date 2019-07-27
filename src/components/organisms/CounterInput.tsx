/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { counterOperations } from "ducks/counter"
import { RootState } from "ducks/store"
import { Field, FieldProps, Formik, getIn } from "formik"
import React from "react"
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from "react-redux"
import { Button, Input } from "semantic-ui-react"

type ReduxStateProps = {
  defaultAmount: number
}

type ReduxDispatchProps = {
  changeDefaultAmount: (amount: number) => void
}

type OwnProps = {
  children?: never
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps

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

const mapStateToProps: MapStateToProps<ReduxStateProps, OwnProps, RootState> = (
  state
) => {
  return {
    defaultAmount: state.counter.defaultAmount,
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<
  ReduxDispatchProps,
  OwnProps
> = (dispatch) => {
  return {
    changeDefaultAmount: (amount) =>
      dispatch(counterOperations.changeDefaultAmount(amount)),
  }
}

export const CounterInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CounterInput)
