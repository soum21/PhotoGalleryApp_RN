import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const PaginationComponent = ({
  pages,
  handlePagination,
  currentPage,
  maxPageNumberLimit,
  minPageNumberLimit,
  doPrev,
  doNext
}) => {
  const handleClick = (number) => {
    handlePagination(number);
  };
  const handlePrev = () => {
    doPrev();
  };
  const handleNext = () => {
    doNext();
  };
  const renderPages = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number >= minPageNumberLimit) {
      return (
        <TouchableOpacity
          key={number}
          style={currentPage === number ? styles.active : styles.squareButton}
          onPress={() => handleClick(number)}>
          <Text style={currentPage === number ? styles.activeText : styles.normalText}>{number}</Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  });

  const RenderPagination = ({children}) => {
    if (pages.length > 1) {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            disabled={currentPage === pages[0] ? true : false}
            style={styles.buttonPrevNext}
            onPress={() => handlePrev()}>
            <Text style={{fontSize: 16}}>Prev</Text>
          </TouchableOpacity>
          {children}
          <TouchableOpacity
            disabled={currentPage === pages[pages.length - 1] ? true : false}
            style={styles.buttonPrevNext}
            onPress={() => handleNext()}>
            <Text style={{fontSize: 16}}>Next</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return children;
    }
  };
  return (
    <View style={styles.container}>
      <RenderPagination>{renderPages}</RenderPagination>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  squareButton: {
    width: 30,
    height: 30,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'black',
    elevation: 2
  },
  active: {
    width: 40,
    height: 40,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'black',
    elevation: 2
  },
  normalText: {
    color: 'black',
    fontSize: 16
  },
  activeText: {
    color: '#fff',
    fontSize: 16
  },
  buttonPrevNext: {
    height: 40,
    width: 'auto',
    margin: 3,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'black',
    elevation: 2
  }
});

export default PaginationComponent;
