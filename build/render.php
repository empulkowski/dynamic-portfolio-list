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
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php while ($query->have_posts()):
		$query->the_post()
		?>
		<a class="flip-card" href="<?= get_the_permalink()?>">
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<?= get_the_post_thumbnail() ?>
				</div>
				<div class="flip-card-back" style="background-color: <?= $attributes['cardColor'] ?>">
					<h3 class="name" style="color: <?= $attributes['headingColor'] ?>"><?= get_the_title()?></h3>
					<div class="projectName" style="color: <?= $attributes['textColor'] ?>"><?=get_post_meta(get_the_ID(), 'wctc_ep_project_name', true)?></div>
					<div class="technologyUsed" style="color: <?= $attributes['textColor'] ?>"><?=get_post_meta(get_the_ID(), 'wctc_ep_technology_used', true)?></div>
					<p class="projectDescription" style="color: <?= $attributes['textColor'] ?>"><?=get_post_meta(get_the_ID(), 'wctc_ep_project_description', true)?></p>
					<div class="projectLink" style="color: <?= $attributes['textColor'] ?>"><?=get_post_meta(get_the_ID(), 'wctc_ep_project_link', true)?></div>

					<div class="bio" style="color: <?= $attributes['textColor'] ?>">
						<p><?= get_the_content() ?></p>
					</div>
				</div>
			</div>
		</a>
	<?php endwhile; ?>
</div>
