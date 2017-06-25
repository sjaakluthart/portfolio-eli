import { combineReducers } from 'redux';
import authReducer from './auth';
import alertsReducer from './alerts';
import settingsReducer from './settings';
import channelsReducer from './channels';
import connectionsReducer from './connections';
import usersReducer from './users';
import reportedUsersReducer from './reported-users';
import bannedUsersReducer from './banned-users';
import lockedUsersReducer from './locked-users';
import reportedMessagesReducer from './reported-messages';
import feedbackReducer from './feedback';
import statsReducer from './stats';

const appReducer = combineReducers({
  auth: authReducer,
  alerts: alertsReducer,
  settings: settingsReducer,
  connections: connectionsReducer,
  reportedUsers: reportedUsersReducer,
  lockedUsers: lockedUsersReducer,
  bannedUsers: bannedUsersReducer,
  feedback: feedbackReducer,
  reportedMessages: reportedMessagesReducer,
  users: usersReducer,
  channels: channelsReducer,
  stats: statsReducer
});

export default appReducer;
