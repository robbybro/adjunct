import { NavigationActions } from 'react-navigation';
import AppWithNavigationState, {
    AppNavigator,
} from '../components/AppNavigator';
import { ROUTES } from '../Const';

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams(ROUTES.TITLE),
);

const nav = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

export default nav;
