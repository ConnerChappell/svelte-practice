<script lang="ts">
	import { get_all_posts } from './posts.remote';

	const posts = await get_all_posts();
</script>

<ol>
	<!-- Can also do {#each await get_all_posts() as post} -->

	{#each posts as post (post.id)}
		<li>{post.title}</li>
	{/each}
</ol>
