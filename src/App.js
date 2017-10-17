import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './action/location';
import './App.css';
import GoogleMap from './GoogleMap';
import { PageHeader, Grid, Button, FormControl } from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchField: ''
        };

        this.onClickSearch = this.onClickSearch.bind(this);
    }

    onClickSearch() {
        const { getLocationByUserName } = this.props;
        getLocationByUserName(this.state.searchField);
    }

    onChangeSearchField(e) {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const { locations = [] } = this.props;
        return (
            <Grid>


                                <PageHeader>Instamap <small>insta photo on the map</small></PageHeader>

                                <FormControl
                                    type="text"
                                    value={this.state.searchField}
                                    placeholder="Username"
                                    onChange={e => this.onChangeSearchField(e)}
                                />
                                <Button onClick={this.onClickSearch}>Show photo!</Button>

                                {
                                    locations.length > 0 &&
                                    <GoogleMap locations={locations}/>
                                }

            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        locations: state.location.data
    }
};

const mapDispatchToProps = {
    getLocationByUserName: (userName) => action.getLocationByUserName(userName)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
