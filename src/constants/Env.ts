export const isDevelopment = process.env.NODE_ENV !== "production"

/**
 * Cognito > ユーザープール > 全般設定 > アプリクライアント > アプリクライアント ID
 */
export const COGNITO_APP_CLIENT_ID = process.env
  .REACT_APP_COGNITO_APP_CLIENT_ID!

/**
 * Cognito > フェデレーティッドアイデンティティ > サンプルコード > ID プールの ID
 */
export const COGNITO_IDENTITY_POOL_ID = process.env
  .REACT_APP_COGNITO_IDENTITY_POOL_ID!

export const COGNITO_REGION = process.env.REACT_APP_COGNITO_REGION!

/**
 * Cognito > ユーザープール > 全般設定 > プール ID
 */
export const COGNITO_USER_POOL_ID = process.env.REACT_APP_COGNITO_USER_POOL_ID!

if (isDevelopment) {
  // check undefined
  const defs: { [key: string]: string | undefined } = {
    COGNITO_APP_CLIENT_ID,
    COGNITO_IDENTITY_POOL_ID,
    COGNITO_REGION,
    COGNITO_USER_POOL_ID,
  }
  const undefs = Object.keys(defs)
    .filter((defName) => defs[defName] == null)
    .join(",")

  if (undefs.length !== 0) {
    throw new Error(`Undefined env value!! :${undefs}`)
  }
}
