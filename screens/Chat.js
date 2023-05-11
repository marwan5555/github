import React from 'react'

const Chat = () => {
  return (
    <div>Chat</div>
  )
}

export default Chat;

// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
// import firebase from 'firebase';
// import 'firebase/firestore';
// import { useNavigation } from '@react-navigation/native';

// const Chat = () => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const messagesRef = firebase.firestore().collection('messages').orderBy('timestamp', 'desc');
//     const unsubscribe = messagesRef.onSnapshot((querySnapshot) => {
//       const data = [];
//       querySnapshot.forEach((doc) => {
//         data.push({
//           ...doc.data(),
//           id: doc.id,
//         });
//       });
//       setMessages(data);
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleSendMessage = () => {
//     const { currentUser } = firebase.auth();
//     const timestamp = firebase.firestore.FieldValue.serverTimestamp();
//     firebase.firestore().collection('messages').add({
//       text: message,
//       senderId: currentUser.uid,
//       timestamp,
//     });
//     setMessage('');
//   };

//   const renderItem = ({ item }) => (
//     <View style={{ padding: 10 }}>
//       <Text>{item.text}</Text>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       <FlatList
//         data={messages}
//         renderItem={renderItem}
//         inverted
//       />
//       <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
//         <TextInput
//           style={{ flex: 1, marginRight: 10 }}
//           placeholder="Type a message"
//           value={message}
//           onChangeText={setMessage}
//         />
//         <TouchableOpacity onPress={handleSendMessage}>
//           <Text>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Chat;