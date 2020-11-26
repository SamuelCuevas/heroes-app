import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Navbar } from '../ui/Navbar'

import { MarvelScreen } from '../marvel/MarvelScreen'
import { HeroScreen } from '../heroes/HeroScreen'
import { DcScreen } from '../dc/DcScreen'
import { SearchScreen } from '../search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-4">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroeId" component={HeroScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
