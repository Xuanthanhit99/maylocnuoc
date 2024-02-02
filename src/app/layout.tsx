import './globals.css'
import { Inter } from 'next/font/google'
import MenuComponentComponent from '../components/menu/index'
import FooterComponent from '../components/footer/index'
import SocialSupport from '../components/menu-chat/index'
import CustomInput from '@/components/FormItemFloatLabel/CustomInput'
import CustomTextArea from '@/components/FormItemFloatLabel/CustomTextArea'
import { Button } from 'antd'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
   return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
      <MenuComponentComponent />
        {children}
        <div className='fixed bottom-2/4 right-10'><SocialSupport /></div>
      <FooterComponent />
      </body>
    </html>
  )
}
