/** @jsx jsx */
import React from "react"
import { Button, Input } from "semantic-ui-react"
import { Formik, Field, FieldProps, getIn } from "formik"
import { css, jsx } from "@emotion/core"

type Props = {
  children?: never
}

const formInitialValues = {
  amount: "",
}

export const CounterInput: React.FC<Props> = () => {
  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={(values, actions) => {
        // TODO connect redux
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
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
