import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

export default class DropZone extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { onLayoutProps, children } = this.props;

    return (
      <View
        ref={(view) => { this.myComponent = view; }}
        onLayout={this.donelayout}
        style={styles.dropZone}
      >
        {children}
      </View>
    );
  }

  donelayout() {
    debugger;
    this.myComponent.measure((fx, fy, width, height, px, py) => {
      debugger;
      console.log(`Component width is: ${width}`);
      console.log(`Component height is: ${height}`);
      console.log(`X offset to frame: ${fx}`);
      console.log(`Y offset to frame: ${fy}`);
      console.log(`X offset to page: ${px}`);
      console.log(`Y offset to page: ${py}`);
    });
  }
}

let styles = StyleSheet.create({
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: '#fff',
  },
  dropZone: {

    height: 100,
    backgroundColor: 'red',
  },
});


DropZone.propTypes = {
  children: PropTypes.node,
  onLayoutProps: PropTypes.func.isRequired,
};

DropZone.defaultProps = {
  children: null,
};
