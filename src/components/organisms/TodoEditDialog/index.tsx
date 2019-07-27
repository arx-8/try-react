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
import { CallPutTodoReq } from "data/apis/TodoAPIClient"
import { Todo, TodoId, VisibilityFilterValue } from "domain/models/Todo"
import { RootState } from "ducks/store"
import { todoAsyncOperations, todoAsyncSelectors } from "ducks/todoAsync"
import { selectors } from "ducks/todoAsync/selectors"
import { Field, FieldProps, Formik, getIn } from "formik"
import React, { Fragment } from "react"
import { connect, MapStateToProps } from "react-redux"
import { MapThunkDispatchToPropsFunction } from "types/ReduxTypes"
import * as Yup from "yup"

type ReduxStateProps = {
  editTargetId?: TodoId
  formInitialValues: FormValues
  isOpenTodoEditDialog: boolean
  isTargetLoading: boolean
}

type ReduxDispatchProps = {
  closeTodoEditDialog: () => void
  updateTodo: (params: CallPutTodoReq) => Promise<void>
}

/**
 * ユーザー入力値。
 * IDはユーザー入力値ではないので、ここでは管理しない。
 */
type FormValues = Omit<Todo, "id">

type OwnProps = {
  children?: never
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps

const _TodoEditDialog: React.FC<Props> = ({
  closeTodoEditDialog,
  editTargetId,
  formInitialValues,
  isOpenTodoEditDialog,
  isTargetLoading,
  updateTodo,
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={formInitialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        updateTodo({
          // この処理に到達するまでに、確実にセットされるため
          id: editTargetId!,
          label: values.label,
          status: values.status,
        })
        actions.setSubmitting(false)
        closeTodoEditDialog()
      }}
      render={({
        dirty,
        errors,
        handleReset,
        handleSubmit,
        isValid,
        values,
      }) => (
        <Dialog open={isOpenTodoEditDialog} onClose={closeTodoEditDialog}>
          <form onSubmit={handleSubmit} onReset={handleReset}>
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
              <Button onClick={closeTodoEditDialog}>Cancel</Button>
              <Button type="reset" disabled={!dirty}>
                Reset
              </Button>
              <Button type="submit" disabled={!isValid} color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
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

const mapStateToProps: MapStateToProps<ReduxStateProps, OwnProps, RootState> = (
  state
) => {
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
    isOpenTodoEditDialog: state.todoAsync.todoEditDialog.isOpen,
    isTargetLoading: todoAsyncSelectors.isTargetLoading(
      state.todoAsync,
      maybeId
    ),
  }
}

const mapDispatchToProps: MapThunkDispatchToPropsFunction<
  ReduxDispatchProps,
  OwnProps
> = (dispatch) => {
  return {
    closeTodoEditDialog: () =>
      dispatch(todoAsyncOperations.closeTodoEditDialog()),
    updateTodo: (params) =>
      dispatch(todoAsyncOperations.updateTodoRequest(params)),
  }
}

export const TodoEditDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TodoEditDialog)
