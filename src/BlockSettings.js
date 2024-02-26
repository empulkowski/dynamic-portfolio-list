import React from "react";
import {InspectorControls, PanelColorSettings} from "@wordpress/block-editor";

export class BlockSettings extends React.Component {
	render() {
		const {attributes, setAttributes} = this.props;

		return (
		<InspectorControls>
				<PanelColorSettings
					title="Colors"
					colorSettings={[
						{
							label: "Card Color",
							value: attributes.cardColor,
							onChange: cardColor => setAttributes({cardColor})
						},

						{
							label: "Heading Color",
							value: attributes.headingColor,
							onChange: headingColor => setAttributes({headingColor})
						},

						{
							label: "Text Color",
							value: attributes.textColor,
							onChange: textColor => setAttributes({textColor})
						},

					]}
				/>
			</InspectorControls>
		)
	}
}

