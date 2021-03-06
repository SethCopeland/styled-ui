import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { applyVariations } from '../utils';
import * as Styled from './styled.jsx';

/** Standard button with transition styles */
export class Button extends PureComponent {
	static propTypes = {
		/** See the docs for how to override styles properly  */
		className: PropTypes.string,
		/** The contents of the button (can be text, svg, or other element) */
		children: PropTypes.node.isRequired,
		/** An optional theme */
		theme: PropTypes.shape({
			defaultColor: PropTypes.string,
			hoverColor: PropTypes.string,
			activeColor: PropTypes.string,
			disabledColor: PropTypes.string,
			width: PropTypes.string,
			fontSize: PropTypes.string,
		}),
		/** Primary button variation */
		primary: PropTypes.bool,
		/** Primary outline variation */
		primaryOutline: PropTypes.bool,
		/** Medium variation */
		medium: PropTypes.bool,
		/** Small variation */
		small: PropTypes.bool,
		/** Large variation */
		large: PropTypes.bool,
		/** Extra large variation */
		extraLarge: PropTypes.bool,
		/** The type of button (for instance, submit) */
		type: PropTypes.string,
	};

	static defaultProps = {
		type: 'button',
	};

	render() {
		const { children, theme, ...buttonProps } = this.props;

		const { component: MappedStyledComponent, filteredProps } = applyVariations(
			Styled.Button,
			Styled.variationMap,
			buttonProps,
		);

		return (
			<MappedStyledComponent theme={theme} {...filteredProps || {}}>
				{children}
			</MappedStyledComponent>
		);
	}
}
