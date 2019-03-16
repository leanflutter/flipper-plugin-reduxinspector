import {
  FlipperPlugin,
  Button,
  DetailSidebar,
  FlexColumn,
  SearchableTable,
  Text,
  Panel,
  ManagedDataInspector,
} from 'flipper';

function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  return `${date.getHours().toString().padStart(2, '0')}:${
    date.getMinutes().toString().padStart(2,'0',
  )}:${date.getSeconds().toString().padStart(2, '0')}.${
    date.getMilliseconds().toString().padStart(3, '0',
  )}`;
}

const COLUMN_SIZE = {
  actionType: 'flex',
  timeStamp: 200,
};

const COLUMNS = {
  actionType: {
    value: 'Action Type',
  },
  timeStamp: {
    value: 'Time',
  },
};

class FlipperReduxInspectorPlugin extends FlipperPlugin {
  static id = 'ReduxInspector';

  constructor(props) {
    super(props);

    this.state = {
      selectedIds: [],
      datas: []
    };
  }

  init() {
    this.client.subscribe('newAction', this.handleNewActionEvent);
  }

  handleNewActionEvent = (data) => {
    this.setState({
      datas: [...this.state.datas, data],
    });
  }

  clear = () => {
    this.setState({
      selectedIds: [],
      datas: [],
    });
  }

  onRowHighlighted = (keys) => {
    this.setState({
      selectedIds: keys,
    });
  };

  renderSidebar = () => {
    const { selectedIds, datas } = this.state;
    const selectedId = selectedIds.length !== 1 ? null : selectedIds[0];

    if (selectedId != null) {
      const selectedData = datas.find(v => v.uniqueId === selectedId);
      const state = typeof selectedData.state === 'string' ? JSON.parse(selectedData.state) : selectedData.state;

      return (
        <Panel floating={false} heading={'State'}>
          <ManagedDataInspector data={state} expandRoot={true} />
        </Panel>
      );
    } else {
      return null;
    }
  };

  buildRow = (row) => {
    return {
      columns: {
        timeStamp: {
          value: <Text>{formatTimestamp(row.timeStamp)}</Text>,
          filterValue: row.timeStamp,
        },
        actionType: {
          value: <Text>{row.actionType}</Text>,
          filterValue: row.actionType,
        },
      },
      key: row.uniqueId,
      copyText: JSON.stringify(row),
      filterValue: `${row.actionType}`,
    };
  }

  render() {
    const { datas } = this.state;
    const rows = datas.map(v => this.buildRow(v));

    return (
      <FlexColumn grow={true}>
        <SearchableTable
          key={this.constructor.id}
          rowLineHeight={28}
          floating={false}
          multiline={true}
          columnSizes={COLUMN_SIZE}
          columns={COLUMNS}
          onRowHighlighted={this.onRowHighlighted}
          multiHighlight={true}
          rows={rows}
          stickyBottom={true}
          actions={<Button onClick={this.clear}>Clear</Button>}
        />
        <DetailSidebar>{this.renderSidebar()}</DetailSidebar>
      </FlexColumn>
    );
  }
}

export default FlipperReduxInspectorPlugin;
