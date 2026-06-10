#!/usr/bin/env python3
"""Build HTML docs from markdown sources.

Usage: python build_docs.py

Reads:  docs/md/**/*.md
Writes: static/xidocs/html/**/*.html  (generated — do not edit directly)
Syncs:  docs/img/*  →  static/xidocs/img/
"""

import os
import shutil
from pathlib import Path

import markdown

DOCS_MD = Path("docs/md")
DOCS_IMG = Path("docs/img")
DOCS_VID = Path("docs/vid")
OUT_HTML = Path("static/xidocs/html")
OUT_IMG = Path("static/xidocs/img")
OUT_VID = Path("static/xidocs/vid")

TEMPLATE = """\
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{title}</title>
<link rel="stylesheet" href="{css_path}" />
</head>
<body>
{content}
</body>
</html>
<!-- Generated from docs/md/{rel} — do not edit directly -->
"""


def build_html():
    count = 0
    for md_path in sorted(DOCS_MD.rglob("*.md")):
        rel = md_path.relative_to(DOCS_MD)          # e.g. views/histogram.md
        depth = len(rel.parts)                        # 1 or 2
        css_path = "../" * depth + "docs.css"

        title = md_path.stem
        src = md_path.read_text(encoding="utf-8")
        content = markdown.markdown(src, extensions=["tables", "fenced_code", "admonition", "toc"])

        html = TEMPLATE.format(
            title=title,
            css_path=css_path,
            content=content,
            rel=str(rel),
        )

        out_path = OUT_HTML / rel.with_suffix(".html")
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(html, encoding="utf-8")
        print(f"  wrote {out_path}")
        count += 1

    return count


def sync_images():
    OUT_IMG.mkdir(parents=True, exist_ok=True)
    copied = 0
    for img in sorted(DOCS_IMG.iterdir()):
        if img.is_file():
            shutil.copy2(img, OUT_IMG / img.name)
            copied += 1
    return copied


def sync_videos():
    OUT_VID.mkdir(parents=True, exist_ok=True)
    copied = 0
    for vid in sorted(DOCS_VID.iterdir()):
        if vid.is_file():
            shutil.copy2(vid, OUT_VID / vid.name)
            copied += 1
    return copied


if __name__ == "__main__":
    print("Building HTML from markdown…")
    n_html = build_html()
    print("Syncing images…")
    n_img = sync_images()
    # print("Syncing videos…")
    # n_vid = sync_videos()
    print(f"Done: {n_html} HTML files written, {n_img} images synced.")
