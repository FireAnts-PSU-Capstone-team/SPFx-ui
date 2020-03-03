import * as React from 'react';
import { Fabric, Text, Stack, Panel } from 'office-ui-fabric-react';
import { DataList } from './DataList';
import { MenuBar } from './MenuBar';
import IRow from './IRow';
import { SPUser } from '@microsoft/sp-page-context';

export const dstFoodRows: IRow[] = [
  {
    key: 'monsterMeat',
    name: 'Monster Meat',
    dlc: null,
    health: -20,
    hunger: 18.75,
    sanity: -15,
    perishTime: 6
  },
  {
    key: 'redCap',
    name: 'Red Cap',
    dlc: null,
    health: -20,
    hunger: 12.5,
    sanity: 0,
    perishTime: 10
  },
  {
    key: 'pepper',
    name: 'Pepper',
    dlc: "Don't Starve Together",
    health: -20,
    hunger: 9.375,
    sanity: -15,
    perishTime: 15
  },
  {
    key: 'musselBouillabaise',
    name: 'Mussel Bouillabaise',
    dlc: 'Shipwrecked',
    health: 20,
    hunger: 37.5,
    sanity: 15,
    perishTime: 10
  },
];

export interface DbInterfaceProps {
  user: SPUser;
}

export const DbInterface: React.FunctionComponent<DbInterfaceProps> = props => {
  const [selectionDetails, setSelectionDetails] = React.useState('No items selected');
  const [isPanelOpen, setIsPanelOpen] = React.useState(false);
  const [panelContent, setPanelContent] = React.useState(<Text />);

  const onDataListRowInvoke = (row: IRow) => {
    setPanelContent(
      <Stack>
        {Object.keys(row).map((key: string) => <Text>{key}: {row[key]}</Text>)}
      </Stack>
    );
    setIsPanelOpen(true);
  };

  return (
    <Fabric>
      <MenuBar onUploadClick={() => alert('upload clicked')} />
      <Text>{selectionDetails}</Text>
      <DataList
        onRowInvoke={onDataListRowInvoke}
        onSelectionChange={setSelectionDetails}
        items={dstFoodRows}
      ></DataList>
      <Text>{props.user.displayName} is a person that exists</Text>
      <Panel
        isOpen={isPanelOpen}
        isLightDismiss={true}
        closeButtonAriaLabel='Close'
        onDismiss={() => setIsPanelOpen(false)}
      >{panelContent}</Panel>
    </Fabric>
  );
};
