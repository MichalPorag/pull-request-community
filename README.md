# Pull Request Community Pages

> View it online: https://pullrequest.co.il/

## Adding your profile

### What to write?

First of all, please write in Hebrew. Share things that will help other people know what makes
you unique: hobbies, talents, fun-facts, technologies that you love.

Here are some examples of things that can fit well:

✅ מדברת סינית שוטפת  
✅ מתנדב במד"א  
✅ חובבת מושבעת של בדיקות אוטומטיות וקוד מסודר  
✅ אוהב לאפות עוגות וקינוחים  
✅ לשעבר תלמיד ישיבה  
✅ מנגנת בחליל פן  
✅ גולש רוח וגלים וצולל בכל הזדמנות אפשרית  
✅ מתנדבת בשיקודס  
✅ בזמני הפנוי אוהב לתופף, להקליט ולהופיע עם הלהקה שלי

And these are examples of things that don't really add value, they may sound "smart" but when
other people read it, it doesn't help them connect with you:

🚫 אוהב לקודד ולישון, לא בהכרח בסדר הזה  
🚫 It's okay password, I'm insecure too  
🚫 מחליף תחביבים כל שבוע, מוזמנים לשאול אותי מה הפעם.

### The technical stuff

You can add / update your personal profile by creating a Pull Request to this repo:

1. Create a new JSON file in the [people](people/) directory, and name it as your GitHub username.  
   e.g. If you GitHub user is MichalPorag, `MichalPorag.json`.

   The JSON file should look something like:

   ```json
   {
     "name": "השם שלך",
     "github": "Your GitHub Username (not link, just the username)",
     "facebook": "Link to your Facebook Profile (optional)",
     "twitter": "Link to your Twitter Profile (optional)",
     "linkedin": "Link to your LinkedIn page (optional)",
     "stackoverflow": "Link to your Stack Overflow page (optional)",
     "website": "Link to your personal blog / website (optional)",
     "description": "פסקה או שתיים על עצמך: רקע מקצועי, עבודה, תחביבים ומה שחשוב לך שהחברים בקבוצה ידעו"
   }
   ```

   The `name`, `github`, and `description` fields are required and **need to be in Hebrew**.  
   All the other fields are optional.

   Use the `description` field to introduce yourself: technologies that you love, hobbies, fun-facts,
   and anything that you are passionate about. Are you an architect? Do you speak Chinese? Studied amusement park
   and roller coaster engineering? This is the place to brag!

2. By default, we'll use your GitHub photo. If you don't have a GitHub profile photo,
   or want to use a different one, add it under [public/images/people](public/images/people) in jpeg format.
   Use your GitHub username for the image, e.g. `MichalPorag.jpg`.

   Then, add `"customImage": true` to your profile JSON that you created in the previous step.

3. Create a pull request with new files.

## Running a development environment

### In the cloud

Open the project in [https://githubbox.com/urish/pull-request-community](CodeSandbox) to start hacking in your browser.

### Locally

First, make sure you have all the dependencies installed by running

```bash
npm install
```

Then, run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
