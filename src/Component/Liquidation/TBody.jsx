import React from "react";
import moment from "moment";
import Spinner from "../Entities/Spinner";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import usePrevious, { usePrevious3 } from "../CustomHook/usePrevious";
// import NumberFormat from "react-number-format";
// import { round } from "lodash";

const TBody = (props) => {
  const previousAl= usePrevious3(props?.data?.length)
  if (props.data) {
    return (
      <tbody className="fjskdhasjhasasa">
        {parseInt(props?.filterPrice) <= 0 && props?.data?.map((item, key) => (
          <TR
            p={previousAl}
            componentHightLight={parseInt(key) +1 >= parseInt(previousAl) ? <HightLightComponent /> : <div></div>}
            className1="q34o9i3u9owiowwweq hdauksdyhukjshajks"
            key={key}
            {...item}
          />
        ))}
        {/*  */}
        {
          parseInt(props?.filterPrice) === 1000 && props?.data?.filter(item=> parseFloat(item.liquidatedAmunt.replace("$", "").replace(",", "")) <= 10000 && parseFloat(item.liquidatedAmunt.replace("$", "").replace(",", "")) >= 1000)?.map((item, key) => (
            <>
              <TR
                // componentHightLight={parseInt(key) +1 > props?.dataPrevious?.length && props?.data?.length > props?.dataPrevious?.length ? <HightLightComponent /> : <div></div>}
                className1="q34o9i3u9owiowwweq"
                key={key}
                {...item}
              />
            </>
          ))
        }
        {
          parseInt(props?.filterPrice) === 10000 && props?.data?.filter(item=> parseFloat(item.liquidatedAmunt.replace("$", "").replace(",", "")) <= 20000 && parseFloat(item.liquidatedAmunt.replace("$", "").replace(",", "")) >= 10000)?.map((item, key) => (
            <>
              <TR
                // componentHightLight={parseInt(key) +1 > props?.dataPrevious?.length && props?.data?.length > props?.dataPrevious?.length ? <HightLightComponent /> : <div></div>}
                className1="q34o9i3u9owiowwweq"
                key={key}
                {...item}
              />
            </>
          ))
        }
        {
          parseInt(props?.filterPrice) === 20000 && props?.data?.filter(item=> parseFloat(item.liquidatedAmunt.replace("$", "").replace(",", "")) >= 20000)?.map((item, key) => (
            <>
              <TR
                // componentHightLight={parseInt(key) +1 > props?.dataPrevious?.length && props?.data?.length > props?.dataPrevious?.length ? <HightLightComponent /> : <div></div>}
                className1="q34o9i3u9owiowwweq"
                key={key}
                {...item}
              />
            </>
          ))
        }
      </tbody>
    );
  }
  else {
    return <div style={{width: "100%", height: "100%", display: "flex", justifyContent: 'center', alignItems: "center"}}>
        <Spinner /> 
    </div>
  }
};

export default TBody;
//
//
//

const TR = (props) => {
  const array_logo= [{exchange: "Binance", logo: "https://cdn.coinglasscdn.com/static/exchanges/270.png"}, {exchange: "ftx", logo: "https://cdn.coinglasscdn.com/static/exchanges/524.png"}, {exchange: "Binance COIN Futures", logo: "https://cdn.coinglasscdn.com/static/exchanges/OKX.png"}, {exchange: "Huobi Swap", logo: "https://thuvientaichinh.com/wp-content/uploads/huobi-logo.png"}, {exchange: "Kraken Futures", logo: "https://logos-world.net/wp-content/uploads/2021/02/Kraken-Logo.png"}, {exchange: "Kraken", logo: "https://logos-world.net/wp-content/uploads/2021/02/Kraken-Logo.png"}, {exchange: "Bybit", logo: "https://www.bitdegree.org/crypto/storage/media/images/bybit-5fb22e8e4b76e.o.png"}, {exchange: "Huobi", logo: "https://thuvientaichinh.com/wp-content/uploads/huobi-logo.png"}, {exchange: "Deribit", logo: "https://iconape.com/wp-content/png_logo_vector/deribit.png"}, {exchange: "huobi", logo: "https://www.huobi.com/learn/wp-content/uploads/2021/08/Bank-_Huobi-logo-square-.png"}, {exchange: "bitfinex", logo: "https://bitfinex.com/images/thumbnails/bitfinex-2.png"}]
  const previousValue= usePrevious(props)
  return (
    <tr className="djhkfdhilsfadsa" style={{position: "relative", flexDirection: "row-reverse"}}>
      <TD
        logo={array_logo.filter(item=> item.exchange.trim().toLowerCase() === props?.exchange?.trim().toLowerCase())?.[0]?.logo}
        className={`dhfjkdhajksdhakjss eywuisyhauishasdasa fjdklsdjslkjdkdsasew ${props?.className || ""}`}
        content={props?.exchange}
        {...props}
      />

      <TD className="dhfjkdhajksdhakjss yeurihsukdhjnjksa fjdklsdjslkjdkdsasew rfu8oeuasasadfvcsd" content={props?.market} {...props} />
      
      <TD
        className="ajkdhjksdhsjkdskas dhfjkdhajksdhakjss fehuidshdasasrsdas hduisehuaksjaskl fjhrueiisjidsjiods fhukdhkjasorwueioaes fgnhjkfshiuohjdiassafssd sujdiduaiosuasiasjas"
        content={"$ "+ props.liquidatedAmunt.replace("$", "")}
        xx={"huidyheuiawewsasa"}
        sss={"wdnjksnjkasdslsdas"}
        {...props}
      />
      <TD
        className={`dhfjkdhajksdhakjss fehuidshdasasrsdas dusdy8ieyhiuasasas huajhdaslajresa fiudyfuidyhiueywaiuea ${
          props?.side === "long" ? "sahsjkdhaukjsas" : "fhukdyhaiuhdsnas"
        }`}
        content={props?.side}
        arrowIcon={props?.side?.toLowerCase() === "long" ? <ArrowUpwardIcon style={{color: "#1BC5BD"}} /> : <ArrowDownwardIcon style={{color: "#F64E60"}} />}
        {...props}
      />
      <TD
        className="dhfjkdhajksdhakjss fgnhjkfshiuohjdiassafssd jdfiojsaijkleiuedasasas fgdfgdfadeasweawa"
        content={moment(props?.unixtime).format("hh:mm:ss A")}
        {...props}
      />
      {
        props?.price > 0 && previousValue?.price !== props?.price && <HightLightComponent />
      }
      {
        props?.componentHightLight
      }
    </tr>
  );
};

export const TD = (props) => {
  return (
    <td
      className={`${
        props?.className || "dsajksasadasasj"
      } dsjklasjilksjaasasas ${props.sss}`}
      style={{ overflow: "hidden", textOverflow: "ellipsis" }}
    >
      {props?.logo && <><img alt={"open"} src={props?.logo} style={{width: 24, height: 24, objectFit: "contain"}} />&nbsp;&nbsp;</>}
      <div className={`${props.xx}`} style={{display: "flex", justifyContent: "center", alignItems: "center"}}><span className={`jdklajkalsjaklsasas`} style={{fontSize: 12}}>{props.arrowIcon && props.arrowIcon}</span>
      <span className={"jdklajkalsjaklsasas"} style={{fontSize: 12}}>{props.content}</span></div>
      {<span className={props.classNameX} style={{fontSize: 14}}>{props.contentx}</span>}
    </td>
  );
};

export const HightLightComponent= (props)=> {
  return (
    <div className="jfskljklsassa" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 10, background: "transparent"}}></div>
  )
}