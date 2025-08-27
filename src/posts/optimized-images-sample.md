---
title: 最適化された画像表示のサンプル
date: 2025-01-28
description: Eleventy Image プラグインを使った画像最適化の例。WebP形式とレスポンシブ画像を自動生成。
tags: 
  - sample
  - images
  - optimization
---

# 最適化された画像表示のサンプル

このページでは、画像最適化機能を使った表示方法を紹介します。

## 基本的な最適化画像

{% image "./images/465-200x300.jpg", "最適化されたサンプル画像" %}

## カスタムサイズ指定

{% image "./images/465-200x300.jpg", "カスタムサイズの画像", "(max-width: 400px) 100vw, (max-width: 800px) 80vw, 400px" %}

## レスポンシブ画像（幅を指定）

{% responsiveImage "./images/465-200x300.jpg", "レスポンシブ画像", "200,400,800", "(max-width: 600px) 100vw, 400px" %}

## 通常のMarkdown画像（比較用）

![通常の画像](/images/465-200x300.jpg)

## 画像最適化の利点

1. **複数フォーマット**: WebPとJPEGを自動生成
2. **複数サイズ**: デバイスに応じた最適なサイズを配信
3. **遅延読み込み**: `loading="lazy"`で表示速度を改善
4. **非同期デコード**: `decoding="async"`でパフォーマンス向上

## 使い方

```njk
{％ image "画像パス", "代替テキスト", "sizesの値（オプション）" ％}
```

または

```njk
{％ responsiveImage "画像パス", "代替テキスト", "幅1,幅2,幅3", "sizesの値" ％}
```