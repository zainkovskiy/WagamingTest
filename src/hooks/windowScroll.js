import React, { useState, useEffect } from "react"

export const useWindowScroll = () => {
  const [scroll, setScroll] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', setScrollData);
    return () => window.removeEventListener('scroll', setScrollData)
  }, [])

  const setScrollData = (event) => {
    setScroll(event.srcElement.documentElement.scrollTop >= (window.innerHeight / 3))
  }

  return scroll
}