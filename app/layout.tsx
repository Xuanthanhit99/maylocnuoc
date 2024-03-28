import "./globals.css";
// import { Inter } from 'next/font/google'
import MenuComponentComponent from "../src/components/MenuComponent/MenuComponent";
import FooterComponent from "../src/components/FooterComponent/FooterComponent";
import SocialSupport from "../src/components/MenuChatComponent/MenuChatComponent";
import CustomInput from "@/components/FormItemFloatLabel/CustomInput";
import CustomTextArea from "@/components/FormItemFloatLabel/CustomTextArea";
import { Button } from "antd";
import { useState } from "react";
import Provider from "../src/components/Provider/Provider";
import { AuthContextProvider } from "./context/AuthContext";
import ReactQueryProvider from "../providers/ReactQueryProvider";
// import Provider from '@/components/Provider/Provider'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Máy lọc nước hà nam",
  description: "Máy lọc nước hà nam",
  image: "/image/product/may-loc-nuoc-kangaroo.png",
  icons: {
    icon: "/image/product/may-loc-nuoc-kangaroo.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <AuthContextProvider>
            <Provider>
              <div className="relative h-full">
                <MenuComponentComponent />
                {children}
                <div className="fixed top-0 right-0">
                  <SocialSupport />
                </div>
                <FooterComponent />
              </div>
            </Provider>
          </AuthContextProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
