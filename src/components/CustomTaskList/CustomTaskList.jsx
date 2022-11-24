import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from '@twilio-paste/core/alert';
import { Theme } from '@twilio-paste/core/theme';
import { Text } from '@twilio-paste/core/text';

import { actions } from '../../store';

const CustomTaskList = () => {
  const isOpen = useSelector(
    (state) => state.myPluginNamespace.customTaskList.isOpen
  );
  const dispatch = useDispatch();

  const dismiss = useCallback(() => {
    dispatch(actions.customTaskList.dismiss);
  }, [dispatch]);

  if (!isOpen) {
    return null;
  }

  return (
    <Theme.Provider theme="default">
      <Alert onDismiss={dismiss} variant="neutral">
        <Text>This is a dismissible demo component.</Text>
      </Alert>
    </Theme.Provider>
  );
};

export default CustomTaskList;
