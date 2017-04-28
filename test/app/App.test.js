import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/app/App';
import HeaderBar from 'd2-ui/lib/app-header/HeaderBar';

describe('App', () => {
    let appComponent;

    beforeEach(() => {
        appComponent = shallow(<App />);
    });

    it('should render the startup text', () => {
        expect(appComponent.find('.main-content').text()).to.equal('Hello, John! Your app skeleton set up correctly!');
    });

    it('should render the custom name if it is passed', () => {
        appComponent = shallow(<App name="Mark" />);

        expect(appComponent.find('.main-content').text()).to.equal('Hello, Mark! Your app skeleton set up correctly!');
    });

    xit('should render the HeaderBar component from d2-ui', () => {
        expect(appComponent.find(HeaderBar)).to.have.length(1);
    });


});
