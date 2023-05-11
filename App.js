import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import SplashScreen from "./screens/SplashScreen";
import BottomTabNavigator from "./navigation/BottomTabNavigator"; // เพิ่มไลบรารี
import TripDetailsScreen from "../app/screens/TripDetailsScreen";
import firebase from './config/firebase';

const Stack = createStackNavigator();

class MyApp extends Component {
  constructor(){
      //......
  }
  componentDidMount(){
     const itemsRef = firebase.database().ref('items');
     itemsRef.on('value',(snapshot) => {
        let items = snapshot.val();
        let newState = [];
        for(let item in items){
           newState.push({
              item_id:item,
              title:items[item].title,
              description:items[item].description
           })
        }
        this.setState({
           items:newState
        })
     })
  }
}
handleSubmit(e){
  e.preventDefault();

  if(this.state.item_id !== ''){
       return this.updateItem()
  }

  const itemsRef = firebase.database().ref('items')
  const item = {
     title : this.state.title,
     description : this.state.description
  }
  itemsRef.push(item)
  this.setState({
     item_id:'',
     title:'',
     description:''
  })
}

handleUpdate = (item_id = null , title = null , description = null) => {
  this.setState({item_id,title,description})
}

updateItem(){

    var obj = { title:this.state.title,description:this.state.description }

    const itemsRef = firebase.database().ref('/items')

    itemsRef.child(this.state.item_id).update(obj);

    this.setState({
      item_id:'',
      title:'',
      description:''
    })

}

removeItem(itemId){
  const itemsRef = firebase.database().ref('/items');
  itemsRef.child(itemId).remove();
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TripDetails"
          component={TripDetailsScreen}
          options={{ headerShown: false, }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
