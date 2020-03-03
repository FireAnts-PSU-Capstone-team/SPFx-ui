import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react';

export interface MenuBarProps {
  onUploadClick: () => void;
}

export const MenuBar: React.FunctionComponent<MenuBarProps> = props => {
  const items: ICommandBarItemProps[] = [
    {
      key: 'upload',
      text: 'Upload',
      iconProps: { iconName: 'Upload' },
      onClick: props.onUploadClick
    },
  ];

  const farItems: ICommandBarItemProps[] = [
    {
      key: 'share',
      iconProps: { iconName: 'Share' },
      href: 'mailto:lyha@pdx.edu?Subject=hey&body=sharepoint sucks'
    },
  ];

  return (
    <CommandBar
      items={items}
      farItems={farItems}
      ariaLabel='Use left and right arrow keys to navigate between commands'
    />
  );
};
