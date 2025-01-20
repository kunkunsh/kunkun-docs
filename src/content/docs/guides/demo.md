---
title: Demo
description: Demonstration of using Kunkun
sidebar:
  order: 1
---

In the demo video below, I discussed the following:

- What is Kunkun?
- Why was is created?
  - Open Source
  - Cross-platform
  - Security and Privacy (achieved with a strict permission model)
  - More flexible (with web technologies, like Svelte)
- How to use it?

<video src="https://storage.kunkun.sh/kunkun-demo.mp4" controls></video>

:::tip
See [YouTube Playlist](https://www.youtube.com/playlist?list=PLUxw2JoWliirhQROHwpa0yMEYiUHoGw2_) for more videos.
:::

## Installation

Download Kunkun's installer from https://kunkun.sh/download.

:::caution
Although installer for Windows and Linux are available, they are not yet fully tested and have compatibility issues.
It's recommended to use Mac for the best experience.
:::

<details>
<summary>On Mac, if it asks for password to access keychain, you can select "Always Allow". I will explain.</summary>

It uses system keychain to store a randomly generated password to encrypt sqlite database,
instead of using the same encryption key on everyone's machine.
Storing the password in a regular file would be a security risk.
Even with obfuscation or encryption,
it's still possible to reverse engineer the binary to get the password.
System keychain is the most secure way to store the password,
but requires user to enter password when the app updates.

</details>

## Features

1. Key Displayer: Display the keys pressed on the keyboard.
2. Clipboard history
3. File Transfer (send files to other devices in local network with Kunkun installed)
   1. Support files and folders
   2. If you don't have another computer in local network, you can try to send files to your own computer
4. Store (install extensions from the store)

## Screenshots

### Extension Store

![](../../../assets/demo/extension-store.png)

### Clipboard History

![](../../../assets/demo/clipboard-history.png)

### Disk Speed

![](../../../assets/demo/disk-speed.png)

### File Transfer

![](../../../assets/demo/file-transfer-1.png)
![](../../../assets/demo/file-transfer-2.png)

### Generate QR Code

![](../../../assets/demo/generate-qrcode.png)

### Hacker News

![](../../../assets/demo/hacker-news.png)

### Image Info

![](../../../assets/demo/image-info.png)

### IP Info

![](../../../assets/demo/ip-info.png)

### JWT Viewer

![](../../../assets/demo/jwt-viewer.png)

### Key Displayer

![](../../../assets/demo/key-displayer.png)

### Letterboxd Movie Search

![](../../../assets/demo/letterboxd-movie-search.png)

### Git Skyline with Transparent Window

![](../../../assets/demo/transparent-git-skyline.png)

### Video Conversion

![](../../../assets/demo/video-conversion.png)

### Video Info

![](../../../assets/demo/video-info.png)

### Extension Permission Disclaimer

![](../../../assets/demo/vscode-store-permissions.png)
