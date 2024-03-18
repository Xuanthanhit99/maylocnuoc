'use client'
import React, { useEffect, useRef, useState } from 'react'
import SocketIOClient, { io } from "socket.io-client";
import Pusher from "pusher-js"
import { v4 as uuidv4 } from 'uuid';

interface IMsg {
    user: string;
    msg: string;
  }
  
  // create random user
  const user = "User_" + String(new Date().getTime()).substr(-3);

const ChatComponent = () => {
    const [connected, setConnected] = useState<boolean>(true);
    const [textMessage, setTextMessage] = useState<any>([]);
    const [valueComment, setValueComment] = useState<any>([]);
    const inputRef = useRef(null);
  // init chat and message
  const [chat, setChat] = useState<IMsg[]>([]);
  const [msg, setMsg] = useState<string>("");
  var pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string, {
    cluster: 'ap1'
  });

  var channel = pusher.subscribe('chat');
    channel.bind('hello', function(data: any) {
      const parsedComments = JSON.parse(data.message)
      setTextMessage((prev:any) => [...prev, parsedComments])
    });

  const sendMessage = async () => {
    if (msg) {
      // build message obj
      // const message: IMsg = {
      //   user,
      //   msg,
      // };

      const message = {
        name: msg,
        phone: "030131311",
        image: "",
        textcomment: "",
        nameId: uuidv4(),
        replypeople: []
      }

      // dispatch message to other users
      const resp = await fetch("/api/pusher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      // reset field if OK
      setValueComment(resp)
      console.log("resp", resp);
    }

    // focus after click
    // @ts-ignore
    inputRef?.current?.focus();
  };

  const sendMessageReply = async () => {
    if (msg) {
      // build message obj
      // const message: IMsg = {
      //   user,
      //   msg,
      // };

      const message = {
        name: msg,
        phone: "030131311",
        image: "",
        textcomment: "",
        nameId: uuidv4(),
        replypeople: [
          {
            nameId: uuidv4(),
            name: msg,
            phone: "03013132",
            image: "",
            textcomment: "",
            replypeople: []
          }
        ]
      }

      // dispatch message to other users
      const resp = await fetch("/api/pusher", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      // reset field if OK

      console.log("resp", resp);
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
            <button
                className="bg-[#9580ff] border-2 rounded shadow text-sm text-white h-full px-2 hover:bg-white hover:text-[#9580ff] hover:border-[#9580ff]"
                onClick={() => sendMessageReply()}
                disabled={!connected}
            >
                trả lời
            </button>
        </div>
        </div>
    </div>
  )
}

export default ChatComponent