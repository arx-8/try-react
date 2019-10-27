/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Button } from "@material-ui/core"
import { DynamicRoutePath, RoutePath } from "constants/Paths"
import { Field, Formik } from "formik"
import React from "react"
import { useHistory } from "react-router"
import * as Yup from "yup"

type Props = {
  children?: never
  onReset: () => void
}

export const InputCompanyName: React.FC<Props> = ({ onReset }) => {
  const history = useHistory()

  return (
    <div>
      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          history.push(
            DynamicRoutePath.GitHubExplorer_Members(values.companyName)
          )
        }}
        onReset={() => {
          onReset()
          history.push(RoutePath.GitHubExplorer)
        }}
        render={({ errors, handleReset, handleSubmit, isValid, touched }) => (
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <div>
              <span>会社名 : </span>
              <Field name="companyName" />
              {errors.companyName && touched.companyName && (
                <span css={errMsg}>{errors.companyName}</span>
              )}
            </div>

            <div css={buttons}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!isValid}
              >
                Go
              </Button>
              <Button variant="contained" color="secondary" type="reset">
                Reset
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  )
}

const formInitialValues = {
  companyName: "",
}

const validationSchema = Yup.object().shape<typeof formInitialValues>({
  companyName: Yup.string()
    .min(2, "2文字以上で入力してください")
    .required("入力してください"),
})

const errMsg = css`
  padding-left: 8px;
  color: red;
  font-weight: bold;
`

const buttons = css`
  display: grid;
  grid-template-columns: repeat(2, 50px);
  column-gap: 24px;
`
