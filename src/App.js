import React from "react";
import SplitPane from "./SplitPane";

function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

export default function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
