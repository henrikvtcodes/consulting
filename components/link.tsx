import type React from "react"
import NextLink from "next/link"



const Link = (href:string, {children}:any) => {
  return(
    <NextLink href={href}>
      <span>{children}</span>
    </NextLink>
  )
}