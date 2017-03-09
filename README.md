# Lined textarea using JQuery

A [JQuery](http://jquery.com/) plugin that replaces the textarea in the DOM with UI with line numbers and editor. This works with multiple textareas and have multiple themes (coming soon).

## Demo & Examples

[http://www.techdining.com/plugins/jquery/lined-textarea](http://www.techdining.com/plugins/jquery/lined-textarea)

## Dependency

This plugin uses JQuery, so use the latest version. (3.1.1 in my case)

## Setup

Download both js and css files and use it where ever needed.
(CDN Links coming soon)

```html
<link href="linedTextArea-jquery.css" type="text/css" rel="stylesheet" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="linedTextArea-jquery.js"></script>
```

## Example Usage

### HTML

```html
<div class="lined"></div>
```
or

```html
<pre class="lined"></pre>
```


### JavaScript
```javascript
$(function() {
     $(".lined").linedTextArea();
});
```

## Parameters

This plugin accepts one parameter for now i.e., *selectedLine*.
 
```javascript
$(function() {
	$(".lined").linedTextArea({
		selectedLine: 20,
	});
});
```

## Screenshots

![Image of Plugin](https://raw.githubusercontent.com/sreekarsudireddy/LinedTextDiv-JQueryPlugin/master/screenshots/screenshot.PNG)
