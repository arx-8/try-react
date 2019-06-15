/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { DynamicRoutePath } from "constants/Paths"
import { Formik, Field } from "formik"
import * as Yup from "yup"
import React from "react"
import useReactRouter from "use-react-router"

type Props = {
  children?: never
}

export const InputCompanyName: React.FC<Props> = () => {
  const { history } = useReactRouter()

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
        render={({ handleSubmit, errors, touched, isValid }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <span>会社名 : </span>
              <Field name="companyName" />
              {errors.companyName && touched.companyName && (
                <span css={errMsg}>{errors.companyName}</span>
              )}
            </div>

            <button type="submit" disabled={!isValid}>
              Go
            </button>
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
