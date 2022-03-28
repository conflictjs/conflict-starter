import Command from '@conflict/beta/commands';
import { Embed } from '@conflict/beta/components';

export default new Command({
    name: 'help',
    description: 'Get help',
    options: [],
    testing: {
        guildId: '' // Your guild ID here
    },
    execute: async (command, options, utils) => {
        command.view(
            <message>
                <Embed color="#ff3333" image={{ url: "https://conflict.js.org/favicon.png" }}>
                    <title>Hello, world!</title>
                    <description>Welcome to **Conflict**.</description>
                </Embed>
            </message>
        );
    }
});
