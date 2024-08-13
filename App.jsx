import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PersonalTabScreen from './tabs/PersonalTabScreen';
import ProfessionalTabScreen from './tabs/ProfessionalTabScreen';
import CompanyTabScreen from './tabs/CompanyTabScreen';
import FeedDetailScreen from './tabs/FeedDetailScreen'; // Import the FeedDetailScreen

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Personal"
          component={PersonalTabScreen}
          options={{headerShown: false}} // Hide header for Personal screen
        />
        <Stack.Screen
          name="Professional"
          component={ProfessionalTabScreen}
          options={{headerShown: false}} // Hide header for Professional screen
        />
        <Stack.Screen
          name="Company"
          component={CompanyTabScreen}
          options={{headerShown: false}} // Hide header for Company screen
        />
        <Stack.Screen
          name="FeedDetail"
          component={FeedDetailScreen}
          options={{title: 'Feed Detail'}} // Show header for FeedDetail screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
