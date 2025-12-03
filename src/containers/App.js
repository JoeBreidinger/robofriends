import React, { Component } from "react";
import { robots } from "../robots";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "tachyons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [], // robots,
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!robots.length) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="700" height="300">
              <path
                d="M1638 1065Q1638 1011 1625.5 981.5Q1613 952 1564.0 895.5Q1515 839 1499 819Q1538 777 1566.5 745.5Q1595 714 1609.5 692.5Q1624 671 1631.0 644.0Q1638 617 1638 573V0H1311V573Q1311 605 1286 630Q1262 654 1229 655H328V0H0V983H1229Q1262 984 1286 1008Q1311 1033 1311 1065V1228Q1311 1261 1286 1286Q1262 1310 1229 1311H0V1638H1311Q1443 1637 1542 1541Q1638 1442 1638 1311Z"
                transform="translate(50, 200) scale(0.029296875, -0.029296875)"
                fill="#9EDBBD"
              />
              <path
                d="M655 983H983V655H655ZM328 0Q196 1 97 97Q1 196 0 328V1311Q1 1442 97 1541Q196 1637 328 1638H1311Q1443 1637 1542 1541Q1638 1442 1638 1311V328Q1638 196 1542 97Q1443 1 1311 0ZM410 328H1229Q1262 329 1286 353Q1311 378 1311 410V1229Q1311 1261 1286 1286Q1262 1310 1229 1311H410Q377 1310 352.5 1285.5Q328 1261 328 1229V410Q328 378 353 353Q377 329 410 328Z"
                transform="translate(112.40234375, 200) scale(0.029296875, -0.029296875)"
                fill="#9EDBBD"
              />
              <path
                d="M1229 983Q1262 984 1286 1008Q1311 1033 1311 1065V1228Q1311 1261 1286 1286Q1262 1310 1229 1311H0V1638H1311Q1443 1637 1542 1541Q1638 1442 1638 1311V1065Q1638 1011 1625.5 981.5Q1613 952 1564.0 895.5Q1515 839 1499 819Q1538 777 1566.5 745.5Q1595 714 1609.5 692.5Q1624 671 1631.0 644.0Q1638 617 1638 573V328Q1638 196 1542 97Q1443 1 1311 0H0V983ZM1229 328Q1262 329 1286 353Q1311 378 1311 410V573Q1311 605 1286 630Q1262 654 1229 655H328V328Z"
                transform="translate(170.0, 200) scale(0.029296875, -0.029296875)"
                fill="#9EDBBD"
              />
              <path
                d="M655 983H983V655H655ZM328 0Q196 1 97 97Q1 196 0 328V1311Q1 1442 97 1541Q196 1637 328 1638H1311Q1443 1637 1542 1541Q1638 1442 1638 1311V328Q1638 196 1542 97Q1443 1 1311 0ZM410 328H1229Q1262 329 1286 353Q1311 378 1311 410V1229Q1311 1261 1286 1286Q1262 1310 1229 1311H410Q377 1310 352.5 1285.5Q328 1261 328 1229V410Q328 378 353 353Q377 329 410 328Z"
                transform="translate(227.59765625, 200) scale(0.029296875, -0.029296875)"
                fill="#9EDBBD"
              />
              <path
                d="M655 983H1311V655H655ZM328 1229V0H0V1311Q1 1442 97 1541Q196 1637 328 1638H1638V1311H410Q377 1310 352.5 1285.5Q328 1261 328 1229Z"
                transform="translate(285.1953125, 200) scale(0.029296875, -0.029296875)"
                fill="#9EDBBD"
              />
              <path
                d="M1638 1065Q1638 1011 1625.5 981.5Q1613 952 1564.0 895.5Q1515 839 1499 819Q1538 777 1566.5 745.5Q1595 714 1609.5 692.5Q1624 671 1631.0 644.0Q1638 617 1638 573V0H1311V573Q1311 605 1286 630Q1262 654 1229 655H328V0H0V983H1229Q1262 984 1286 1008Q1311 1033 1311 1065V1228Q1311 1261 1286 1286Q1262 1310 1229 1311H0V1638H1311Q1443 1637 1542 1541Q1638 1442 1638 1311Z"
                transform="translate(347.59765625, 200) scale(0.029296875, -0.029296875)"
                fill="#9EDBBD"
              />
              <path
                d="M328 983H655V328H983V0H0V328H328ZM0 1638H983V1311H0Z"
                transform="translate(405.1953125, 200) scale(0.029296875, -0.029296875)"
                fill="#9EDBBD"
              />
              <path
                d="M655 983H1311V655H655ZM410 328H1638V0H328Q196 1 97 97Q1 196 0 328V1311Q1 1442 97 1541Q196 1637 328 1638H1638V1311H410Q377 1310 352.5 1285.5Q328 1261 328 1229V410Q328 378 353 353Q377 329 410 328Z"
                transform="translate(443.603515625, 200) scale(0.029296875, -0.029296875)"
                fill="#9EDBBD"
              />
              <path
                d="M1229 1311H328V0H0V1638H1311Q1443 1637 1542 1541Q1638 1442 1638 1311V0H1311V1229Q1311 1261 1286 1286Q1262 1310 1229 1311Z"
                transform="translate(501.201171875, 200) scale(0.029296875, -0.029296875)"
                fill="#9EDBBD"
              />
              <path
                d="M1229 328Q1262 329 1286 353Q1311 378 1311 410V1229Q1311 1261 1286 1286Q1262 1310 1229 1311H0V1638H1311Q1443 1637 1542 1541Q1638 1442 1638 1311V328Q1638 196 1542 97Q1443 1 1311 0H0V983H328V328Z"
                transform="translate(558.798828125, 200) scale(0.029296875, -0.029296875)"
                fill="#9EDBBD"
              />
              <path
                d="M0 1311Q1 1442 97 1541Q196 1637 328 1638H1638V1311ZM1229 328Q1262 329 1286 353Q1311 378 1311 410V573Q1311 605 1286 630Q1262 654 1229 655H328Q196 656 97 752Q1 851 0 983H1311Q1443 982 1542 886Q1638 787 1638 655V328Q1638 196 1542 97Q1443 1 1311 0H0V328Z"
                transform="translate(616.396484375, 200) scale(0.029296875, -0.029296875)"
                fill="#9EDBBD"
              />
            </svg>
          </div>
          <SearchBox
            searchfield={searchfield}
            searchChange={this.onSearchChange}
          />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
