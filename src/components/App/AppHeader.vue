<template>
	<header class="h-20 border-b border-gray-200 flex items-center justify-between px-5">
		<div id="header_left" class="flex items-center">
			<div
				id="logo"
				class="w-10 h-10 mr-6 bg-black text-white text-xl cursor-pointer font-black flex items-center justify-center rounded transition hover:shadow-xl"
			>
				IT
			</div>

			<div id="header__links" class="flex items-center gap-5">
				<a href="/" class="text-neutral-400 font-semibold transition hover:text-black">Browse</a>
				<a href="/" class="text-neutral-400 font-semibold transition hover:text-black">Discover</a>
				<a href="/" class="text-neutral-400 font-semibold transition hover:text-black">Messages</a>
			</div>
		</div>

		<div id="header_right" class="flex items-center gap-4">
			<input
				type="text"
				placeholder="Search..."
				class="bg-neutral-100 text-neutral-600 text-sm px-4 py-2 rounded-md outline-none"
			/>

			<button
				class="bg-blue-500 text-white font-semibold px-4 py-1.5 rounded-md transition hover:bg-blue-600"
			>
				Create
			</button>
		</div>
	</header>
</template>

<script></script>

<style></style>
