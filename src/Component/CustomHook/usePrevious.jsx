import { useEffect } from "react";
import { useRef } from "react";
import fakesleep from "../docs/fakesleep";

export default function usePrevious(value) {
    const ref= useRef()
    useEffect(()=> {
        (async()=> {
            await fakesleep(100)
            ref.current= value
        })()
    }, [value])
    return ref.current
}

export function usePrevious2(value) {
    const ref= useRef()
    useEffect(()=> {
        (async()=> {
            await fakesleep(200)
            ref.current= value
        })()
    }, [value])
    return ref.current
}

export function usePrevious3(value) {
    const ref= useRef()
    useEffect(()=> {
        (async()=> {
            await fakesleep(100)
            ref.current= value
        })()
    }, [value])
    return ref.current
}

export function usePrevious4(value, ms) {
    const ref= useRef()
    useEffect(()=> {
        (async()=> {
            await fakesleep(ms)
            ref.current= value
        })()
    }, [value, ms])
    return ref.current
}