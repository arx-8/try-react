/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import dayjs from "dayjs"
import React, { useEffect, useState } from "react"
import { isErrorTime } from "src/data/apis/TodoAPIClient"

type Props = {
  children?: never
}

export const TodoAvailableTimer: React.FC<Props> = () => {
  const [timeStr, setTimeStr] = useState(dayjs().format(TimerFormat))
  const [isAvailableTime, setIsAvailableTime] = useState(!isErrorTime(dayjs()))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeStr(dayjs().format(TimerFormat))
      setIsAvailableTime(!isErrorTime(dayjs()))
    }, 1000)

    // componentWillUnmount
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  if (isAvailableTime) {
    return <div css={available}>{timeStr} (Now available)</div>
  }
  return <div css={unavailable}>{timeStr} (Now unavailable)</div>
}

const TimerFormat = "YYYY-MM-DD HH:mm:ss"

const available = css`
  color: green;
`

const unavailable = css`
  color: red;
`
