/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

jest.mock("react-native-reanimated", () => {
	const View = require('react-native').View;
	return {
		Value: jest.fn(),
		event: jest.fn(),
		add: jest.fn(),
		eq: jest.fn(),
		set: jest.fn(),
		cond: jest.fn(),
		interpolate: jest.fn(),
		View: View,
		Extrapolate: { CLAMP: jest.fn() }
	};
});

jest.mock("react-native-gesture-handler", () => {});

jest.mock("react-native-tab-view", () => {});

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
