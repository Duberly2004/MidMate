import React from 'react'
import ChatBot from "react-simple-chatbot";
import {steps} from "../lib/steps"
export default function Chat() {
  return (
<div className="flex justify-center items-center h-lvh bg-[url('https://images8.alphacoders.com/529/529223.jpg')] bg-cover bg-center relative">
  <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-75"></div>
  <ChatBot steps={steps} />
</div>


  )
}
