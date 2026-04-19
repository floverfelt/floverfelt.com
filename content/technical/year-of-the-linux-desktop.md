---
title: The Year of the Linux Desktop
tags:
  - "#technical"
date: 04-19-2026
---

There's been a [lot](https://news.ycombinator.com/item?id=44580682) [of](https://news.ycombinator.com/item?id=46471199) [discourse](https://news.ycombinator.com/item?id=47719486) about this being the year of the Linux desktop, so I thought I'd provide my experience of migrating to Linux on my old-ish Windows 10 gaming PC.

The long and short of it is - you people are nuts if you think this is taking off.

## Choosing a distro

I'm not a Linux newbie - I use it at work extensively and would use it there as my daily driver if I didn't need to do Windows native builds - so I kind of knew this was going to be a mess, but just how bad the experience of a choosing a distro is is kind of shocking.

Pretend you know nothing about Linux. Somebody suggests you install it. As a good millenial, you start by Googling "how to install Linux":

> Step 1: Choose your preferred distribution.

Oh ok, well I don't know what I prefer? Let me search for the different distributions.

> Ubuntu is the most widely used distribution.

Ok, that seems like a good starting place. What do other people say about Ubuntu?

Hm, they're mortally offended by... this?

<div>
    <img src="/static/snapstore.png" alt="Snap store photo" class="img-inline">
</div>
*If you're unaware, this is the snapstore and it really bothers people for some reason.*

Well, ok, let me try Fedora, that's often recommended, wait which of these do I pick?

<div>
    <img src="/static/fedora-desktop.png" alt="Fedora Desktop choice" class="img-inline">
</div>

Oh, I thought I was picking an operating system, but I guess I now have to pick an operating system *and* a Desktop environment? Is that like your background image?

/end pretending/

I don't know, I can't see people wanting to mass adopt this. It's so wildly unclear and confusing - you are installing Linux (an operating system), but then there's also distributions (not an operating system but it is), and then a dekstop environment. All of which you have to *pick* and decide if this magic combination is going to work with all your cards, devices, printers, etc.

I totally understand that that's the fun of Linux to people, but it's completely hostile to the end user and people getting wildly overly offended by Snaps and parent companies isn't helping.

For the record, I spent entirely too much time Googling around and reading Reddit threads before I landed on Fedora KDE. I like the KDE style desktops better and wanted to be a little hipster + try something new.

## Fedora

Fedora immediately broke. I couldn't even get through the installer without editing the installer's config file to launch with chromium - I think - instead of the default.

I'm an extremely tech savvy user, anybody else would have given up at this point.

But anyway, I was able to install it and I launched Dota 2 to play a match and see how it performed. I chose Dota 2 very intentionally, it's:
1. Made by Valve which also makes Proton/Steam Deck so it should have first-class Linux support.
2. It's not a *super* demanding game, so even my slightly older hardware should be fine.
3. I like it and it'd be something I'd be doing regularly.
4. It worked basically flawlessly on Windows, so it'd be an interesting comparison.

