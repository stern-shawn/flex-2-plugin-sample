import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';

import CustomTaskList from './components/CustomTaskList/CustomTaskList';
import { reducers } from './store';

const PLUGIN_NAME = 'ReduxSamplePlugin';

export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    this.registerReducers(manager);

    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      return task
        ? `https://www.bing.com/search?q=${task.attributes.name}`
        : 'https://www.bing.com';
    };

    const options = { sortOrder: -1 };
    flex.AgentDesktopView.Panel1.Content.add(
      <CustomTaskList key="ReduxSamplePlugin-component" />,
      options
    );
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      console.error(
        `You need FlexUI > 2.0 to use built-in redux toolkit; you are currently on ${VERSION}`
      );
      return;
    }

    for (const [reducerName, reducer] of Object.entries(reducers)) {
      manager.store.addReducer(reducerName, reducer);
    }
  }
}
