### What is Emoji Calendar

Add a festive touch to your HTML all year round, simply include the script and add `#emoji-calendar` id to a block element. Emoji Calendar will automatically insert a festive emoji into the corresponding element depending on the date and the time of year.

- Check it out on GitHub: [github.com/emoji-calendar](https://github.com/kcamcam/emoji-calendar)  
- Check out the demo: [kcamel.com/emoji-calendar/](https://kcamel.com/emoji-calendar)  
- Script CDN: [https://cdn.jsdelivr.net/gh/kcamcam/emoji-calendar/emoji-calendar.js](https://cdn.jsdelivr.net/gh/kcamcam/emoji-calendar/emoji-calendar.js)

![img](calendar.png)

### How to use Emoji Calendar

1. Give an element on your page the id `#emoji-calendar`
1. Add the script to the footer of your HTML page 
   `<script src="https://cdn.jsdelivr.net/gh/kcamcam/emoji-calendar/emoji-calendar.js"></script>`
1. Thats all
1. **Optional**: sepcify a custom emoji by calling the `insertEmoji("🙂");` after the script.

### Template
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
    <span id="emoji-calendar">📆</span>
    <script src="https://cdn.jsdelivr.net/gh/kcamcam/emoji-calendar/emoji-calendar.js"></script>
    <script>
        // Optional for a custom emoji
        insertEmoji("🙂");
    </script>
</body>
</html>
```

### Notes
- Corresponding holidays are official Canadian holidays only.  
- Max font-size for an emoji is 8em. I have clue why 🤔
- Make sure to specify the `charset=UTF-8` in the `<head>` section if not most emojis wont get rendered.
