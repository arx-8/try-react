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
import { todoAsyncRequestActions, todoAsyncSelectors } from "ducks/todoAsync"
import { selectors } from "ducks/todoAsync/selectors"
import { TodoAsyncDispatch } from "ducks/todoAsync/types"
import { Field, FieldProps, Formik, getIn } from "formik"
import React, { Fragment, useEffect } from "react"
import { connect } from "react-redux"
import * as Yup from "yup"

type ReduxStateProps = {
  editTargetId?: TodoId
  formInitialValues: FormValues
  isTargetLoading: boolean
}

type ReduxDispatchProps = {
  fetchTodo: (editTargetId: TodoId) => void
}

/**
 * ユーザー入力値。
 * IDはユーザー入力値ではないので、ここでは管理しない。
 */
type FormValues = Omit<Todo, "id">

type Props = {
  open: boolean
  onClose: () => void
  onSubmit: (editTargetId: TodoId, values: FormValues) => void
  children?: never
}

const _TodoEditDialog: React.FC<
  Props & ReduxStateProps & ReduxDispatchProps
> = ({
  editTargetId,
  fetchTodo,
  formInitialValues,
  isTargetLoading,
  onClose,
  onSubmit,
  open,
}) => {
  useEffect(() => {
    if (editTargetId) {
      fetchTodo(editTargetId)
    }
  }, [editTargetId, fetchTodo])

  return (
    <Formik
      enableReinitialize
      initialValues={formInitialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onSubmit(editTargetId!, values)
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
                    disabled={isTargetLoading}
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
                          disabled={isTargetLoading}
                          label="Active"
                          labelPlacement="end"
                          value={VisibilityFilterValue.active}
                        />
                        <FormControlLabel
                          control={<Radio color="primary" />}
                          disabled={isTargetLoading}
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

  const maybeId = editTarget ? editTarget.id : undefined
  return {
    editTargetId: maybeId,
    formInitialValues,
    isTargetLoading: todoAsyncSelectors.isTargetLoading(
      state.todoAsync,
      maybeId
    ),
  }
}

const mapDispatchToProps = (
  dispatch: TodoAsyncDispatch
): ReduxDispatchProps => {
  return {
    fetchTodo: (editTargetId) =>
      dispatch(todoAsyncRequestActions.fetchTodoRequest({ id: editTargetId })),
  }
}

export const TodoEditDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TodoEditDialog)
