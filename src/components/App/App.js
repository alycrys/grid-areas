import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getHero,
  getSideHero,
  getFirstList,
  getSecondList,
  getThirdList,
} from "../../utils/api";
import Item from "../Item";
import List from "../List/List";
import styles from "./App.module.css";

class App extends Component {
  static propTypes = {
    hero: PropTypes.object.isRequired,
    sideHero: PropTypes.object.isRequired,
    firstList: PropTypes.array.isRequired,
    secondList: PropTypes.array.isRequired,
    thirdList: PropTypes.array.isRequired,
  };

  render() {
    const { hero, sideHero, firstList, secondList, thirdList } = this.props;

    return (
      <div className={styles.grid}>
        <Item item={hero} className={styles.hero} />
        <Item item={sideHero} className={styles.sideHero} />
        <List items={firstList} className={styles.firstList} />
        <List items={secondList} className={styles.secondList} />
        <List items={thirdList} className={styles.thirdList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hero: getHero(),
    sideHero: getSideHero(),
    firstList: getFirstList(),
    secondList: getSecondList(),
    thirdList: getThirdList(),
  };
};

export { App as _App };
export default connect(mapStateToProps)(App);
