import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transaction from '../transactions.json' 
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}/>
     
  
      <Statistics
        title="Upload stats"
        stats={data} />
     
      
      <FriendsList friends={friends} />

      < TransactionHistory transaction={ transaction} />
      
    </div>
  );
};
