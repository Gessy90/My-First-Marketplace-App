import React, {useState} from 'react';
import{ FlatList} from 'react-native';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItem from "../components/ListItem";
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'Maria',
        description: 'Hi! Is this item still available?',
        image: require("../assets/avatar.jpg")
    },
    {
        id: 2,
        title: 'Maria',
        description: 'Hi, I love it! Can you please let me know when will you be able to post it?',
        image: require("../assets/avatar.jpg")
    }
]
function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
      // Delete the message from our messages array
      //we are using a hook here.
      //A hook is a function that allows us to hook into react features in function components
      const newMessages = messages.filter((m) => m.id !== message.id);
      setMessages(newMessages);
    };

    return (
      <Screen>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log("Message selected", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)}
                />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                    id: 2,
                    title: "T2",
                    description: "D2",
                    image: require("../assets/avatar.jpg"),
                    },
                ]);
            }}
        />
      </Screen>
    );
  }


export default MessagesScreen;