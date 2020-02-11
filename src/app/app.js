import { Chat } from "./chat/chat.component";

export const App = {
    init() {
        // Create main app element
        const appElement = document.createElement('main');
        appElement.id = 'app';

        // Add to app element
        document.body.appendChild(appElement);
        this.render();
    },

    render() {
        // Append chat section
        Chat.init();
    }
};
