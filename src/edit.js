/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {BlockSettings} from "./BlockSettings";

export default function Edit({ attributes, setAttributes }) {
	attributes.projectLink = undefined;
	return (
		<div {...useBlockProps()}>
			<BlockSettings attributes={attributes} setAttributes={setAttributes} />
			<div className="project-list">
				{attributes.projects.map((project, index) => (
					<div className="project" key={index}>
						<div className="project-image">
							<img src={project.imageURL} alt={project.projectName} />
						</div>
						<div className="project-details">
							<h3 className="project-name">{project.projectName}</h3>
							<div className="technology-used">{project.technologyUsed}</div>
							<p className="project-description">{project.projectDescription}</p>
							<div className="project-link">{project.projectLink}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
