# Smoothly Bilingual

Based on a RU-only website.

**version 3.0.5.** fixed flexbox display on older iPhones

**URL:** https://smoothly.now.sh/

**Added features:**
* Automatic language switching:
  * primary language is ru-RU, so the main page is located by default at */ru/index.html*
  * but if browser language includes "en-", user is going to de directed to main page at */en/index.html*
* An absolutely positioned language switch (RU|EN) in the top right of every page.
* Navigation menu has been shuffled to the left.
* Three pages in English added.
* root */* or */index.html* now serve as a proxy for either Russian or English main web pages.

**Features that were added, but later removed, deemed inefficient:**
* Automatic language switch on every page, using three pages total: a pain if you wish to use the web site in the language of your choosing. 
