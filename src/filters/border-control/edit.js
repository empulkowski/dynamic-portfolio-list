import {createHigherOrderComponent} from '@wordpress/compose';
import {Fragment} from '@wordpress/element';
import {InspectorControls, PanelColorSettings} from "@wordpress/block-editor";
import {PanelBody, PanelRow, SelectControl, TextControl, RangeControl} from "@wordpress/components";
import {addFilter} from '@wordpress/hooks';
import React from "react";

// create a wrapper function which will receive the block we are trying to wrap
function blockWrapper(WrappedBlock) {
	// return a React component
	return class extends React.Component {
		render() {
			let {attributes, setAttributes} = this.props;

			let divStyles = {
				borderStyle: attributes.borderStyle || 'none',
				borderWidth: attributes.borderWidth = 'px',
				borderRadius: attributes.borderRadius ='px',
				borderColor: attributes.borderColor,
				padding: attributes.borderPadding + 'px',
			}

			return (
				<Fragment>
					{/* This is panel/toolbar we are adding to each block */}
					<InspectorControls>
						<PanelBody title="Border Controls" initialOpen={false}>
							<PanelRow>
								<SelectControl
									label="Style"
									value={attributes.borderStyle}
									onChange={borderStyle => setAttributes({borderStyle})}
									options={[
										{label: 'None', value: 'none'},
										{label: 'Solid', value: 'solid'},
										{label: 'Dashed', value: 'dashed'},
										{label: 'Dotted', value: 'dotted'},
									]}
								/>
							</PanelRow>

							<PanelRow>
								<TextControl
									label="padding"
									value={attributes.borderPadding}
									onChange={value => setAttributes({borderPadding: parseInt(value)})}
								/> px
							</PanelRow>

								<PanelColorSettings
									title="Colors"
									colorSettings={[
										{
											label: "Border Color",
											value: attributes.borderColor,
											onChange: borderColor => setAttributes({borderColor})
										},
									]}
								/>


							<RangeControl
								label="Border Width"
								value={attributes.borderWidth}
								onChange={value => setAttributes({borderWidth: parseInt(value)})}
								min={0.5}
								max={5}
							/> px

							<RangeControl
								label="Border Radius"
								value={attributes.borderRadius}
								onChange={value => setAttributes({borderRadius: parseInt(value)})}
								min={0}
								max={10}
							/> px



						</PanelBody>
					</InspectorControls>

					{/* This is a wrapper -- WrappedBlock is the block you are editing/wrapping */}
					<div className="wp-block" style={divStyles}>
						<WrappedBlock {...this.props} />
					</div>
				</Fragment>
			)
		}
	}
}

// Higher Order Components is a pretty high-level concept, but here's a good explanation:
// https://reactjs.org/docs/higher-order-components.html
// Note: this is *similar* to what WordPress does, but WordPress does not provide good documentation for this.
const borderComponent = createHigherOrderComponent(blockWrapper, 'border-control');

// register our filter with WordPress
addFilter('editor.BlockEdit', 'ep/border-control/block-wrapper', borderComponent);
