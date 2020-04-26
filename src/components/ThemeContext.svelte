<script>
  import { setContext, onMount } from 'svelte';
  import { writable } from "svelte/store";

  export let themes = [{
      name: 'dark',
      colors: {
        background: '#01024e',
        foreground: '#ffffff',
        accent: '#ff6464',
        alt: '#000042'
      },
    },
    {
      name: 'light',
      colors: {
        background: '#ffffff',
        foreground: '#101010',
        accent: '#ff6464',
        alt: '#F7FBFF'
      },
    }];

  let _current = themes[0].name;
  const getCurrentTheme = name => themes.find(h => h.name === name);
  const Theme = writable(getCurrentTheme(_current));


  setContext("theme", {
    theme: Theme,
    toggle: () => {
      let _index = themes.findIndex(h => h.name === _current);
      _current = themes[_index === themes.length -1 ? 0: (_index += 1)].name;

      Theme.update(t => ({ ...t, ...getCurrentTheme(_current)}));
      setRootColors(getCurrentTheme(_current));
      localStore("theme", _current);
    }

    
  })
  onMount(() => {
    setRootColors(getCurrentTheme(_current));
  });
   function setRootColors(theme) {
    for (let [prop, color] of Object.entries(theme.colors)) {
      let varString = `--theme-${prop}`;
      document.documentElement.style.setProperty(varString, color);
    }
    document.documentElement.style.setProperty("--theme-name", theme.name);
  };
  </script>

<slot>
  <!-- content will go here -->
</slot>