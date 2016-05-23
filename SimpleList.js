'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

var SimpleList = React.createClass({
  getInitialState: function() {
    // Necesitamos el rowHasChanged method, pero qué es???
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // Para definir el contenido de dataSource usamos cloneWithRows
    return {
      dataSource: ds.cloneWithRows(['a', 'b', 'c', 'a longer example', 'd', 'e'])
    };
  },

  _renderRow: function(rowData) {
    return <Text style={styles.row}>{rowData}</Text>;
  },

  render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD'
  }
});

module.exports = SimpleList;
