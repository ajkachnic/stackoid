<script>
  import ThemeContext from '../components/ThemeContext.svelte';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';


  export let segment;
  
  
</script>

<style>

* {
	font-family: 'AvenirNext', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  transition: inherit;
}
:root {
    --theme-background: #01024e;
    --theme-foreground: #fff;
    --theme-accent: #ff6464;
    --theme-alt: #000042;
    
		background-color: var(--theme-alt)/*#F7FBFF*/;
    transition: color .4s cubic-bezier(0.455, 0.03, 0.515, 0.955), background-color .4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
@font-face {
  font-family: 'AvenirNext';
  src: url('/fonts/AvenirNextLTPro-UltLt.eot'); /* IE9 Compat Modes */
  src: url('/fonts/AvenirNextLTPro-UltLt.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/AvenirNextLTPro-UltLt.woff') format('woff'), /* Modern Browsers */
       url('/fonts/AvenirNextLTPro-UltLt.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/fonts/AvenirNextLTPro-UltLt.svg#svg') format('svg'); /* Legacy iOS */
       
  font-style:   normal;
  font-weight:  200;
  font-display: swap;
}

@font-face {
  font-family: 'AvenirNext';
  src: url('/fonts/AvenirNextLTPro-Regular.eot'); /* IE9 Compat Modes */
  src: url('/fonts/AvenirNextLTPro-Regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/AvenirNextLTPro-Regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/AvenirNextLTPro-Regular.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/fonts/AvenirNextLTPro-Regular.svg#svg') format('svg'); /* Legacy iOS */
       
  font-style:   normal;
  font-display: swap;
  font-weight:  300;
}

@font-face {
  font-family: 'AvenirNext';
  src: url('/fonts/AvenirNextLTPro-Medium.eot'); /* IE9 Compat Modes */
  src: url('/fonts/AvenirNextLTPro-Medium.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/AvenirNextLTPro-Medium.woff') format('woff'), /* Modern Browsers */
       url('/fonts/AvenirNextLTPro-Medium.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/fonts/AvenirNextLTPro-Medium.svg#svg') format('svg'); /* Legacy iOS */
       
  font-style:   normal;
  font-display: swap;
  font-weight:  400;
}


@font-face {
  font-family: 'AvenirNext';
  src: url('/fonts/AvenirNextLTPro-Demi.eot'); /* IE9 Compat Modes */
  src: url('/fonts/AvenirNextLTPro-Demi.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/AvenirNextLTPro-Demi.woff') format('woff'), /* Modern Browsers */
       url('/fonts/AvenirNextLTPro-Demi.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/fonts/AvenirNextLTPro-Demi.svg#svg') format('svg'); /* Legacy iOS */
       
  font-style:   normal;
  font-display: swap;
  font-weight:  500;
}

@font-face {
  font-family: 'AvenirNext';
  src: url('/fonts/AvenirNextLTPro-Bold.eot'); /* IE9 Compat Modes */
  src: url('/fonts/AvenirNextLTPro-Bold.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/AvenirNextLTPro-Bold.woff') format('woff'), /* Modern Browsers */
       url('/fonts/AvenirNextLTPro-Bold.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/fonts/AvenirNextLTPro-Bold.svg#svg') format('svg'); /* Legacy iOS */
       
  font-style:   normal;
  font-display: swap;
  font-weight:  600;
}

@font-face {
  font-family: 'AvenirNext Cn';
  src: url('/fonts/AvenirNextLTPro-UltLtCn.eot'); /* IE9 Compat Modes */
  src: url('/fonts/AvenirNextLTPro-UltLtCn.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/AvenirNextLTPro-UltLtCn.woff') format('woff'), /* Modern Browsers */
       url('/fonts/AvenirNextLTPro-UltLtCn.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/fonts/AvenirNextLTPro-UltLtCn.svg#svg') format('svg'); /* Legacy iOS */
       
  font-style:   normal;
  font-display: swap;
  font-weight:  200;
}

@font-face {
  font-family: 'AvenirNext Cn';
  src: url('/fonts/AvenirNextLTPro-Cn.eot'); /* IE9 Compat Modes */
  src: url('/fonts/AvenirNextLTPro-Cn.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/AvenirNextLTPro-Cn.woff') format('woff'), /* Modern Browsers */
       url('/fonts/AvenirNextLTPro-Cn.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/fonts/AvenirNextLTPro-Cn.svg#svg') format('svg'); /* Legacy iOS */
       
  font-style:   normal;
  font-display: swap;
  font-weight:  300;
}

@font-face {
  font-family: 'AvenirNext Cn';
  src: url('/fonts/AvenirNextLTPro-MediumCn.eot'); /* IE9 Compat Modes */
  src: url('/fonts/AvenirNextLTPro-MediumCn.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/AvenirNextLTPro-MediumCn.woff') format('woff'), /* Modern Browsers */
       url('/fonts/AvenirNextLTPro-MediumCn.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/fonts/AvenirNextLTPro-MediumCn.svg#svg') format('svg'); /* Legacy iOS */
       
  font-style:   normal;
  font-display: swap;
  font-weight:  400;
}

@font-face {
  font-family: 'AvenirNext Cn';
  src: url('/fonts/AvenirNextLTPro-DemiCn.eot'); /* IE9 Compat Modes */
  src: url('/fonts/AvenirNextLTPro-DemiCn.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/AvenirNextLTPro-DemiCn.woff') format('woff'), /* Modern Browsers */
       url('/fonts/AvenirNextLTPro-DemiCn.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/fonts/AvenirNextLTPro-DemiCn.svg#svg') format('svg'); /* Legacy iOS */
       
  font-style:   normal;
  font-display: swap;
  font-weight:  500;
}

@font-face {
  font-family: 'AvenirNext Cn';
  src: url('/fonts/AvenirNextLTPro-BoldCn.eot'); /* IE9 Compat Modes */
  src: url('/fonts/AvenirNextLTPro-BoldCn.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/AvenirNextLTPro-BoldCn.woff') format('woff'), /* Modern Browsers */
       url('/fonts/AvenirNextLTPro-BoldCn.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/fonts/AvenirNextLTPro-BoldCn.svg#svg') format('svg'); /* Legacy iOS */
       
  font-style:   normal;
  font-display: swap;
  font-weight:  600;
}

@font-face {
  font-family: 'AvenirNext Cn';
  src: url('/fonts/AvenirNextLTPro-HeavyCn.eot'); /* IE9 Compat Modes */
  src: url('/fonts/AvenirNextLTPro-HeavyCn.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/AvenirNextLTPro-HeavyCn.woff') format('woff'), /* Modern Browsers */
       url('/fonts/AvenirNextLTPro-HeavyCn.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/fonts/AvenirNextLTPro-HeavyCn.svg#svg') format('svg'); /* Legacy iOS */
       
  font-style:   normal;
  font-display: swap;
  font-weight:  600;
}


@font-face {
  font-family: 'AvenirNext';
  src: url('/fonts/AvenirNextLTPro-It.eot'); /* IE9 Compat Modes */
  src: url('/fonts/AvenirNextLTPro-It.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/AvenirNextLTPro-It.woff') format('woff'), /* Modern Browsers */
       url('/fonts/AvenirNextLTPro-It.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('/fonts/AvenirNextLTPro-It.svg#svg') format('svg'); /* Legacy iOS */
       
  font-style:   italic;
  font-display: swap;
  font-weight:  300;
}
	main {
		position: relative;
		max-width: 100em;
		background-color: var(--theme-alt)/* #F7FBFF */;
		color: var(--theme-foreground);
    padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;

    transition: color .4s cubic-bezier(0.455, 0.03, 0.515, 0.955), background-color .4s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}
</style>

<svelte:head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-158973361-3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-158973361-3');
</script>
<meta name="description" content="A simple way of sharing technologies used on side projects">

<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@su_andrewk">
<meta name="twitter:title" content="Stackoid">
<meta name="twitter:description" content="A simple way of sharing technologies used on side projects">
<meta name="twitter:creator" content="@su_andrewk">

<meta name="twitter:image" content="/twitter.png">

<meta property="og:title" content="Title Here" />
<meta property="og:url" content="https://stackoid.now.sh" />
<meta property="og:image" content="/twitter.png" />
<meta property="og:description" content="A simple way of sharing technologies used on side projects" />
<meta property="og:site_name" content="Stackoid" />

</svelte:head>
<ThemeContext>
<Nav {segment}/>

<main>

	<slot></slot>
</main>
<Footer />
</ThemeContext>