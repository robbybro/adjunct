import { ONE_SECOND } from './Const';

export const bootstrapTimer = () => {
    setInterval(() => {
        console.log('tick');
    }, ONE_SECOND);
};
