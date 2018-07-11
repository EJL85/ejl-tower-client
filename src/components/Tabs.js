import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Add', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Update', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Delete', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
];

const Tabs = () => <Tab panes={panes} />

export default Tabs