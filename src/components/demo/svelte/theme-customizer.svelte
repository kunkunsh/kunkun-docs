<script lang="ts">
import {
	Button,
	ModeDropdown,
	ModeToggle,
	themeConfigStore,
	ThemeCustomizer,
	ThemeCustomizerButton,
	ThemeWrapper,
	updateTheme,
	type ThemeConfig,
} from "@kksh/svelte5";
import { get } from "svelte/store";
import "@kksh/svelte5/themes";

let config: ThemeConfig = {
	radius: get(themeConfigStore).radius,
	theme: get(themeConfigStore).theme,
	lightMode: get(themeConfigStore).lightMode,
};

$: updateTheme(config);
</script>

<ThemeWrapper>
	<ThemeCustomizerButton bind:config />
	<Button>Hello</Button>
</ThemeWrapper>
