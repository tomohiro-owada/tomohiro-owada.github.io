---
title: 画像表示のサンプル
date: 2025-01-27
description: Markdownで画像を表示する様々な方法を紹介します。基本的な画像表示から、サイズ調整、配置、ギャラリー表示まで。
tags:
  - sample
  - images
---

# 画像表示のサンプル.

このページでは、Markdown で画像を表示する様々な方法を紹介します。

## 基本的な画像表示

![サンプル画像](/images/465-200x300.jpg)

## サイズを指定した画像（HTML タグ使用）

<img src="https://via.placeholder.com/800x300" alt="ワイドな画像" width="100%">

## 左寄せ・右寄せ画像

<img src="https://via.placeholder.com/200x200" alt="左寄せ画像" style="float: left; margin: 0 20px 20px 0;">

この文章は画像の右側に回り込みます。画像を左側に配置して、テキストを右側に流すレイアウトです。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

<div style="clear: both;"></div>

<img src="https://via.placeholder.com/200x200" alt="右寄せ画像" style="float: right; margin: 0 0 20px 20px;">

この文章は画像の左側に回り込みます。画像を右側に配置して、テキストを左側に流すレイアウトです。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

<div style="clear: both;"></div>

## 中央揃えの画像

<div style="text-align: center;">
  <img src="https://via.placeholder.com/400x300" alt="中央揃え画像">
</div>

## 画像にリンクを付ける

[![クリックできる画像](https://via.placeholder.com/300x200)](https://example.com)

## 複数画像のギャラリー風配置

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin: 20px 0;">
  <img src="https://via.placeholder.com/300x300/FF5733/FFFFFF?text=Image+1" alt="画像1" style="width: 100%; height: auto;">
  <img src="https://via.placeholder.com/300x300/33FF57/FFFFFF?text=Image+2" alt="画像2" style="width: 100%; height: auto;">
  <img src="https://via.placeholder.com/300x300/3357FF/FFFFFF?text=Image+3" alt="画像3" style="width: 100%; height: auto;">
  <img src="https://via.placeholder.com/300x300/FF33F5/FFFFFF?text=Image+4" alt="画像4" style="width: 100%; height: auto;">
</div>

## ローカル画像の使用方法

ローカルに保存した画像を使用する場合は、以下のようにします：

```markdown
![ローカル画像](/images/465-200x300.jpg)
```

実際の表示例：

![ローカル画像の例](/images/465-200x300.jpg)

※ 画像ファイルは `images` フォルダに配置し、Eleventy の設定で静的ファイルとしてコピーする必要があります。
