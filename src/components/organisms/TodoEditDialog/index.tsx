import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import TextField from "@material-ui/core/TextField"
import { Todo, TodoId, VisibilityFilterValue } from "domain/models/Todo"
import { RootState } from "ducks/store"
import { todoAsyncRequestActions } from "ducks/todoAsync"
import { selectors } from "ducks/todoAsync/selectors"
import { TodoAsyncDispatch } from "ducks/todoAsync/types"
import { Field, FieldProps, Formik, getIn } from "formik"
import React, { Fragment } from "react"
import { connect } from "react-redux"
import * as Yup from "yup"

type ReduxStateProps = {
  editTargetId?: TodoId
  formInitialValues: FormValues
}

type ReduxDispatchProps = {
  dispatch: TodoAsyncDispatch
}

type ReduxMergeProps = {
  fetchEditTarget: () => void
} & ReduxStateProps &
  ReduxDispatchProps

type FormValues = Pick<Todo, "label" | "status">

type Props = {
  open: boolean
  onClose: () => void
  onSubmit: (values: FormValues) => void
  children?: never
}

const _TodoEditDialog: React.FC<
  Props & ReduxStateProps & ReduxDispatchProps & ReduxMergeProps
> = ({ open, onClose, onSubmit, formInitialValues }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={formInitialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmit(values)
        actions.setSubmitting(false)
      }}
      render={({
        dirty,
        errors,
        handleReset,
        handleSubmit,
        isValid,
        values,
      }) => (
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>Edit your TODO</DialogTitle>
          <DialogContent>
            <div>
              <Field
                name="label"
                render={({ field }: FieldProps) => (
                  <TextField
                    {...field}
                    label={field.name}
                    error={!!getIn(errors, field.name)}
                    margin="normal"
                    value={values.label}
                  />
                )}
              />
            </div>
            <div>
              <Field
                name="status"
                render={({ field }: FieldProps) => (
                  <Fragment>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Status</FormLabel>
                      <RadioGroup
                        {...field}
                        aria-label={field.name}
                        name={field.name}
                        onChange={field.onChange}
                        value={values.status}
                      >
                        <FormControlLabel
                          control={<Radio color="primary" />}
                          label="Active"
                          labelPlacement="end"
                          value={VisibilityFilterValue.active}
                        />
                        <FormControlLabel
                          control={<Radio color="primary" />}
                          label="Completed"
                          labelPlacement="end"
                          value={VisibilityFilterValue.completed}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Fragment>
                )}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleReset} disabled={!dirty}>
              Reset
            </Button>
            <Button
              onClick={() => handleSubmit()}
              color="primary"
              disabled={!isValid}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      )}
    />
  )
}

const validationSchema = Yup.object().shape<FormValues>({
  label: Yup.string()
    .min(2, "2文字以上で入力してください")
    .required("入力してください"),
  status: Yup.string().required() as any,
})

const mapStateToProps = (state: RootState): ReduxStateProps => {
  const editTarget = selectors.extractEditTarget(state.todoAsync)

  const formInitialValues = editTarget
    ? {
        label: editTarget.label,
        status: editTarget.status,
      }
    : ({
        label: "",
        status: "active",
      } as const)

  return {
    editTargetId: editTarget ? editTarget.id : undefined,
    formInitialValues,
  }
}

const mapDispatchToProps = (
  dispatch: TodoAsyncDispatch
): ReduxDispatchProps => {
  return {
    dispatch,
  }
}

const mergeProps = (
  stateProps: ReduxStateProps,
  dispatchProps: ReduxDispatchProps,
  ownProps: Props
): ReduxMergeProps => {
  const { editTargetId } = stateProps
  const { dispatch } = dispatchProps

  return {
    ...ownProps,
    ...dispatchProps,
    ...stateProps,
    fetchEditTarget: () => {
      if (editTargetId) {
        dispatch(todoAsyncRequestActions.fetchTodoRequest({ id: editTargetId }))
      }
    },
  }
}

export const TodoEditDialog = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(_TodoEditDialog)