It then proceeded to say ["Processing Vulkan Shaders"](https://www.reddit.com/r/linux_gaming/comments/12eib4y/processing_vulkan_shaders_every_time/). Again, what?

I tried both waiting for it to finish - which took over an hour - and also just skipping it. In both cases, the game stuttered *horribly*. I had to turn all the graphics down to minimum to get it to even run remotely playably and it would still chug horribly during team-fights.

It turns out that both the installer issue and this issue stem from my NVIDIA GPU.

I knew going into this that the NVIDIA GPU's had issues on Linux, and Fedora, specifically, but again I was trying to do this little experiment as just an end-user not as somebody trying to optimize the perfect adoption path.

A lot of the responses to the NVIDIA GPU issues are "don't use an NVIDIA GPU," which reminds me of the "what's the safest way to have sex? Don't have sex!" suggestion. I already have an NVIDIA GPU! I don't want to sell it and buy a new one just to use your *free* OS.

Anyway, at this point I was a little miffed with the whole experience and was planning to try another distro anyway, so I asked Claude to suggest fixes for my GPU drivers. If Claude blew it up horribly, then no-harm no-foul. This was right around the same time [Linus Tech Tips guy](https://www.reddit.com/r/LinusTechTips/comments/1rnhssv/linus_tech_tips_fine_ill_try_linux_one_more_time/) did the same thing - again, this has been in the discourse a bit and I'm trying to emulate what I'd been seeing.

The commands it suggested actually updated Fedora to the latest version behind the scenes which had two effects: One, another OS popped up in my boot screen because Fedora takes a backup of the OS to roll back to I guess? That would've been nice to know. Two, my WiFi driver broke.

At this point I gave up and moved to the normie OS - Ubuntu.

## Ubuntu

Ok so at this point I'd established two things - I needed wide stability/compatibility since I have the cursed NVIDIA GPU - how silly of me not to consider Linux support when I purchased the card 3 years ago - and I liked KDE a lot more than GNOME. For the former, I headed to Ubuntu, for the latter I decided to use [Kubuntu](https://kubuntu.org/).

### Choosing a distro, revisited

Even choosing a widely used desktop OS like Kubuntu was just... weird?

It's listed under the [official Ubuntu flavors](https://ubuntu.com/desktop/flavors) site, but it is actually a ["community developed and supported project"](https://kubuntu.org/about/). I'm more concerned than the average person with longevity of software, so then I was wondering if it was backed by Canonical in any way and [it is but isn't](https://www.reddit.com/r/kde/comments/1lv0gpt/why_is_kubuntu_barely_recommended/). But don't worry, you're an idiot if you use Ubuntu and KDE is literally the first response and the rest of that reddit thread devolves into typical distro bickering.

Anyway, if you visit the installation guide linked from the official [Kubuntu site](https://kubuntu.org/download/) it takes you to an install guide for [Kubuntu 9.10](https://help.ubuntu.com/community/GraphicalInstall/Kubuntu) which was released in, *checks notes* - 2009.

### Kubuntu

I will say, at this point, everything basically just worked! My NVIDIA issue was resolved out of the box, the desktop environment was pretty much what I wanted.

The weird "Vulkan Shaders" message still popped up, but I could skip it. Dota 2 worked fine. It's a solid OS and I'd recommend it. Just know, somebody, somewhere will be mad at you for choosing it.

## Maybe stop being so weird

To wrap up, I don't think this is the year of the Linux desktop. There's a few shifting forces in tech right now that's driving Linux adoption up a bit, but it's still going to remain well, well below 10% of the market unless more major companies start backing it substantially or there's a sea change in the online Linux discourse.

Not everybody has the same allergic reaction to big companies that Linux enthusiasts seem to. Most of the Linux adoption is, ironically, due to the [Steam Deck](https://www.steamdeck.com/en/) which is backed by... [Valve](https://www.valvesoftware.com/en/). A big company with deep pockets. I own a Deck, it's a delightful piece of technology, and part of the reason I bought it was to support the company and what they're doing with gaming on Linux. But it's only a delightful device because *a company has poured millions and millions of dollars and hundereds of man-hours into it*.

I find the entire online culture of Linux distros, desktop environments, and the cult-of-Ubuntu-hate so wildly off putting. Valve is a godsend because they built Proton and made an easily accessible Linux device. Ubuntu is the "Microsoft of Linux" evil because they built Snaps which make software easily accessible on a Linux OS. I don't understand it.

At this point, basically all online discourse regarding the differing distros transcends all reason, practicality, or sanity and is just another oddly partisan stake-in-the-ground topic - ironically mirroring the exact Mac vs. Windows debate in the "normie" computing culture.

Also, just because I think it's hilarious, you don't need therapy anymore, [your Linux distribution will cure your depression](https://world.hey.com/dhh/building-competency-is-better-than-therapy-4622c6b7)!

If you want Linux adoption to go up, maybe tone it down just a bit?

## My suggestions

If you're going down the Linux desktop route, here's what I'd recommend:

Read a strategically minimal amount about the different distros. Definitely avoid Reddit/Hackernews/YouTube or forums of any kind. If in any doubt, pick [Ubuntu](https://ubuntu.com/) or one of [its community flavors](https://ubuntu.com/desktop/flavors). If you don't like that, use [Mint](https://linuxmint.com/). If you find yourself spending more time reading about the distros than installing them on a USB stick and trying them out, you're doing something wrong.

Linux makes computing fun by giving you a ton of different choices to try out and have fun experimenting with. The internet makes Linux miserable by pedantically arguing about all the different choices and degrading yours.
