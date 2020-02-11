import { chatTemplate } from './chat.template';
import { Thread } from './thread/thread.component';

export const Chat = {
    init() {
        // Create and append chat element from template
        this.chat = chatTemplate.create();
        const appElement = document.querySelector('#app');
        appElement.appendChild(this.chat);

        this.render();
    },

    render() {
        // Mock chat data
        const mockThreads = [
            {
                name: 'thread one',
                messages: ['message one', 'message two']
            },
            {
                name: 'thread two',
                messages: ['test', 'these', 'messages']
            }
        ];

        // Init threads
        mockThreads.forEach(threadObj => {
            // append thread element
            const thread = new Thread();
            this.chat.appendChild(thread.init(threadObj));
        });
    }
};
