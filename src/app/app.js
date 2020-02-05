import { chat } from './layouts/chat/chat.layout';

export const App = {
    init() {
        chat.loadThreads();
    }
};
