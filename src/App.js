import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import MainPage from "./components/MainPage";
import "./assets/css/global.css";

const httpClient = axios.create({
  baseURL: "https://api.spacexdata.com",
});

class App extends Component {
  state = {
    years: [],
    launches: [],
    loading: true,
  };

  componentDidMount() {
    return this.getLaunches();
  }

  getParams = (location) => {
    const searchParams = new URLSearchParams(location.search);
    return {
      year: searchParams.get("year") || "",
      launch_success: searchParams.get("launch_success") || "",
      land_success: searchParams.get("land_success") || "",
    };
  };

  getLaunches = (year = "", launch_success = "", land_success = "") => {
    if (!year && !launch_success && !land_success) {
      return httpClient
        .get(`/v3/launches?limit=100`)
        .then(({ data }) => {
          const year = new Date().getFullYear();
          const years = Array.from(
            new Array(15),
            (val, index) => year - index
          ).reverse();

          this.setState({ years, launches: data, loading: false });
        })
        .catch((e) => this.setState({ loading: false, error: true }));
    }
    this.setState({ loading: true, error: false });
    return httpClient
      .get(`/v3/launches?limit=100?year=${year}`)
      .then(({ data }) => this.setState({ launches: data, loading: false }))
      .catch((e) => this.setState({ loading: false, error: true }));
  };

  render() {
    const { years, launches, loading } = this.state;

    return (
      <Router>
        <React.Fragment>
          <Route
            path="/"
            render={({ location, history }) => {
              const { year, launch_success, land_success } = this.getParams(
                location
              );
              return (
                <MainPage
                  year={year}
                  launch_success={launch_success}
                  land_success={land_success}
                  history={history}
                  years={years}
                  launches={launches}
                  loading={loading}
                />
              );
            }}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
