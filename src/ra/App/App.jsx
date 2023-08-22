import React from 'react';
import Logo from '~/components/Icons/RALogo';
import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';
import ScrollToTop from '~/components/ScrollToTop/ScrollToTop';
import store from "../../reducers/Store.jsx";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {NotificationContainer} from 'react-notifications';
import pages from '../config/pages.js';
import footerConfig from '../config/footerConfig.js';
import {StickyContainer} from 'react-sticky';
import GAListener from '~/components/GAListener.jsx';

// Reverse the pages for the router, so that the / path get's matched last
const reversedPages = [].concat(pages).reverse();

const App = () => (
        <Provider store={store}>
            <StickyContainer>
                <Router basename="/brand/">
                    <ScrollToTop>
                        <Header
                            navItems={pages}
                            logo={Logo}
                        />
                        <GAListener>
                            <Switch>
                                {reversedPages.map((page) =>
                                    <Route
                                        key={page.path}
                                        path={page.path}
                                        component={page.comp}
                                    />)}
                            </Switch>
                        </GAListener>
                        <Footer
                            socials={footerConfig.socials}
                            disclaimers={footerConfig.disclaimers}
                        />
                        <NotificationContainer/>
                    </ScrollToTop>
                </Router>
            </StickyContainer>
        </Provider>
    )
;

export default App;
