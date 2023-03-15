import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import Ai from "../customMessageForms/Ai";
import Header from "../customHeader/Header";
import StanderdMessageForm from "../customMessageForms/StanderdMessageForm";
import AiCode from "../customMessageForms/AiCode";
import AiAssist from "../customMessageForms/AiAssist";

const Chat = ({ user, secret }) => {
  const chatProps = useMultiChatLogic(
    "cb5d4813-27be-4eea-b467-5a41d4ab16bd",
    user,
    secret
  );
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          if (chatProps.chat?.title.startsWith("AiChat_")) {
            return <Ai props={props} activeChat={chatProps.chat} />;
          }
          if (chatProps.chat?.title.startsWith("AiCode_")) {
            return <AiCode props={props} activeChat={chatProps.chat} />;
          }
          if (chatProps.chat?.title.startsWith("AiAssist_")) {
            return <AiAssist props={props} activeChat={chatProps.chat} />;
          }
          return (
            <StanderdMessageForm props={props} activeChat={chatProps.chat} />
          );
        }}
      />
    </div>
  );
};

export default Chat;
