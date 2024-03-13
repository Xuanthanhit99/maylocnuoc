'use client'
import React, { useEffect, useRef, useState } from 'react'
import SocketIOClient, { io } from "socket.io-client";

interface IMsg {
    user: string;
    msg: string;
  }
  
  // create random user
  const user = "User_" + String(new Date().getTime()).substr(-3);

const ChatComponent = () => {
    const [connected, setConnected] = useState<boolean>(false);
    const inputRef = useRef(null);

  // init chat and message
  const [chat, setChat] = useState<IMsg[]>([]);
  const [msg, setMsg] = useState<string>("");
    const ENDPOINT= "localhost:3000"
  useEffect((): any => {
    // const socket = io("localhost:3000", { secure: false });

    // connect to socket server
    // @ts-ignore
    const socket = SocketIOClient.connect(ENDPOINT, {
      path: "/api/socket", addTrailingSlash: false }
    );

    // log socket connection
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);
      setConnected(true);
    });

    // update chat on new message dispatched
    socket.on("message", (message: IMsg) => {
      setChat((chat) => [...chat, message]);
    });

    // socket disconnet onUnmount if exists
    if (socket) return () => socket.disconnect();
  }, [ENDPOINT]);

  const sendMessage = async () => {
    if (msg) {
      // build message obj
      const message: IMsg = {
        user,
        msg,
      };

      // dispatch message to other users
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      // reset field if OK
      if (resp.ok) setMsg("");
    }

    // focus after click
    // @ts-ignore
    inputRef?.current?.focus();
  };

  return (
    <div>
        <div className="flex-1 p-4 font-mono">
          {chat?.length ? (
            chat.map((chat, i) => (
                <div className="my-4" key={i}>
                <span
                    className={chat?.user === user ? 'text-[#80ffea]' : 'text-[#8aff80]'}
                >
                    {chat?.user === user ? "Me" : chat?.user}
                </span>
                : 
                {
                    chat?.user === user ?  (
                        <span className="text-[#80ffea] rounded px-10 py-1 mx-1 bg-[#6c7393] border-[#80ffea] border-2">{chat?.msg}</span>
                    ) : (
                        <span className="text-[#8aff80] rounded px-10 py-1 mx-1 bg-[#6c7393] border-[#8aff80] border-2">{chat?.msg}</span>
                    )
                }
            </div>
            ))
          ) : (
            <div className="text-sm text-center text-gray-400 py-6">
              No chat messages
            </div>
          )}
        </div>
        <div className="pr-2 flex-1">
            <input
                ref={inputRef}
                type="text"
                value={msg}
                placeholder={connected ? "Type a message..." : "Connecting..."}
                className="w-full h-full rounded border-[#9580ff] border-2 px-1 hover:border-[#8aff80] focus:border-[#80ffea] focus:outline-none"
                disabled={!connected}
                onChange={(e: any) => {
                    setMsg(e.target.value);
                  }}
                  onKeyPress={(e: any) => {
                    if (e.key === "Enter") {
                      sendMessage();
                    }
                  }}
            />
            <div className="flex flex-col justify-center items-stretch pl-2 w-2/12">
            <button
                className="bg-[#9580ff] border-2 rounded shadow text-sm text-white h-full px-2 hover:bg-white hover:text-[#9580ff] hover:border-[#9580ff]"
                onClick={() => sendMessage()}
                disabled={!connected}
            >
                SEND
            </button>
        </div>
        </div>
    </div>
  )
}

export default ChatComponent