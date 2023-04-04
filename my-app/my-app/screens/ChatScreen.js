import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const onSend = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message }]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.messages}>
        {messages.map((m, i) => (
          <View key={i} style={styles.message}>
            <Text style={styles.messageText}>{m.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message"
        />
        <TouchableOpacity style={styles.sendButton} onPress={onSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  messages: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  message: {
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  textInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  sendButton: {
    marginLeft: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#333',
    borderRadius: 4,
  },
  sendButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ChatScreen;