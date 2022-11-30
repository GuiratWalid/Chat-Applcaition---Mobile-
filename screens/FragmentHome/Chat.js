import { View, Text } from "react-native";
import React, { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");
  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
};

export default Chat;
