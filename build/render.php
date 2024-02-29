<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
/**
 * @var array $attribuetes Attributes for block
 * @var string $content The HTML return from the save () function
 * @var WP_Block $block All the details about this instance
 */

$query = new WP_Query([
	'post_type' => 'project',
	'orderby' => 'post_title',
	'order' => 'asc',
])

?>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="project-list">
		<?php while ($query->have_posts()) : $query->the_post(); ?>
			<div class="project">
				<div class="project-image">
					<?= get_the_post_thumbnail() ?>
				</div>
				<div class="project-details">
					<h3 class="project-name"><?= get_the_title() ?></h3>
					<div class="technology-used">
						<?php
						// Get the technology used
						$technologies = get_post_meta(get_the_ID(), 'wctc_ep_technology_used', true);
						$technologies_array = explode(',', $technologies);
						foreach ($technologies_array as $technology) {
							$technology = trim($technology);
							echo '<span class="technology">' . esc_html($technology) . '</span>';
						}
						?>
					</div>
					<p class="project-description"><?= get_post_meta(get_the_ID(), 'wctc_ep_project_description', true) ?></p>
					<div class="project-link">
						<a href="<?= esc_url(get_post_meta(get_the_ID(), 'wctc_ep_project_link', true)) ?>">
							Visit Project <i class="fas fa-arrow-right"></i>
						</a>
					</div>
				</div>
			</div>
		<?php endwhile; ?>
	</div>
</div>
