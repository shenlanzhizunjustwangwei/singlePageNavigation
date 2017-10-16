# singlePageNavigation
jQuery Single Page Navigation Plugin

# Usage

<code>
	<pre>
	$(".js-menu").singlePageNavigation({
		current : "active",
		duration : 500
	});
	</pre>
</code>

# Options

<table>
	<tr>
		<th>Options</th>
		<th>Description</th>
		<th>Default values</th>
	</tr>
	<tr>
		<td>exceptClass</td>
		<td>Enter the class name of element(s) for except. This element(s) will clickable, but not shine when document is scrolling.</td>
		<td align="center">""</td>
	</tr>
	<tr>
		<td>disabledClass</td>
		<td>Class name of element(s) that disable. The element(s) will shine, but not clickable.</td>
		<td align="center">""</td>
	</tr>
	<tr>
		<td>current</td>
		<td>Class name of current nav item </td>
		<td align="center">"current"</td>
	</tr>
	<tr>
		<td>duration</td>
		<td>Scrolling speed (ms)</td>
		<td align="center">700</td>
	</tr>
	<tr>
		<td>delay</td>
		<td>A time before starting to scroll to selected position (ms)</td>
		<td align="center">0</td>
	</tr>
	<tr>
		<td>ease</td>
		<td>An animation type for scrolling</td>
		<td align="center">swing</td>
	</tr>
	<tr>
		<td>offset</td>
		<td>Offset from the top. It also can be JQuery element of (DOM) that will have different height on defferent window size (when user change itself window width, for example), so offset also will change dynamically. Values: [0-999xxx(px) / $("selector")]. Important: When we use JQuery element, we must set "offsetDynamic" option to any values - ["height" / "innerHeight" / "outerHeight"]</td>
		<td align="center">0</td>
	</tr>
	<tr>
		<td>offsetDynamic</td>
		<td>This option sets, which type of height we will use. I takes one of values from ["height" / "innerHeight" / "outerHeight" / false ]. Important: When we use this option, we must set "offset" option to JQuery element - [$("selector")]</td>
		<td align="center">false</td>
	</tr>
	<tr>
		<td>scrollingOffsetBottom</td>
		<td>Offset from the bottom. Values [0.00 - 1.00 - (in percents) (example: 0.45 == 45% of window height) / 1 - 999xxx (in px)]</td>
		<td align="center">0.4</td>
	</tr>
	<tr>
		<td>changeAddress</td>
		<td>It sets availabe to change address location when nav item clicked</td>
		<td align="center">false</td>
	</tr>
	<tr>
		<td>currentClickable</td>
		<td>Clickable of current nav element</td>
		<td align="center">false</td>
	</tr>
	<tr>
		<td>beforeScrolling</td>
		<td>Function that execute before scrolling</td>
		<td align="center">null</td>
	</tr>
	<tr>
		<td>finishScrolling</td>
		<td>Function that execute after scrolling is done</td>
		<td align="center">null</td>
	</tr>
</table>

# Demo

<a href="http://google.ru" target="_blank">Demo Site link</a>