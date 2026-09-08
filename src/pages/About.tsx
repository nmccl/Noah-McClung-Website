import { ArticlePage } from '@/components/layout/ArticlePage'

const body = `I'm a self-taught developer and indie creator who got into coding because I wanted to make things. What started as curiosity eventually turned into me spending way too many hours in Xcode, learning Swift and SwiftUI, designing interfaces, and trying to turn random ideas into actual products.

These days, most of my work revolves around the Apple ecosystem. I build iOS and macOS apps, but I've also gotten into web development with React and Vite, backend tools like Supabase, StoreKit, APIs, App Store Connect, UI/UX, branding, and basically everything else that comes with taking an idea from "this would be cool" to something people can actually use.

I've realized that I'm just as interested in what happens around the code as I am in the code itself. I like thinking about product management, marketing, branding, pricing, and why someone would choose one product over another. I'm especially interested in physical tech products and the way hardware and software can come together to create something that feels really polished.

Outside of tech, I'm a part-time barista, so when I'm not writing code, there's a decent chance I'm making coffee instead. I also enjoy photography, videography, editing, music, and creating content around the things I'm building.

I'm still early in all of this, and that's probably my favorite part. I get to learn something new, build something, mess it up, rebuild it, and hopefully make something a little better than what I made yesterday.`

export function About() {
  return (
    <ArticlePage
      number="05"
      label="About"
      title="Noah McClung"
      dek="Self-taught, still early, and figuring it out in public."
      date="2026-09-07"
      body={body}
      backLabel="Back home"
    />
  )
}
