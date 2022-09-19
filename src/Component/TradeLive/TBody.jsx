import React from 'react'
import TR from './TR'
import _ from "lodash"
import moment from 'moment'
import usePrevious, { usePrevious3 } from '../CustomHook/usePrevious'
import { HightLightComponent } from '../Liquidation/TBody'

const TBody = (props) => {
  const previousValue= usePrevious(parseInt(moment(props?.data?.[props?.data?.length -1 ]?.time_created).valueOf()))
  const previousAl= usePrevious3(props?.data?.length)
  
  return (
    <tbody className={`fjskdhasjhasasa ${props.className}`} style={{transform: "rotate(0deg)"}}>
      {
        _.orderBy(props?.data, ["timeNumber"], ["desc"])?.map((item, key)=> <TR
        p={previousAl}
        componentHightLight={props?.data?.length - parseInt(key) >= parseInt(previousAl) ? <HightLightComponent /> : <div></div>}
        index={props?.data?.length - parseInt(key)}
        point={parseInt(moment(item?.time_created).valueOf())}
        indexT={previousValue}
        className1="q34o9i3u9owiowwweq"
        key={key}
        {...item}
      />)
      }
    </tbody>
  )
}

export default TBody