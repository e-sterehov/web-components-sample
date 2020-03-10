import { threadTemplate } from './thread.template';

class Thread {
    init(thread) {
        const threadElement = document.createElement('section');
        threadElement.className = 'thread';
        threadElement.innerHTML = threadTemplate(thread);
        threadElement.querySelector('ul').innerHTML = this.getMessages(
            thread.messages
        );

        return threadElement;
    }
    getMessages(messages) {
        const messagesList = messages.reduce(
            (html, message) => html + `<li>${message}</li>`,
            ''
        )

        return messagesList;
    }
}

export { Thread };
