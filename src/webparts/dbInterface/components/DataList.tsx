import * as React from 'react';
import { DetailsList, Selection, MarqueeSelection, SelectionMode, DetailsListLayoutMode } from 'office-ui-fabric-react';
import IRow from './IRow';

export interface DataListProps {
  items: IRow[];
  onSelectionChange: (selectionDetails: string) => void;
  onRowInvoke: (row: IRow) => void;
}

export const DataList: React.FunctionComponent<DataListProps> = props => {
  let selection = new Selection({
    onSelectionChanged: () => {
      props.onSelectionChange(getSelectionDetails());
    }
  });

  const getSelectionDetails = (): string => {
    const selectionCount = selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + (selection.getSelection()[0] as IRow).name;
      default:
        return selectionCount.toString() + ' items selected';
    }
  };

  return (
    <MarqueeSelection isDraggingConstrainedToRoot={true} selection={selection}>
      <DetailsList
        items={props.items}
        selectionMode={SelectionMode.multiple}
        layoutMode={DetailsListLayoutMode.justified}
        selection={selection}
        selectionPreservedOnEmptyClick={true}
        onItemInvoked={props.onRowInvoke}
        enterModalSelectionOnTouch={true}
        ariaLabelForSelectionColumn='Toggle selection'
        ariaLabelForSelectAllCheckbox='Toggle selection for all items'
        checkButtonAriaLabel='Row checkbox'
      />
    </MarqueeSelection>
  );
};
