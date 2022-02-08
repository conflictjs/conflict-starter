import { View } from '@conflict/beta/view';

export default function ActionRow ({ children }) {
    return (
        <components>
            <component type={1}>
                <components>
                    {children}
                </components>
            </component>
        </components>     
    )
}
