import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendsList'
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';


export default function App() {
    return(
      <div>
        <Profile
  avatar={user.avatar}
  name={user.name}
  tag={user.tag}
  location={user.location}
  stats={user.stats}
        />
         
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />

        <FriendList friends={friends} />
  </div>)
}